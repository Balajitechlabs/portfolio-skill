import React from 'react';
// import useSound from 'use-sound';

/**
 * Example demonstrating auditory UI feedback.
 * 
 * Dependencies:
 *   npm install use-sound
 * 
 * Setup:
 *   1. Place light 'tick.mp3' (20ms length, simple woodblock/click) in your public folder.
 *   2. Place snappy 'pop.mp3' (50ms length, bubble pop/satisfying click) in public folder.
 */

// Placeholder hooks to show usage structure (simulating useSound API)
export const useAudioFeedback = () => {
  /*
  const [playTick] = useSound('/sounds/tick.mp3', { volume: 0.25 });
  const [playPop] = useSound('/sounds/pop.mp3', { volume: 0.5 });
  */
  
  // Simulated sound play triggers
  const playTick = () => {
    try {
      const audio = new Audio('/sounds/tick.mp3');
      audio.volume = 0.25;
      audio.play().catch(() => {});
    } catch (e) {}
  };

  const playPop = () => {
    try {
      const audio = new Audio('/sounds/pop.mp3');
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } catch (e) {}
  };

  return { playTick, playPop };
};

interface AuditoryButtonProps {
  label: string;
  onClick?: () => void;
}

export const AuditoryButton: React.FC<AuditoryButtonProps> = ({ label, onClick }) => {
  const { playTick, playPop } = useAudioFeedback();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playPop();
    if (onClick) onClick();
  };

  return (
    <button
      onMouseEnter={playTick}
      onClick={handleClick}
      className="px-6 py-2.5 rounded bg-[#151d30] border border-[#252f47] text-white hover:border-[#4d7cff] font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
    >
      {label}
    </button>
  );
};
