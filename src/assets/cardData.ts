import { CardColor } from '../components/Card';

/**
 * 
 * export type CardColor =
  | 'slate'
  | 'amber'
  | 'emerald'
  | 'crimson'
  | 'midnight'
  | 'golden'
  | 'ocean'
  | 'sunset'
  | 'rose'
  | 'mint'
  | 'sapphire'
  | 'amethyst'
  | 'silver'
  | 'ruby';
 */

type CardData = {
  id: string;
  title: string;
  description: string;
  color: CardColor;
};

const cardData: CardData[] = [
  {
    id: '1',
    title: 'Wow. Simple.',
    description:
      'Simple and plain. Check out the next generation of wearables.',
    color: 'slate',
  },
  {
    id: '2',
    title: 'Like a Dream',
    description: 'Dreamy, comfortable footwear.',
    color: 'amber',
  },
  {
    id: '3',
    title: 'Emerald City',
    description: 'The future is green. Check out our latest organic cosmetics.',
    color: 'emerald',
  },
  {
    id: '4',
    title: 'Ice a Cream',
    description: 'Got ice? We do. Check out our latest ice cream flavors.',
    color: 'sapphire',
  },
  {
    id: '5',
    title: 'Crimson Skies',
    description: 'Red is the new black. Check out our latest wearables.',
    color: 'crimson',
  },
  {
    id: '6',
    title: 'Midnight Blues',
    description:
      'Experience the magic of the night with our latest collection.',
    color: 'midnight',
  },
  {
    id: '7',
    title: 'Golden Glow',
    description: 'Radiate with our luxurious golden accessories.',
    color: 'golden',
  },
  {
    id: '8',
    title: 'Ocean Breeze',
    description: 'Feel refreshed with our ocean-inspired products.',
    color: 'ocean',
  },
  {
    id: '9',
    title: 'Sunset Serenade',
    description: 'Embrace the beauty of the sunset with our elegant designs.',
    color: 'sunset',
  },
  {
    id: '10',
    title: 'Rose Petals',
    description: 'Indulge in the romance of roses with our fragrant products.',
    color: 'rose',
  },
  {
    id: '11',
    title: 'Minty Fresh',
    description: 'Stay fresh and cool with our mint-flavored products.',
    color: 'mint',
  },
  {
    id: '12',
    title: 'Amethyst Dreams',
    description: 'Experience the magic of amethyst with our latest collection.',
    color: 'amethyst',
  },
  {
    id: '13',
    title: 'Silver Lining',
    description: 'Find the silver lining with our elegant designs.',
    color: 'silver',
  },
  {
    id: '14',
    title: 'Ruby Red',
    description: 'Indulge in the romance of rubies with our fragrant products.',
    color: 'ruby',
  },
  {
    id: '15',
    title: 'Sapphire Blue',
    description: 'Stay fresh and cool with our mint-flavored products.',
    color: 'sapphire',
  },
  {
    id: '16',
    title: 'Amber Glow',
    description: 'Experience the magic of amethyst with our latest collection.',
    color: 'amber',
  },
  {
    id: '17',
    title: 'Emerald Green',
    description: 'Find the silver lining with our elegant designs.',
    color: 'emerald',
  },
  {
    id: '18',
    title: 'Crimson Red',
    description: 'Indulge in the romance of rubies with our fragrant products.',
    color: 'crimson',
  },
  {
    id: '19',
    title: 'Midnight Black',
    description: 'Stay fresh and cool with our mint-flavored products.',
    color: 'midnight',
  },
  {
    id: '20',
    title: 'Golden Sun',
    description: 'Experience the magic of amethyst with our latest collection.',
    color: 'golden',
  },
  {
    id: '21',
    title: 'Ocean Blue',
    description: 'Find the silver lining with our elegant designs.',
    color: 'ocean',
  },
];

function randomCard(): CardData {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex];
}

function generateRandomCard(): CardData {
  return {
    ...randomCard(),
    description: randomCard().description,
    color: randomCard().color,
    id: `${cardData.length + Math.floor(Math.random() * 1000000)}`,
  };
}

// Simulate fetching more data
export function fetchMore(): Promise<CardData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 10 }, generateRandomCard));
    }, Math.random() * 500);
  });
}

export default cardData;
