import type { Lesson } from '@/types'

const BOOK_ID = 'al-ajurrumiyyah'


/**
 * Chapter 1 — original course material written for this app, covering the
 * same nine foundational Naḥw topics a first-year Arabic grammar course
 * would (Al-Kalimah, sentence types, i‘rāb signs, pronouns, prepositions,
 * and the two families of governing particles). The explanations, example
 * sentences, and exercises below are original compositions, not a
 * transcription of any published textbook.
 */
const chapter1Lessons: Lesson[] = [
  {
    id: 'lesson-1',
    bookId: BOOK_ID,
    chapterId: 'chapter-1',
    number: 1,
    title: 'Al-Naḥw — Arabic Grammar',
    arabicTitle: 'اَلنَّحْوُ',
    subtitle: 'Section 1.1',
    description: 'What Naḥw studies, and why a Muslim learns it.',
    sections: [
      {
        id: '1-1-nahw',
        title: '1.1 Al-Naḥw — Arabic Grammar',
        arabicTitle: 'اَلنَّحْوُ',
        content: {
          english:
            'اَلنَّحْوُ (Naḥw) is the science that teaches us how to combine an Ism, a Fi‘l, and a Ḥarf into a correct sentence, and what the state of the last letter of each word (its إِعْرَابٌ) should be.\n\nIts subject matter is the كَلِمَةُ (word) and the كَلَامُ (sentence) — every rule in Naḥw is really about how a word behaves on its own, or how it behaves once it joins other words.\n\nWhy learn it? Three reasons, building on one another:\n1. So that we can read, write, and speak Arabic correctly, without the kind of mistake that changes a sentence\'s meaning.\n2. So that this correct Arabic becomes a doorway to understanding the Qur’an, the Ḥadīth, and the books of Fiqh in their original language.\n3. So that, through that understanding, we come closer to Allah Most High — which is the real point of learning any Islamic science.',
          urdu:
            'اَلنَّحْوُ (نحو) وہ علم ہے جو ہمیں سکھاتا ہے کہ اسم، فعل اور حرف کو ملا کر درست جملہ کیسے بنایا جائے، اور ہر لفظ کے آخری حرف کی حالت (اِعْرَاب) کیا ہونی چاہیے۔\n\nاس کا موضوع کَلِمَة (لفظ) اور کَلَام (جملہ) ہے — نحو کا ہر قاعدہ دراصل اسی بات پر مبنی ہے کہ کوئی لفظ اکیلے میں کیسا ہوتا ہے، اور جب وہ دوسرے الفاظ سے ملتا ہے تو کیسا ہو جاتا ہے۔\n\nاسے سیکھنے کی تین وجوہات ہیں، جو ایک دوسرے پر قائم ہیں:\n١۔ تاکہ ہم عربی کو درست طریقے سے پڑھ، لکھ اور بول سکیں، اور ایسی غلطی سے بچیں جو جملے کا معنی بدل دے۔\n٢۔ تاکہ یہ درست عربی قرآن، حدیث اور کتبِ فقہ کو ان کی اصل زبان میں سمجھنے کا ذریعہ بنے۔\n٣۔ تاکہ اس سمجھ کے ذریعے ہم اللہ تعالیٰ کے قریب ہو جائیں — جو کہ کسی بھی دینی علم کے سیکھنے کا اصل مقصد ہے۔',
          arabic:
            'اَلنَّحْوُ عِلْمٌ يُبَحَثُ فِيهِ عَنْ كَيْفِيَّةِ تَرْكِيبِ الِاسْمِ وَالْفِعْلِ وَالْحَرْفِ لِتَكْوِينِ جُمْلَةٍ صَحِيحَةٍ، وَعَنْ حَالَةِ آخِرِ الْكَلِمَةِ الَّتِي يُسَمَّى بِالْإِعْرَابِ.\n\nمَوْضُوعُهُ: اَلْكَلِمَةُ وَالْكَلَامُ.\n\nفَائِدَتُهُ: أَنْ نَقْرَأَ وَنَكْتُبَ وَنَتَكَلَّمَ بِالْعَرَبِيَّةِ الصَّحِيحَةِ، لِنَفْهَمَ بِهَا الْقُرْآنَ وَالْحَدِيثَ وَكُتُبَ الْفِقْهِ، وَنَتَقَرَّبَ بِذَلِكَ إِلَى اللَّهِ تَعَالَى.',
        },
      },
    ],
  },
  {
    id: 'lesson-2',
    bookId: BOOK_ID,
    chapterId: 'chapter-1',
    number: 2,
    title: 'Al-Kalimah — The Word',
    arabicTitle: 'اَلْكَلِمَةُ',
    subtitle: 'Section 1.2',
    description: 'What counts as a word, and the three kinds every Arabic word falls into.',
    sections: [
      {
        id: '1-2-kalimah',
        title: '1.2 Al-Kalimah — The Word',
        arabicTitle: 'اَلْكَلِمَةُ',
        content: {
          english:
            'Any sound a person utters is a لَفْظٌ. If it carries a meaning, it is مَوْضُوعٌ (meaningful); if not, it is مُهْمَلٌ (meaningless, like a random noise).\n\nA meaningful utterance is either مُفْرَدٌ (a single word — a كَلِمَةٌ, such as كِتَابٌ, "a book") or مُرَكَّبٌ (a compound of two or more words, such as بَيْتٌ كَبِيرٌ, "a big house").\n\nEvery single كَلِمَةٌ falls into exactly one of three types:\n1. اِسْمٌ (Ism) — names a person, place, thing, or idea, and has no tense of its own. e.g. قَلَمٌ (a pen), مَدِينَةٌ (a city).\n2. فِعْلٌ (Fi‘l) — carries an action together with a tense (past, present, or command). e.g. فَرِحَ (he was happy), يَفْرَحُ (he is/will be happy).\n3. حَرْفٌ (Ḥarf) — a particle whose meaning is only completed once it is joined to an Ism or a Fi‘l. e.g. فِي (in), لَمْ (did not).\n\nA simple test: an Ism can take تَنْوِينٌ (tanwīn) or the definite article اَلْ, but never both at once. A Fi‘l can never take either. A Ḥarf never carries a meaning by itself.',
          urdu:
            'انسان کے منہ سے نکلنے والی ہر آواز لَفْظ کہلاتی ہے۔ اگر اس میں کوئی معنی ہو تو وہ مَوْضُوع (بامعنی) ہے، ورنہ مُهْمَل (بے معنی، محض آواز) ہے۔\n\nبامعنی لفظ یا تو مُفْرَد ہوتا ہے (ایک لفظ — یعنی كَلِمَة، جیسے كِتَابٌ "کتاب") یا مُرَكَّب ہوتا ہے (دو یا زیادہ الفاظ کا مجموعہ، جیسے بَيْتٌ كَبِيرٌ "ایک بڑا گھر")۔\n\nہر کَلِمَة تین اقسام میں سے کسی ایک میں آتی ہے:\n١۔ اِسْم — کسی شخص، جگہ، چیز یا خیال کا نام، اور اس کا اپنا کوئی زمانہ نہیں ہوتا۔ مثلاً قَلَمٌ (قلم)، مَدِينَةٌ (شہر)۔\n٢۔ فِعْل — کسی کام کو زمانے (ماضی، مضارع یا امر) کے ساتھ ظاہر کرتا ہے۔ مثلاً فَرِحَ (وہ خوش ہوا)، يَفْرَحُ (وہ خوش ہے/ہوگا)۔\n٣۔ حَرْف — ایسا لفظ جس کا معنی اسم یا فعل سے ملنے کے بعد ہی مکمل ہوتا ہے۔ مثلاً فِي (میں)، لَمْ (نہیں)۔\n\nایک آسان پہچان: اسم پر تنوین یا "اَلْ" آسکتا ہے، لیکن دونوں اکٹھے کبھی نہیں۔ فعل پر ان میں سے کوئی نہیں آسکتا۔ حرف کا اپنا کوئی مستقل معنی نہیں ہوتا۔',
          arabic:
            'اَلْكَلِمَةُ لَفْظٌ مَوْضُوعٌ لِمَعْنًى مُفْرَدٍ. وَهِيَ ثَلَاثَةُ أَنْوَاعٍ:\n١. اِسْمٌ: كَلِمَةٌ تَدُلُّ عَلَى مَعْنًى فِي نَفْسِهَا غَيْرَ مُقْتَرِنٍ بِزَمَانٍ، نَحْوَ: قَلَمٌ، مَدِينَةٌ.\n٢. فِعْلٌ: كَلِمَةٌ تَدُلُّ عَلَى حَدَثٍ مُقْتَرِنٍ بِزَمَانٍ، نَحْوَ: فَرِحَ، يَفْرَحُ.\n٣. حَرْفٌ: كَلِمَةٌ لَا يَظْهَرُ مَعْنَاهَا إِلَّا مَعَ غَيْرِهَا، نَحْوَ: فِي، لَمْ.\nعَلَامَةُ الِاسْمِ: قَبُولُهُ التَّنْوِينَ أَوِ اَلْ، وَلَا يَجْتَمِعَانِ مَعًا.',
        },
      },
    ],
    exerciseIds: ['ex-1-2-1', 'ex-1-2-2', 'ex-1-2-3', 'ex-1-2-4'],
  },
  {
    id: 'lesson-3',
    bookId: BOOK_ID,
    chapterId: 'chapter-1',
    number: 3,
    title: 'Types of Ism, Fi‘l and Ḥarf',
    arabicTitle: 'أَقْسَامُ الِاسْمِ وَالْفِعْلِ وَالْحَرْفِ',
    subtitle: 'Section 1.3',
    description: 'How each of the three word-types is further divided.',
    sections: [
      {
        id: '1-3-types',
        title: '1.3 Types of Ism, Fi‘l and Ḥarf',
        content: {
          english:
            'Types of Ism — an Ism is one of three kinds:\n1. جَامِدٌ (Primary) — neither derived from another word nor the source of one. e.g. فَرَسٌ (horse), بَابٌ (door).\n2. مَصْدَرٌ (Root/Maṣdar) — an Ism from which other words are derived. e.g. فَهْمٌ (understanding — the root of فَهِمَ, يَفْهَمُ, فَاهِمٌ...).\n3. مُشْتَقٌّ (Derived) — an Ism derived from a Maṣdar. e.g. فَاهِمٌ (one who understands), مَفْهُومٌ (that which is understood).\n\nTypes of Fi‘l — a Fi‘l is one of four kinds, matched to its tense:\n1. اَلْمَاضِي (Past) — e.g. فَهِمَ, "he understood."\n2. اَلْمُضَارِعُ (Present/Future) — e.g. يَفْهَمُ, "he understands / will understand."\n3. اَلْأَمْرُ (Command) — e.g. اِفْهَمْ, "Understand!"\n4. اَلنَّهْيُ (Prohibition) — e.g. لَا تَفْهَمْ, "Do not understand [that wrongly]."\n\nTypes of Ḥarf — a Ḥarf is one of two kinds:\n1. عَامِلٌ (Governing) — causes an i‘rāb change in the word after it. e.g. فِي in فِي الْبَيْتِ.\n2. غَيْرُ عَامِلٍ (Non-governing) — causes no such change. e.g. وَ (and), ثُمَّ (then).',
          urdu:
            'اسم کی اقسام — اسم تین طرح کا ہوتا ہے:\n١۔ جَامِد — نہ کسی اور لفظ سے نکلا ہو، نہ خود کسی لفظ کی جڑ ہو۔ مثلاً فَرَسٌ (گھوڑا)، بَابٌ (دروازہ)۔\n٢۔ مَصْدَر — وہ اسم جس سے دوسرے الفاظ نکلتے ہیں۔ مثلاً فَهْمٌ (سمجھ — جس سے فَهِمَ، يَفْهَمُ، فَاهِمٌ وغیرہ نکلتے ہیں)۔\n٣۔ مُشْتَق — وہ اسم جو مصدر سے نکلا ہو۔ مثلاً فَاهِمٌ (سمجھنے والا)، مَفْهُومٌ (سمجھی گئی چیز)۔\n\nفعل کی اقسام — فعل چار طرح کا ہوتا ہے، اس کے زمانے کے مطابق:\n١۔ اَلْمَاضِي — مثلاً فَهِمَ "اس نے سمجھا"۔\n٢۔ اَلْمُضَارِع — مثلاً يَفْهَمُ "وہ سمجھتا ہے/سمجھے گا"۔\n٣۔ اَلْأَمْر — مثلاً اِفْهَمْ "سمجھو!"۔\n٤۔ اَلنَّهْي — مثلاً لَا تَفْهَمْ "غلط نہ سمجھو"۔\n\nحرف کی اقسام — حرف دو طرح کا ہوتا ہے:\n١۔ عَامِل — جو اپنے بعد کے لفظ میں اعرابی تبدیلی پیدا کرے۔ مثلاً فِي الْبَيْتِ میں فِي۔\n٢۔ غَيْرُ عَامِل — جو ایسی تبدیلی پیدا نہ کرے۔ مثلاً وَ (اور)، ثُمَّ (پھر)۔',
          arabic:
            'اَلِاسْمُ ثَلَاثَةُ أَقْسَامٍ: جَامِدٌ وَمَصْدَرٌ وَمُشْتَقٌّ.\nاَلْفِعْلُ أَرْبَعَةُ أَقْسَامٍ: مَاضٍ وَمُضَارِعٌ وَأَمْرٌ وَنَهْيٌ.\nاَلْحَرْفُ قِسْمَانِ: عَامِلٌ وَغَيْرُ عَامِلٍ.',
        },
        readOnlyExercises: [
          'Identify whether each word is Jāmid, Maṣdar, or Mushtaqq: (i) عِلْمٌ (ii) عَالِمٌ (iii) بَحْرٌ',
        ],
      },
    ],
  },
  {
    id: 'lesson-4',
    bookId: BOOK_ID,
    chapterId: 'chapter-1',
    number: 4,
    title: 'Sentences and Phrases',
    arabicTitle: 'اَلْجُمَلُ وَالْمُرَكَّبَاتُ',
    subtitle: 'Section 1.4',
    description: 'Complete sentences versus incomplete phrases, and the two kinds of complete sentence.',
    sections: [
      {
        id: '1-4-sentences',
        title: '1.4 Complete and Incomplete Combinations',
        content: {
          english:
            'When two or more words combine, the result is either مُرَكَّبٌ مُفِيدٌ — a complete sentence (also called كَلَامٌ) — or مُرَكَّبٌ غَيْرُ مُفِيدٍ — an incomplete phrase, which leaves the listener waiting for more.\n\nA complete sentence is either خَبَرِيَّةٌ (declarative — it can be true or false, e.g. اَلْبَابُ مَفْتُوحٌ, "The door is open") or إِنْشَائِيَّةٌ (a sentence with no truth-value of its own, such as a command or a question, e.g. اِفْتَحِ الْبَابَ!, "Open the door!").',
          urdu:
            'جب دو یا زیادہ الفاظ ملتے ہیں تو نتیجہ یا تو مُرَكَّبٌ مُفِيدٌ ہوتا ہے — ایک مکمل جملہ (جسے كَلَامٌ بھی کہتے ہیں) — یا مُرَكَّبٌ غَيْرُ مُفِيدٍ ہوتا ہے — ایک نامکمل فقرہ، جو سننے والے کو مزید کا منتظر رکھتا ہے۔\n\nمکمل جملہ یا تو خَبَرِيَّةٌ ہوتا ہے (خبری — جو سچا یا جھوٹا ہوسکتا ہے، مثلاً اَلْبَابُ مَفْتُوحٌ "دروازہ کھلا ہے") یا إِنْشَائِيَّةٌ ہوتا ہے (وہ جملہ جس کا اپنا کوئی سچ/جھوٹ نہیں، جیسے حکم یا سوال، مثلاً اِفْتَحِ الْبَابَ! "دروازہ کھولو!")۔',
          arabic:
            'اَلْمُرَكَّبُ إِذَا أَفَادَ مَعْنًى تَامًّا سُمِّيَ مُرَكَّبًا مُفِيدًا (كَلَامًا)، وَإِلَّا سُمِّيَ مُرَكَّبًا غَيْرَ مُفِيدٍ.\nوَالْكَلَامُ نَوْعَانِ: خَبَرِيٌّ يَحْتَمِلُ الصِّدْقَ وَالْكَذِبَ، وَإِنْشَائِيٌّ لَا يَحْتَمِلُهُمَا.',
        },
      },
      {
        id: '1-4-1-ismiyyah-filiyyah',
        title: '1.4.1 Nominal and Verbal Sentences',
        content: {
          english:
            'A declarative sentence is one of two structures:\n\n1. جُمْلَةٌ اِسْمِيَّةٌ (Nominal sentence) — begins with an Ism. The first part is the مُبْتَدَأٌ (subject) and the second is the خَبَرٌ (predicate); both are normally marfoo‘.\ne.g. اَلطَّقْسُ جَمِيلٌ — "The weather is beautiful." (اَلطَّقْسُ = mubtada, جَمِيلٌ = khabar)\n\n2. جُمْلَةٌ فِعْلِيَّةٌ (Verbal sentence) — begins with a Fi‘l. The first part is the فِعْلٌ and the second is its فَاعِلٌ (doer), which is always marfoo‘.\ne.g. سَافَرَ الطَّبِيبُ — "The doctor travelled." (سَافَرَ = fi‘l, اَلطَّبِيبُ = fā‘il)',
          urdu:
            'خبری جملہ دو ساخت میں سے ایک میں ہوتا ہے:\n\n١۔ جُمْلَةٌ اِسْمِيَّةٌ (اسمیہ جملہ) — اسم سے شروع ہوتا ہے۔ پہلا حصہ مُبْتَدَأٌ (موضوع) اور دوسرا خَبَرٌ (خبر) کہلاتا ہے؛ دونوں عام طور پر مرفوع ہوتے ہیں۔\nمثال: اَلطَّقْسُ جَمِيلٌ — "موسم خوبصورت ہے۔" (اَلطَّقْسُ = مبتدا، جَمِيلٌ = خبر)\n\n٢۔ جُمْلَةٌ فِعْلِيَّةٌ (فعلیہ جملہ) — فعل سے شروع ہوتا ہے۔ پہلا حصہ فِعْلٌ اور دوسرا اس کا فَاعِلٌ (کرنے والا) ہے، جو ہمیشہ مرفوع ہوتا ہے۔\nمثال: سَافَرَ الطَّبِيبُ — "ڈاکٹر نے سفر کیا۔" (سَافَرَ = فعل، اَلطَّبِيبُ = فاعل)',
          arabic:
            'اَلْجُمْلَةُ الْخَبَرِيَّةُ نَوْعَانِ:\n١. جُمْلَةٌ اِسْمِيَّةٌ: مُبْتَدَأٌ وَخَبَرٌ، نَحْوَ: اَلطَّقْسُ جَمِيلٌ.\n٢. جُمْلَةٌ فِعْلِيَّةٌ: فِعْلٌ وَفَاعِلٌ، نَحْوَ: سَافَرَ الطَّبِيبُ.',
        },
      },
      {
        id: '1-4-2-inshaiyyah',
        title: '1.4.2 Kinds of Inshā’iyyah Sentence',
        content: {
          english:
            'An Inshā’iyyah sentence gives a command, asks something, or expresses a wish rather than stating a fact. Common kinds include: اَلْأَمْرُ (command — اُكْتُبْ, "Write!"), اَلنَّهْيُ (prohibition — لَا تَكْذِبْ, "Do not lie!"), اَلِاسْتِفْهَامُ (question — هَلْ سَافَرْتَ؟, "Did you travel?"), اَلتَّمَنِّي (wish for something unlikely — لَيْتَ الشَّبَابَ يَعُودُ, "I wish youth would return"), اَلتَّرَجِّي (hope for something likely — لَعَلَّ الْفَرَجَ قَرِيبٌ, "Hopefully relief is near"), and اَلنِّدَاءُ (calling out — يَا صَدِيقِي!, "O my friend!").',
          urdu:
            'إِنْشَائِيَّةٌ جملہ کسی حکم، سوال یا خواہش کا اظہار کرتا ہے، نہ کہ کسی حقیقت کا بیان۔ عام اقسام یہ ہیں: اَلْأَمْرُ (حکم — اُكْتُبْ "لکھو!")، اَلنَّهْيُ (ممانعت — لَا تَكْذِبْ "جھوٹ نہ بولو!")، اَلِاسْتِفْهَامُ (سوال — هَلْ سَافَرْتَ؟ "کیا تم نے سفر کیا؟")، اَلتَّمَنِّي (ایسی خواہش جو ممکن نہ ہو — لَيْتَ الشَّبَابَ يَعُودُ "کاش جوانی لوٹ آئے")، اَلتَّرَجِّي (ایسی امید جو ممکن ہو — لَعَلَّ الْفَرَجَ قَرِيبٌ "شاید آسانی قریب ہو")، اور اَلنِّدَاءُ (پکارنا — يَا صَدِيقِي! "اے میرے دوست!")۔',
          arabic:
            'مِنْ أَنْوَاعِ الْجُمْلَةِ الْإِنْشَائِيَّةِ: اَلْأَمْرُ، وَالنَّهْيُ، وَالِاسْتِفْهَامُ، وَالتَّمَنِّي، وَالتَّرَجِّي، وَالنِّدَاءُ.',
        },
      },
      {
        id: '1-4-3-murakkabat',
        title: '1.4.3 Types of Phrase',
        content: {
          english:
            'An incomplete combination (a phrase, not yet a sentence) comes in several shapes:\n\n1. اَلْمُرَكَّبُ التَّوْصِيفِيُّ (Descriptive phrase) — a described word (مَوْصُوفٌ) plus its describing word (صِفَةٌ), matching in i‘rāb, gender, number, and definiteness. e.g. بَيْتٌ جَمِيلٌ, "a beautiful house."\n2. اَلْمُرَكَّبُ الْإِضَافِيُّ (Possessive phrase) — a مُضَافٌ (never takes اَلْ or tanwīn) plus a مُضَافٌ إِلَيْهِ (always majroor). e.g. بَابُ الْبَيْتِ, "the door of the house."\n3. اَلْمُرَكَّبُ الْإِشَارِيُّ (Demonstrative phrase) — a demonstrative Ism plus the definite Ism it points at. e.g. هَـٰذَا الْكِتَابُ, "this book."\n4. اَلْمُرَكَّبُ الْعَدَدِيُّ (Numerical phrase) — two numerals joined into one word, found only from 11–19. e.g. أَحَدَ عَشَرَ, "eleven."\n5. اَلْمُرَكَّبُ الْمَمْنُوعُ مِنَ الصَّرْفِ (Compound proper noun) — two words fused into a single proper name that never takes tanwīn. e.g. حَضْرَمَوْتُ, the name of a region in Yemen (from حَضَرَ + مَوْتٌ).',
          urdu:
            'ایک نامکمل ترکیب (ابھی جملہ نہیں بنا) کئی شکلوں میں آتی ہے:\n\n١۔ اَلْمُرَكَّبُ التَّوْصِيفِيُّ (وصفی ترکیب) — موصوف اور صفت، جو اعراب، جنس، تعداد اور معرفہ/نکرہ ہونے میں ایک جیسے ہوں۔ مثلاً بَيْتٌ جَمِيلٌ "ایک خوبصورت گھر"۔\n٢۔ اَلْمُرَكَّبُ الْإِضَافِيُّ (اضافی ترکیب) — مُضَاف (کبھی "اَلْ" یا تنوین نہیں لیتا) اور مُضَافٌ إِلَيْهِ (ہمیشہ مجرور)۔ مثلاً بَابُ الْبَيْتِ "گھر کا دروازہ"۔\n٣۔ اَلْمُرَكَّبُ الْإِشَارِيُّ (اشاری ترکیب) — اسمِ اشارہ اور جس معرفہ اسم کی طرف وہ اشارہ کرے۔ مثلاً هَـٰذَا الْكِتَابُ "یہ کتاب"۔\n٤۔ اَلْمُرَكَّبُ الْعَدَدِيُّ (عددی ترکیب) — دو عدد ملا کر ایک لفظ، صرف ١١ سے ١٩ تک۔ مثلاً أَحَدَ عَشَرَ "گیارہ"۔\n٥۔ اَلْمُرَكَّبُ الْمَمْنُوعُ مِنَ الصَّرْفِ — دو الفاظ مل کر ایک نام بن جائیں جو کبھی تنوین نہیں لیتا۔ مثلاً حَضْرَمَوْتُ، یمن کے ایک علاقے کا نام۔',
          arabic:
            'اَلْمُرَكَّبُ النَّاقِصُ أَنْوَاعٌ: تَوْصِيفِيٌّ، وَإِضَافِيٌّ، وَإِشَارِيٌّ، وَعَدَدِيٌّ، وَمَمْنُوعٌ مِنَ الصَّرْفِ.',
        },
      },
      {
        id: '1-4-4-additional-notes',
        title: '1.4.4 A Note on the Khabar',
        content: {
          english:
            'Two useful notes about the nominal sentence: first, the khabar is sometimes left unsaid when the meaning is clear from context — grammarians treat it as مُقَدَّرٌ (hidden but understood). Second, a khabar can itself be a whole sentence, not just a single word.\ne.g. اَلْمَسْجِدُ بَابُهُ كَبِيرٌ — "The mosque, its door is big." (Here بَابُهُ كَبِيرٌ, itself a complete nominal sentence, is the khabar of اَلْمَسْجِدُ.)',
          urdu:
            'اسمیہ جملے کے بارے میں دو مفید نکات: پہلا، بعض اوقات خبر کو ذکر نہیں کیا جاتا جب معنی سیاق سے واضح ہو — نحوی اسے مُقَدَّرٌ (پوشیدہ مگر سمجھی ہوئی) کہتے ہیں۔ دوسرا، خبر خود ایک مکمل جملہ بھی ہوسکتی ہے، صرف ایک لفظ نہیں۔\nمثال: اَلْمَسْجِدُ بَابُهُ كَبِيرٌ — "مسجد، اس کا دروازہ بڑا ہے۔" (یہاں بَابُهُ كَبِيرٌ، جو خود ایک مکمل اسمیہ جملہ ہے، اَلْمَسْجِدُ کی خبر ہے۔)',
          arabic:
            'قَدْ يُحْذَفُ الْخَبَرُ إِذَا دَلَّ عَلَيْهِ السِّيَاقُ، وَيُقَدَّرُ. وَقَدْ يَكُونُ الْخَبَرُ جُمْلَةً كَامِلَةً، نَحْوَ: اَلْمَسْجِدُ بَابُهُ كَبِيرٌ.',
        },
        readOnlyExercises: [
          'Translate and identify the mubtada and khabar of each sentence, then note whether the khabar is a single word or a full sentence: (i) اَلْحَدِيقَةُ وَاسِعَةٌ (ii) اَلْمَكْتَبَةُ كُتُبُهَا كَثِيرَةٌ',
        ],
      },
    ],
  },
  {
    id: 'lesson-5',
    bookId: BOOK_ID,
    chapterId: 'chapter-1',
    number: 5,
    title: 'Signs of Ism, Fi‘l and Ḥarf',
    arabicTitle: 'عَلَامَاتُ الِاسْمِ وَالْفِعْلِ وَالْحَرْفِ',
    subtitle: 'Section 1.5',
    description: 'The recognisable markers of each word type, and a handful of orthography rules.',
    sections: [
      {
        id: '1-5-signs',
        title: '1.5 Signs of Each Word Type',
        content: {
          english:
            'You can usually tell an Ism apart from a Fi‘l or Ḥarf by testing whether any of the following fit:\n\nAn Ism can: take اَلْ (اَلْقَلَمُ); accept جَرٌّ (فِي الْبَيْتِ); carry تَنْوِينٌ (قَلَمٌ); end in a round ة (مَدِينَةٌ); be dual or plural (قَلَمَانِ, أَقْلَامٌ); serve as مُبْتَدَأٌ or فَاعِلٌ (اَلطَّالِبُ نَشِيطٌ); be مُضَافٌ (كِتَابُ سَعِيدٍ); or be مُنَادَى, "called out to" (يَا وَلَدُ!).\n\nA Fi‘l can: be preceded by قَدْ, سَ, or سَوْفَ (قَدْ كَتَبَ, سَيَكْتُبُ); be preceded by a particle of jazm or naṣb (لَمْ يَكْتُبْ, لَنْ يَكْتُبَ); carry a hidden doer-pronoun (كَتَبَ); be an امر or نهي form (اُكْتُبْ, لَا تَكْتُبْ); or end with the tā’ of the feminine past (كَتَبَتْ).\n\nA Ḥarf has no sign of its own — if a word shows none of the signs above, it is a Ḥarf.',
          urdu:
            'عام طور پر اسم کو فعل یا حرف سے الگ پہچانا جاسکتا ہے اگر درج ذیل میں سے کوئی نشانی ملے:\n\nاسم: "اَلْ" لے سکتا ہے (اَلْقَلَمُ)؛ جَرٌّ قبول کرتا ہے (فِي الْبَيْتِ)؛ تنوین لے سکتا ہے (قَلَمٌ)؛ گول "ة" پر ختم ہوسکتا ہے (مَدِينَةٌ)؛ مثنیٰ یا جمع ہوسکتا ہے (قَلَمَانِ، أَقْلَامٌ)؛ مبتدا یا فاعل بن سکتا ہے (اَلطَّالِبُ نَشِيطٌ)؛ مُضَاف ہوسکتا ہے (كِتَابُ سَعِيدٍ)؛ یا مُنَادیٰ (پکارا ہوا) ہوسکتا ہے (يَا وَلَدُ!)۔\n\nفعل: قَدْ، سَ یا سَوْفَ سے پہلے آسکتا ہے (قَدْ كَتَبَ، سَيَكْتُبُ)؛ جزم یا نصب کے حرف سے پہلے آسکتا ہے (لَمْ يَكْتُبْ، لَنْ يَكْتُبَ)؛ پوشیدہ فاعل ضمیر رکھ سکتا ہے (كَتَبَ)؛ امر یا نہی کی شکل میں ہوسکتا ہے (اُكْتُبْ، لَا تَكْتُبْ)؛ یا مؤنث ماضی کی "ت" پر ختم ہوسکتا ہے (كَتَبَتْ)۔\n\nحرف کی اپنی کوئی نشانی نہیں ہوتی — اگر کسی لفظ میں مندرجہ بالا نشانیوں میں سے کوئی نہ ملے، تو وہ حرف ہے۔',
          arabic:
            'لِلِاسْمِ عَلَامَاتٌ مِنْهَا: قَبُولُ اَلْ، وَالْجَرِّ، وَالتَّنْوِينِ. وَلِلْفِعْلِ عَلَامَاتٌ مِنْهَا: قَدْ، وَالسِّينُ، وَتَاءُ التَّأْنِيثِ السَّاكِنَةُ. وَالْحَرْفُ مَا لَا عَلَامَةَ لَهُ.',
        },
      },
      {
        id: '1-5-1-general-notes',
        title: '1.5.1 A Few Orthography Notes',
        content: {
          english:
            'Some useful, practical notes that come up constantly once you start reading real sentences:\n\n1. An Ism is نَكِرَةٌ (indefinite) when it carries tanwīn — e.g. بَابٌ, "a door" (any door) — and مَعْرِفَةٌ (definite) once اَلْ is added — اَلْبَابُ, "the door" (a specific one). The two never combine.\n2. When اَلْ comes before an Ism starting with a "sun letter" (اَلْحُرُوفُ الشَّمْسِيَّةُ — such as ت ث د ذ ر ز س ش ص ض ط ظ ل ن), the ل of اَلْ is not pronounced and the following letter is doubled instead — اَلشَّمْسُ is said ash-shams, not al-shams. Before a "moon letter" (the rest of the alphabet), the ل is pronounced normally — اَلْقَمَرُ, al-qamar.\n3. An Ism ending in a round ة is almost always feminine — مَدْرَسَةٌ (a school).',
          urdu:
            'کچھ مفید، عملی نکات جو حقیقی جملے پڑھتے وقت بار بار سامنے آتے ہیں:\n\n١۔ اسم نَكِرَةٌ (نامعین) ہوتا ہے جب اس پر تنوین ہو — مثلاً بَابٌ "ایک دروازہ" (کوئی بھی دروازہ) — اور مَعْرِفَةٌ (معین) بن جاتا ہے جب "اَلْ" لگے — اَلْبَابُ "وہ دروازہ" (ایک خاص دروازہ)۔ یہ دونوں کبھی اکٹھے نہیں آتے۔\n٢۔ جب "اَلْ" کسی ایسے اسم سے پہلے آئے جو "شمسی حرف" (ت ث د ذ ر ز س ش ص ض ط ظ ل ن) سے شروع ہو، تو "اَلْ" کا "ل" نہیں بولا جاتا اور اگلا حرف دوگنا ہوجاتا ہے — اَلشَّمْسُ کو "اش-شمس" پڑھا جاتا ہے، "ال-شمس" نہیں۔ "قمری حرف" (باقی حروف) سے پہلے "ل" معمول کے مطابق بولا جاتا ہے — اَلْقَمَرُ "القمر"۔\n٣۔ گول "ة" پر ختم ہونے والا اسم تقریباً ہمیشہ مؤنث ہوتا ہے — مَدْرَسَةٌ (اسکول)۔',
          arabic:
            'اَلِاسْمُ إِمَّا نَكِرَةٌ (بِالتَّنْوِينِ) أَوْ مَعْرِفَةٌ (بِاَلْ)، وَلَا يَجْتَمِعَانِ. وَالْحُرُوفُ الشَّمْسِيَّةُ يُدْغَمُ فِيهَا لَامُ اَلْ، بِخِلَافِ الْحُرُوفِ الْقَمَرِيَّةِ.',
        },
      },
    ],
  },
  {
    id: 'lesson-6',
    bookId: BOOK_ID,
    chapterId: 'chapter-1',
    number: 6,
    title: 'Al-Ḍamā’ir — Personal Pronouns',
    arabicTitle: 'اَلضَّمَائِرُ',
    subtitle: 'Section 1.6',
    description: 'The words that stand in for a name — for the speaker, the listener, or someone/something absent.',
    sections: [
      {
        id: '1-6-damair',
        title: '1.6 Al-Ḍamā’ir — Personal Pronouns',
        content: {
          english:
            'A ضَمِيرٌ (plural: ضَمَائِرُ) is an Ism that stands in for a name, referring to the speaker (اَلْمُتَكَلِّمُ), the person addressed (اَلْمُخَاطَبُ), or someone/something absent (اَلْغَائِبُ).\n\nPronouns come in two forms: مُنْفَصِلٌ (unattached — can stand on its own, e.g. هُوَ, "he") and مُتَّصِلٌ (attached — joined to a verb, ism, or particle, e.g. the هُ in كَتَبَهُ, "he wrote it").\ne.g. هُوَ طَالِبٌ — "He is a student." (مُنْفَصِلٌ)\nكِتَابُهُ جَدِيدٌ — "His book is new." (مُتَّصِلٌ, attached to كِتَابُ)',
          urdu:
            'ضَمِيرٌ (جمع: ضَمَائِرُ) ایک ایسا اسم ہے جو کسی نام کی جگہ استعمال ہوتا ہے، اور متکلم (بولنے والا)، مخاطب (جس سے بات کی جائے) یا غائب (جو موجود نہ ہو) کی طرف اشارہ کرتا ہے۔\n\nضمیریں دو طرح کی ہوتی ہیں: مُنْفَصِلٌ (الگ — خود کھڑی ہوسکتی ہے، مثلاً هُوَ "وہ") اور مُتَّصِلٌ (جڑی ہوئی — فعل، اسم یا حرف کے ساتھ ملی ہو، مثلاً كَتَبَهُ میں "ه" "اس نے اسے لکھا")۔\nمثال: هُوَ طَالِبٌ — "وہ ایک طالب علم ہے۔" (مُنْفَصِلٌ)\nكِتَابُهُ جَدِيدٌ — "اس کی کتاب نئی ہے۔" (مُتَّصِلٌ، كِتَابُ سے جڑی ہوئی)',
          arabic:
            'اَلضَّمِيرُ اِسْمٌ يَدُلُّ عَلَى مُتَكَلِّمٍ أَوْ مُخَاطَبٍ أَوْ غَائِبٍ. وَهُوَ نَوْعَانِ: مُنْفَصِلٌ يُنْطَقُ بِهِ وَحْدَهُ، وَمُتَّصِلٌ يَتَّصِلُ بِمَا قَبْلَهُ.',
        },
        table: {
          title: 'Table 1.1 — Al-Ḍamā’ir (Selected Pronouns)',
          headers: ['Unattached (مُنْفَصِلٌ)', 'Meaning', 'Category', 'Arabic label'],
          rows: [
            [{ text: 'هُوَ', lang: 'ar' }, { text: 'He (one male), it', lang: 'en' }, { text: '3rd person masc. singular', lang: 'en' }, { text: 'وَاحِدٌ مُذَكَّرٌ غَائِبٌ', lang: 'ar' }],
            [{ text: 'هُمَا', lang: 'ar' }, { text: 'They (two males)', lang: 'en' }, { text: '3rd person masc. dual', lang: 'en' }, { text: 'تَثْنِيَةُ مُذَكَّرٍ غَائِبٍ', lang: 'ar' }],
            [{ text: 'هُمْ', lang: 'ar' }, { text: 'They (many males)', lang: 'en' }, { text: '3rd person masc. plural', lang: 'en' }, { text: 'جَمْعُ مُذَكَّرٍ غَائِبٍ', lang: 'ar' }],
            [{ text: 'هِيَ', lang: 'ar' }, { text: 'She (one female), it', lang: 'en' }, { text: '3rd person fem. singular', lang: 'en' }, { text: 'وَاحِدَةٌ مُؤَنَّثَةٌ غَائِبَةٌ', lang: 'ar' }],
            [{ text: 'أَنْتَ', lang: 'ar' }, { text: 'You (one male)', lang: 'en' }, { text: '2nd person masc. singular', lang: 'en' }, { text: 'وَاحِدٌ مُذَكَّرٌ حَاضِرٌ', lang: 'ar' }],
            [{ text: 'أَنْتِ', lang: 'ar' }, { text: 'You (one female)', lang: 'en' }, { text: '2nd person fem. singular', lang: 'en' }, { text: 'وَاحِدَةٌ مُؤَنَّثَةٌ حَاضِرَةٌ', lang: 'ar' }],
            [{ text: 'أَنَا', lang: 'ar' }, { text: 'I (male or female)', lang: 'en' }, { text: '1st person singular', lang: 'en' }, { text: 'وَاحِدٌ مُتَكَلِّمٌ', lang: 'ar' }],
            [{ text: 'نَحْنُ', lang: 'ar' }, { text: 'We (any number/gender)', lang: 'en' }, { text: '1st person dual & plural', lang: 'en' }, { text: 'مُتَكَلِّمٌ مَعَ غَيْرِهِ', lang: 'ar' }],
          ],
        },
      },
    ],
    exerciseIds: [],
  },
  {
    id: 'lesson-7',
    bookId: BOOK_ID,
    chapterId: 'chapter-1',
    number: 7,
    title: 'Al-Ḥurūf Al-Jārrah — Prepositions',
    arabicTitle: 'اَلْحُرُوفُ الْجَارَّةُ',
    subtitle: 'Section 1.7',
    description: 'The particles that put the Ism after them into the state of jarr.',
    sections: [
      {
        id: '1-7-jarr',
        title: '1.7 Al-Ḥurūf Al-Jārrah — Prepositions',
        content: {
          english:
            'A حَرْفُ جَرٍّ gives جَرٌّ to the Ism that follows it; that Ism is then called مَجْرُورٌ.\ne.g. جَلَسَ الطُّلَّابُ فِي الْحَدِيقَةِ — "The students sat in the garden."',
          urdu:
            'حَرْفُ جَرٍّ اپنے بعد آنے والے اسم کو جَرٌّ دیتا ہے؛ اس اسم کو پھر مَجْرُورٌ کہا جاتا ہے۔\nمثال: جَلَسَ الطُّلَّابُ فِي الْحَدِيقَةِ — "طالب علم باغ میں بیٹھے۔"',
          arabic:
            'حَرْفُ الْجَرِّ يَجُرُّ الِاسْمَ بَعْدَهُ، فَيُسَمَّى ذَلِكَ الِاسْمُ مَجْرُورًا.',
        },
        table: {
          title: 'Table 1.2 — Common Ḥurūf Al-Jārrah',
          headers: ['Ḥarf', 'Meaning', 'Example'],
          rows: [
            [{ text: 'فِي', lang: 'ar' }, { text: 'in, at', lang: 'en' }, { text: '.اَلسَّمَكُ فِي الْمَاءِ — The fish is in the water.', lang: 'ar' }],
            [{ text: 'مِنْ', lang: 'ar' }, { text: 'from', lang: 'en' }, { text: '.عُدْتُ مِنَ السَّفَرِ — I returned from the trip.', lang: 'ar' }],
            [{ text: 'إِلَى', lang: 'ar' }, { text: 'to, towards', lang: 'en' }, { text: '.ذَهَبْتُ إِلَى السُّوقِ — I went to the market.', lang: 'ar' }],
            [{ text: 'عَلَى', lang: 'ar' }, { text: 'on, upon', lang: 'en' }, { text: '.اَلْكِتَابُ عَلَى الرَّفِّ — The book is on the shelf.', lang: 'ar' }],
            [{ text: 'بِ', lang: 'ar' }, { text: 'with, by', lang: 'en' }, { text: '.كَتَبْتُ بِالْقَلَمِ — I wrote with the pen.', lang: 'ar' }],
            [{ text: 'كَ', lang: 'ar' }, { text: 'like, as', lang: 'en' }, { text: '.اَلْمُعَلِّمُ كَالْأَبِ — The teacher is like a father.', lang: 'ar' }],
            [{ text: 'لِ', lang: 'ar' }, { text: 'for, belonging to', lang: 'en' }, { text: '.اَلْحَمْدُ لِلَّهِ — Praise belongs to Allah.', lang: 'ar' }],
            [{ text: 'عَنْ', lang: 'ar' }, { text: 'about, away from', lang: 'en' }, { text: '.سَأَلْتُ عَنِ الدَّرْسِ — I asked about the lesson.', lang: 'ar' }],
          ],
        },
        readOnlyExercises: [
          'Translate, mark the i‘rāb, and identify the ḥarf al-jarr and majroor ism in each: (i) اَلطَّائِرُ فَوْقَ الشَّجَرَةِ (ii) رَجَعَ الْعُمَّالُ مِنَ الْمَصْنَعِ',
        ],
      },
    ],
  },
  {
    id: 'lesson-8',
    bookId: BOOK_ID,
    chapterId: 'chapter-1',
    number: 8,
    title: 'Al-Ḥurūf Al-Mushabbahah bil-Fi‘l',
    arabicTitle: 'اَلْحُرُوفُ الْمُشَبَّهَةُ بِالْفِعْلِ',
    subtitle: 'Section 1.8',
    description: '"Inna and her sisters" — particles that, like a verb, govern both a mubtada and a khabar.',
    sections: [
      {
        id: '1-8-inna',
        title: '1.8 Particles That Act Like a Verb',
        content: {
          english:
            'These particles are called اَلْحُرُوفُ الْمُشَبَّهَةُ بِالْفِعْلِ (also إِنَّ وَأَخَوَاتُهَا, "Inna and her sisters") because, like a two-object verb, each one governs two parts of a nominal sentence at once.\n\nEffect: the particle gives نَصْبٌ to the mubtada — now called اِسْمُهَا — and keeps رَفْعٌ on the khabar — now called خَبَرُهَا.\ne.g. إِنَّ الْجَوَّ بَارِدٌ — "Indeed the weather is cold." (اَلْجَوَّ = ism of inna, بَارِدٌ = khabar of inna)',
          urdu:
            'یہ حروف اَلْحُرُوفُ الْمُشَبَّهَةُ بِالْفِعْلِ (یا إِنَّ وَأَخَوَاتُهَا، "اِنَّ اور اس کی بہنیں") کہلاتے ہیں کیونکہ، دو مفعول لینے والے فعل کی طرح، ہر ایک اسمیہ جملے کے دونوں حصوں کو ایک ساتھ عمل دیتا ہے۔\n\nاثر: یہ حرف مبتدا کو نصب دیتا ہے — جسے اب اِسْمُهَا کہا جاتا ہے — اور خبر پر رفع باقی رکھتا ہے — جسے اب خَبَرُهَا کہا جاتا ہے۔\nمثال: إِنَّ الْجَوَّ بَارِدٌ — "بےشک موسم سرد ہے۔" (اَلْجَوَّ = اسمِ اِنَّ، بَارِدٌ = خبرِ اِنَّ)',
          arabic:
            'إِنَّ وَأَخَوَاتُهَا حُرُوفٌ تَدْخُلُ عَلَى الْجُمْلَةِ الِاسْمِيَّةِ فَتَنْصِبُ الْمُبْتَدَأَ (اِسْمَهَا) وَتَرْفَعُ الْخَبَرَ (خَبَرَهَا).',
        },
        table: {
          title: 'Table 1.3 — Al-Ḥurūf Al-Mushabbahah bil-Fi‘l',
          headers: ['Ḥarf', 'Meaning', 'Example'],
          rows: [
            [{ text: 'إِنَّ', lang: 'ar' }, { text: 'indeed, verily', lang: 'en' }, { text: '.إِنَّ الْعِلْمَ نُورٌ — Indeed knowledge is light.', lang: 'ar' }],
            [{ text: 'أَنَّ', lang: 'ar' }, { text: 'that', lang: 'en' }, { text: '.عَلِمْتُ أَنَّ السَّفَرَ قَرِيبٌ — I knew that the trip is near.', lang: 'ar' }],
            [{ text: 'كَأَنَّ', lang: 'ar' }, { text: 'as if', lang: 'en' }, { text: '.كَأَنَّ الْقَمَرَ مِصْبَاحٌ — It is as if the moon is a lamp.', lang: 'ar' }],
            [{ text: 'لَـٰكِنَّ', lang: 'ar' }, { text: 'but, however', lang: 'en' }, { text: '.اَلْبَيْتُ صَغِيرٌ لَـٰكِنَّهُ نَظِيفٌ — The house is small, but it is clean.', lang: 'ar' }],
            [{ text: 'لَيْتَ', lang: 'ar' }, { text: 'if only, I wish', lang: 'en' }, { text: '.لَيْتَ الْمَطَرَ يَنْزِلُ — I wish the rain would fall.', lang: 'ar' }],
            [{ text: 'لَعَلَّ', lang: 'ar' }, { text: 'perhaps, hopefully', lang: 'en' }, { text: '.لَعَلَّ الْفَرَجَ قَرِيبٌ — Hopefully relief is near.', lang: 'ar' }],
          ],
        },
        readOnlyExercises: [
          'Translate, mark the i‘rāb, and identify ism and khabar of the particle: (i) إِنَّ الْمَاءَ نَظِيفٌ (ii) لَيْتَ الْوَقْتَ يَعُودُ (iii) كَأَنَّ الْبَحْرَ مِرْآةٌ',
        ],
      },
    ],
  },
  {
    id: 'lesson-9',
    bookId: BOOK_ID,
    chapterId: 'chapter-1',
    number: 9,
    title: 'Al-Af‘āl Al-Nāqiṣah — Auxiliary (Defective) Fi‘ls',
    arabicTitle: 'اَلْأَفْعَالُ النَّاقِصَةُ',
    subtitle: 'Section 1.9',
    description: '"Kāna and her sisters" — verbs that, like a two-object verb, govern a mubtada and a khabar.',
    sections: [
      {
        id: '1-9-kana',
        title: '1.9 Kāna and Her Sisters',
        content: {
          english:
            'A فِعْلٌ نَاقِصٌ ("incomplete/defective verb") is called that because, even though it is intransitive (لَازِمٌ) in form, its meaning is not complete with just one Ism — it needs both a mubtada and a khabar, exactly like the particles in the previous lesson.\n\nEffect: the verb keeps رَفْعٌ on the mubtada — now called اِسْمُهَا — and gives نَصْبٌ to the khabar — now called خَبَرَهَا.\ne.g. كَانَ الطَّقْسُ حَارًّا — "The weather was hot." (اَلطَّقْسُ = ism of kāna, حَارًّا = khabar of kāna)',
          urdu:
            'فِعْلٌ نَاقِصٌ ("نامکمل فعل") اسے کہا جاتا ہے کیونکہ، اگرچہ یہ ساخت میں لازم (مفعول کے بغیر) ہے، اس کا معنی صرف ایک اسم سے مکمل نہیں ہوتا — اسے مبتدا اور خبر دونوں چاہییں، بالکل پچھلے سبق کے حروف کی طرح۔\n\nاثر: یہ فعل مبتدا پر رفع باقی رکھتا ہے — جسے اب اِسْمُهَا کہا جاتا ہے — اور خبر کو نصب دیتا ہے — جسے اب خَبَرَهَا کہا جاتا ہے۔\nمثال: كَانَ الطَّقْسُ حَارًّا — "موسم گرم تھا۔" (اَلطَّقْسُ = اسمِ كَانَ، حَارًّا = خبرِ كَانَ)',
          arabic:
            'كَانَ وَأَخَوَاتُهَا أَفْعَالٌ نَاقِصَةٌ تَدْخُلُ عَلَى الْمُبْتَدَأِ وَالْخَبَرِ، فَتَرْفَعُ الْمُبْتَدَأَ (اِسْمَهَا) وَتَنْصِبُ الْخَبَرَ (خَبَرَهَا).',
        },
        table: {
          title: 'Table 1.4 — Kāna and Her Sisters',
          headers: ['Fi‘l', 'Meaning', 'Example'],
          rows: [
            [{ text: 'كَانَ', lang: 'ar' }, { text: 'was', lang: 'en' }, { text: '.كَانَ الطَّالِبُ مُجْتَهِدًا — The student was hard-working.', lang: 'ar' }],
            [{ text: 'صَارَ', lang: 'ar' }, { text: 'became', lang: 'en' }, { text: '.صَارَ الْجَوُّ بَارِدًا — The weather became cold.', lang: 'ar' }],
            [{ text: 'أَصْبَحَ', lang: 'ar' }, { text: 'became (in the morning)', lang: 'en' }, { text: '.أَصْبَحَ الْعَامِلُ نَشِيطًا — The worker became active.', lang: 'ar' }],
            [{ text: 'مَا زَالَ', lang: 'ar' }, { text: 'continued to be', lang: 'en' }, { text: '.مَا زَالَ الطِّفْلُ نَائِمًا — The child continued to be asleep.', lang: 'ar' }],
            [{ text: 'لَيْسَ', lang: 'ar' }, { text: 'is not', lang: 'en' }, { text: '.لَيْسَ الِامْتِحَانُ صَعْبًا — The exam is not difficult.', lang: 'ar' }],
          ],
        },
        readOnlyExercises: [
          'Translate, mark the i‘rāb, and identify ism and khabar of the fi‘l: (i) كَانَ الْبَيْتُ وَاسِعًا (ii) أَصْبَحَ الْمُسَافِرُ مُتْعَبًا (iii) لَيْسَ الطَّرِيقُ طَوِيلًا',
        ],
      },
    ],
  },
]

