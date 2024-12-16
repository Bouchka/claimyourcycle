import { Chapter } from '../types/meditation';

export const chapters: Chapter[] = [
  {
    id: 'warrior',
    title: 'THE WARRIOR',
    icon: '✧',
    color: '#E6F3F0',
    meditations: [
      {
        id: 'ground-in-lightness',
        title: 'Ground in Lightness',
        chapter: 'warrior',
        icon: '⬤',
        audioUrl: '/audio/warrior/ground-in-lightness.mp3',
        image: '/images/meditation-1.jpg',
        content: [
          {
            type: 'text',
            content:
              'Begin your journey by connecting with your inner warrior through grounding practices that bring lightness to your being.',
          },
          {
            type: 'quote',
            content:
              "A warrior's strength comes not from chaos, but from finding peace within.",
          },
        ],
        duration: '10:00',
      },
      {
        id: 'state-of-flow',
        title: 'State of Flow',
        chapter: 'warrior',
        icon: '◉',
        audioUrl: '/audio/warrior/state-of-flow.mp3',
        image: '/images/meditation-2.jpg',
        content: [
          {
            type: 'text',
            content: 'Enter a state of flow and embrace your warrior spirit.',
          },
        ],
        duration: '15:00',
      },
      // Add remaining warrior meditations...
    ],
  },
  {
    id: 'mother',
    title: 'THE MOTHER',
    icon: '♥',
    color: '#FFE6E6',
    meditations: [
      {
        id: 'nurturing-presence',
        title: 'Nurturing Presence',
        chapter: 'mother',
        icon: '❤',
        audioUrl: '/audio/mother/nurturing-presence.mp3',
        image: '/images/meditation-8.jpg',
        content: [
          {
            type: 'text',
            content:
              'Embrace your nurturing energy and learn to care for yourself as deeply as you care for others.',
          },
        ],
        duration: '12:00',
      },
      // Add remaining mother meditations...
    ],
  },
  // Add magician and oracle chapters...
];
