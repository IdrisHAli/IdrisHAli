import { StatusBadge } from '@/app/components/StatusBadge';
import { Calendar, User, CheckCircle2, Clock, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { KYSInitiativeCard } from '@/app/components/KYSInitiativeCard';

export interface InitiativeItem {
  task?: string;
  title?: string;
  owner: string;
  dueDate: string;
  status: 'green' | 'yellow' | 'red';
  id?: string;
  progress?: number;
  description?: string;
  keyFeatures?: string[];
}

interface InitiativesGridProps {
  initiatives: InitiativeItem[];
}

export function InitiativesGrid({ initiatives }: InitiativesGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Handle empty initiatives array
  if (!initiatives || initiatives.length === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50/50 p-8 text-center">
        <p className="text-gray-500 text-sm">No initiatives to display</p>
      </div>
    );
  }

  // Status configurations with icons and colors
  const statusConfig = {
    green: {
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-l-green-500',
      label: 'On Track',
    },
    yellow: {
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-l-yellow-500',
      label: 'At Risk',
    },
    red: {
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-l-red-500',
      label: 'Delayed',
    },
  };

  return (
    <div className="space-y-2.5">
      {initiatives.map((initiative, index) => {
        // Check if this is an extended initiative (has description and keyFeatures)
        const isExtendedInitiative = initiative.description && initiative.keyFeatures;
        
        // Render specialized card for extended initiatives
        if (isExtendedInitiative) {
          return (
            <KYSInitiativeCard
              key={initiative.id || index}
              title={initiative.title || initiative.task || ''}
              owner={initiative.owner}
              dueDate={initiative.dueDate}
              status={initiative.status}
              progress={initiative.progress}
              description={initiative.description}
              keyFeatures={initiative.keyFeatures}
            />
          );
        }
        
        // Standard compact card for regular initiatives
        const config = statusConfig[initiative.status];
        const StatusIcon = config.icon;
        const isHovered = hoveredIndex === index;
        const isExpanded = expandedIndex === index;
        
        return (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl border-l-4 ${config.borderColor} bg-white/95 backdrop-blur-sm shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.01] ${
              isHovered ? 'bg-white/100' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Subtle gradient background */}
            <div className={`absolute inset-0 ${config.bgColor} opacity-30`} />
            
            {/* Main content - Horizontal compact layout */}
            <div className="relative flex items-center gap-4 px-5 py-4">
              {/* Status Icon */}
              <div className="flex-shrink-0">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${config.bgColor} ${config.color} transition-transform group-hover:scale-110 shadow-sm`}>
                  <StatusIcon className="h-6 w-6" strokeWidth={2.5} />
                </div>
              </div>

              {/* Task Description - Takes most space and more prominent */}
              <div className="min-w-0 flex-1">
                <p className="font-bold text-gray-900 text-base leading-relaxed line-clamp-2">
                  {initiative.task || initiative.title}
                </p>
              </div>

              {/* Due Date */}
              <div className="flex-shrink-0 flex items-center gap-2 rounded-lg bg-gray-100/80 px-3 py-2.5 min-w-[110px]">
                <Calendar className="h-4 w-4 text-gray-600 flex-shrink-0" />
                <span className="font-bold text-gray-800 text-sm whitespace-nowrap">
                  {initiative.dueDate}
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex-shrink-0">
                <StatusBadge status={initiative.status} size="sm" />
              </div>
            </div>

            {/* Owner Tooltip - Shows on hover */}
            {isHovered && (
              <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="relative whitespace-nowrap rounded-xl border border-slate-600 bg-slate-900/98 px-5 py-3 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                      <User className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Owner</p>
                      <p className="text-sm font-bold text-white">{initiative.owner}</p>
                    </div>
                  </div>
                  {/* Arrow pointing up to card */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-6 border-transparent border-b-slate-900" />
                </div>
              </div>
            )}

            {/* Hover effect - subtle shine */}
            {isHovered && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-in slide-in-from-left duration-500" />
            )}
          </div>
        );
      })}
    </div>
  );
}