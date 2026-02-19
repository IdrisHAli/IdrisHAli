import { BarChart3, GraduationCap, ChevronDown, ChevronRight, Headphones, Bot, Scale, Wrench, Mail, TrendingUp, Network, Users, FolderKanban } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export function Sidebar({ activeView, onNavigate }: SidebarProps) {
  const [scorecardExpanded, setScorecardExpanded] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scorecardItems = [
    { id: 'zero-service-desk', label: 'Zero Service Desk', icon: Headphones },
    { id: 'ask-joe', label: 'Ask JoE', icon: Bot },
    { id: 'legal', label: 'Legal', icon: Scale },
    { id: 'hr', label: 'HR Initiatives', icon: Users },
    { id: 'productivity-tools', label: 'Productivity Tools', icon: Wrench },
    { id: 'interface-mapping', label: 'Interface Mapping & Monitoring', icon: Network },
    { id: 'other-initiatives', label: 'Other Initiatives', icon: FolderKanban },
    { id: 'education-training', label: 'Education & Training', icon: GraduationCap },
  ];

  const isInScorecard = scorecardItems.some(item => item.id === activeView) || activeView === 'home';

  const renderIconButton = (
    id: string,
    icon: React.ElementType,
    label: string,
    isActive: boolean,
    onClick: () => void,
    isParent = false
  ) => {
    const Icon = icon;
    const isHovered = hoveredItem === id;

    return (
      <div
        key={id}
        className="relative"
        onMouseEnter={() => setHoveredItem(id)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        {/* Icon Button */}
        <button
          onClick={onClick}
          className={`group relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-br from-blue-500 to-blue-700 shadow-xl shadow-blue-500/60 scale-110'
              : 'bg-slate-700/80 hover:bg-slate-600/90 hover:scale-105 shadow-lg'
          }`}
        >
          {/* Glow effect for active */}
          {isActive && (
            <div className="absolute inset-0 rounded-xl bg-blue-400 opacity-30 blur-lg animate-pulse"></div>
          )}
          
          <Icon className={`relative h-6 w-6 transition-all duration-300 ${
            isActive ? 'text-white drop-shadow-lg' : 'text-slate-300 group-hover:text-white'
          }`} />
          
          {/* Active indicator dot */}
          {isActive && (
            <div className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/70 animate-pulse"></div>
          )}
        </button>

        {/* Expanding Label on Hover */}
        {isHovered && (
          <div className="pointer-events-none absolute left-16 top-1/2 z-50 -translate-y-1/2 animate-in fade-in slide-in-from-left-2 duration-200">
            <div className="relative whitespace-nowrap rounded-xl border border-slate-600 bg-slate-800/98 px-4 py-2.5 shadow-2xl backdrop-blur-md">
              <span className="text-sm font-semibold text-white drop-shadow">{label}</span>
              {/* Arrow pointing to icon */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-6 border-transparent border-r-slate-800"></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="relative flex w-28 flex-col items-center bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 py-6 shadow-xl border-r border-slate-700">
      {/* Floating Dock Container */}
      <div className="relative flex flex-col items-center gap-3">
        {/* Background panel with stronger visibility */}
        <div className="absolute inset-0 -inset-x-3 rounded-3xl bg-slate-900/60 shadow-2xl backdrop-blur-sm border border-slate-700/50"></div>
        
        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-600/10 via-transparent to-purple-600/10"></div>
        
        {/* Icons */}
        <div className="relative flex flex-col items-center gap-3 p-4">
          {/* Scorecard Parent Button - navigates to home */}
          {renderIconButton(
            'scorecard',
            BarChart3,
            'Scorecard',
            isInScorecard,
            () => {
              if (activeView === 'home') {
                setScorecardExpanded(!scorecardExpanded);
              } else {
                onNavigate('home');
                setScorecardExpanded(true);
              }
            },
            true
          )}

          {/* Scorecard Sub-items - Slide in when expanded */}
          {scorecardExpanded && (
            <div className="flex flex-col items-center gap-2 animate-in slide-in-from-top duration-300">
              {/* Connecting line */}
              <div className="h-2 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
              
              {scorecardItems.map((item, index) => (
                <div key={item.id} className="flex flex-col items-center gap-2">
                  {renderIconButton(
                    item.id,
                    item.icon,
                    item.label,
                    activeView === item.id,
                    () => onNavigate(item.id)
                  )}
                  {/* Connecting line between items */}
                  {index < scorecardItems.length - 1 && (
                    <div className="h-2 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}