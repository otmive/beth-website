export type EventItem = {
  title: string;
  date: string;
  summary: string;
};

export const eventsItems: EventItem[] = [
  {
    title: 'Foundations and Applications of Trustworthy AI',
    date: 'March 2026',
    summary: 'Presented a poster on negation processing in VLMs and how this compares to human patterns.',
  },
  {
    title: 'Invited Speaker at University College London (UCL)',
    date: 'November 2025',
    summary: 'Presented a talk on my research project: Compositional Generalisation in VLMs and Diffusion Models.',
  },
  {
    title: 'ECAI 2025 in Bologna',
    date: 'October 2025',
    summary: 'Oral presentation on my research project: Semantic Similarity in Radiology Reports via LLMs and NER.',
  },
  {
    title: 'Best Poster at UK AI 2025',
    date: 'June 2025',
    summary: 'Honored to receive the Best Poster Award at the UK AI 2025 Conference, where I presented work on using LLMs to evaluate radiology reports.',
  },
  {
    title: 'CVPR 2024 in Seattle',
    date: 'June 2024',
    summary: 'Attended talks, connected with researchers, and presented a poster on compositional generalisation in VLMs and diffusion models.',
  },
];
