import { useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import {
  Breadcrumb,
  LessonHero,
  LessonTabs,
  LessonSectionBlock,
  ProgressWidget,
  GoalWidget,
  QuickPracticeWidget,
  ToolsWidget,
  PracticeQuestion,
  NoteList,
  ExampleTable,
  type LessonTabId,
} from '@/components/organisms'
import { Button } from '@/components/atoms'
import { GrammarTypeCard, LanguageModeSwitch } from '@/components/molecules'
import { EmptyState, useToast } from '@/components/common'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { getAdjacentLessons, getBookById, getChapterById, getLessonById } from '@/data/repositories/bookRepository'
import { practiceExercises } from '@/data/exercises'
import { chapterExpanded, languageModeSet } from '@/store/slices/uiSlice'
import { bookmarkToggled } from '@/store/slices/bookmarksSlice'
import { lessonCompleted, practiceAnswered } from '@/store/slices/progressSlice'
import { noteAdded, noteUpdated, noteDeleted, notePinToggled } from '@/store/slices/notesSlice'
import { selectIsBookmarked, selectIsLessonComplete } from '@/store/selectors'
import { buildLessonKey } from '@/utils/lessonKey'
import { createId } from '@/utils/id'
import type { Exercise } from '@/types'
import styles from './LessonPage.module.css'

export function LessonPage() {
  const { bookId = '', chapterId = '', lessonId = '' } = useParams<{
    bookId: string
    chapterId: string
    lessonId: string
  }>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [activeTab, setActiveTab] = useState<LessonTabId>('lesson')
  const languageMode = useAppSelector((state) => state.ui.languageMode)
  const [draftNote, setDraftNote] = useState('')

  const book = getBookById(bookId)
  const chapter = getChapterById(bookId, chapterId)
  const lesson = getLessonById(bookId, chapterId, lessonId)

  const lessonKey = book && chapter && lesson ? buildLessonKey(book.id, chapter.id, lesson.id) : ''
  const bookmarked = useAppSelector((state) => (lessonKey ? selectIsBookmarked(state, `lesson:${lessonKey}`) : false))
  const completed = useAppSelector((state) => (lessonKey ? selectIsLessonComplete(state, lessonKey) : false))
  const allNotes = useAppSelector((state) => state.notes.items)
  const notes = useMemo(() => allNotes.filter((note) => note.scopeId === lessonKey), [allNotes, lessonKey])

  useEffect(() => {
    if (chapterId) dispatch(chapterExpanded(chapterId))
    setActiveTab('lesson')
  }, [dispatch, chapterId, lessonId])

  if (!book || !chapter || !lesson) {
    return <Navigate to="/learn" replace />
  }

  const { previous, next } = getAdjacentLessons(book.id, chapter.id, lesson.id)
  const lessonExercises = practiceExercises.filter((exercise) => lesson.exerciseIds?.includes(exercise.id))
  const allExamples = lesson.sections.flatMap((section) => section.examples ?? [])
  const allGrammarTypes = lesson.sections.flatMap((section) => section.grammarTypes ?? [])

  function goTo(chapterIdTarget: string, lessonIdTarget: string) {
    navigate(`/learn/${book!.id}/${chapterIdTarget}/${lessonIdTarget}`)
  }

  function handleToggleBookmark() {
    if (!lessonKey) return
    dispatch(
      bookmarkToggled({
        id: `lesson:${lessonKey}`,
        targetType: 'lesson',
        targetId: lessonKey,
        label: lesson!.title,
        href: `/learn/${book!.id}/${chapter!.id}/${lesson!.id}`,
        createdAt: new Date().toISOString(),
      }),
    )
    showToast(bookmarked ? 'Bookmark removed' : 'Bookmark added')
  }

  function handleMarkComplete() {
    dispatch(lessonCompleted(lessonKey))
    showToast('Lesson completed')
  }

  function handleAddNote() {
    const text = draftNote.trim()
    if (!text) return
    dispatch(
      noteAdded({
        id: createId('note'),
        scope: 'lesson',
        scopeId: lessonKey,
        scopeLabel: lesson!.title,
        text,
        pinned: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
    )
    setDraftNote('')
    showToast('Note saved')
  }

  return (
    <div className={styles.page}>
      <Breadcrumb
        items={[
          { label: 'Learn Nahw', href: '/learn' },
          { label: `Book 1: ${book.title}`, href: `/learn/${book.id}` },
          { label: `Chapter ${chapter.number}: ${chapter.title}`, href: `/learn/${book.id}/${chapter.id}` },
          { label: `Lesson ${lesson.number}` },
        ]}
      />

      <div className={styles.layout}>
        <div className={styles.main}>
          <LessonHero
            book={book}
            chapter={chapter}
            lesson={lesson}
            bookmarked={bookmarked}
            onToggleBookmark={handleToggleBookmark}
            previousHref={previous ? `/learn/${book.id}/${previous.chapter.id}/${previous.lesson.id}` : undefined}
            nextHref={next ? `/learn/${book.id}/${next.chapter.id}/${next.lesson.id}` : undefined}
            onPrevious={previous ? () => goTo(previous.chapter.id, previous.lesson.id) : undefined}
            onNext={next ? () => goTo(next.chapter.id, next.lesson.id) : undefined}
          />

          <LessonTabs active={activeTab} onChange={setActiveTab} />

          <LanguageModeSwitch value={languageMode} onChange={(mode) => dispatch(languageModeSet(mode))} />

          <div className={styles.tabPanels}>
            {activeTab === 'lesson' && (
              <div id="panel-lesson" role="tabpanel" aria-labelledby="tab-lesson" className={styles.sections}>
                {lesson.sections.map((section) => (
                  <LessonSectionBlock key={section.id} section={section} languageMode={languageMode} />
                ))}

                {!completed ? (
                  <Button onClick={handleMarkComplete} className={styles.completeButton}>
                    <CheckCircle2 size={16} /> Mark as Complete
                  </Button>
                ) : (
                  <p className={styles.completedNote}>
                    <CheckCircle2 size={16} /> You completed this lesson.
                  </p>
                )}
              </div>
            )}

            {activeTab === 'explanation' && (
              <div id="panel-explanation" role="tabpanel" aria-labelledby="tab-explanation" className={styles.sections}>
                {lesson.description && <p className={styles.description}>{lesson.description}</p>}
                {lesson.sections.map((section) => (
                  <LessonSectionBlock
                    key={section.id}
                    section={section}
                    languageMode={languageMode}
                    showGrammar={false}
                    showExamples={false}
                  />
                ))}
              </div>
            )}

            {activeTab === 'examples' && (
              <div id="panel-examples" role="tabpanel" aria-labelledby="tab-examples" className={styles.sections}>
                {allGrammarTypes.length === 0 && allExamples.length === 0 ? (
                  <EmptyState icon={<CheckCircle2 size={28} />} title="No examples in this lesson yet" />
                ) : (
                  <>
                    {allGrammarTypes.length > 0 && (
                      <div className={styles.grammarGrid}>
                        {allGrammarTypes.map((type) => (
                          <GrammarTypeCard key={type.id} data={type} />
                        ))}
                      </div>
                    )}
                    {allExamples.length > 0 && (
                      <div className={styles.sections}>
                        <h2 className={styles.exampleHeading}>Example</h2>
                        <ExampleTable examples={allExamples} />
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {activeTab === 'practice' && (
              <div id="panel-practice" role="tabpanel" aria-labelledby="tab-practice" className={styles.sections}>
                {lessonExercises.length === 0 ? (
                  <EmptyState
                    icon={<CheckCircle2 size={28} />}
                    title="No practice questions linked to this lesson"
                    description="Visit the Practice page for the full question bank."
                    action={
                      <Button variant="secondary" size="sm" onClick={() => navigate('/practice')}>
                        Go to Practice
                      </Button>
                    }
                  />
                ) : (
                  <EmbeddedPractice
                    exercises={lessonExercises}
                    onAnswer={(correct) => dispatch(practiceAnswered({ correct }))}
                  />
                )}
              </div>
            )}

            {activeTab === 'notes' && (
              <div id="panel-notes" role="tabpanel" aria-labelledby="tab-notes" className={styles.sections}>
                <div className={styles.addNote}>
                  <textarea
                    className={styles.noteInput}
                    placeholder="Add a note about this lesson…"
                    value={draftNote}
                    onChange={(event) => setDraftNote(event.target.value)}
                    rows={3}
                  />
                  <Button size="sm" onClick={handleAddNote} disabled={!draftNote.trim()}>
                    Add Note
                  </Button>
                </div>
                <NoteList
                  notes={notes}
                  onUpdate={(id, text) => dispatch(noteUpdated({ id, text }))}
                  onDelete={(id) => dispatch(noteDeleted(id))}
                  onTogglePin={(id) => dispatch(notePinToggled(id))}
                />
              </div>
            )}
          </div>
        </div>

        <aside className={styles.rail}>
          <ProgressWidget />
          <GoalWidget />
          <QuickPracticeWidget />
          <ToolsWidget />
        </aside>
      </div>
    </div>
  )
}

function EmbeddedPractice({
  exercises,
  onAnswer,
}: {
  exercises: Exercise[]
  onAnswer: (correct: boolean) => void
}) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const exercise = exercises[index]

  function handleSubmit() {
    if (!selected) return
    setSubmitted(true)
    onAnswer(selected === exercise.answer)
  }

  function handleNext() {
    setIndex((current) => Math.min(current + 1, exercises.length - 1))
    setSelected(null)
    setSubmitted(false)
  }

  function handlePrevious() {
    setIndex((current) => Math.max(current - 1, 0))
    setSelected(null)
    setSubmitted(false)
  }

  return (
    <PracticeQuestion
      exercise={exercise}
      questionNumber={index + 1}
      totalQuestions={exercises.length}
      selected={selected}
      submitted={submitted}
      onSelect={setSelected}
      onSubmit={handleSubmit}
      onPrevious={handlePrevious}
      onNext={handleNext}
      hasPrevious={index > 0}
      hasNext={index < exercises.length - 1}
    />
  )
}
