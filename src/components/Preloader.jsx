import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-800 ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
      style={{ backgroundColor: '#0A0A0F' }}
    >
      {/* Hex grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0,212,255,0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(178,75,243,0.03) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)'
      }} />

      {/* Logo / Initials */}
      <div className="relative mb-12">
        <div
          className="font-orbitron text-6xl md:text-8xl font-bold tracking-[0.3em] select-none"
          style={{
            color: '#00D4FF',
            textShadow: '0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)',
          }}
        >
          SRN
        </div>
        <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
      </div>

      {/* Progress bar */}
      <div className="w-64 md:w-80 mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
            Loading systems
          </span>
          <span className="font-mono text-xs text-neon-blue">
            {Math.min(100, Math.floor(progress))}%
          </span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${Math.min(100, progress)}%`,
              background: 'linear-gradient(90deg, #39FF14, #00D4FF)',
              boxShadow: '0 0 10px rgba(57,255,20,0.5)',
            }}
          />
        </div>
      </div>

      {/* Enter button */}
      <button
        onClick={handleEnter}
        disabled={!isReady}
        className={`btn-neon font-orbitron text-sm tracking-[0.25em] transition-all duration-500 ${isReady
          ? 'opacity-100 translate-y-0 cursor-pointer'
          : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        <span className="relative z-10">[ PRESS START ]</span>
      </button>

      {/* Decorative corner brackets */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-neon-blue/30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-neon-blue/30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-neon-blue/30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-neon-blue/30" />
    </div>
  );
};

export default Preloader;
