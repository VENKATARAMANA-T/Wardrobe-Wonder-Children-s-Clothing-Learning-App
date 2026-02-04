import { useState, useEffect } from 'react';
import { Volume2, Star, Trophy, CheckCircle2, XCircle, Heart, Smile } from './Icons';
import { ALL_ITEMS } from '../data';
import  speak  from '../utils.js';

// Celebration components
const RewardCelebration = () => {
  const particleCount = 20;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(particleCount)].map((_, i) => {
        const IconComponent = [Star, Heart, Smile, CheckCircle2][i % 4];
        const colorClass = ['text-yellow-400', 'text-pink-400', 'text-green-400', 'text-blue-400'][i % 4];
        const leftPosition = (i * 5) + (Math.random() * 2 - 1);
        
        return (
          <div 
            key={i} 
            className="absolute bottom-[-100px] animate-float-up-gentle"
            style={{
              left: `${leftPosition}%`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 0.5}s`
            }}
          >
            <IconComponent 
              size={48 + Math.random() * 16}
              className={colorClass}
              fill="currentColor"
            />
          </div>
        );
      })}
    </div>
  );
};

const FinalReportBalloons = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-1/3 h-full">
        {[...Array(20)].map((_, i) => {
          const IconComponent = [Star, Heart, Smile, Trophy][i % 4];
          const colorClass = ['text-yellow-400', 'text-pink-400', 'text-green-400', 'text-blue-400'][i % 4];
          
          return (
            <div 
              key={`left-balloon-${i}`} 
              className="absolute animate-float-loop"
              style={{
                left: `${Math.random() * 80}%`,
                bottom: `-20%`, 
                animationDuration: `${8 + Math.random() * 6}s`, 
                animationDelay: `-${Math.random() * 15}s` 
              }}
            >
              <IconComponent 
                size={32 + Math.random() * 24} 
                className={`${colorClass} opacity-80`} 
                fill="currentColor" 
              />
            </div>
          )
        })}
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full">
        {[...Array(20)].map((_, i) => {
          const IconComponent = [Trophy, Smile, Heart, Star][i % 4];
          const colorClass = ['text-purple-400', 'text-orange-400', 'text-cyan-400', 'text-yellow-400'][i % 4];
          
          return (
            <div 
              key={`right-balloon-${i}`} 
              className="absolute animate-float-loop"
              style={{
                right: `${Math.random() * 80}%`,
                bottom: `-20%`,
                animationDuration: `${8 + Math.random() * 6}s`,
                animationDelay: `-${Math.random() * 15}s`
              }}
            >
              <IconComponent 
                size={32 + Math.random() * 24} 
                className={`${colorClass} opacity-80`} 
                fill="currentColor" 
              />
            </div>
          )
        })}
      </div>
    </div>
  );
};
const QuizView = ({ onExit }) => {
            const [currentQuestion, setCurrentQuestion] = useState(0);
            const [score, setScore] = useState(0);
            const [showCelebration, setShowCelebration] = useState(false);
            const [isFinished, setIsFinished] = useState(false);
            const [quizQuestions, setQuizQuestions] = useState([]);
            const [feedback, setFeedback] = useState(null); 
            const [wrongSelection, setWrongSelection] = useState(null); 

            // Function to generate a new set of questions
            const startNewGame = () => {
                const shuffledItems = [...ALL_ITEMS].sort(() => 0.5 - Math.random());
                const selectedTargets = shuffledItems.slice(0, 5);
                
                const questions = selectedTargets.map(target => {
                    const distractors = ALL_ITEMS
                        .filter(i => i.id !== target.id)
                        .sort(() => 0.5 - Math.random())
                        .slice(0, 2);
                    
                    const options = [target, ...distractors].sort(() => 0.5 - Math.random());
                    
                    return { target, options };
                });
                
                setQuizQuestions(questions);
                setScore(0);
                setCurrentQuestion(0);
                setIsFinished(false);
                setShowCelebration(false);
                setFeedback(null);
                setWrongSelection(null);
            };

            // Initial load
            useEffect(() => {
                startNewGame();
            }, []);

            // AUDIO SYNC: Automatically speak when the question changes
            useEffect(() => {
                if (quizQuestions.length > 0 && !isFinished) {
                    const target = quizQuestions[currentQuestion].target;
                    
                    // Small delay to ensure visual transition happens first
                    const timer = setTimeout(() => {
                         if (typeof speak === 'function') {
                            speak(`Find the ${target.name}`);
                         }
                    }, 600);

                    return () => clearTimeout(timer);
                }
            }, [currentQuestion, quizQuestions, isFinished]);

            const handleAnswer = (selectedOption) => {
                if (feedback === 'correct') return;

                const target = quizQuestions[currentQuestion].target;

                if (selectedOption.id === target.id) {
                    // CORRECT ANSWER
                    setFeedback('correct');
                    setScore(s => s + 1);
                    setShowCelebration(true); 
                    setWrongSelection(null);
                    speak("Great job!");

                    setTimeout(() => {
                        if (currentQuestion < quizQuestions.length - 1) {
                            setCurrentQuestion(c => c + 1);
                            setFeedback(null);
                            setShowCelebration(false);
                            setWrongSelection(null);
                            // Next question audio triggered by useEffect
                        } else {
                            setIsFinished(true);
                            speak("You finished! Amazing work!");
                        }
                    }, 2000);
                } else {
                    // WRONG ANSWER
                    setWrongSelection(selectedOption.id);
                    speak("Try again.");
                    setTimeout(() => setWrongSelection(null), 500);
                }
            };

            if (quizQuestions.length === 0) return <div className="p-10 text-center font-bold text-slate-400">Loading...</div>;

            // VICTORY SCREEN
            if (isFinished) {
                return (
                    <div className="flex flex-col items-center justify-start min-h-[70vh] animate-fade-in px-4 pt-20 relative">
                        <FinalReportBalloons />
                        <div className="bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl border border-slate-700 text-center max-w-md w-full relative overflow-hidden z-10">
                            <div className="mb-6 inline-flex p-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg text-white">
                                <Trophy size={56} fill="currentColor" />
                            </div>
                            <h2 className="text-4xl font-black text-white mb-2">Quiz Complete!</h2>
                            <p className="text-slate-400 mb-8 font-medium">
                                You collected <span className="text-yellow-400 font-bold">{score}</span> stars!
                            </p>
                            <div className="flex justify-center gap-2 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={36} 
                                        className="text-yellow-400 fill-yellow-400 animate-bounce" 
                                        style={{ animationDelay: `${i * 100}ms` }} 
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col gap-3">
                                <button 
                                    onClick={startNewGame}
                                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-md"
                                >
                                    Play Again
                                </button>
                                <button 
                                    onClick={onExit}
                                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 rounded-xl font-bold transition-all"
                                >
                                    Back Home
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }

            const { target, options } = quizQuestions[currentQuestion];

            return (
                <div className="relative flex flex-col w-full h-full animate-fade-in px-4 md:px-8 pt-8 max-w-3xl mx-auto">
                    {showCelebration && <RewardCelebration />}
                    <div className="flex flex-col gap-6 w-full">
                        <div className="bg-slate-800 rounded-2xl p-4 flex justify-between items-center shadow-lg border border-slate-700">
                            <div className="flex gap-2 items-center">
                                {quizQuestions.map((_, i) => (
                                    <div 
                                        key={i}
                                        className={`h-3 w-8 rounded-full transition-all duration-300 ${i < currentQuestion ? 'bg-indigo-500' : i === currentQuestion ? 'bg-white' : 'bg-slate-700'}`}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center gap-2 text-yellow-400 font-bold text-lg bg-slate-900 px-4 py-2 rounded-xl border border-slate-700">
                                <Star size={20} fill="currentColor" /> 
                                <span>{score}</span>
                            </div>
                        </div>

                        <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-center shadow-lg border border-slate-700 flex flex-row justify-center items-center gap-4">
                            <div className="bg-slate-900 p-2 rounded-full border border-slate-700 shrink-0">
                                <button 
                                    onClick={() => speak(`Find the ${target.name}`)}
                                    className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 p-2 rounded-full transition-all"
                                >
                                    <Volume2 size={22} />
                                </button>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-white text-left">
                                Find the <span className="text-indigo-400 underline decoration-2 underline-offset-4">{target.name}</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {options.map((option) => {
                                const isCorrect = feedback === 'correct' && option.id === target.id;
                                const isWrong = wrongSelection === option.id;
                                const isHidden = feedback === 'correct' && option.id !== target.id;

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAnswer(option)}
                                        disabled={feedback === 'correct'}
                                        className={`
                                            group relative h-40 rounded-2xl flex items-center justify-center transition-all duration-300 transform
                                            border-b-4 active:border-b-0 active:translate-y-1 shadow-lg overflow-hidden
                                            ${isHidden ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100'}
                                            ${isCorrect 
                                                ? 'bg-gradient-to-br from-emerald-400 to-green-600 border-emerald-300 text-white shadow-[0_0_30px_rgba(52,211,153,0.8)] scale-110 z-20'
                                                : isWrong
                                                    ? 'bg-gradient-to-br from-red-500 to-rose-600 border-red-300 text-white animate-shake shadow-lg shadow-red-500/50'
                                                    : 'bg-slate-800 hover:bg-slate-700 border-slate-950 hover:border-slate-900'}
                                        `}
                                    >
                                        {isCorrect && (
                                            <div className="absolute top-2 right-2 bg-white text-green-600 p-1 rounded-full shadow-sm animate-bounce z-10">
                                                <CheckCircle2 size={20} />
                                            </div>
                                        )}
                                        {isWrong && (
                                            <div className="absolute top-2 right-2 bg-white text-red-600 p-1 rounded-full shadow-sm z-10">
                                                <XCircle size={20} />
                                            </div>
                                        )}
                                        {option.image ? (
                                            <img 
                                                src={option.image} 
                                                alt={option.name} 
                                                className={`w-full h-full object-contain p-4 transition-transform duration-300 ${isCorrect ? 'scale-110 rotate-6' : 'group-hover:scale-110'}`}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'block';
                                                }}
                                            />
                                        ) : null}
                                        <div 
                                            className={`text-7xl drop-shadow-md transition-transform duration-300 ${isCorrect ? 'scale-125 rotate-6' : 'group-hover:scale-110'}`}
                                            style={{ display: option.image ? 'none' : 'block' }}
                                        >
                                            {option.emoji}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        };

export default QuizView;