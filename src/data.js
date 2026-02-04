import Boots from './Assets/Boots.png';
import Cap from './Assets/Cap.png';
import Frok from './Assets/Frok.png';
import HairBand from './Assets/HairBand.png';
import Hat from './Assets/hat.png';
import Hoodie from './Assets/Hoodie.png';
import Jacket from './Assets/Jacket.png';
import Jeans from './Assets/Jeans.png';
import Kurta from './Assets/Kurta.png';
import Leggins from './Assets/Leggins.png';
import NightDress from './Assets/Night Dress.png';
import Pant from './Assets/pant.png';
import Raincoat from './Assets/raincoat.png';
import Sandals from './Assets/Sandals.png';
import Shirt from './Assets/Shirt.png';
import Shoes from './Assets/Shoes.png';
import Slippers from './Assets/Slippers.png';
import Saree from './Assets/saree.png';
import Sweater from './Assets/Sweater.png';
import TShirt from './Assets/T Shirt.png';  
import WoolenCap from './Assets/Woolen Cap.png';
import coat from './Assets/coat.png';
import Shorts from './Assets/Shorts.png'; 
import TrackPants from './Assets/Track Pants.png';

// Categories configuration
export const CATEGORIES = [
  { 
    id: 'upper', 
    name: 'Tops', 
    color: 'bg-blue-100 dark:bg-blue-900/40', 
    text: 'text-blue-700 dark:text-blue-200', 
    border: 'border-blue-200 dark:border-blue-700', 
    icon: '👕' 
  },
  { 
    id: 'lower', 
    name: 'Bottoms', 
    color: 'bg-emerald-100 dark:bg-emerald-900/40', 
    text: 'text-emerald-700 dark:text-emerald-200', 
    border: 'border-emerald-200 dark:border-emerald-700', 
    icon: '👖' 
  },
  { 
    id: 'onepiece', 
    name: 'Full Body', 
    color: 'bg-pink-100 dark:bg-pink-900/40', 
    text: 'text-pink-700 dark:text-pink-200', 
    border: 'border-pink-200 dark:border-pink-700', 
    icon: '👗' 
  },
  { 
    id: 'head', 
    name: 'Headwear', 
    color: 'bg-orange-100 dark:bg-orange-900/40', 
    text: 'text-orange-700 dark:text-orange-200', 
    border: 'border-orange-200 dark:border-orange-700', 
    icon: '🧢' 
  },
  { 
    id: 'feet', 
    name: 'Footwear', 
    color: 'bg-violet-100 dark:bg-violet-900/40', 
    text: 'text-violet-700 dark:text-violet-200', 
    border: 'border-violet-200 dark:border-violet-700', 
    icon: '👟' 
  },
];

// Clothing data organized by category
export const CLOTHING_DATA = {
  upper: [
    { id: 101, name: 'T-shirt', image: TShirt, emoji: '👕', sentence: 'A T-shirt is soft and comfy.' },
    { id: 102, name: 'Shirt', image: Shirt, emoji: '👔', sentence: 'We wear a shirt for special days.' },
    { id: 103, name: 'Frock', image: Frok, emoji: '👗', sentence: 'A pretty frock for a sunny day.' },
    { id: 105, name: 'Sweater', image: Sweater, emoji: '🧶', sentence: 'A sweater keeps us warm.' },
    { id: 106, name: 'Jacket', image: Jacket, emoji: '🧥', sentence: 'Zip up your jacket outside!' },
    { id: 107, name: 'Hoodie', image: Hoodie, emoji: '🧖', sentence: 'A hoodie has a hat attached.' },
    { id: 109, name: 'Coat', image: coat, emoji: '🧥', sentence: 'A coat is for very cold days.' },
  ],
  lower: [
    { id: 201, name: 'Pants', image: Pant, emoji: '👖', sentence: 'Pants cover your legs.' },
    { id: 202, name: 'Jeans', image: Jeans, emoji: '👖', sentence: 'Jeans are made of blue denim.' },
    { id: 203, name: 'Shorts', image: Shorts, emoji: '🩳', sentence: 'We wear shorts when it is hot.' },
    { id: 205, name: 'Leggings', image: Leggins, emoji: '🩰', sentence: 'Leggings are stretchy and soft.' },
    { id: 206, name: 'Track pants', image: TrackPants, emoji: '🏃', sentence: 'Track pants are good for running.' },
  ],
  onepiece: [
    { id: 301, name: 'Saree', image: Saree, emoji: '🥻', sentence: 'A saree is beautiful and elegant.' },
    { id: 104, name: 'Kurta', image: Kurta, emoji: '👘', sentence: 'A kurta is long and comfortable.' },
    { id: 108, name: 'Raincoat', image: Raincoat, emoji: '☔', sentence: 'We wear a raincoat when it rains.' },
    { id: 302, name: 'Night Dress', image: NightDress, emoji: '🌙', sentence: 'We wear a night dress to sleep.' },
  ],
  head: [
    { id: 401, name: 'Cap', image: Cap, emoji: '🧢', sentence: 'A cap keeps sun out of your eyes.' },
    { id: 402, name: 'Hat', image: Hat, emoji: '🤠', sentence: 'A hat covers your whole head.' },
    { id: 403, name: 'Woolen Cap', image: WoolenCap, emoji: '❄️', sentence: 'A woolen cap keeps ears warm.' },
    { id: 404, name: 'Hairband', image: HairBand, emoji: '🎀', sentence: 'A hairband keeps hair neat.' },
  ],
  feet: [
    { id: 501, name: 'Shoes', image: Shoes, emoji: '👟', sentence: 'Tie your shoes before you run.' },
    { id: 502, name: 'Sandals', image: Sandals, emoji: '👡', sentence: 'Sandals let your toes wiggle.' },
    { id: 503, name: 'Slippers', image: Slippers, emoji: '🏠', sentence: 'We wear slippers inside the house.' },
    { id: 504, name: 'Boots', image:Boots, emoji: '👢', sentence: 'Boots are strong and tough.' },
  ]
};

// Flattened array of all items for quiz functionality
export const ALL_ITEMS = Object.values(CLOTHING_DATA).flat();

// Background stars configuration
export const BACKGROUND_STARS = [...Array(80)].map((_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
  size: 8 + Math.random() * 8
}));