function representativeLesson(
  chapterId: string,
  number: number,
  title: string,
  arabicTitle: string,
  english: string,
  urdu: string,
  transliteration: string,
): Lesson {
  return {
    id: `lesson-${number}`,
    bookId: BOOK_ID,
    chapterId,
    number,
    title,
    arabicTitle,
    sections: [
      {
        id: `${chapterId}-lesson-${number}-overview`,
        title: `${number}. ${title}`,
        content: { english, urdu, transliteration },
      },
    ],
  }
}

/**
 * Chapters 2–4 — original course material written for this app. These lessons
 * cover the same Naḥw topics as a traditional second-year curriculum (Mu‘rab
 * and Mabnī words, further discussion of isms, and the governing words), but
 * the explanations, examples, and exercises below are original compositions,
 * not a transcription of any published textbook.
 */
const chapter2Lessons: Lesson[] = [
  {
    id: 'c2-lesson-1',
    bookId: BOOK_ID,
    chapterId: 'chapter-2',
    number: 1,
    title: 'Mu‘rab and Mabnī — An Overview',
    arabicTitle: 'اَلْمُعْرَبُ وَالْمَبْنِيُّ',
    subtitle: 'Section 2.1',
    description: 'Every word in Arabic is either Mu‘rab (its ending changes) or Mabnī (its ending is fixed).',
    sections: [
      {
        id: 'c2-1-overview',
        title: '2.1 Mu‘rab and Mabnī',
        arabicTitle: 'اَلْمُعْرَبُ وَالْمَبْنِيُّ',
        content: {
          english:
            'A مُعْرَبٌ (Mu‘rab) word is one whose final letter changes according to the governing word (عَامِلٌ) that precedes it in a sentence.\ne.g. جَاءَ الطَّالِبُ — The student came. (رَفْعٌ)\nرَأَيْتُ الطَّالِبَ — I saw the student. (نَصْبٌ)\nمَرَرْتُ بِالطَّالِبِ — I passed by the student. (جَرٌّ)\nNotice that طَالِب keeps its meaning but its ending shifts from ـُ to ـَ to ـِ depending on its role.\n\nA مَبْنِيٌّ (Mabnī) word keeps the same ending no matter what governs it.\ne.g. جَاءَ هَـٰذَا — This one came.\nرَأَيْتُ هَـٰذَا — I saw this one.\nمَرَرْتُ بِهَـٰذَا — I passed by this one.\nHere هَـٰذَا never changes, regardless of its position.\n\nGeneral rule: most Ḥurūf and most Fi‘l Māḍī forms are Mabnī, while most Isms and the Fi‘l Muḍāri‘ (when free of a governing particle) are Mu‘rab. The following lessons look at each group in turn.',
          urdu:
            'مُعْرَبٌ (معرب) لفظ وہ ہے جس کا آخری حرف جملے میں اس سے پہلے آنے والے عامل کے مطابق بدلتا رہتا ہے۔\nمثال: جَاءَ الطَّالِبُ — طالب علم آیا۔ (رَفْعٌ)\nرَأَيْتُ الطَّالِبَ — میں نے طالب علم کو دیکھا۔ (نَصْبٌ)\nمَرَرْتُ بِالطَّالِبِ — میں طالب علم کے پاس سے گزرا۔ (جَرٌّ)\nغور کریں کہ طَالِب کا معنی وہی رہتا ہے مگر اس کا آخری حرف ـُ سے ـَ اور پھر ـِ میں بدل جاتا ہے، اس کے کردار کے مطابق۔\n\nمَبْنِيٌّ (مبنی) لفظ کا آخری حرف کبھی نہیں بدلتا، چاہے کوئی بھی عامل ہو۔\nمثال: جَاءَ هَـٰذَا — یہ آیا۔\nرَأَيْتُ هَـٰذَا — میں نے اسے دیکھا۔\nمَرَرْتُ بِهَـٰذَا — میں اس کے پاس سے گزرا۔\nیہاں هَـٰذَا کبھی نہیں بدلتا، چاہے اس کی حالت کچھ بھی ہو۔\n\nعام قاعدہ: زیادہ تر حروف اور فعل ماضی کی زیادہ تر شکلیں مبنی ہوتی ہیں، جبکہ زیادہ تر اسم اور فعل مضارع (جب کسی عامل سے آزاد ہو) معرب ہوتے ہیں۔',
          arabic:
            'اَلْمُعْرَبُ مَا يَتَغَيَّرُ آخِرُهُ بِتَغَيُّرِ الْعَامِلِ، وَالْمَبْنِيُّ مَا يَلْزَمُ آخِرُهُ حَالَةً وَاحِدَةً. غَالِبُ الْحُرُوفِ وَالْفِعْلِ الْمَاضِي مَبْنِيٌّ، وَغَالِبُ الِاسْمِ وَالْفِعْلِ الْمُضَارِعِ مُعْرَبٌ.',
        },
      },
    ],
  },
  {
    id: 'c2-lesson-2',
    bookId: BOOK_ID,
    chapterId: 'chapter-2',
    number: 2,
    title: 'Signs of I‘rāb',
    arabicTitle: 'عَلَامَاتُ الْإِعْرَابِ',
    subtitle: 'Section 2.2',
    description: 'The four states of I‘rāb and how each one is shown at the end of a word.',
    sections: [
      {
        id: 'c2-2-signs',
        title: '2.2 The Four States and Their Basic Signs',
        arabicTitle: 'عَلَامَاتُ الْإِعْرَابِ بِالْحَرَكَةِ',
        content: {
          english:
            'A Mu‘rab word can be in one of four states: رَفْعٌ, نَصْبٌ, جَرٌّ, or جَزْمٌ. Isms can only take رَفْعٌ, نَصْبٌ, or جَرٌّ; the Fi‘l Muḍāri‘ can only take رَفْعٌ, نَصْبٌ, or جَزْمٌ.\n\nThe basic sign of each state is a single ḥarakah:\n• رَفْعٌ — a ضَمَّةٌ. e.g. اَلْمُعَلِّمُ — the teacher (marfoo‘)\n• نَصْبٌ — a فَتْحَةٌ. e.g. اَلْمُعَلِّمَ — the teacher (mansoob)\n• جَرٌّ — a كَسْرَةٌ. e.g. اَلْمُعَلِّمِ — the teacher (majroor)\n• جَزْمٌ — a سُكُونٌ. e.g. لَمْ يَكْتُبْ — He did not write. (majzoom)',
          urdu:
            'معرب لفظ چار حالتوں میں سے ایک میں ہوسکتا ہے: رَفْعٌ، نَصْبٌ، جَرٌّ، یا جَزْمٌ۔ اسم صرف رَفْعٌ، نَصْبٌ یا جَرٌّ لے سکتا ہے؛ فعل مضارع صرف رَفْعٌ، نَصْبٌ یا جَزْمٌ لے سکتا ہے۔\n\nہر حالت کی بنیادی نشانی ایک حرکت ہے:\n• رَفْعٌ — ضَمَّةٌ۔ مثلاً اَلْمُعَلِّمُ (مرفوع)\n• نَصْبٌ — فَتْحَةٌ۔ مثلاً اَلْمُعَلِّمَ (منصوب)\n• جَرٌّ — كَسْرَةٌ۔ مثلاً اَلْمُعَلِّمِ (مجرور)\n• جَزْمٌ — سُكُونٌ۔ مثلاً لَمْ يَكْتُبْ "اس نے نہیں لکھا" (مجزوم)',
          arabic:
            'لِلْمُعْرَبِ أَرْبَعُ حَالَاتٍ: رَفْعٌ عَلَامَتُهُ الضَّمَّةُ، وَنَصْبٌ عَلَامَتُهُ الْفَتْحَةُ، وَجَرٌّ عَلَامَتُهُ الْكَسْرَةُ، وَجَزْمٌ عَلَامَتُهُ السُّكُونُ.',
        },
        table: {
          title: 'Table 2.1 — The Basic Signs of I‘rāb',
          headers: ['State', 'Basic sign', 'Example', 'Meaning'],
          rows: [
            [
              { text: 'رَفْعٌ (raf‘)', lang: 'ar' },
              { text: 'ضَمَّةٌ (dammah)', lang: 'ar' },
              { text: 'جَاءَ الْوَلَدُ', lang: 'ar' },
              { text: 'The boy came.', lang: 'en' },
            ],
            [
              { text: 'نَصْبٌ (naṣb)', lang: 'ar' },
              { text: 'فَتْحَةٌ (fatḥah)', lang: 'ar' },
              { text: 'رَأَيْتُ الْوَلَدَ', lang: 'ar' },
              { text: 'I saw the boy.', lang: 'en' },
            ],
            [
              { text: 'جَرٌّ (jarr)', lang: 'ar' },
              { text: 'كَسْرَةٌ (kasrah)', lang: 'ar' },
              { text: 'سَلَّمْتُ عَلَى الْوَلَدِ', lang: 'ar' },
              { text: 'I greeted the boy.', lang: 'en' },
            ],
            [
              { text: 'جَزْمٌ (jazm)', lang: 'ar' },
              { text: 'سُكُونٌ (sukoon)', lang: 'ar' },
              { text: 'لَمْ يَلْعَبْ الْوَلَدُ', lang: 'ar' },
              { text: 'The boy did not play.', lang: 'en' },
            ],
          ],
        },
      },
      {
        id: 'c2-2-alternate-signs',
        title: 'Alternate signs',
        content: {
          english:
            'Some word groups do not use a ḥarakah to show I‘rāb; instead they use one of the ḥurūf al-‘illah (و ا ي) or a noon. Common examples:\n• The dual (مُثَنَّى) uses ا for raf‘ and ي for naṣb/jarr — e.g. جَاءَ الطَّالِبَانِ (raf‘) but رَأَيْتُ الطَّالِبَيْنِ (naṣb).\n• The sound masculine plural (جَمْعُ الْمُذَكَّرِ السَّالِمُ) uses و for raf‘ and ي for naṣb/jarr — e.g. جَاءَ الْمُعَلِّمُونَ but رَأَيْتُ الْمُعَلِّمِينَ.\n• The five nouns (اَلْأَسْمَاءُ الْخَمْسَةُ: أَبٌ, أَخٌ, حَمٌ, فَمٌ, ذُو) use و for raf‘, ا for naṣb, and ي for jarr when muḍāf — e.g. جَاءَ أَبُوهُ, رَأَيْتُ أَبَاهُ, سَلَّمْتُ عَلَى أَبِيهِ.\n• The Fi‘l Muḍāri‘ of the five forms (اَلْأَفْعَالُ الْخَمْسَةُ — those ending in ا, و, or ي of the doer) takes نَ for raf‘, and drops it for naṣb/jazm — e.g. هُمَا يَكْتُبَانِ (raf‘) but لَمْ يَكْتُبَا (jazm).',
          urdu:
            'کچھ الفاظ کے گروہ اعراب دکھانے کے لیے حرکت استعمال نہیں کرتے؛ اس کی بجائے وہ حروفِ علت (و ا ي) یا نون استعمال کرتے ہیں۔ عام مثالیں:\n• مُثَنَّى (تثنیہ) رفع کے لیے ا اور نصب/جر کے لیے ي استعمال کرتا ہے — مثلاً جَاءَ الطَّالِبَانِ (رفع) مگر رَأَيْتُ الطَّالِبَيْنِ (نصب)۔\n• جَمْعُ الْمُذَكَّرِ السَّالِمُ رفع کے لیے و اور نصب/جر کے لیے ي استعمال کرتا ہے۔\n• اَلْأَسْمَاءُ الْخَمْسَةُ (پانچ اسماء: أَبٌ، أَخٌ، حَمٌ، فَمٌ، ذُو) مضاف ہونے پر رفع کے لیے و، نصب کے لیے ا، اور جر کے لیے ي لیتے ہیں۔\n• اَلْأَفْعَالُ الْخَمْسَةُ رفع کے لیے نَ لیتے ہیں، اور نصب/جزم میں اسے گرا دیتے ہیں۔',
          arabic:
            'بَعْضُ الْكَلِمَاتِ تُعْرَبُ بِالْحُرُوفِ لَا بِالْحَرَكَاتِ، كَالْمُثَنَّى وَجَمْعِ الْمُذَكَّرِ السَّالِمِ وَالْأَسْمَاءِ الْخَمْسَةِ وَالْأَفْعَالِ الْخَمْسَةِ.',
        },
      },
    ],
  },
  {
    id: 'c2-lesson-3',
    bookId: BOOK_ID,
    chapterId: 'chapter-2',
    number: 3,
    title: 'Categories of Mabnī Words',
    arabicTitle: 'أَنْوَاعُ الْمَبْنِيِّ',
    subtitle: 'Section 2.3',
    description: 'Which words are always Mabnī, and the four fixed states a Mabnī word can be built on.',
    sections: [
      {
        id: 'c2-3-mabni',
        title: '2.3 What Is Always Mabnī',
        content: {
          english:
            'The following are always مَبْنِيّ:\n1. Every ḥarf (particle) — e.g. فِي, هَلْ, لَمْ.\n2. The Fi‘l Māḍī — e.g. كَتَبَ (built on fatḥah), كَتَبُوا (built on dammah when followed by the doer-wāw), كَتَبْتُ (built on sukoon when followed by a subject pronoun).\n3. The Fi‘l Amr (imperative) — e.g. اُكْتُبْ.\n4. Those forms of the Fi‘l Muḍāri‘ that end with the feminine plural noon or a noon of emphasis — e.g. اَلطَّالِبَاتُ يَكْتُبْنَ (built on sukoon); يَكْتُبَنَّ (built on fatḥah).\n\nA Mabnī word is said to be "built on" (مَبْنِيٌّ عَلَى) one of four fixed states — dammah, fatḥah, kasrah, or sukoon — which never change regardless of the word\'s position in the sentence. When a Mabnī word takes the place where a Mu‘rab word would show raf‘, naṣb, jarr, or jazm, grammarians describe it as فِي مَحَلِّ رَفْعٍ (etc.) — "in the position of raf‘" — even though no visible change occurs.\ne.g. هَـٰؤُلَاءِ نَاجِحُونَ — These ones are successful. (هَـٰؤُلَاءِ is مَبْنِيٌّ, but it sits فِي مَحَلِّ رَفْعٍ as the mubtada.)',
          urdu:
            'درج ذیل ہمیشہ مبنی ہوتے ہیں:\n١۔ ہر حرف — مثلاً فِي، هَلْ، لَمْ۔\n٢۔ فعل ماضی — مثلاً كَتَبَ (فتحہ پر مبنی)، كَتَبُوا (فاعل کی واو کے ساتھ ضمہ پر مبنی)، كَتَبْتُ (فاعل ضمیر کے ساتھ سکون پر مبنی)۔\n٣۔ فعل امر — مثلاً اُكْتُبْ۔\n٤۔ فعل مضارع کی وہ شکلیں جو مؤنث جمع کی نون یا تاکید کی نون پر ختم ہوں — مثلاً اَلطَّالِبَاتُ يَكْتُبْنَ (سکون پر مبنی)؛ يَكْتُبَنَّ (فتحہ پر مبنی)۔\n\nمبنی لفظ کو چار مستقل حالتوں میں سے ایک پر "مبنی" کہا جاتا ہے — ضمہ، فتحہ، کسرہ یا سکون — جو جملے میں لفظ کے مقام سے قطع نظر کبھی نہیں بدلتیں۔ جب مبنی لفظ اس جگہ آئے جہاں معرب لفظ رفع، نصب، جر یا جزم دکھاتا، تو نحوی اسے "فِي مَحَلِّ رَفْعٍ" وغیرہ کہتے ہیں، حالانکہ کوئی ظاہری تبدیلی نہیں ہوتی۔',
          arabic:
            'اَلْمَبْنِيُّ دَائِمًا: جَمِيعُ الْحُرُوفِ، وَالْفِعْلُ الْمَاضِي، وَفِعْلُ الْأَمْرِ، وَبَعْضُ صِيَغِ الْمُضَارِعِ. وَيُقَالُ لِمَوْضِعِهِ: فِي مَحَلِّ رَفْعٍ أَوْ نَصْبٍ أَوْ جَرٍّ.',
        },
      },
    ],
  },
  {
    id: 'c2-lesson-4',
    bookId: BOOK_ID,
    chapterId: 'chapter-2',
    number: 4,
    title: 'Relative Pronouns',
    arabicTitle: 'اَلْأَسْمَاءُ الْمَوْصُولَةُ',
    subtitle: 'Section 2.4',
    description: 'Isms that point to a following clause (Ṣilah) to complete their meaning.',
    sections: [
      {
        id: 'c2-4-relative',
        title: '2.4 The Relative Isms',
        content: {
          english:
            'An اِسْمٌ مَوْصُولٌ is a definite ism whose meaning is only completed by the sentence that follows it, called the صِلَةٌ. The Ṣilah must contain a pronoun (عَائِدٌ) that refers back to the relative ism.\ne.g. نَجَحَ الطَّالِبُ الَّذِي اجْتَهَدَ — The student who worked hard succeeded.\nHere الَّذِي is the relative ism, and اجْتَهَدَ is its Ṣilah; the hidden pronoun هُوَ inside اجْتَهَدَ is the ‘Aa’id, referring back to الَّذِي.',
          urdu:
            'اِسْمٌ مَوْصُولٌ ایک معرفہ اسم ہے جس کا معنی صرف اس کے بعد آنے والے جملے (صِلَةٌ) سے مکمل ہوتا ہے۔ صِلَة میں ایک ضمیر (عَائِدٌ) ضرور ہونی چاہیے جو موصول کی طرف اشارہ کرے۔\nمثال: نَجَحَ الطَّالِبُ الَّذِي اجْتَهَدَ — "وہ طالب علم کامیاب ہوا جس نے محنت کی۔"\nیہاں الَّذِي اسمِ موصول ہے، اور اجْتَهَدَ اس کی صِلَة ہے؛ اجْتَهَدَ میں پوشیدہ ضمیر هُوَ عائد ہے، جو الَّذِي کی طرف اشارہ کرتی ہے۔',
          arabic:
            'اَلِاسْمُ الْمَوْصُولُ لَا يَتِمُّ مَعْنَاهُ إِلَّا بِصِلَةٍ بَعْدَهُ فِيهَا ضَمِيرٌ عَائِدٌ عَلَيْهِ، نَحْوَ: نَجَحَ الطَّالِبُ الَّذِي اجْتَهَدَ.',
        },
        table: {
          title: 'Table 2.2 — Common Relative Isms',
          headers: ['Form', 'Number & gender', 'Meaning'],
          rows: [
            [{ text: 'اَلَّذِي', lang: 'ar' }, { text: 'masculine singular', lang: 'en' }, { text: 'who, which, that', lang: 'en' }],
            [{ text: 'اَلَّتِي', lang: 'ar' }, { text: 'feminine singular', lang: 'en' }, { text: 'who, which, that', lang: 'en' }],
            [{ text: 'اَللَّذَانِ', lang: 'ar' }, { text: 'masculine dual', lang: 'en' }, { text: 'who, which (two)', lang: 'en' }],
            [{ text: 'اَللَّتَانِ', lang: 'ar' }, { text: 'feminine dual', lang: 'en' }, { text: 'who, which (two)', lang: 'en' }],
            [{ text: 'اَلَّذِينَ', lang: 'ar' }, { text: 'masculine plural', lang: 'en' }, { text: 'who, which (many)', lang: 'en' }],
            [{ text: 'اَللَّاتِي / اَللَّوَاتِي', lang: 'ar' }, { text: 'feminine plural', lang: 'en' }, { text: 'who, which (many)', lang: 'en' }],
            [{ text: 'مَنْ', lang: 'ar' }, { text: 'all numbers/genders', lang: 'en' }, { text: 'whoever (for rational beings)', lang: 'en' }],
            [{ text: 'مَا', lang: 'ar' }, { text: 'all numbers/genders', lang: 'en' }, { text: 'whatever (for non-rational things)', lang: 'en' }],
          ],
        },
      },
    ],
  },
  {
    id: 'c2-lesson-5',
    bookId: BOOK_ID,
    chapterId: 'chapter-2',
    number: 5,
    title: 'Demonstrative Isms',
    arabicTitle: 'أَسْمَاءُ الْإِشَارَةِ',
    subtitle: 'Section 2.5',
    description: 'Isms used to point at something near or far.',
    sections: [
      {
        id: 'c2-5-demonstrative',
        title: '2.5 Pointing to the Near and the Far',
        content: {
          english:
            'An اِسْمُ إِشَارَةٍ points at a specific person or thing. لِلْقَرِيبِ forms point at something near; لِلْبَعِيدِ forms (prefixed with كَ) point at something far.\ne.g. هَـٰذَا كِتَابٌ — This is a book.\nذَٰلِكَ بَيْتٌ — That is a house.\nهَـٰؤُلَاءِ مُهَنْدِسُونَ — These are engineers.\nWhen the object pointed at has اَلْ, the demonstrative acts as an adjective-like phrase rather than a full sentence: هَـٰذَا الْكِتَابُ — this book (not "this is the book").',
          urdu:
            'اِسْمُ إِشَارَةٍ کسی خاص شخص یا چیز کی طرف اشارہ کرتا ہے۔ لِلْقَرِيبِ (قریب کے لیے) اشارہ کرتا ہے؛ لِلْبَعِيدِ (كَ کے ساتھ، دور کے لیے) اشارہ کرتا ہے۔\nمثال: هَـٰذَا كِتَابٌ — "یہ ایک کتاب ہے۔"\nذَٰلِكَ بَيْتٌ — "وہ ایک گھر ہے۔"\nهَـٰؤُلَاءِ مُهَنْدِسُونَ — "یہ انجینئر ہیں۔"\nجب جس چیز کی طرف اشارہ ہو اس پر "اَلْ" ہو، تو اشارہ مکمل جملے کی بجائے صفت جیسی ترکیب بن جاتا ہے: هَـٰذَا الْكِتَابُ "یہ کتاب" (نہ کہ "یہ کتاب ہے")۔',
          arabic:
            'اِسْمُ الْإِشَارَةِ يُشِيرُ إِلَى مُعَيَّنٍ قَرِيبٍ أَوْ بَعِيدٍ. فَإِذَا كَانَ الْمُشَارُ إِلَيْهِ مَعْرِفَةً بِاَلْ صَارَ الْمُرَكَّبُ وَصْفِيًّا لَا جُمْلَةً.',
        },
        table: {
          title: 'Table 2.3 — Demonstrative Isms',
          headers: ['Near (لِلْقَرِيبِ)', 'Far (لِلْبَعِيدِ)', 'Number & gender'],
          rows: [
            [{ text: 'هَـٰذَا', lang: 'ar' }, { text: 'ذَٰلِكَ', lang: 'ar' }, { text: 'masculine singular', lang: 'en' }],
            [{ text: 'هَـٰذِهِ', lang: 'ar' }, { text: 'تِلْكَ', lang: 'ar' }, { text: 'feminine singular', lang: 'en' }],
            [{ text: 'هَـٰذَانِ', lang: 'ar' }, { text: 'ذَانِكَ', lang: 'ar' }, { text: 'masculine dual', lang: 'en' }],
            [{ text: 'هَاتَانِ', lang: 'ar' }, { text: 'تَانِكَ', lang: 'ar' }, { text: 'feminine dual', lang: 'en' }],
            [{ text: 'هَـٰؤُلَاءِ', lang: 'ar' }, { text: 'أُولَـٰئِكَ', lang: 'ar' }, { text: 'plural (both genders)', lang: 'en' }],
          ],
        },
      },
    ],
  },
  {
    id: 'c2-lesson-6',
    bookId: BOOK_ID,
    chapterId: 'chapter-2',
    number: 6,
    title: 'Adverbs of Time and Place',
    arabicTitle: 'ظُرُوفُ الزَّمَانِ وَالْمَكَانِ',
    subtitle: 'Section 2.6',
    description: 'Isms that answer "when?" or "where?" and are typically mansoob.',
    sections: [
      {
        id: 'c2-6-adverbs',
        title: '2.6 Ẓarf Zamān and Ẓarf Makān',
        content: {
          english:
            'A ظَرْفٌ is an ism that tells us when or where an action took place; it is also called مَفْعُولٌ فِيهِ. It is generally mansoob, as though the preposition فِي were hidden before it.\ne.g. سَافَرْتُ صَبَاحًا — I travelled in the morning. (ظَرْفُ زَمَانٍ)\nجَلَسْتُ أَمَامَ الْبَابِ — I sat in front of the door. (ظَرْفُ مَكَانٍ)\nSome common ẓarf words — such as عِنْدَ, أَمَامَ, خَلْفَ, تَحْتَ, فَوْقَ — are مُبْهَم (unrestricted): they do not point to a specific, bounded time or place the way يَوْمٌ or كِيلُومِتْرٌ do.',
          urdu:
            'ظَرْفٌ ایک ایسا اسم ہے جو ہمیں بتاتا ہے کہ کوئی کام کب یا کہاں ہوا؛ اسے مَفْعُولٌ فِيهِ بھی کہا جاتا ہے۔ یہ عام طور پر منصوب ہوتا ہے، گویا اس سے پہلے حرفِ جر "فِي" پوشیدہ ہو۔\nمثال: سَافَرْتُ صَبَاحًا — "میں صبح سفر پر گیا۔" (ظَرْفُ زَمَانٍ)\nجَلَسْتُ أَمَامَ الْبَابِ — "میں دروازے کے سامنے بیٹھا۔" (ظَرْفُ مَكَانٍ)\nکچھ عام ظرف الفاظ — جیسے عِنْدَ، أَمَامَ، خَلْفَ، تَحْتَ، فَوْقَ — مُبْهَم ہوتے ہیں: وہ کسی خاص، محدود وقت یا جگہ کی طرف اشارہ نہیں کرتے جیسے يَوْمٌ یا كِيلُومِتْرٌ کرتے ہیں۔',
          arabic:
            'اَلظَّرْفُ اِسْمٌ يَدُلُّ عَلَى زَمَانِ الْفِعْلِ أَوْ مَكَانِهِ، وَهُوَ مَنْصُوبٌ غَالِبًا بِتَقْدِيرِ "فِي"، نَحْوَ: سَافَرْتُ صَبَاحًا، وَجَلَسْتُ أَمَامَ الْبَابِ.',
        },
      },
    ],
  },
  {
    id: 'c2-lesson-7',
    bookId: BOOK_ID,
    chapterId: 'chapter-2',
    number: 7,
    title: 'Munṣarif and Ghayr Munṣarif Isms',
    arabicTitle: 'اَلْمُنْصَرِفُ وَغَيْرُ الْمُنْصَرِفِ',
    subtitle: 'Section 2.7',
    description: 'Isms that refuse tanwīn and take a fatḥah instead of a kasrah in the state of jarr.',
    sections: [
      {
        id: 'c2-7-munsarif',
        title: '2.7 Two Kinds of Declinable Isms',
        content: {
          english:
            'A مُنْصَرِفٌ ism accepts full tanwīn and all three ḥarakāt normally. A غَيْرُ مُنْصَرِفٍ ism has at least two of the nine causes that block declension (أَسْبَابُ مَنْعِ الصَّرْفِ) — such as being a proper noun that is also non-Arabic in origin, or being a proper noun on the pattern of a fi‘l — and so it never takes tanwīn, and its state of jarr is shown with a fatḥah instead of a kasrah.\ne.g. سَافَرْتُ إِلَى إِبْرَاهِيمَ — I travelled to Ibrahim. (إِبْرَاهِيمُ is ghayr munṣarif: a non-Arabic proper noun; note the fatḥah, not a kasrah, in the state of jarr.)\nCompare: سَافَرْتُ إِلَى خَالِدٍ — I travelled to Khalid. (خَالِدٌ is munṣarif and takes a normal kasrah with tanwīn.)',
          urdu:
            'مُنْصَرِفٌ اسم مکمل تنوین اور تینوں حرکات معمول کے مطابق قبول کرتا ہے۔ غَيْرُ مُنْصَرِفٍ اسم میں صرف سے روکنے والے نو اسباب میں سے کم از کم دو موجود ہوتے ہیں — جیسے غیر عربی الاصل خاص نام ہونا، یا فعل کے وزن پر خاص نام ہونا — اس لیے وہ کبھی تنوین نہیں لیتا، اور اس کی حالتِ جر کسرہ کی بجائے فتحہ سے ظاہر ہوتی ہے۔\nمثال: سَافَرْتُ إِلَى إِبْرَاهِيمَ — "میں ابراہیم کے پاس سفر پر گیا۔" (إِبْرَاهِيمُ غیر منصرف ہے: ایک غیر عربی خاص نام؛ جر کی حالت میں کسرہ کی بجائے فتحہ نوٹ کریں۔)\nمقابلہ: سَافَرْتُ إِلَى خَالِدٍ — "میں خالد کے پاس سفر پر گیا۔" (خَالِدٌ منصرف ہے اور تنوین کے ساتھ معمول کی کسرہ لیتا ہے۔)',
          arabic:
            'اَلْمُنْصَرِفُ يَقْبَلُ التَّنْوِينَ، وَغَيْرُ الْمُنْصَرِفِ لَا يَقْبَلُهُ وَيُجَرُّ بِالْفَتْحَةِ لِوُجُودِ عِلَّتَيْنِ مِنْ عِلَلِ مَنْعِ الصَّرْفِ، نَحْوَ الْعَلَمِيَّةِ مَعَ الْعُجْمَةِ.',
        },
        readOnlyExercises: [
          'Identify whether the underlined ism in each sentence is مُنْصَرِف or غَيْرُ مُنْصَرِفٍ, and explain why: (i) قَرَأْتُ كِتَابَ يُوسُفَ (ii) صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ (iii) سَافَرْتُ إِلَى فَاطِمَةَ',
        ],
      },
    ],
  },
]

