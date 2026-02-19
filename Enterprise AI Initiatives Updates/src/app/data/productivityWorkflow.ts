export interface WorkflowCard {
  id: string;
  title: string;
  description: string;
  forecastId: string;
  tags?: string[];
  decisionNote?: string;
}

export interface WorkflowStage {
  id: string;
  name: string;
  color: string;
  cards: WorkflowCard[];
}

export const productivityWorkflowData: WorkflowStage[] = [
  {
    id: 'tribal-portal',
    name: 'AI Funnel - Tools',
    color: 'bg-green-50',
    cards: [
      {
        id: 'kanvas-test',
        title: 'AI Tool - Kanvas L - Lambda Test',
        description: 'Cloud-based automated testing platform for web applications',
        forecastId: '1215',
      },
    ],
  },
  {
    id: 'agent-driving',
    name: 'AI Funnel Review',
    color: 'bg-blue-50',
    cards: [
      {
        id: 'powerpoint-notepaper',
        title: 'AI Tool - Claude PowerPoint (Anthropic)',
        description: 'AI-powered presentation creation and note-taking assistant',
        forecastId: '1239',
      },
      {
        id: 'growth-legal',
        title: 'AI Tool - Claude Cowork for Legal',
        description: 'Legal document analysis and contract growth optimization tool',
        forecastId: '1240',
      },
      {
        id: 'openai-sora-video',
        title: 'AI Tool - OpenAI Sora - Video Generation',
        description: 'Text-to-video generation for marketing and training materials',
        forecastId: '1170',
      },
    ],
  },
  {
    id: 'pilot-progress',
    name: 'Pilot In Progress',
    color: 'bg-sky-50',
    cards: [
      {
        id: 'google-veo',
        title: 'AI Tool - Google Veo2 - Video Generation',
        description: 'Next-generation AI video creation and editing platform',
        forecastId: '854',
      },
      {
        id: 'visual-creator',
        title: 'AI Tool - Visual creator tool - Napkin',
        description: 'Transform text into visual diagrams and infographics instantly',
        forecastId: '707',
        decisionNote: 'While the tool demonstrated functional value, the commercial model did not align with our cost expectations or scalability requirements',
      },
    ],
  },
  {
    id: 'implementation-progress',
    name: 'Implementation In Progress',
    color: 'bg-purple-50',
    cards: [
      {
        id: 'full-stack-builder',
        title: 'AI Tools - Assisted full stack app builder - Github Spark',
        description: 'AI-assisted full-stack application development platform',
        forecastId: '1152',
      },
    ],
  },
  {
    id: 'benefits-delivered',
    name: 'SOLUTION DELIVERED',
    color: 'bg-emerald-50',
    cards: [
      {
        id: 'adp-cursor',
        title: 'AI Tools - Assisted Development Platform - Cursor',
        description: 'AI-powered code editor for accelerated software development',
        forecastId: '782',
      },
      {
        id: 'figma-make',
        title: 'AI Tool - Figma Make',
        description: 'AI-powered design-to-code platform for rapid prototyping',
        forecastId: '1092',
      },
    ],
  },
  {
    id: 'archived',
    name: 'REJECTED',
    color: 'bg-orange-50',
    cards: [
      {
        id: 'user-journey',
        title: 'AI Persona / User story journey – UserDoc (POC)',
        description: 'User persona creation and journey mapping tool',
        forecastId: '754',
      },
    ],
  },
];