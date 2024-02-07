/* 
{
    title: 'Wow. Simple.',
    description:
      'Simple and plain. Check out the next generation of wearables.',
    color: 'slate',
  },
  {
    title: 'Like a Dream',
    description: 'Dreamy, comfortable footwear.',
    color: 'amber',
  },
  {
    title: 'Emerald City',
    description: 'The future is green. Check out our latest organic cosmetics.',
    color: 'emerald',
  },
  {
    title: 'Crimson Skies',
    description: 'Red is the new black. Check out our latest wearables.',
    color: 'crimson',
  },
{
    title: 'Midnight Blues',
    description: 'Experience the magic of the night with our latest collection.',
    color: 'midnight',
  },
  {
    title: 'Golden Glow',
    description: 'Radiate with our luxurious golden accessories.',
    color: 'golden',
  },
  {
    title: 'Ocean Breeze',
    description: 'Feel refreshed with our ocean-inspired products.',
    color: 'ocean',
  },
  {
    title: 'Sunset Serenade',
    description: 'Embrace the beauty of the sunset with our elegant designs.',
    color: 'sunset',
  },
  {
    title: 'Rose Petals',
    description: 'Indulge in the romance of roses with our fragrant products.',
    color: 'rose',
  },
  {
    title: 'Minty Fresh',
    description: 'Experience the coolness of mint with our refreshing products.',
    color: 'mint',
  },
  {
    title: 'Sapphire Dreams',
    description: 'Dive into a world of dreams with our sapphire-inspired collection.',
    color: 'sapphire',
  },
  {
    title: 'Amethyst Aura',
    description: 'Channel your inner energy with our amethyst-infused products.',
    color: 'amethyst',
  },
  {
    title: 'Silver Lining',
    description: 'Find the silver lining with our elegant silver accessories.',
    color: 'silver',
  },
  {
    title: 'Ruby Red',
    description: 'Make a bold statement with our vibrant ruby-colored products.',
    color: 'ruby',
  },

*/

export type CardColor =
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

const cardColors: Record<
  CardColor,
  { background: string; primary: string; secondary: string }
> = {
  slate: {
    background: 'bg-slate-700',
    primary: 'text-white',
    secondary: 'text-slate-100',
  },
  amber: {
    background: 'bg-amber-600',
    primary: 'text-white',
    secondary: 'text-amber-100',
  },
  emerald: {
    background: 'bg-emerald-600',
    primary: 'text-white',
    secondary: 'text-emerald-100',
  },
  crimson: {
    background: 'bg-rose-900',
    primary: 'text-white',
    secondary: 'text-rose-100',
  },
  midnight: {
    background: 'bg-slate-900',
    primary: 'text-white',
    secondary: 'text-slate-100',
  },
  golden: {
    background: 'bg-orange-200',
    primary: 'text-yellow-500',
    secondary: 'text-yellow-700',
  },
  ocean: {
    background: 'bg-sky-600',
    primary: 'text-white',
    secondary: 'text-sky-100',
  },
  sunset: {
    background: 'bg-yellow-800',
    primary: 'text-white',
    secondary: 'text-yellow-100',
  },
  rose: {
    background: 'bg-rose-600',
    primary: 'text-white',
    secondary: 'text-rose-100',
  },
  mint: {
    background: 'bg-cyan-600',
    primary: 'text-white',
    secondary: 'text-cyan-100',
  },
  sapphire: {
    background: 'bg-indigo-700',
    primary: 'text-white',
    secondary: 'text-indigo-100',
  },
  amethyst: {
    background: 'bg-orange-600',
    primary: 'text-white',
    secondary: 'text-orange-100',
  },
  silver: {
    background: 'bg-stone-600',
    primary: 'text-white',
    secondary: 'text-stone-100',
  },
  ruby: {
    background: 'bg-red-600',
    primary: 'text-white',
    secondary: 'text-red-100',
  },
};

function Card({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: CardColor;
}) {
  const selectedColor = cardColors[color];

  return (
    <div
      className={`${selectedColor.background} flex grow items-center justify-center p-10 shadow-inner`}>
      <div>
        <h1 className={`${selectedColor.primary} text-4xl font-extrabold`}>
          {title}
        </h1>
        <p className={`${selectedColor.secondary}`}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