const chapter3Lessons: Lesson[] = [
  {
    id: 'c3-lesson-1',
    bookId: BOOK_ID,
    chapterId: 'chapter-3',
    number: 1,
    title: 'Definite and Indefinite Isms',
    arabicTitle: 'اَلْمَعْرِفَةُ وَالنَّكِرَةُ',
    subtitle: 'Section 3.1',
    description: 'An ism is either Ma‘rifah (specific) or Nakirah (unspecified).',
    sections: [
      {
        id: 'c3-1-marifah',
        title: '3.1 Ma‘rifah and Nakirah',
        content: {
          english:
            'A نَكِرَةٌ ism denotes something unspecified — e.g. قَلَمٌ (a pen, any pen). It is generally shown by tanwīn.\nA مَعْرِفَةٌ ism denotes something specific. There are several kinds:\n1. Pronoun (ضَمِيرٌ) — e.g. هُوَ.\n2. Proper noun (عَلَمٌ) — e.g. مَكَّةُ.\n3. Demonstrative ism (اِسْمُ إِشَارَةٍ) — e.g. هَـٰذَا.\n4. Relative ism (اِسْمٌ مَوْصُولٌ) — e.g. اَلَّذِي.\n5. An ism with اَلْ — e.g. اَلْبَيْتُ.\n6. A nakirah muḍāf to any of the above — e.g. كِتَابُ خَالِدٍ.\n7. The vocative ism (اَلْمُنَادَى) — e.g. يَا وَلَدُ.',
          urdu:
            'نَكِرَةٌ اسم کسی غیر متعین چیز کو ظاہر کرتا ہے — مثلاً قَلَمٌ (ایک قلم، کوئی بھی قلم)۔ یہ عام طور پر تنوین سے ظاہر ہوتا ہے۔\nمَعْرِفَةٌ اسم کسی خاص چیز کو ظاہر کرتا ہے۔ اس کی کئی اقسام ہیں:\n١۔ ضمیر — مثلاً هُوَ۔\n٢۔ خاص نام (عَلَمٌ) — مثلاً مَكَّةُ۔\n٣۔ اسمِ اشارہ — مثلاً هَـٰذَا۔\n٤۔ اسمِ موصول — مثلاً اَلَّذِي۔\n٥۔ "اَلْ" والا اسم — مثلاً اَلْبَيْتُ۔\n٦۔ نکرہ جو مندرجہ بالا میں سے کسی کی طرف مضاف ہو — مثلاً كِتَابُ خَالِدٍ۔\n٧۔ منادیٰ (پکارا ہوا اسم) — مثلاً يَا وَلَدُ۔',
          arabic:
            'اَلنَّكِرَةُ مَا دَلَّ عَلَى غَيْرِ مُعَيَّنٍ، وَالْمَعْرِفَةُ مَا دَلَّ عَلَى مُعَيَّنٍ، وَهِيَ سَبْعَةُ أَنْوَاعٍ: الضَّمِيرُ، وَالْعَلَمُ، وَاسْمُ الْإِشَارَةِ، وَالِاسْمُ الْمَوْصُولُ، وَالْمُعَرَّفُ بِاَلْ، وَالْمُضَافُ إِلَى مَعْرِفَةٍ، وَالْمُنَادَى.',
        },
      },
    ],
  },
  {
    id: 'c3-lesson-2',
    bookId: BOOK_ID,
    chapterId: 'chapter-3',
    number: 2,
    title: 'Masculine and Feminine Isms',
    arabicTitle: 'اَلْمُذَكَّرُ وَالْمُؤَنَّثُ',
    subtitle: 'Section 3.2',
    description: 'How Arabic marks a feminine ism, and the difference between real and figurative feminine gender.',
    sections: [
      {
        id: 'c3-2-gender',
        title: '3.2 Signs of the Feminine',
        content: {
          english:
            'A مُذَكَّرٌ ism carries no sign of femininity. A مُؤَنَّثٌ ism carries one of three visible markers:\n1. A round tā’ (ة) — e.g. طَالِبَةٌ.\n2. An alif maqṣūrah (ى) — e.g. كُبْرَى.\n3. An alif mamdūdah (اء) — e.g. صَحْرَاءُ.\nSome isms are مُؤَنَّثٌ لَفْظِيٌّ without any of these markers, simply by convention — e.g. أَرْضٌ, شَمْسٌ, يَدٌ — these are called مُؤَنَّثٌ مَجَازِيٌّ (figuratively feminine) if they have no real biological sex, as opposed to a مُؤَنَّثٌ حَقِيقِيٌّ like بِنْتٌ (a real female).',
          urdu:
            'مُذَكَّرٌ اسم پر تانیث کی کوئی نشانی نہیں ہوتی۔ مُؤَنَّثٌ اسم پر تین ظاہری نشانیوں میں سے ایک ہوتی ہے:\n١۔ گول تاء (ة) — مثلاً طَالِبَةٌ۔\n٢۔ الف مقصورہ (ى) — مثلاً كُبْرَى۔\n٣۔ الف ممدودہ (اء) — مثلاً صَحْرَاءُ۔\nکچھ اسم ان نشانیوں کے بغیر بھی، محض رواج کے مطابق، مؤنث ہوتے ہیں — مثلاً أَرْضٌ، شَمْسٌ، يَدٌ — انہیں مُؤَنَّثٌ مَجَازِيٌّ (مجازی مؤنث) کہا جاتا ہے اگر ان کی کوئی حقیقی جنس نہ ہو، بخلاف مُؤَنَّثٌ حَقِيقِيٌّ جیسے بِنْتٌ (ایک حقیقی مؤنث) کے۔',
          arabic:
            'عَلَامَاتُ التَّأْنِيثِ ثَلَاثٌ: تَاءٌ مَرْبُوطَةٌ، وَأَلِفٌ مَقْصُورَةٌ، وَأَلِفٌ مَمْدُودَةٌ. وَقَدْ يُؤَنَّثُ الِاسْمُ بِلَا عَلَامَةٍ، وَيُسَمَّى مُؤَنَّثًا مَجَازِيًّا.',
        },
      },
    ],
  },
  {
    id: 'c3-lesson-3',
    bookId: BOOK_ID,
    chapterId: 'chapter-3',
    number: 3,
    title: 'Singular, Dual, and Plural',
    arabicTitle: 'اَلْوَاحِدُ وَالْمُثَنَّى وَالْجَمْعُ',
    subtitle: 'Section 3.3',
    description: 'How the dual and the two sound plurals are formed, and the difference from a broken plural.',
    sections: [
      {
        id: 'c3-3-number',
        title: '3.3 Forming the Dual and Plural',
        content: {
          english:
            'وَاحِدٌ denotes one; مُثَنَّى denotes two; جَمْعٌ denotes more than two.\nThe مُثَنَّى is formed by adding ـَانِ (raf‘) or ـَيْنِ (naṣb/jarr) to the singular — e.g. مُهَنْدِسٌ → مُهَنْدِسَانِ / مُهَنْدِسَيْنِ.\nA جَمْعُ مُذَكَّرٍ سَالِمٌ adds ـُونَ (raf‘) or ـِينَ (naṣb/jarr) — e.g. مُهَنْدِسٌ → مُهَنْدِسُونَ / مُهَنْدِسِينَ. A جَمْعُ مُؤَنَّثٍ سَالِمٌ drops the ة and adds ـَاتٌ — e.g. مُهَنْدِسَةٌ → مُهَنْدِسَاتٌ.\nA جَمْعٌ مُكَسَّرٌ (broken plural) changes the internal pattern of the singular rather than just adding a suffix — e.g. كِتَابٌ → كُتُبٌ, وَلَدٌ → أَوْلَادٌ, رَجُلٌ → رِجَالٌ.',
          urdu:
            'وَاحِدٌ ایک کو ظاہر کرتا ہے؛ مُثَنَّى دو کو؛ جَمْعٌ دو سے زیادہ کو۔\nمُثَنَّى واحد میں ـَانِ (رفع) یا ـَيْنِ (نصب/جر) لگا کر بنایا جاتا ہے — مثلاً مُهَنْدِسٌ → مُهَنْدِسَانِ / مُهَنْدِسَيْنِ۔\nجَمْعُ مُذَكَّرٍ سَالِمٌ ـُونَ (رفع) یا ـِينَ (نصب/جر) لگاتا ہے — مثلاً مُهَنْدِسٌ → مُهَنْدِسُونَ / مُهَنْدِسِينَ۔ جَمْعُ مُؤَنَّثٍ سَالِمٌ "ة" ہٹا کر ـَاتٌ لگاتا ہے — مثلاً مُهَنْدِسَةٌ → مُهَنْدِسَاتٌ۔\nجَمْعٌ مُكَسَّرٌ (ٹوٹی ہوئی جمع) واحد کی اندرونی ساخت بدل دیتا ہے، صرف آخر میں کچھ لگانے کی بجائے — مثلاً كِتَابٌ → كُتُبٌ، وَلَدٌ → أَوْلَادٌ، رَجُلٌ → رِجَالٌ۔',
          arabic:
            'اَلْجَمْعُ نَوْعَانِ: سَالِمٌ (مُذَكَّرٌ بِوَاوٍ وَنُونٍ أَوْ يَاءٍ وَنُونٍ، وَمُؤَنَّثٌ بِأَلِفٍ وَتَاءٍ)، وَمُكَسَّرٌ يَتَغَيَّرُ فِيهِ بِنَاءُ الْمُفْرَدِ، نَحْوَ: كِتَابٌ وَكُتُبٌ.',
        },
      },
    ],
  },
  {
    id: 'c3-lesson-4',
    bookId: BOOK_ID,
    chapterId: 'chapter-3',
    number: 4,
    title: 'The Fā‘il and Nā’ib al-Fā‘il',
    arabicTitle: 'اَلْفَاعِلُ وَنَائِبُ الْفَاعِلِ',
    subtitle: 'Section 3.4',
    description: 'The two words that are always marfoo‘ because a verb was done, or received, by them.',
    sections: [
      {
        id: 'c3-4-faail',
        title: '3.4 Doer and Substitute-Doer',
        content: {
          english:
            'The فَاعِلٌ is the doer of the action in an active-voice sentence; it is always marfoo‘.\ne.g. كَتَبَ الطَّالِبُ الدَّرْسَ — The student wrote the lesson. (اَلطَّالِبُ is the fā‘il.)\n\nWhen a verb is put into the passive voice (فِعْلٌ مَجْهُولٌ — the doer is unnamed), the object takes the fā‘il\'s place and is called نَائِبُ الْفَاعِلِ; it too is marfoo‘.\ne.g. كُتِبَ الدَّرْسُ — The lesson was written. (اَلدَّرْسُ is nā’ib al-fā‘il — notice it was the maf‘ool in the active sentence above, and the verb\'s vowelling changes to كُتِبَ.)',
          urdu:
            'فَاعِلٌ فعل معروف کے جملے میں کام کرنے والا ہے؛ یہ ہمیشہ مرفوع ہوتا ہے۔\nمثال: كَتَبَ الطَّالِبُ الدَّرْسَ — "طالب علم نے سبق لکھا۔" (اَلطَّالِبُ فاعل ہے۔)\n\nجب فعل کو مجہول بنایا جائے (فِعْلٌ مَجْهُولٌ — کرنے والا نامعلوم ہو)، تو مفعول فاعل کی جگہ لے لیتا ہے اور اسے نَائِبُ الْفَاعِلِ کہا جاتا ہے؛ یہ بھی مرفوع ہوتا ہے۔\nمثال: كُتِبَ الدَّرْسُ — "سبق لکھا گیا۔" (اَلدَّرْسُ نائب الفاعل ہے — غور کریں کہ یہ اوپر والے معروف جملے میں مفعول تھا، اور فعل کی حرکت بدل کر كُتِبَ ہوگئی۔)',
          arabic:
            'اَلْفَاعِلُ مَنْ قَامَ بِالْفِعْلِ، وَهُوَ مَرْفُوعٌ دَائِمًا. وَإِذَا بُنِيَ الْفِعْلُ لِلْمَجْهُولِ نَابَ الْمَفْعُولُ عَنِ الْفَاعِلِ وَسُمِّيَ نَائِبَ فَاعِلٍ، وَهُوَ مَرْفُوعٌ أَيْضًا.',
        },
      },
    ],
  },
  {
    id: 'c3-lesson-5',
    bookId: BOOK_ID,
    chapterId: 'chapter-3',
    number: 5,
    title: 'Words That Are Always Manṣūb',
    arabicTitle: 'اَلْمَنْصُوبَاتُ',
    subtitle: 'Section 3.5',
    description: 'An overview of the maf‘ool bihi, maf‘ool muṭlaq, ḥāl, and tamyeez.',
    sections: [
      {
        id: 'c3-5-mansoobat',
        title: '3.5 Four Common Manṣūbāt',
        content: {
          english:
            '1. مَفْعُولٌ بِهِ — the object that receives the action. e.g. فَتَحَ الْوَلَدُ البَابَ — The boy opened the door.\n2. مَفْعُولٌ مُطْلَقٌ — the maṣdar of the verb, added for emphasis, to describe the type of action, or to count it. e.g. اِنْتَظَرْتُهُ اِنْتِظَارًا طَوِيلًا — I waited for him a long wait. (describes the kind of waiting)\n3. حَالٌ — a nakirah ism that describes the condition of the doer or object at the moment of the action. e.g. رَجَعَ الطَّالِبُ مُبْتَسِمًا — The student returned smiling.\n4. تَمْيِيزٌ — a nakirah ism that removes ambiguity left by the word before it, often after a number or a measurement. e.g. اِشْتَرَيْتُ عِشْرِينَ كِتَابًا — I bought twenty books.',
          urdu:
            '١۔ مَفْعُولٌ بِهِ — وہ چیز جس پر فعل کا اثر پڑے۔ مثلاً فَتَحَ الْوَلَدُ البَابَ — "لڑکے نے دروازہ کھولا۔"\n٢۔ مَفْعُولٌ مُطْلَقٌ — فعل کا مصدر، تاکید، قسم بیان کرنے، یا شمار کرنے کے لیے شامل کیا جاتا ہے۔ مثلاً اِنْتَظَرْتُهُ اِنْتِظَارًا طَوِيلًا — "میں نے اس کا طویل انتظار کیا۔" (انتظار کی نوعیت بیان کرتا ہے)\n٣۔ حَالٌ — ایک نکرہ اسم جو فعل کے وقت فاعل یا مفعول کی حالت بیان کرے۔ مثلاً رَجَعَ الطَّالِبُ مُبْتَسِمًا — "طالب علم مسکراتا ہوا واپس آیا۔"\n٤۔ تَمْيِيزٌ — ایک نکرہ اسم جو پہلے آنے والے لفظ کے ابہام کو دور کرے، اکثر عدد یا پیمائش کے بعد۔ مثلاً اِشْتَرَيْتُ عِشْرِينَ كِتَابًا — "میں نے بیس کتابیں خریدیں۔"',
          arabic:
            'مِنَ الْمَنْصُوبَاتِ: اَلْمَفْعُولُ بِهِ، وَالْمَفْعُولُ الْمُطْلَقُ، وَالْحَالُ، وَالتَّمْيِيزُ.',
        },
      },
    ],
  },
  {
    id: 'c3-lesson-6',
    bookId: BOOK_ID,
    chapterId: 'chapter-3',
    number: 6,
    title: 'Istithnā’ and Munādā',
    arabicTitle: 'اَلِاسْتِثْنَاءُ وَالْمُنَادَى',
    subtitle: 'Section 3.6',
    description: 'The exception construction with إِلَّا, and the vocative form used to call out to someone.',
    sections: [
      {
        id: 'c3-6-istithnaa',
        title: '3.6 Excepting with إِلَّا',
        content: {
          english:
            'اِسْتِثْنَاءٌ excludes one thing from a group already mentioned, using إِلَّا (or a similar particle). The excluded ism, called اَلْمُسْتَثْنَى, is generally manṣūb when the sentence is مُوجَب (positive/complete).\ne.g. حَضَرَ الطُّلَّابُ إِلَّا خَالِدًا — The students attended, except Khalid.',
          urdu:
            'اِسْتِثْنَاءٌ کسی پہلے سے مذکور گروہ میں سے ایک چیز کو خارج کرتا ہے، إِلَّا (یا اسی طرح کے کسی حرف) کے ذریعے۔ خارج شدہ اسم، جسے اَلْمُسْتَثْنَى کہا جاتا ہے، عام طور پر منصوب ہوتا ہے جب جملہ مُوجَب (مثبت/مکمل) ہو۔\nمثال: حَضَرَ الطُّلَّابُ إِلَّا خَالِدًا — "طالب علم حاضر ہوئے، سوائے خالد کے۔"',
          arabic:
            'اَلِاسْتِثْنَاءُ إِخْرَاجُ اسْمٍ مِمَّا قَبْلَهُ بِإِلَّا، وَالْمُسْتَثْنَى مَنْصُوبٌ إِذَا كَانَ الْكَلَامُ تَامًّا مُوجَبًا، نَحْوَ: حَضَرَ الطُّلَّابُ إِلَّا خَالِدًا.',
        },
      },
      {
        id: 'c3-6-munada',
        title: 'Calling out with يَا',
        content: {
          english:
            'اَلْمُنَادَى is the ism that appears after a vocative particle such as يَا, used to call or address someone. A single, specific munādā (عَلَمٌ مُفْرَدٌ) is mabnī on the ḥarakah it would have had in raf‘.\ne.g. يَا خَالِدُ، تَعَالَ هُنَا — O Khalid, come here.\nيَا طَالِبَ الْعِلْمِ، اِجْتَهِدْ — O seeker of knowledge, work hard. (here the munādā is muḍāf, so it is manṣūb instead of mabnī)',
          urdu:
            'اَلْمُنَادَى وہ اسم ہے جو يَا جیسے حرفِ ندا کے بعد آتا ہے، کسی کو پکارنے یا مخاطب کرنے کے لیے۔ ایک واحد، خاص منادیٰ (عَلَمٌ مُفْرَدٌ) اس حرکت پر مبنی ہوتا ہے جو رفع میں ہوتی۔\nمثال: يَا خَالِدُ، تَعَالَ هُنَا — "اے خالد، یہاں آؤ۔"\nيَا طَالِبَ الْعِلْمِ، اِجْتَهِدْ — "اے علم کے طالب، محنت کرو۔" (یہاں منادیٰ مضاف ہے، اس لیے مبنی کی بجائے منصوب ہے)',
          arabic:
            'اَلْمُنَادَى الْعَلَمُ الْمُفْرَدُ مَبْنِيٌّ عَلَى مَا يُرْفَعُ بِهِ، نَحْوَ: يَا خَالِدُ. وَإِذَا كَانَ مُضَافًا كَانَ مَنْصُوبًا، نَحْوَ: يَا طَالِبَ الْعِلْمِ.',
        },
      },
    ],
  },
  {
    id: 'c3-lesson-7',
    bookId: BOOK_ID,
    chapterId: 'chapter-3',
    number: 7,
    title: 'The Tawābi‘ — Following Words',
    arabicTitle: 'اَلتَّوَابِعُ',
    subtitle: 'Section 3.7',
    description: 'Four kinds of words that simply match the i‘rāb of the word before them: Na‘t, Tawkīd, Badal, and ‘Aṭf.',
    sections: [
      {
        id: 'c3-7-tawabi',
        title: '3.7 Four Kinds of Tābi‘',
        content: {
          english:
            'A تَابِعٌ takes the same i‘rāb as the word it follows (اَلْمَتْبُوعُ). There are four kinds:\n1. نَعْتٌ (adjective) — describes the matbū‘ and matches it in i‘rāb, gender, number, and definiteness. e.g. حَضَرَ الطَّالِبُ الْمُجْتَهِدُ — The hard-working student attended.\n2. تَوْكِيدٌ (emphasis) — reinforces the matbū‘, e.g. with نَفْسٌ/عَيْنٌ or كُلٌّ. e.g. حَضَرَ الطَّالِبُ نَفْسُهُ — The student himself attended.\n3. بَدَلٌ (substitute) — restates the matbū‘ with a more specific or clarifying ism. e.g. حَضَرَ الطَّالِبُ خَالِدٌ — The student, Khalid, attended.\n4. عَطْفٌ (conjunction) — joins a further ism to the matbū‘ with a particle such as وَ or أَوْ. e.g. حَضَرَ خَالِدٌ وَسَعِيدٌ — Khalid and Saeed attended.',
          urdu:
            'تَابِعٌ اسی اعراب کو اختیار کرتا ہے جو اس سے پہلے آنے والے لفظ (اَلْمَتْبُوعُ) کا ہو۔ اس کی چار قسمیں ہیں:\n١۔ نَعْتٌ (صفت) — متبوع کو بیان کرتا ہے اور اعراب، جنس، تعداد اور معرفہ/نکرہ ہونے میں اس سے میل کھاتا ہے۔ مثلاً حَضَرَ الطَّالِبُ الْمُجْتَهِدُ — "محنتی طالب علم حاضر ہوا۔"\n٢۔ تَوْكِيدٌ (تاکید) — متبوع کو مضبوط کرتا ہے، مثلاً نَفْسٌ/عَيْنٌ یا كُلٌّ کے ساتھ۔ مثلاً حَضَرَ الطَّالِبُ نَفْسُهُ — "طالب علم خود حاضر ہوا۔"\n٣۔ بَدَلٌ (بدل) — متبوع کو زیادہ خاص یا واضح اسم سے دہراتا ہے۔ مثلاً حَضَرَ الطَّالِبُ خَالِدٌ — "طالب علم، یعنی خالد، حاضر ہوا۔"\n٤۔ عَطْفٌ (عطف) — کسی حرف جیسے وَ یا أَوْ کے ذریعے متبوع کے ساتھ ایک اور اسم ملاتا ہے۔ مثلاً حَضَرَ خَالِدٌ وَسَعِيدٌ — "خالد اور سعید حاضر ہوئے۔"',
          arabic:
            'اَلتَّابِعُ يَتْبَعُ مَا قَبْلَهُ فِي إِعْرَابِهِ، وَهُوَ أَرْبَعَةٌ: اَلنَّعْتُ، وَالتَّوْكِيدُ، وَالْبَدَلُ، وَعَطْفُ النَّسَقِ.',
        },
      },
    ],
  },
]

