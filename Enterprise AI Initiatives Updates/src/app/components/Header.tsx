import { Settings, User, Clock } from 'lucide-react';
import eatonLogo from 'figma:asset/014f678ae740c01450911e6a1037b66b27048dc3.png';
import { useState, useEffect } from 'react';

export function Header() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const timeString = now.toLocaleTimeString('en-US', options);
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex h-16 items-center justify-between border-b border-blue-800 bg-[#0067C6] px-6 shadow-sm">
      {/* Logo and App Name */}
      <div className="flex items-center gap-4">
        <img 
          src={eatonLogo} 
          alt="Eaton" 
          className="h-12 object-contain"
        />
        <div className="h-10 w-px bg-white/30"></div>
        <h1 className="font-semibold text-white text-2xl">
          Enterprise AI Initiatives Updates
        </h1>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5">
          <Clock className="h-4 w-4 text-white" />
          <span className="font-medium text-white text-sm tabular-nums">{currentTime} EST</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/90 text-sm">Welcome, Enterprise AI Team</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
        <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
          <Settings className="h-5 w-5 text-white" />
        </button>
      </div>
    </header>
  );
}