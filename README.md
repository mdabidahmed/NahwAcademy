# Nahw Academy

Understand Arabic, Deepen Imaan.

A production-quality React + TypeScript web application for learning Arabic
Nahw (grammar) through bilingual explanations (English/Urdu), transliteration,
Arabic terminology, grammar examples, practice exercises, quizzes, flashcards,
notes, bookmarks, and progress tracking.

## Overview

The primary screen is the **lesson page**: a three-column layout with a
chapter/lesson navigation tree on the left, multilingual lesson content in the
center, and progress/practice widgets on the right. All content is
data-driven — the chapter tree, lesson sections, exercises, and quizzes are
plain TypeScript data objects, so adding a new book or chapter never requires
new JSX.

## Setup

```bash
npm install
npm run dev       # start the dev server
npm run build      # type-check (tsc -b) and produce a production build
npm run preview    # preview the production build locally
npm run test       # run the Vitest suite once
npm run lint       # run oxlint
```

## Architecture

The codebase follows **atomic design** for UI components, layered under a
domain-oriented `pages/`/`data/`/`store/` structure:

```
src/
  app/            Providers, router, theme effect
  components/
    atoms/        Single-purpose UI primitives (Button, Badge, ProgressBar…)
    molecules/    Small compositions carrying one piece of domain data
                   (LanguageCard, ChapterItem, QuizOption…)
    organisms/    Full sections composed from molecules (Header, Sidebar,
                   ChapterTree, LessonHero, QuizPanel…)
    templates/    Page skeleton (AppShell: header + sidebar + content outlet)
    common/       Generic overlay/utility UI (Modal, Drawer, Toast, Skeleton,
                   EmptyState, ErrorState) — not domain-specific
  pages/          One folder per route, thin containers that wire data +
                   store state into organisms
  data/           Typed static content (books, chapters, lessons, exercises,
                   quizzes, flashcards) plus a repository layer
  store/          Redux Toolkit slices + selectors + localStorage middleware
  hooks/          Reusable hooks (keyboard shortcuts, media queries, debounce…)
  types/          Shared TypeScript interfaces
  utils/          Framework-agnostic helpers (search, storage, class names…)
  styles/         Design tokens (CSS variables, light/dark) and global CSS
```

A component's tier is decided by what it composes and whether it carries
domain data — e.g. `Button` (atom, no domain knowledge) → `QuizOption`
(molecule, wraps a Button-like control with one exercise option) →
`QuizPanel` (organism, composes several `QuizOption`s plus progress UI into a
full quiz question).

## State management

Global state lives in Redux Toolkit slices under `src/store/slices/`:

| Slice        | Tracks                                                        |
|--------------|----------------------------------------------------------------|
| `progress`   | Completed lessons, practice stats, quiz results, study streak  |
| `ui`         | Expanded sidebar chapters, language display mode, dialogs      |
| `theme`      | Light / dark / system theme mode                               |
| `bookmarks`  | Bookmarked lessons, concepts, examples, questions               |
| `notes`      | User notes, scoped to a book/chapter/lesson/example              |
| `flashcards` | Known / difficult / new status per card                         |
| `goals`      | Today's checklist, rolled over daily                            |

`persistenceMiddleware.ts` debounces writes of all of the above to a single
`localStorage` key (`nahw-academy-state`); `store/index.ts` reads that key
back in as `preloadedState` on boot. Derived values (completion percentage,
practice accuracy, quiz accuracy…) are always computed in `store/selectors.ts`
from raw state — never stored redundantly.

Quiz-in-progress state (current question index, per-question answers) is
local `useState` in the Quiz page; only the final result is committed to the
`progress` slice.

## Routing

React Router v6, with every route below lazy-loaded for code splitting:

```
/dashboard  /learn  /learn/:bookId  /learn/:bookId/:chapterId
/learn/:bookId/:chapterId/:lessonId   (canonical lesson URL)
/practice  /practice/:exerciseId
/quiz  /quiz/:quizId
/flashcards  /notes  /bookmarks  /progress  /library
/tools  /tools/arabic-keyboard  /tools/transliteration
/tools/grammar-charts  /tools/dictionary
/settings
```

All routes render inside `AppShell` (sticky header + persistent sidebar), so
sidebar expansion/highlight state survives navigation. `/`, `/learn`,
`/learn/:bookId`, and `/learn/:bookId/:chapterId` redirect to the nearest
concrete lesson.

## Data model

See `src/types/`. The core shape is `Book → Chapter → Lesson → LessonSection`,
where a section holds optional multilingual `content` (English/Urdu/
transliteration/Arabic), `grammarTypes` (Ism/Fi‘l/Ḥarf cards), and `examples`
(for the example table). `Exercise` supports nine exercise types in the type
system (`ExerciseType`); the UI currently implements multiple-choice,
true-false, fill-blank, and identify-word-type.

`src/data/repositories/` is a thin service boundary (`bookRepository`,
`lessonRepository`, `practiceRepository`, `progressRepository`) so the local
data arrays can be swapped for real API calls later without touching any
component.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `aside`) and heading hierarchy.
- `aria-expanded` on collapsible chapters, `aria-current="page"` on the active
  lesson and breadcrumb item.
- Full keyboard support: tab order, visible focus rings, `Cmd/Ctrl+K` opens
  search, `Escape` closes dialogs/drawers, arrow keys navigate search results.
- `prefers-reduced-motion` disables transitions/animations app-wide.
- Explicit `dir="ltr"`/`dir="rtl"` per content block (never a global
  `dir="rtl"`) so English UI chrome stays LTR while Arabic and Urdu content
  render RTL with the correct font stack.

## Testing

`npm run test` runs the Vitest + React Testing Library suite: slice reducers
(chapters, progress, bookmarks, notes), derived selectors, the `ChapterTree`
(expand/collapse, active-lesson `aria-current`), the practice answer flow
(`PracticeQuestion`), and end-to-end routing (canonical lesson URL loads
directly, `/learn` redirects, unknown routes render Not Found).

## Future backend integration

The app ships with local static data and `localStorage` persistence only. To
move to a real backend: replace the bodies of the functions in
`src/data/repositories/` with API calls (they already return the same typed
shapes), and replace `persistenceMiddleware`/`readStorage` with calls to a
sync endpoint — no component or page needs to change, since none of them
import `src/data/*.ts` directly.
