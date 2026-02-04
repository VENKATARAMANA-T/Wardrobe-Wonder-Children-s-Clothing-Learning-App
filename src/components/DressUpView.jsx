import { useState } from 'react';
import { ArrowLeft, ArrowRight } from './Icons';
import { CLOTHING_DATA } from '../data';


const DressUpView = () => {
  const [currentHead, setCurrentHead] = useState(0);
  const [currentTop, setCurrentTop] = useState(0);
  const [currentBottom, setCurrentBottom] = useState(0);
  const [currentFoot, setCurrentFoot] = useState(0);

  // Access data arrays safely
  const headItems = CLOTHING_DATA.head || [];
  const topItems = CLOTHING_DATA.upper || [];
  const bottomItems = CLOTHING_DATA.lower || [];
  const footItems = CLOTHING_DATA.feet || [];

  const cycleItem = (setter, current, length, dir) => {
    if (length === 0) return;
    
    setter((prev) => {
      return (prev + dir + length) % length;
    });

  };

  return (
    <div className="w-full animate-slide-up px-4 md:px-8 pb-8 pt-8 flex flex-col items-center">
      <h2 className="text-3xl font-black text-white mb-8 drop-shadow-md">Mix & Match!</h2>
      
      <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 shadow-2xl flex flex-col items-center gap-6 max-w-md w-full relative">
        {/* HEAD */}
        <div className="flex items-center gap-4 w-full justify-between">
          <button 
            onClick={() => {
              cycleItem(setCurrentHead, currentHead, headItems.length, -1);
         
            }
            } 
            className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white"
          >
            <ArrowLeft size={24}/>
          </button>
          
          <div className="w-24 h-24 bg-orange-100/10 rounded-full flex items-center justify-center border-2 border-orange-200/30 overflow-hidden relative">
            <img 
              src={headItems[currentHead]?.image} 
              alt="Head Item" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = `https://placehold.co/100x100/1e293b/f1f5f9?text=${encodeURIComponent(headItems[currentHead]?.emoji || '🧢')}`
              }} 
            />
          </div>
          
          <button 
            onClick={() => cycleItem(setCurrentHead, currentHead, headItems.length, 1)} 
            className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white"
          >
            <ArrowRight size={24}/>
          </button>
        </div>

        {/* TOP */}
        <div className="flex items-center gap-4 w-full justify-between">
          <button 
            onClick={() => {cycleItem(setCurrentTop, currentTop, topItems.length, -1)
                
            
            } }
            className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white"
          >
            <ArrowLeft size={24}/>
          </button>
          
          <div className="w-32 h-32 bg-blue-100/10 rounded-2xl flex items-center justify-center border-2 border-blue-200/30 overflow-hidden relative">
            <img 
              src={topItems[currentTop]?.image} 
              alt="Top Item" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = `https://placehold.co/128x128/1e293b/f1f5f9?text=${encodeURIComponent(topItems[currentTop]?.emoji || '👕')}`
              }} 
            />
          </div>
          
          <button 
            onClick={() => cycleItem(setCurrentTop, currentTop, topItems.length, 1)} 
            className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white"
          >
            <ArrowRight size={24}/>
          </button>
        </div>

        {/* BOTTOM */}
        <div className="flex items-center gap-4 w-full justify-between">
          <button 
            onClick={() => cycleItem(setCurrentBottom, currentBottom, bottomItems.length, -1)} 
            className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white"
          >
            <ArrowLeft size={24}/>
          </button>
          
          <div className="w-28 h-32 bg-emerald-100/10 rounded-2xl flex items-center justify-center border-2 border-emerald-200/30 overflow-hidden relative">
            <img 
              src={bottomItems[currentBottom]?.image} 
              alt="Bottom Item" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = `https://placehold.co/112x128/1e293b/f1f5f9?text=${encodeURIComponent(bottomItems[currentBottom]?.emoji || '👖')}`
              }} 
            />
          </div>
          
          <button 
            onClick={() => cycleItem(setCurrentBottom, currentBottom, bottomItems.length, 1)} 
            className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white"
          >
            <ArrowRight size={24}/>
          </button>
        </div>

        {/* FEET */}
        <div className="flex items-center gap-4 w-full justify-between">
          <button 
            onClick={() => cycleItem(setCurrentFoot, currentFoot, footItems.length, -1)} 
            className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white"
          >
            <ArrowLeft size={24}/>
          </button>
          
          <div className="w-24 h-20 bg-violet-100/10 rounded-2xl flex items-center justify-center border-2 border-violet-200/30 overflow-hidden relative">
            <img 
              src={footItems[currentFoot]?.image} 
              alt="Foot Item" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = `https://placehold.co/96x80/1e293b/f1f5f9?text=${encodeURIComponent(footItems[currentFoot]?.emoji || '👟')}`
              }} 
            />
          </div>
          
          <button 
            onClick={() => cycleItem(setCurrentFoot, currentFoot, footItems.length, 1)} 
            className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white"
          >
            <ArrowRight size={24}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DressUpView;