export type ResearchItem = {
  title: string;
  status: string;
  summary: string;
  paperUrl?: string;
  codeUrl?: string;
};

export const researchItems: ResearchItem[] = [
  {
    title: 'Probing Negation Understanding in Vision-Language Models With Object Attention',
    status: 'Published in Findings of EMNLP 2026',
    summary:
      "This work investigates how vision-language models handle negation, by comparing how their visual attention shifts when processing positive vs. negated versions of the same sentence and how this compares to human patterns.",
    paperUrl: 'https://aclanthology.org/2026.findings-emnlp.478/',
    codeUrl: 'https://github.com/otmive/negation_attention',
  },
  {
    title: 'Evaluating Compositional Generalisation in VLMs and Diffusion Models',
    status: 'Published at *SEM 2025 (co-located with EMNLP 2025)',
    summary:
      'This work explores whether diffusion models can better handle compositional generalisation than models like CLIP, especially for understanding attributes and spatial relationships in images.',
    paperUrl: 'https://aclanthology.org/2025.starsem-1.9/',
    codeUrl: 'https://github.com/otmive/diffusion_classifier_clip',
  },
  {
    title: 'Semantic Similarity in Radiology Reports via LLMs and NER',
    status: 'Published at AIBIO Workshop, ECAI 2025',
    summary:
      "We explore how large language models can help evaluate junior radiologists' reports by identifying meaningful differences from senior-edited versions through interpretable similarity scores.",
    paperUrl: 'https://doi.org/10.1007/978-3-032-17216-7_10',
  },
  {
    title: 'The Impact of Visual Input on ARC Challenges',
    status: 'PhD Thesis Chapter',
    summary:
      'I investigated how model responses to ARC reasoning questions (grid-based logic puzzles) change when models are given text-only, vision-only and vision-language inputs.',
  },
];
