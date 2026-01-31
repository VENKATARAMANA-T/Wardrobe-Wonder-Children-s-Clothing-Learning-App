import { useState } from 'react';
import { Volume2, XCircle } from './Icons';
import { CATEGORIES, CLOTHING_DATA } from '../data';
import speak from '../utils.js';

const TrainingView = () => {
            const [activeCategory, setActiveCategory] = useState('upper');
            const [selectedItem, setSelectedItem] = useState(null);

            const handleItemClick = (item) => {
                setSelectedItem(item);
                // Call global speak function with both arguments for sequential playback
                playAudio( item.name , item.sentence);
            };

            const playAudio =async (name, sentence=null) => {
              console.log('Speaking:', name,sentence);

              await speak(name);

              if(sentence){ 
                speak(sentence)
              }
              

              }
  return (
    <div className="w-full animate-slide-up px-4 md:px-8 pb-8 pt-8">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              playAudio(cat.name); // Speak category name cleanly
              setSelectedItem(null);
            }}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border-2
              ${activeCategory === cat.id 
                ? `${cat.color} ${cat.text} ${cat.border} shadow-md scale-105` 
                : 'bg-slate-800 text-slate-400 border-transparent hover:border-slate-600 hover:bg-slate-700'}
            `}
          >
            <span className="text-lg">{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {CLOTHING_DATA[activeCategory].map((item) => (
          <div 
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`
              group cursor-pointer bg-slate-800 rounded-2xl p-3 shadow-md hover:shadow-xl transition-all duration-300 border-2
              ${selectedItem?.id === item.id ? 'border-indigo-500 ring-2 ring-indigo-900 scale-105' : 'border-slate-700 hover:border-indigo-800 hover:-translate-y-1'}
            `}
          >
            <div className="aspect-square bg-slate-700/50 rounded-xl flex items-center justify-center mb-3 relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-contain p-2 transform group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span 
                className="text-6xl md:text-7xl drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110"
                style={{ display: 'none' }}
              >
                {item.emoji}
              </span>
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-slate-600/90 p-1.5 rounded-full text-indigo-300 shadow-sm">
                  <Volume2 size={14} />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-base font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-slate-800 w-full max-w-4xl h-[450px] rounded-[2rem] p-6 md:p-8 shadow-2xl relative animate-scale-in border-2 border-slate-600 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 bg-slate-700/80 rounded-full text-slate-300 hover:text-white hover:bg-red-500 transition-colors z-20"
            >
              <XCircle size={28} />
            </button>

            <div className="flex flex-col md:flex-row gap-8 items-stretch h-full">
              <div className="w-full md:w-1/2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border-2 border-slate-700 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span 
                  className="text-9xl animate-bounce-slow filter drop-shadow-2xl"
                  style={{ display: 'none' }}
                >
                  {selectedItem.emoji}
                </span>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
                <div className="w-full border-b border-slate-600 pb-4">
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                    {selectedItem.name}
                  </h2>
                </div>

                <div className="bg-slate-700/40 p-6 rounded-2xl border-l-4 border-indigo-500 w-full backdrop-blur-sm">
                  <p className="text-xl md:text-2xl text-indigo-100 font-medium leading-relaxed italic">
                    {selectedItem.sentence}
                  </p>
                </div>

                <button 
                  onClick={() => {
                    playAudio(selectedItem.name, selectedItem.sentence);
                  }}
                  className="group flex items-center justify-center gap-3 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-indigo-500/25 w-full active:scale-95 mt-auto md:mt-0"
                >
                  <Volume2 size={24} className="group-hover:animate-pulse" />
                  <span>Listen Again</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingView;
