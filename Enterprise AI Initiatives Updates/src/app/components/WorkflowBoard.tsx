import React from 'react';
import { WorkflowStage } from '../data/productivityWorkflow';
import { ArrowRight, TrendingUp, Info } from 'lucide-react';

interface WorkflowBoardProps {
  stages: WorkflowStage[];
  className?: string;
}

interface WorkflowCardComponentProps {
  card: {
    id: string;
    title: string;
    description: string;
    forecastId: string;
    tags?: string[];
    decisionNote?: string;
  };
}

function WorkflowCardComponent({ card }: WorkflowCardComponentProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-400"
    >
      {/* Decision Note Indicator - Bottom Right Corner */}
      {card.decisionNote && (
        <div 
          className="absolute bottom-3 right-3 z-10"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className="relative">
            <div className="bg-amber-500 rounded-full p-1.5 shadow-lg hover:bg-amber-600 transition-colors cursor-help animate-pulse">
              <Info className="h-3.5 w-3.5 text-white" />
            </div>
            
            {/* Tooltip Popup */}
            {showTooltip && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-gray-900 text-white text-xs rounded-lg shadow-2xl p-4 z-50 border border-gray-700">
                <div className="absolute -top-2 right-4 w-4 h-4 bg-gray-900 transform rotate-45 border-l border-t border-gray-700"></div>
                <div className="relative">
                  <div className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
                    <Info className="h-3.5 w-3.5" />
                    Decision Note
                  </div>
                  <p className="leading-relaxed text-gray-100">
                    {card.decisionNote}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Card Title */}
      <h5 className="font-bold text-gray-900 text-sm mb-2 leading-tight transition-colors group-hover:text-blue-600">
        {card.title}
      </h5>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed">
        {card.description}
      </p>

      {/* Forecast ID */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium text-gray-500">AI Funnel ID:</span>
        <span className="font-bold text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
          {card.forecastId}
        </span>
      </div>

      {/* Tags */}
      {card.tags && card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {card.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 px-2.5 py-1 text-xs font-medium text-blue-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Hover Actions */}
      {/* Removed Next Step and Action buttons */}
    </div>
  );
}

export function WorkflowBoard({ stages, className }: WorkflowBoardProps) {
  const stageColors = {
    'bg-green-50': {
      bg: 'bg-gradient-to-br from-emerald-50 to-green-50',
      border: 'border-emerald-300',
      header: 'bg-gradient-to-r from-emerald-500 to-green-600',
      text: 'text-emerald-700',
      badge: 'bg-emerald-500'
    },
    'bg-blue-50': {
      bg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      border: 'border-blue-300',
      header: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      text: 'text-blue-700',
      badge: 'bg-blue-500'
    },
    'bg-sky-50': {
      bg: 'bg-gradient-to-br from-sky-50 to-cyan-50',
      border: 'border-sky-300',
      header: 'bg-gradient-to-r from-sky-500 to-cyan-600',
      text: 'text-sky-700',
      badge: 'bg-sky-500'
    },
    'bg-purple-50': {
      bg: 'bg-gradient-to-br from-purple-50 to-violet-50',
      border: 'border-purple-300',
      header: 'bg-gradient-to-r from-purple-500 to-violet-600',
      text: 'text-purple-700',
      badge: 'bg-purple-500'
    },
    'bg-emerald-50': {
      bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      border: 'border-emerald-300',
      header: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      text: 'text-emerald-700',
      badge: 'bg-emerald-500'
    },
    'bg-orange-50': {
      bg: 'bg-gradient-to-br from-orange-50 to-amber-50',
      border: 'border-orange-300',
      header: 'bg-gradient-to-r from-orange-500 to-amber-600',
      text: 'text-orange-700',
      badge: 'bg-orange-500'
    },
  };

  return (
    <div className={`w-full ${className || ''}`}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const colors = stageColors[stage.color as keyof typeof stageColors] || stageColors['bg-blue-50'];
          
          return (
            <div
              key={stage.id}
              className={`flex-shrink-0 w-80 rounded-xl border-2 ${colors.border} ${colors.bg} shadow-lg overflow-hidden transition-all hover:shadow-2xl`}
            >
              {/* Stage Header */}
              <div className={`${colors.header} px-4 py-3 flex items-center justify-between shadow-md`}>
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${colors.badge} animate-pulse shadow-lg`}></div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide drop-shadow-md">
                    {stage.name}
                  </h4>
                </div>
              </div>

              {/* Cards Container */}
              <div className="p-3 space-y-3 min-h-[200px]">
                {stage.cards.map((card) => (
                  <WorkflowCardComponent key={card.id} card={card} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}