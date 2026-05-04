export interface JourneyCard {
  id: string;
  title: string;
  frontText: string;
  backTitle: string;
  backPoints: string[];
  actionStep: string;
}

export interface JourneyStage {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  colorLight: string;
  cards: JourneyCard[];
}

export const journeyStages: JourneyStage[] = [
  {
    id: "early-exploration",
    name: "Early Exploration",
    subtitle: "Noticing the first changes",
    description:
      "You're starting to notice shifts in your body, mood, or cycle. This stage is about understanding what's happening and knowing you're not imagining it.",
    color: "#6366F1",
    colorLight: "#EEF2FF",
    cards: [
      {
        id: "ee-1",
        title: "Is this menopause?",
        frontText:
          "Many women start noticing changes years before their periods actually stop. Perimenopause can begin in your early 40s — or even late 30s.",
        backTitle: "Common early signs",
        backPoints: [
          "Cycle changes — shorter, longer, heavier, or lighter periods",
          "Sleep disruption that seems to come out of nowhere",
          "Mood shifts — irritability, anxiety, or feeling unlike yourself",
          "Brain fog or trouble concentrating",
          "New or worsening PMS symptoms",
        ],
        actionStep:
          "Start a simple journal noting any changes you're noticing, even small ones. This will be invaluable for your doctor.",
      },
      {
        id: "ee-2",
        title: "You're not imagining it",
        frontText:
          "Hormonal changes are real and measurable. Estrogen, progesterone, and testosterone all fluctuate during this transition — and those fluctuations affect everything from your brain to your bones.",
        backTitle: "Why it feels so confusing",
        backPoints: [
          "Hormone levels can swing dramatically day to day",
          "Symptoms can come and go unpredictably",
          "Standard blood tests don't always capture the full picture",
          "Every woman's experience is genuinely different",
        ],
        actionStep:
          "If someone tells you it's 'just stress' but your gut says otherwise, trust yourself and seek a menopause-informed provider.",
      },
      {
        id: "ee-3",
        title: "What to expect next",
        frontText:
          "Perimenopause typically lasts 4–10 years. It's a transition, not an event. Understanding the general arc can help reduce anxiety about the unknown.",
        backTitle: "The general timeline",
        backPoints: [
          "Early perimenopause: subtle cycle and mood changes",
          "Late perimenopause: more noticeable symptoms, skipped periods",
          "Menopause: 12 consecutive months without a period",
          "Postmenopause: symptoms often improve, new health considerations emerge",
        ],
        actionStep:
          "Talk to your doctor about where you might be in this timeline. A menopause-informed provider can help you plan ahead.",
      },
    ],
  },
  {
    id: "active-symptoms",
    name: "Active Symptoms",
    subtitle: "Managing what you're feeling",
    description:
      "Symptoms are part of daily life now. This stage is about finding what works for you — from lifestyle changes to medical options.",
    color: "#EC4899",
    colorLight: "#FDF2F8",
    cards: [
      {
        id: "as-1",
        title: "Hot flashes & night sweats",
        frontText:
          "Vasomotor symptoms affect up to 80% of women during menopause. They're caused by your brain's thermostat recalibrating as estrogen fluctuates.",
        backTitle: "What actually helps",
        backPoints: [
          "Layer clothing and keep your environment cool",
          "Identify triggers: alcohol, spicy food, stress, caffeine",
          "Regular exercise can reduce frequency and severity",
          "HRT is the most effective medical treatment",
          "Non-hormonal options exist if HRT isn't right for you",
        ],
        actionStep:
          "Track your hot flashes for one week — note time, severity, and what you were doing. Patterns often emerge.",
      },
      {
        id: "as-2",
        title: "Sleep & energy",
        frontText:
          "Disrupted sleep is one of the most impactful menopause symptoms. It affects your mood, cognition, weight, and overall quality of life.",
        backTitle: "Strategies that work",
        backPoints: [
          "Keep your bedroom cool (65–68°F / 18–20°C)",
          "Moisture-wicking sleepwear and bedding help with night sweats",
          "CBT-I (cognitive behavioral therapy for insomnia) is highly effective",
          "Limit screens and stimulants in the evening",
          "Consider discussing sleep-specific treatments with your doctor",
        ],
        actionStep:
          "Tonight, try lowering your bedroom temperature and see if it makes a difference. Small changes can have big impact.",
      },
      {
        id: "as-3",
        title: "Mood & mental health",
        frontText:
          "Anxiety, irritability, and mood swings are among the most distressing menopause symptoms — and among the most undertreated. These are hormonal, not personal failings.",
        backTitle: "Taking care of your mental health",
        backPoints: [
          "Hormonal changes directly affect neurotransmitters like serotonin",
          "Existing anxiety or depression may intensify during this time",
          "Exercise is one of the most effective mood stabilizers",
          "Therapy (especially CBT) can provide concrete coping tools",
          "HRT can significantly improve mood symptoms for many women",
        ],
        actionStep:
          "If mood changes are affecting your relationships or daily life, bring it up with your doctor. This is treatable.",
      },
      {
        id: "as-4",
        title: "Brain fog & cognition",
        frontText:
          "Forgetting words, losing your train of thought, struggling to concentrate — menopause-related cognitive changes are real, common, and usually temporary.",
        backTitle: "Supporting your brain",
        backPoints: [
          "Estrogen plays a key role in memory and cognitive function",
          "Sleep quality directly impacts cognitive performance",
          "Aerobic exercise promotes brain health and neuroplasticity",
          "Stress management helps — cortisol impairs memory",
          "Most cognitive symptoms improve in postmenopause",
        ],
        actionStep:
          "Give yourself grace. Use lists, reminders, and routines to compensate while your brain adjusts.",
      },
    ],
  },
  {
    id: "seeking-treatment",
    name: "Seeking Treatment",
    subtitle: "Exploring your options",
    description:
      "You're ready to do something about your symptoms. This stage helps you understand the landscape of treatments so you can have informed conversations with your provider.",
    color: "#059669",
    colorLight: "#ECFDF5",
    cards: [
      {
        id: "st-1",
        title: "Understanding HRT",
        frontText:
          "Hormone replacement therapy is the most effective treatment for menopause symptoms. The science has evolved significantly — modern HRT is safer and more nuanced than older approaches.",
        backTitle: "Key things to know",
        backPoints: [
          "HRT replaces estrogen (and sometimes progesterone) your body no longer makes enough of",
          "It comes in many forms: patches, gels, pills, rings, sprays",
          "Timing matters — starting within 10 years of menopause onset is generally considered safest",
          "Benefits often include: symptom relief, bone protection, cardiovascular support",
          "Risks vary by individual — your doctor can help assess yours",
        ],
        actionStep:
          "Write down your top 3 symptoms. When you talk to your doctor about HRT, focus on what's most affecting your quality of life.",
      },
      {
        id: "st-2",
        title: "Non-hormonal options",
        frontText:
          "If HRT isn't right for you — or you want to complement it — there are evidence-based non-hormonal treatments worth discussing with your doctor.",
        backTitle: "Options to explore",
        backPoints: [
          "SSRIs/SNRIs can help with hot flashes and mood (even without depression)",
          "Gabapentin may help with hot flashes and sleep",
          "CBT is effective for insomnia, anxiety, and hot flash management",
          "Vaginal moisturizers and low-dose vaginal estrogen for GSM symptoms",
          "Lifestyle modifications can meaningfully reduce symptom burden",
        ],
        actionStep:
          "Ask your doctor: 'What non-hormonal options might work for my specific symptoms?' Not all providers mention these proactively.",
      },
      {
        id: "st-3",
        title: "Finding the right provider",
        frontText:
          "Not all healthcare providers are well-versed in menopause care. Finding someone knowledgeable and willing to listen can make an enormous difference.",
        backTitle: "What to look for",
        backPoints: [
          "Look for providers certified by NAMS (North American Menopause Society)",
          "Ask: 'How many menopause patients do you see regularly?'",
          "A good provider listens, explains options, and respects your preferences",
          "OB/GYNs, endocrinologists, and some internists specialize in menopause",
          "Telehealth menopause clinics have expanded access significantly",
        ],
        actionStep:
          "Search the NAMS provider directory or ask Aria to help you prepare questions for your next appointment.",
      },
    ],
  },
  {
    id: "ongoing-management",
    name: "Ongoing Management",
    subtitle: "Optimizing for the long term",
    description:
      "You've found what works — now it's about fine-tuning, staying proactive about your health, and embracing this new chapter.",
    color: "#D97706",
    colorLight: "#FFFBEB",
    cards: [
      {
        id: "om-1",
        title: "Long-term health priorities",
        frontText:
          "After menopause, your health priorities shift. Lower estrogen affects your bones, heart, and metabolism. Proactive care now pays off for decades.",
        backTitle: "What to focus on",
        backPoints: [
          "Bone health: DEXA scans, calcium, vitamin D, weight-bearing exercise",
          "Heart health: cholesterol, blood pressure, and cardiovascular fitness become more important",
          "Metabolic health: insulin sensitivity changes — diet and exercise matter more than ever",
          "Pelvic floor: strengthening prevents urinary issues",
          "Mental health: ongoing self-care and social connection",
        ],
        actionStep:
          "Schedule a comprehensive health check if you haven't recently. Ask about bone density screening and cardiovascular risk assessment.",
      },
      {
        id: "om-2",
        title: "Adjusting your treatment",
        frontText:
          "What works at the start of your menopause journey may need adjusting over time. Regular check-ins with your provider help optimize your approach.",
        backTitle: "When to reassess",
        backPoints: [
          "Symptom changes — new symptoms or old ones resolving",
          "Side effects from current treatments",
          "Annual reviews of HRT duration and dosage",
          "Life changes that affect your health priorities",
          "New research or treatment options becoming available",
        ],
        actionStep:
          "Keep a brief monthly note about how you're feeling. Bring it to your next appointment — it's much more useful than trying to remember.",
      },
      {
        id: "om-3",
        title: "Thriving in postmenopause",
        frontText:
          "Many women report feeling a sense of freedom and clarity after menopause. The transition is hard — but what comes after can be genuinely wonderful.",
        backTitle: "What women say gets better",
        backPoints: [
          "No more periods, PMS, or pregnancy concerns",
          "Many symptoms (especially hot flashes) reduce or resolve",
          "Greater emotional stability and self-knowledge",
          "Freedom to prioritize your own health and goals",
          "A community of women who understand what you've been through",
        ],
        actionStep:
          "Connect with other women who are further along in their journey. Their experience and perspective can be incredibly reassuring.",
      },
    ],
  },
];