const chapter4Lessons: Lesson[] = [
  {
    id: 'c4-lesson-1',
    bookId: BOOK_ID,
    chapterId: 'chapter-4',
    number: 1,
    title: 'What Is an ‘Āmil?',
    arabicTitle: 'اَلْعَامِلُ',
    subtitle: 'Section 4.1',
    description: 'The governing word that causes a Mu‘rab word to change its ending.',
    sections: [
      {
        id: 'c4-1-aamil',
        title: '4.1 Governing Words',
        content: {
          english:
            'An عَامِلٌ is a word (or, in some cases, simply a position in the sentence) that determines the state of i‘rāb of the word that follows or depends on it.\n\nAn عَامِلٌ لَفْظِيٌّ is a spoken governing word — a ḥarf, a fi‘l, or certain isms. e.g. in فِي الْبَيْتِ, the ḥarf فِي is the ‘āmil that puts الْبَيْتِ into jarr.\n\nAn عَامِلٌ مَعْنَوِيٌّ is not a spoken word at all — the governing effect comes purely from the word\'s position or role. e.g. in زَيْدٌ قَائِمٌ, زَيْدٌ is marfoo‘ as a mubtada simply because it opens a nominal sentence (اَلِابْتِدَاءُ) — no spoken ‘āmil is present.\n\nThe rest of this chapter surveys the main governing ḥurūf, fi‘ls, and isms in turn.',
          urdu:
            'عَامِلٌ ایک لفظ ہے (یا بعض اوقات محض جملے میں ایک مقام) جو اس کے بعد آنے والے یا اس پر منحصر لفظ کی حالتِ اعراب کا تعین کرتا ہے۔\n\nعَامِلٌ لَفْظِيٌّ ایک بولا جانے والا عامل ہے — حرف، فعل، یا بعض اسم۔ مثلاً فِي الْبَيْتِ میں، حرف فِي وہ عامل ہے جو الْبَيْتِ کو جر دیتا ہے۔\n\nعَامِلٌ مَعْنَوِيٌّ کوئی بولا جانے والا لفظ نہیں ہوتا — عامل کا اثر خالصتاً لفظ کے مقام یا کردار سے آتا ہے۔ مثلاً زَيْدٌ قَائِمٌ میں، زَيْدٌ مبتدا ہونے کی وجہ سے مرفوع ہے کیونکہ یہ اسمیہ جملے کا آغاز کرتا ہے (اَلِابْتِدَاءُ) — کوئی بولا جانے والا عامل موجود نہیں۔',
          arabic:
            'اَلْعَامِلُ مَا يُحْدِثُ الْإِعْرَابَ فِيمَا بَعْدَهُ. وَهُوَ قِسْمَانِ: لَفْظِيٌّ كَالْحَرْفِ وَالْفِعْلِ، وَمَعْنَوِيٌّ كَالِابْتِدَاءِ الَّذِي يَرْفَعُ الْمُبْتَدَأَ بِلَا لَفْظٍ.',
        },
      },
    ],
  },
  {
    id: 'c4-lesson-2',
    bookId: BOOK_ID,
    chapterId: 'chapter-4',
    number: 2,
    title: 'Particles That Govern the Fi‘l Muḍāri‘',
    arabicTitle: 'حُرُوفٌ تَجْزِمُ وَتَنْصِبُ الْمُضَارِعَ',
    subtitle: 'Section 4.2',
    description: 'The particles that give the Fi‘l Muḍāri‘ a naṣb, and those that give it a jazm.',
    sections: [
      {
        id: 'c4-2-nasibah',
        title: '4.2 Particles That Cause Naṣb',
        content: {
          english:
            'Four particles give the Fi‘l Muḍāri‘ a fatḥah (or drop its noon, if it is one of the five forms): أَنْ, لَنْ, كَيْ, and إِذَنْ.\ne.g. أُرِيدُ أَنْ أَنْجَحَ — I want to succeed.\nلَنْ أَتَأَخَّرَ — I will never be late.\nذَاكَرْتُ كَيْ أَفْهَمَ — I studied so that I would understand.',
          urdu:
            'چار حروف فعل مضارع کو فتحہ دیتے ہیں (یا اگر وہ پانچ افعال میں سے ہو تو اس کی نون گرا دیتے ہیں): أَنْ، لَنْ، كَيْ، اور إِذَنْ۔\nمثال: أُرِيدُ أَنْ أَنْجَحَ — "میں کامیاب ہونا چاہتا ہوں۔"\nلَنْ أَتَأَخَّرَ — "میں ہرگز دیر نہیں کروں گا۔"\nذَاكَرْتُ كَيْ أَفْهَمَ — "میں نے سمجھنے کے لیے مطالعہ کیا۔"',
          arabic:
            'اَلْحُرُوفُ النَّاصِبَةُ لِلْمُضَارِعِ أَرْبَعَةٌ: أَنْ، وَلَنْ، وَكَيْ، وَإِذَنْ.',
        },
      },
      {
        id: 'c4-2-jazimah',
        title: 'Particles That Cause Jazm',
        content: {
          english:
            'Several particles give the Fi‘l Muḍāri‘ a sukoon (or drop its noon, if it is one of the five forms). The most common are لَمْ (did not), لَمَّا (not yet), لَامُ الْأَمْرِ (let/should), لَا النَّاهِيَةُ (do not), and إِنْ (the conditional if — this one governs two verbs, a شَرْط and a جَزَاء).\ne.g. لَمْ يَحْضُرْ خَالِدٌ — Khalid did not attend.\nلِيَجْتَهِدِ الطَّالِبُ — Let the student work hard.\nلَا تُهْمِلْ وَاجِبَكَ — Do not neglect your homework.\nإِنْ تَجْتَهِدْ تَنْجَحْ — If you work hard, you will succeed.',
          urdu:
            'کئی حروف فعل مضارع کو سکون دیتے ہیں (یا اگر وہ پانچ افعال میں سے ہو تو اس کی نون گرا دیتے ہیں)۔ سب سے عام یہ ہیں: لَمْ (نہیں ہوا)، لَمَّا (ابھی نہیں)، لَامُ الْأَمْرِ (چاہیے/ہونے دو)، لَا النَّاهِيَةُ (نہ کرو)، اور إِنْ (شرطیہ اگر — یہ دو فعل، شَرْط اور جَزَاء، پر عمل کرتا ہے)۔\nمثال: لَمْ يَحْضُرْ خَالِدٌ — "خالد حاضر نہیں ہوا۔"\nلِيَجْتَهِدِ الطَّالِبُ — "طالب علم کو محنت کرنی چاہیے۔"\nلَا تُهْمِلْ وَاجِبَكَ — "اپنا کام نہ چھوڑو۔"\nإِنْ تَجْتَهِدْ تَنْجَحْ — "اگر تم محنت کرو گے تو کامیاب ہوگے۔"',
          arabic:
            'مِنَ الْحُرُوفِ الْجَازِمَةِ: لَمْ، وَلَمَّا، وَلَامُ الْأَمْرِ، وَلَا النَّاهِيَةُ، وَإِنِ الشَّرْطِيَّةُ الَّتِي تَجْزِمُ فِعْلَيْنِ.',
        },
      },
    ],
  },
  {
    id: 'c4-lesson-3',
    bookId: BOOK_ID,
    chapterId: 'chapter-4',
    number: 3,
    title: 'Active, Passive, Transitive, and Intransitive Verbs',
    arabicTitle: 'اَلْمَعْرُوفُ وَالْمَجْهُولُ، اَللَّازِمُ وَالْمُتَعَدِّي',
    subtitle: 'Section 4.3',
    description: 'Four ways of classifying a verb by its doer and by its need for an object.',
    sections: [
      {
        id: 'c4-3-voice',
        title: '4.3 Voice and Transitivity',
        content: {
          english:
            'A فِعْلٌ مَعْرُوفٌ (active) names its doer: كَتَبَ خَالِدٌ الرِّسَالَةَ — Khalid wrote the letter.\nA فِعْلٌ مَجْهُولٌ (passive) leaves the doer unnamed, and the object stands in its place (see Lesson 3.4): كُتِبَتِ الرِّسَالَةُ — The letter was written.\n\nA فِعْلٌ لَازِمٌ (intransitive) makes complete sense without a maf‘ool bihi: نَامَ الطِّفْلُ — The child slept.\nA فِعْلٌ مُتَعَدٍّ (transitive) needs a maf‘ool bihi to be complete: قَرَأَ الطِّفْلُ الْقِصَّةَ — The child read the story. Some transitive verbs, such as those of "giving" or "believing" (أَفْعَالُ الْقُلُوبِ), can even take two objects: أَعْطَيْتُ الْفَقِيرَ طَعَامًا — I gave the poor man food.',
          urdu:
            'فِعْلٌ مَعْرُوفٌ (معروف) اپنے کرنے والے کا نام لیتا ہے: كَتَبَ خَالِدٌ الرِّسَالَةَ — "خالد نے خط لکھا۔"\nفِعْلٌ مَجْهُولٌ (مجہول) کرنے والے کا نام نہیں لیتا، اور مفعول اس کی جگہ لے لیتا ہے (دیکھیں سبق ٣۔٤): كُتِبَتِ الرِّسَالَةُ — "خط لکھا گیا۔"\n\nفِعْلٌ لَازِمٌ (لازم) بغیر مفعولٍ بہ کے مکمل معنی دیتا ہے: نَامَ الطِّفْلُ — "بچہ سویا۔"\nفِعْلٌ مُتَعَدٍّ (متعدی) کو مکمل ہونے کے لیے مفعولٍ بہ چاہیے: قَرَأَ الطِّفْلُ الْقِصَّةَ — "بچے نے کہانی پڑھی۔" کچھ متعدی افعال، جیسے "دینے" یا "یقین کرنے" کے افعال (أَفْعَالُ الْقُلُوبِ)، دو مفعول بھی لے سکتے ہیں: أَعْطَيْتُ الْفَقِيرَ طَعَامًا — "میں نے فقیر کو کھانا دیا۔"',
          arabic:
            'اَلْفِعْلُ مَعْرُوفٌ إِذَا ذُكِرَ فَاعِلُهُ، وَمَجْهُولٌ إِذَا حُذِفَ. وَهُوَ لَازِمٌ إِنِ اكْتَفَى بِفَاعِلِهِ، وَمُتَعَدٍّ إِنِ احْتَاجَ إِلَى مَفْعُولٍ بِهِ.',
        },
      },
    ],
  },
  {
    id: 'c4-lesson-4',
    bookId: BOOK_ID,
    chapterId: 'chapter-4',
    number: 4,
    title: 'Verbs of Nearness, Hope, and Commencement',
    arabicTitle: 'أَفْعَالُ الْمُقَارَبَةِ وَالرَّجَاءِ وَالشُّرُوعِ',
    subtitle: 'Section 4.4',
    description: 'Verbs such as kāda, ‘asā, and akhadha that behave like Kāna and enter on a Mubtada’ and Khabar.',
    sections: [
      {
        id: 'c4-4-muqarabah',
        title: '4.4 A Special Group of Nāqiṣ Verbs',
        content: {
          english:
            'Like كَانَ, these verbs give raf‘ to their ism and naṣb to their khabar, which is almost always a فِعْلٌ مُضَارِعٌ sentence.\n• كَادَ shows nearness to happening: كَادَ الْمَطَرُ يَتَوَقَّفُ — The rain was about to stop.\n• عَسَى shows hope: عَسَى الْفَرَجُ أَنْ يَأْتِيَ — Hopefully relief will come.\n• أَخَذَ / شَرَعَ show the start of an action: أَخَذَ الطِّفْلُ يَبْكِي — The child began to cry.',
          urdu:
            'كَانَ کی طرح، یہ افعال اپنے اسم کو رفع اور اپنی خبر کو نصب دیتے ہیں، جو تقریباً ہمیشہ فعل مضارع کا جملہ ہوتی ہے۔\n• كَادَ کسی کام کے قریب ہونے کو ظاہر کرتا ہے: كَادَ الْمَطَرُ يَتَوَقَّفُ — "بارش رکنے کے قریب تھی۔"\n• عَسَى امید ظاہر کرتا ہے: عَسَى الْفَرَجُ أَنْ يَأْتِيَ — "شاید آسانی آجائے۔"\n• أَخَذَ / شَرَعَ کسی کام کے شروع ہونے کو ظاہر کرتے ہیں: أَخَذَ الطِّفْلُ يَبْكِي — "بچہ رونے لگا۔"',
          arabic:
            'كَادَ وَأَخَوَاتُهَا أَفْعَالٌ نَاقِصَةٌ لِلْمُقَارَبَةِ وَالرَّجَاءِ وَالشُّرُوعِ، تَرْفَعُ الِاسْمَ وَتَنْصِبُ الْخَبَرَ.',
        },
      },
    ],
  },
  {
    id: 'c4-lesson-5',
    bookId: BOOK_ID,
    chapterId: 'chapter-4',
    number: 5,
    title: 'Verbs of Praise, Blame, and Wonder',
    arabicTitle: 'أَفْعَالُ الْمَدْحِ وَالذَّمِّ وَالتَّعَجُّبِ',
    subtitle: 'Section 4.5',
    description: 'The fixed expressions ni‘ma and bi’sa, and the two patterns used to express amazement.',
    sections: [
      {
        id: 'c4-5-madh',
        title: '4.5 Praise and Blame',
        content: {
          english:
            'نِعْمَ (what an excellent…!) and بِئْسَ (what a terrible…!) are fixed past-tense verbs used to praise or blame. Their فَاعِل must be definite (with اَلْ, muḍāf to a definite ism, or a hidden pronoun explained by a following nakirah tamyeez), and the thing praised/blamed (اَلْمَخْصُوصُ بِالْمَدْحِ / بِالذَّمِّ) follows as a mubtada with a deferred khabar.\ne.g. نِعْمَ الصَّدِيقُ خَالِدٌ — What an excellent friend Khalid is!\nبِئْسَ الْعَمَلُ الْكَذِبُ — What a terrible deed lying is!',
          urdu:
            'نِعْمَ (کیا خوب…!) اور بِئْسَ (کیا برا…!) مقرر ماضی کے افعال ہیں جو تعریف یا مذمت کے لیے استعمال ہوتے ہیں۔ ان کا فاعل معرفہ ہونا ضروری ہے ("اَلْ" کے ساتھ، معرفہ اسم کی طرف مضاف، یا پوشیدہ ضمیر جسے بعد میں آنے والا نکرہ تمییز واضح کرے)، اور جس چیز کی تعریف/مذمت کی جائے (اَلْمَخْصُوصُ بِالْمَدْحِ / بِالذَّمِّ) مبتدا کے طور پر آتی ہے جس کی خبر پہلے آچکی ہوتی ہے۔\nمثال: نِعْمَ الصَّدِيقُ خَالِدٌ — "خالد کیا خوب دوست ہے!"\nبِئْسَ الْعَمَلُ الْكَذِبُ — "جھوٹ کیا برا کام ہے!"',
          arabic:
            'نِعْمَ وَبِئْسَ فِعْلَانِ جَامِدَانِ لِلْمَدْحِ وَالذَّمِّ، فَاعِلُهُمَا مَعْرِفَةٌ، وَالْمَخْصُوصُ بَعْدَهُمَا مُبْتَدَأٌ خَبَرُهُ الْجُمْلَةُ قَبْلَهُ.',
        },
      },
      {
        id: 'c4-5-tajub',
        title: 'Expressing Wonder',
        content: {
          english:
            'To express amazement about a three-letter verb, Arabic uses two patterns: مَا أَفْعَلَهُ (What a …!) and أَفْعِلْ بِهِ (How … he is!).\ne.g. مَا أَجْمَلَ السَّمَاءَ! — How beautiful the sky is!\nأَكْرِمْ بِخَالِدٍ! — How generous Khalid is!',
          urdu:
            'کسی تین حرفی فعل پر حیرت کا اظہار کرنے کے لیے، عربی دو وزن استعمال کرتی ہے: مَا أَفْعَلَهُ (کیا ہی …!) اور أَفْعِلْ بِهِ (وہ کتنا … ہے!)۔\nمثال: مَا أَجْمَلَ السَّمَاءَ! — "آسمان کیا ہی خوبصورت ہے!"\nأَكْرِمْ بِخَالِدٍ! — "خالد کتنا سخی ہے!"',
          arabic:
            'صِيغَتَا التَّعَجُّبِ الْقِيَاسِيَّتَانِ: مَا أَفْعَلَهُ، وَأَفْعِلْ بِهِ.',
        },
      },
    ],
  },
  {
    id: 'c4-lesson-6',
    bookId: BOOK_ID,
    chapterId: 'chapter-4',
    number: 6,
    title: 'Conditional Isms',
    arabicTitle: 'اَلْأَسْمَاءُ الشَّرْطِيَّةُ',
    subtitle: 'Section 4.6',
    description: 'Isms such as man and mā that, like إِنْ, govern two Fi‘l Muḍāri‘ verbs and give both a jazm.',
    sections: [
      {
        id: 'c4-6-shart',
        title: '4.6 Isms That Govern a Shart and a Jazā’',
        content: {
          english:
            'Besides the particle إِنْ, several isms carry a conditional meaning and likewise govern two verbs — a شَرْط and a جَزَاء — giving both a jazm.\ne.g. مَنْ يَجْتَهِدْ يَنْجَحْ — Whoever works hard will succeed.\nمَهْمَا تَفْعَلْ أَرَهُ — Whatever you do, I will see it.\nأَيْنَمَا تَذْهَبْ أَذْهَبْ — Wherever you go, I will go.',
          urdu:
            'حرف إِنْ کے علاوہ، کئی اسم شرطیہ معنی رکھتے ہیں اور اسی طرح دو فعل — شَرْط اور جَزَاء — پر عمل کرتے ہیں، دونوں کو جزم دیتے ہوئے۔\nمثال: مَنْ يَجْتَهِدْ يَنْجَحْ — "جو محنت کرے گا کامیاب ہوگا۔"\nمَهْمَا تَفْعَلْ أَرَهُ — "تم جو بھی کرو گے، میں دیکھوں گا۔"\nأَيْنَمَا تَذْهَبْ أَذْهَبْ — "تم جہاں بھی جاؤ گے، میں جاؤں گا۔"',
          arabic:
            'مِنَ الْأَسْمَاءِ الشَّرْطِيَّةِ: مَنْ، وَمَا، وَمَهْمَا، وَأَيْنَمَا، وَهِيَ تَجْزِمُ فِعْلَيْنِ: فِعْلَ الشَّرْطِ وَجَوَابَهُ.',
        },
      },
    ],
  },
  {
    id: 'c4-lesson-7',
    bookId: BOOK_ID,
    chapterId: 'chapter-4',
    number: 7,
    title: 'Derived Isms — Fā‘il, Maf‘ūl, and Tafḍīl',
    arabicTitle: 'اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُولِ وَاسْمُ التَّفْضِيلِ',
    subtitle: 'Section 4.7',
    description: 'Isms built from a verb root that can, in certain conditions, govern like the verb they come from.',
    sections: [
      {
        id: 'c4-7-derived',
        title: '4.7 Three Governing Isms',
        content: {
          english:
            '1. اِسْمُ الْفَاعِلِ names the doer — on the pattern فَاعِلٌ for a three-letter root. e.g. كَاتِبٌ (writer, from كَتَبَ). When it carries اَلْ, or refers to present/future time after a mubtada, it can govern like its verb: هَـٰذَا كَاتِبٌ رِسَالَةً — This is one writing a letter.\n2. اِسْمُ الْمَفْعُولِ names the one acted upon — on the pattern مَفْعُولٌ. e.g. مَكْتُوبٌ (written).\n3. اِسْمُ التَّفْضِيلِ compares or ranks a quality — on the pattern أَفْعَلُ. e.g. خَالِدٌ أَطْوَلُ مِنْ سَعِيدٍ — Khalid is taller than Saeed. بِلَالٌ أَطْوَلُ الطُّلَّابِ — Bilal is the tallest of the students.',
          urdu:
            '١۔ اِسْمُ الْفَاعِلِ کرنے والے کا نام لیتا ہے — تین حرفی جڑ کے لیے وزن فَاعِلٌ پر۔ مثلاً كَاتِبٌ (لکھنے والا، كَتَبَ سے)۔ جب اس پر "اَلْ" ہو، یا مبتدا کے بعد حال/مستقبل کے زمانے کی طرف اشارہ کرے، تو یہ اپنے فعل کی طرح عمل کرسکتا ہے: هَـٰذَا كَاتِبٌ رِسَالَةً — "یہ ایک خط لکھنے والا ہے۔"\n٢۔ اِسْمُ الْمَفْعُولِ اس کا نام لیتا ہے جس پر فعل کا اثر ہو — وزن مَفْعُولٌ پر۔ مثلاً مَكْتُوبٌ (لکھا ہوا)۔\n٣۔ اِسْمُ التَّفْضِيلِ کسی خوبی کا موازنہ یا درجہ بندی کرتا ہے — وزن أَفْعَلُ پر۔ مثلاً خَالِدٌ أَطْوَلُ مِنْ سَعِيدٍ — "خالد سعید سے لمبا ہے۔" بِلَالٌ أَطْوَلُ الطُّلَّابِ — "بلال طالب علموں میں سب سے لمبا ہے۔"',
          arabic:
            'اِسْمُ الْفَاعِلِ عَلَى وَزْنِ فَاعِلٍ، وَاسْمُ الْمَفْعُولِ عَلَى وَزْنِ مَفْعُولٍ، وَاسْمُ التَّفْضِيلِ عَلَى وَزْنِ أَفْعَلَ، وَكُلُّهَا مُشْتَقَّةٌ مِنَ الْفِعْلِ.',
        },
      },
    ],
  },
]

