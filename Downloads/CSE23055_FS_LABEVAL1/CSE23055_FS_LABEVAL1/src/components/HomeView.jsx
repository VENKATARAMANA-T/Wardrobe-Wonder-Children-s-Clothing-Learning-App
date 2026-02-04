import { Smile, ChevronRight, Cloud, Star, Moon, Heart } from './Icons';
import speak  from '../utils.js';

// Cosmic animations component
const CosmicAnimations = () => {
  
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      {/* Layer 1: Background Drifting Clouds */}
      <div className="absolute inset-0 w-[200%] h-full flex flex-col justify-between animate-drift-slow opacity-10 text-blue-200/50">
        <div className="w-full flex justify-around pt-20">
          <Cloud size={64} />
          <Cloud size={80} className="mt-12" />
          <Cloud size={56} />
        </div>
        <div className="w-full flex justify-around pl-40">
          <Cloud size={48} />
          <Cloud size={64} />
        </div>
        <div className="w-full flex justify-around pb-20 pr-40">
          <Cloud size={72} />
          <Cloud size={56} className="mb-8" />
          <Cloud size={64} />
        </div>
      </div>

      {/* Layer 2: Rising Outlined Icons */}
      <div className="absolute inset-0 w-full h-full z-0">
        {[...Array(50)].map((_, i) => {
          const IconComponent = [Star, Moon, Heart, Cloud][i % 4];
          const colors = ['text-slate-600', 'text-slate-700', 'text-slate-600', 'text-slate-700'];
          return (
            <div 
              key={`rising-icon-${i}`}
              className="absolute bottom-[-100px] animate-rise-fade"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `-${Math.random() * 30}s`,
              }}
            >
              <IconComponent 
                size={12 + Math.random() * 16}
                className={colors[i % 4]} 
                fill="none" 
                strokeWidth={2}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const HomeView = ({ onNavigate }) => {
  return (
    <div className="relative flex flex-col w-full h-full min-h-[calc(100vh-80px)] animate-fade-in overflow-hidden">
      <CosmicAnimations />
      
      <div className="relative z-10 flex-grow flex flex-col items-center justify-start gap-8 pt-16 px-4 md:px-8 w-full max-w-5xl mx-auto">
        <div className="text-center w-full mx-auto px-4">
          <div className="relative inline-flex items-center justify-center mb-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight whitespace-nowrap drop-shadow-lg">
              Welcome to Wardrobe Wonder!
            </h2>
            <div className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-yellow-300 shadow-sm">
              <Smile size={32} className="md:w-9 md:h-9" />
            </div>
          </div>
          <p className="text-lg text-slate-300 font-medium drop-shadow-md">
            Select a mode to get started!
          </p>
        </div>

        {/* Main Grid for Learning & Quiz */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <button 
            onClick={() => {
              speak("Time to Explore Clothes!");
              onNavigate('training');
            }}
            className="group relative bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-600 hover:border-blue-500 overflow-hidden text-left h-56 flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/30 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-900 text-blue-300 rounded-2xl flex items-center justify-center mb-4 text-2xl shadow-sm">
                📚
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Explore Clothes</h3>
              <p className="text-sm text-slate-400 font-medium">Explore clothing names & sounds</p>
            </div>
            <div className="relative z-10 flex items-center text-blue-400 font-bold text-sm mt-4 group-hover:translate-x-2 transition-transform">
              Start Learning <ChevronRight size={16} />
            </div>
          </button>

          <button 
            onClick={() => {
              speak("Time to Play!");
              onNavigate('quiz');
            }}
            className="group relative bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-600 hover:border-purple-500 overflow-hidden text-left h-56 flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/30 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-purple-900 text-purple-300 rounded-2xl flex items-center justify-center mb-4 text-2xl shadow-sm">
                🎮
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Play Quiz</h3>
              <p className="text-sm text-slate-400 font-medium">Find the items and win stars</p>
            </div>
            <div className="relative z-10 flex items-center text-purple-400 font-bold text-sm mt-4 group-hover:translate-x-2 transition-transform">
              Start Game <ChevronRight size={16} />
            </div>
          </button>
        </div>

        {/* Dress Up Activity Card */}
        <div className="w-full max-w-3xl mt-2">
          <button 
            onClick={() => {
              speak("Let's Dress Up!");
              onNavigate('dressup');
            }}
            className="w-full group relative bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-600 hover:border-pink-500 overflow-hidden text-left flex flex-row items-center justify-between hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-900/20 to-transparent opacity-50" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-20 h-20 bg-pink-900 text-pink-300 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-pink-700/50">
                🎨
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Dress-Up Activity</h3>
                <p className="text-sm text-slate-400 font-medium">Mix & match to create outfits!</p>
              </div>
            </div>
            <div className="relative z-10 flex items-center text-pink-400 font-bold text-sm mt-4 group-hover:translate-x-2 transition-transform bg-slate-900/50 px-4 py-2 rounded-full border border-pink-500/30">
              Play Now <ChevronRight size={16} className="ml-2"/>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;