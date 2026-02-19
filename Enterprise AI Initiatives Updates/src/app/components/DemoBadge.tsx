import { Play } from 'lucide-react';

export function DemoBadge() {
  return (
    <div 
      className="absolute -bottom-2 -right-2 z-10 flex flex-col items-center justify-center h-16 w-16 rounded-full bg-[#0067C6] border-3 border-white hover:scale-110 transition-transform duration-200"
      style={{
        boxShadow: `
          0 4px 8px rgba(0, 0, 0, 0.2),
          inset 0 2px 4px rgba(255, 255, 255, 0.3),
          inset 0 -2px 4px rgba(0, 0, 0, 0.3)
        `,
        background: 'linear-gradient(145deg, #0077E6, #0057A6)',
      }}
    >
      <div className="flex items-center justify-center mb-0.5">
        <div 
          className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-white rotate-90 translate-x-0.5"
          style={{
            filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3))'
          }}
        ></div>
      </div>
      <span 
        className="text-[10px] font-bold text-white uppercase tracking-wider"
        style={{
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)'
        }}
      >Demo</span>
    </div>
  );
}