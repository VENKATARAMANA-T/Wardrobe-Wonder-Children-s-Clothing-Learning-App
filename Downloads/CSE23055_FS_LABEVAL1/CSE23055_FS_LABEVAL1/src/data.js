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
    { id: 101, name: 'T-shirt', image: 'src/Assets/T Shirt.png', emoji: '👕', sentence: 'A T-shirt is soft and comfy.' },
    { id: 102, name: 'Shirt', image: 'src/Assets/Shirt.png', emoji: '👔', sentence: 'We wear a shirt for special days.' },
    { id: 103, name: 'Frock', image: 'src/Assets/Frok.png', emoji: '👗', sentence: 'A pretty frock for a sunny day.' },
    { id: 105, name: 'Sweater', image: 'src/Assets/Sweater.png', emoji: '🧶', sentence: 'A sweater keeps us warm.' },
    { id: 106, name: 'Jacket', image: 'src/Assets/Jacket.png', emoji: '🧥', sentence: 'Zip up your jacket outside!' },
    { id: 107, name: 'Hoodie', image: 'src/Assets/Hoodie.png', emoji: '🧖', sentence: 'A hoodie has a hat attached.' },
    { id: 109, name: 'Coat', image: 'src/Assets/coat.png', emoji: '🧥', sentence: 'A coat is for very cold days.' },
  ],
  lower: [
    { id: 201, name: 'Pants', image: 'src/Assets/pant.png', emoji: '👖', sentence: 'Pants cover your legs.' },
    { id: 202, name: 'Jeans', image: 'src/Assets/Jeans.png', emoji: '👖', sentence: 'Jeans are made of blue denim.' },
    { id: 203, name: 'Shorts', image: 'src/Assets/Shorts.png', emoji: '🩳', sentence: 'We wear shorts when it is hot.' },
    { id: 205, name: 'Leggings', image: 'src/Assets/Leggins.png', emoji: '🩰', sentence: 'Leggings are stretchy and soft.' },
    { id: 206, name: 'Track pants', image: 'src/Assets/Track Pants.png', emoji: '🏃', sentence: 'Track pants are good for running.' },
  ],
  onepiece: [
    { id: 301, name: 'Saree', image: 'src/Assets/saree.png', emoji: '🥻', sentence: 'A saree is beautiful and elegant.' },
    { id: 104, name: 'Kurta', image: 'src/Assets/Kurta.png', emoji: '👘', sentence: 'A kurta is long and comfortable.' },
    { id: 108, name: 'Raincoat', image: 'src/Assets/raincoat.png', emoji: '☔', sentence: 'We wear a raincoat when it rains.' },
    { id: 302, name: 'Night Dress', image: 'src/Assets/Night Dress.png', emoji: '🌙', sentence: 'We wear a night dress to sleep.' },
  ],
  head: [
    { id: 401, name: 'Cap', image: 'src/Assets/Cap.png', emoji: '🧢', sentence: 'A cap keeps sun out of your eyes.' },
    { id: 402, name: 'Hat', image: 'src/Assets/hat.png', emoji: '🤠', sentence: 'A hat covers your whole head.' },
    { id: 403, name: 'Woolen Cap', image: 'src/Assets/Woolen Cap.png', emoji: '❄️', sentence: 'A woolen cap keeps ears warm.' },
    { id: 404, name: 'Hairband', image: 'src/Assets/HairBand.png', emoji: '🎀', sentence: 'A hairband keeps hair neat.' },
  ],
  feet: [
    { id: 501, name: 'Shoes', image: 'src/Assets/Shoes.png', emoji: '👟', sentence: 'Tie your shoes before you run.' },
    { id: 502, name: 'Sandals', image: 'src/Assets/Sandals.png', emoji: '👡', sentence: 'Sandals let your toes wiggle.' },
    { id: 503, name: 'Slippers', image: 'src/Assets/Slippers.png', emoji: '🏠', sentence: 'We wear slippers inside the house.' },
    { id: 504, name: 'Boots', image: 'src/Assets/Boots.png', emoji: '👢', sentence: 'Boots are strong and tough.' },
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