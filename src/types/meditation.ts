export interface ContentBlock {
  type: 'text' | 'quote' | 'heading' | 'list';
  content: string;
  items?: string[]; // Add this to handle list items
}

export interface Meditation {
  id: string;
  title: string;
  chapter: string;
  icon: string;
  audioUrl: string;
  image: string;
  content: ContentBlock[]; // Align this
  duration: string;
}

export interface Chapter {
  id: string;
  title: string;
  icon: string;
  color: string;
  meditations: Meditation[];
}
