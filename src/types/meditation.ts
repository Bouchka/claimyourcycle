export interface ContentBlock {
  type: 'text' | 'quote' | 'heading' | 'list';
  content?: string; // Optional to support list blocks
  items?: string[]; // Used for list blocks
}

export interface Meditation {
  id: string;
  title: string;
  chapter: string;
  icon: string;
  audioUrl: string;
  image: string;
  content: ContentBlock[]; // List of content blocks
  duration: string;
}

export interface Chapter {
  id: string;
  title: string;
  icon: string;
  color: string;
  meditations: Meditation[];
}
