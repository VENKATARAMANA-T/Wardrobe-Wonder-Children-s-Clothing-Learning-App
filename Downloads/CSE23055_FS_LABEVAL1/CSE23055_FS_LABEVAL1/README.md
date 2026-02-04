# Wardrobe Wonder - Kids Clothing Learning App

A fun and interactive React application designed to help children learn about different types of clothing through exploration, quizzes, and dress-up activities.

## Features

- **Explore Clothes**: Browse different clothing categories with audio pronunciation
- **Play Quiz**: Interactive quiz game to test clothing knowledge
- **Dress-Up Activity**: Mix and match clothing items to create outfits
- **Text-to-Speech**: Audio support for all clothing names and descriptions
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
wardrobe-app/
├── index.html           # Entry HTML
├── package.json
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── public/              # Static assets
└── src/
    ├── Assets/          # PNG images (add your images here)
    ├── index.css        # Global CSS with animations
    ├── main.jsx         # Entry point
    ├── App.jsx          # Main App Component
    ├── data.js          # Clothing data and categories
    ├── utils.js         # Audio utility functions
    └── components/
        ├── Icons.jsx        # SVG icon components
        ├── HomeView.jsx     # Home screen component
        ├── TrainingView.jsx # Learning mode component
        ├── QuizView.jsx     # Quiz game component
        └── DressUpView.jsx  # Dress-up activity component
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Images**
   Place all your PNG images in the `src/Assets/` folder. The expected image files are:
   - T Shirt.png, Shirt.png, Frok.png, Sweater.png, Jacket.png, Hoodie.png, coat.png
   - pant.png, Jeans.png, Shorts.png, Leggins.png, Track Pants.png
   - saree.png, Kurta.png, raincoat.png, Night Dress.png
   - Cap.png, hat.png, Woolen Cap.png, HairBand.png
   - Shoes.png, Sandals.png, Slippers.png, Boots.png

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Web Speech API** - Text-to-speech functionality

## Browser Compatibility

- Modern browsers with Web Speech API support
- Chrome, Firefox, Safari, Edge (latest versions)

## Development Notes

- Images are loaded from `/src/Assets/` directory
- Fallback emojis are displayed if images fail to load
- Audio functionality requires user interaction to work (browser security)
- All animations are CSS-based for smooth performance