const chapter5Lessons: Lesson[] = [
  representativeLesson(
    'chapter-5',
    1,
    'What is Al-‘Āmil?',
    'ما هو العامل؟',
    'An ‘Āmil is a governing word that causes a change in the ending of the word that follows it.',
    'عامل وہ لفظ ہے جو اپنے بعد آنے والے لفظ کے آخری حرف میں تبدیلی کا سبب بنتا ہے۔',
    'Āmil woh lafz hai jo apne ba‘d ānay wālay lafz ke ākhri harf mein tabdīlī kā sabab bantā hai.',
  ),
  representativeLesson(
    'chapter-5',
    2,
    'Verbal and Nominal ‘Awāmil',
    'العوامل اللفظية والمعنوية',
    'Governing factors can be spoken (a verb, preposition, or particle) or purely grammatical (implied by position).',
    'عامل لفظی ہوسکتا ہے (فعل، حرفِ جر یا حرف) یا معنوی ہوسکتا ہے (مقام کی وجہ سے)۔',
    '‘Āmil lafzī ho saktā hai (fi‘l, harf-e-jarr yā harf) yā ma‘nawī ho saktā hai (maqām kī wajah se).',
  ),
]

const chapter6Lessons: Lesson[] = [
  representativeLesson(
    'chapter-6',
    1,
    'What is Mu‘rab?',
    'ما هو المعرب؟',
    'A Mu‘rab word is one whose final letter changes according to its position in the sentence.',
    'معرب وہ لفظ ہے جس کا آخری حرف جملے میں اس کے مقام کے مطابق بدلتا ہے۔',
    'Mu‘rab woh lafz hai jis kā ākhri harf jumle mein us ke maqām ke mutābiq badaltā hai.',
  ),
  representativeLesson(
    'chapter-6',
    2,
    'The Three I‘rāb States',
    'حالات الإعراب الثلاثة',
    'A Mu‘rab word appears in one of three states: raf‘ (nominative), naṣb (accusative), or jarr/jazm.',
    'معرب لفظ تین حالتوں میں سے ایک میں آتا ہے: رفع، نصب یا جر/جزم۔',
    'Mu‘rab lafz tīn hālaton mein se ek mein ātā hai: raf‘, naṣb yā jarr/jazm.',
  ),
]

