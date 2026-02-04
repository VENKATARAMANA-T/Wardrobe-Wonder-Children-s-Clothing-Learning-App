import { useState } from 'react';
import { Home, ShoppingBag, Star } from './components/Icons';
import { BACKGROUND_STARS } from './data';
import HomeView from './components/HomeView';
import TrainingView from './components/TrainingView';
import QuizView from './components/QuizView';
import DressUpView from './components/DressUpView';

const App = () => {
  const [view, setView] = useState('home');

  return (
    <div className="dark">
      <div className="min-h-screen bg-slate-900 font-sans text-slate-100 selection:bg-purple-900 transition-colors duration-500 relative overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0f172a] to-[#1e1b4b]"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-pink-900/20 rounded-full blur-[100px]"></div>
          
          {BACKGROUND_STARS.map((star) => (
            <div 
              key={star.id} 
              className="absolute text-yellow-100/50 animate-pulse"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
              }}
            >
              <Star size={star.size} fill="currentColor" />
            </div>
          ))}
        </div>

        {/* Header */}
        <header className="relative z-50 w-full px-6 py-4 flex justify-between items-center bg-white/10 backdrop-blur-lg sticky top-0 border-b border-white/10 shadow-sm transition-all duration-300">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setView('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight leading-none">
                Wardrobe<span className="text-indigo-400">Wonder</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {view !== 'home' && (
              <button 
                onClick={() => setView('home')}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 hover:border-indigo-500 text-slate-200 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all group"
              >
                <Home size={18} className="text-slate-400 group-hover:text-indigo-400" />
                <span className="hidden sm:inline">Home</span>
              </button>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className={`relative z-10 flex flex-col min-h-[calc(100vh-80px)] ${view === 'home' ? 'w-full' : 'max-w-5xl mx-auto'}`}>
          <main className="flex-grow w-full flex flex-col">
            {view === 'home' && <HomeView onNavigate={setView} />}
            {view === 'training' && <TrainingView />}
            {view === 'quiz' && <QuizView onExit={() => setView('home')} />}
            {view === 'dressup' && <DressUpView />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;