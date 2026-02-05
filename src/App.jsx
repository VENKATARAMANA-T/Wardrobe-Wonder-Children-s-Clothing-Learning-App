import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, Star } from './components/Icons';
import { BACKGROUND_STARS } from './data';
import HomeView from './components/HomeView';
import TrainingView from './components/TrainingView';
import QuizView from './components/QuizView';
import DressUpView from './components/DressUpView';
import SensoryProfileForm from './components/SensoryProfileForm';
import ClothesLearnedForm from './components/ClothesLearnedForm';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [savedProfile, setSavedProfile] = useState(null);

  useEffect(() => {
    if (location.pathname === '/sensory') {
      const stored = localStorage.getItem('sensoryProfile');
      if (stored) {
        try {
          setSavedProfile(JSON.parse(stored));
        } catch {
          setSavedProfile(null);
        }
      } else {
        setSavedProfile(null);
      }
    }
  }, [location.pathname]);

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
            onClick={() => navigate('/')}
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
            {location.pathname !== '/' && location.pathname !== '/home' && (
              <Link
                to="/home"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 hover:border-indigo-500 text-slate-200 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all group"
              >
                <Home size={18} className="text-slate-400 group-hover:text-indigo-400" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className={`relative z-10 flex flex-col min-h-[calc(100vh-80px)] ${(location.pathname === '/' || location.pathname === '/home') ? 'w-full' : 'max-w-5xl mx-auto'}`}>
          <main className="flex-grow w-full flex flex-col">
            <Routes>
              <Route
                path="/"
                element={(
                  <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center gap-6">
                    <div className="bg-slate-800/80 border border-slate-700 rounded-3xl shadow-2xl px-8 py-10 w-full max-w-xl">
                      <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                        Welcome to Wardrobe Wonder
                      </h2>
                      <p className="text-slate-300 font-medium mb-6">
                        Learn clothes, play games, and explore fun activities.
                      </p>
                      <button
                        onClick={() => navigate('/home')}
                        className="mx-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-extrabold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                )}
              />
              <Route path="/home" element={<HomeView />} />
              <Route path="/training" element={<TrainingView />} />
              <Route path="/quiz" element={<QuizView onExit={() => navigate('/home')} />} />
              <Route path="/dressup" element={<DressUpView />} />
              <Route
                path="/sensory"
                element={(
                  <section className="w-full py-8">
                    <SensoryProfileForm
                      title="ASD Clothing Comfort Profile"
                      initialValues={savedProfile}
                      onSubmit={(data) => {
                        setSavedProfile(data);
                        navigate('/home');
                      }}
                    />
                  </section>
                )}
              />
              <Route
                path="/learned"
                element={(
                  <section className="w-full py-8">
                    <ClothesLearnedForm
                      onBack={() => navigate('/home')}
                      onSubmit={() => {}}
                    />
                  </section>
                )}
              />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;