const chapter7Lessons: Lesson[] = [
  representativeLesson(
    'chapter-7',
    1,
    'What is Mabnī?',
    'ما هو المبني؟',
    'A Mabnī word keeps the same ending no matter its position in the sentence.',
    'مبنی وہ لفظ ہے جس کا آخری حرف جملے میں اس کے مقام سے قطع نظر ایک ہی رہتا ہے۔',
    'Mabnī woh lafz hai jis kā ākhri harf jumle mein us ke maqām se qat‘-e-nazar ek hī rehtā hai.',
  ),
  representativeLesson(
    'chapter-7',
    2,
    'Mabnī vs Mu‘rab',
    'المبني والمعرب',
    'Every Ḥarf and most Fi‘l Māḍī forms are Mabnī, while most Ism and Fi‘l Muḍāri‘ forms are Mu‘rab.',
    'ہر حرف اور اکثر فعل ماضی مبنی ہوتے ہیں، جبکہ اکثر اسم اور فعل مضارع معرب ہوتے ہیں۔',
    'Har harf aur aksar fi‘l māzi mabnī hotay hain, jabkeh aksar ism aur fi‘l muzāri‘ mu‘rab hotay hain.',
  ),
]

const chapter8Lessons: Lesson[] = [
  representativeLesson(
    'chapter-8',
    1,
    'What is a Jumlah?',
    'ما هي الجملة؟',
    'A Jumlah is a complete sentence, formed either from an Ism + Ism (nominal) or a Fi‘l + Ism (verbal).',
    'جملہ ایک مکمل فقرہ ہے، جو اسم + اسم (اسمیہ) یا فعل + اسم (فعلیہ) سے بنتا ہے۔',
    'Jumlah ek mukammal fiqra hai, jo ism + ism (ismiyyah) yā fi‘l + ism (fi‘liyyah) se bantā hai.',
  ),
  representativeLesson(
    'chapter-8',
    2,
    'Al-Jumlah Al-Ismiyyah',
    'الجملة الاسمية',
    'A nominal sentence begins with a noun: a Mubtada’ (subject) and a Khabar (predicate).',
    'جملہ اسمیہ اسم سے شروع ہوتا ہے: مبتدا اور خبر۔',
    'Jumlah ismiyyah ism se shuru‘ hotā hai: mubtada’ aur khabar.',
  ),
  representativeLesson(
    'chapter-8',
    3,
    'Al-Jumlah Al-Fi‘liyyah',
    'الجملة الفعلية',
    'A verbal sentence begins with a verb, followed by its Fā‘il (doer).',
    'جملہ فعلیہ فعل سے شروع ہوتا ہے، اس کے بعد فاعل آتا ہے۔',
    'Jumlah fi‘liyyah fi‘l se shuru‘ hotā hai, us ke ba‘d fā‘il ātā hai.',
  ),
]

export const lessonsByChapter: Record<string, Lesson[]> = {
  'chapter-1': chapter1Lessons,
  'chapter-2': chapter2Lessons,
  'chapter-3': chapter3Lessons,
  'chapter-4': chapter4Lessons,
  'chapter-5': chapter5Lessons,
  'chapter-6': chapter6Lessons,
  'chapter-7': chapter7Lessons,
  'chapter-8': chapter8Lessons,
}
