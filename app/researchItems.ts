export type ResearchItem = {
  title: string;
  status: string;
  summary: string;
};

export const researchItems: ResearchItem[] = [
  {
    title: 'The Impact of Visual Input on ARC Challenges',
    status: 'In Progress',
    summary:
      "I'm interested in how model responses to ARC reasoning questions (grid-based logic puzzles) change when models are given text-only, vision-only and vision-language inputs.",
  },
  {
    title: 'Probing Negation Understanding in Vision-Language Models With Object Attention',
    status: 'Submitted to ACL Rolling Review',
    summary:
      "I'm investigating how vision-language models like LLaVA handle negation, by comparing how their visual attention shifts when processing positive vs. negated versions of the same sentence and how this compares to human patterns.",
  },
  {
    title: 'Semantic Similarity in Radiology Reports via LLMs and NER',
    status: 'Paper Accepted at AI Bio Workshop at ECAI 2025',
    summary:
      "We explore how large language models can help evaluate junior radiologists' reports by identifying meaningful differences from senior-edited versions through interpretable similarity scores.",
  },
  {
    title: 'Evaluating Compositional Generalisation in VLMs and Diffusion Models',
    status: 'Paper accepted at *SEM (co-located with EMNLP 2025)',
    summary:
      'This work explores whether diffusion models can better handle compositional generalisation than models like CLIP, especially for understanding attributes and spatial relationships in images.',
  },
];
