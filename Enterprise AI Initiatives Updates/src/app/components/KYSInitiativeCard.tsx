import { StatusBadge } from '@/app/components/StatusBadge';
import { Calendar, User, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface KYSInitiativeCardProps {
  title: string;
  owner: string;
  dueDate: string;
  status: 'green' | 'yellow' | 'red';
  progress?: number;
  description?: string;
  keyFeatures?: string[];
}

export function KYSInitiativeCard({
  title,
  owner,
  dueDate,
  status,
  progress = 0,
  description,
  keyFeatures,
}: KYSInitiativeCardProps) {
  const [isExpanded, setIsExpanded] = useState(true); // Default to expanded

  return (
    <div className="group relative overflow-hidden rounded-xl border-l-4 border-l-green-500 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-200 hover:shadow-2xl min-h-[600px]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-green-500/10 opacity-30" />
      
      {/* Main Header Section */}
      <div className="relative px-6 py-6">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-green-600 shadow-sm">
                <Sparkles className="h-8 w-8" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-xl leading-tight mb-2">
                  {title}
                </h3>
                <div className="flex items-center gap-2">
                  <StatusBadge status={status} size="sm" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold">{progress}%</span> Complete
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5">
              <Calendar className="h-4 w-4 text-gray-600" />
              <span className="font-bold text-gray-800 text-sm whitespace-nowrap">
                {dueDate}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5">
              <User className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-blue-700 text-xs whitespace-nowrap">
                {owner}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {progress !== undefined && (
          <div className="mb-5">
            <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Description - Always visible */}
        {description && (
          <div className="mb-4">
            <p className="text-gray-700 text-base leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 rounded-lg bg-[#0067C6] px-4 py-2.5 text-white transition-all hover:bg-[#0057A6] hover:shadow-md"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              <span className="font-semibold text-sm">Show Less</span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              <span className="font-semibold text-sm">View Details</span>
            </>
          )}
        </button>
      </div>

      {/* Expanded Details Section - Always visible by default */}
      {isExpanded && (
        <div className="relative border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white px-6 py-6 animate-in slide-in-from-top duration-300">
          {keyFeatures && keyFeatures.length > 0 && (
            <div>
              <h4 className="mb-4 flex items-center gap-2 font-bold text-gray-900 text-lg">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                Key Features & Capabilities
              </h4>
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-3 rounded-lg bg-white/80 p-4 shadow-sm transition-all hover:shadow-md hover:bg-white"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                    <p className="flex-1 text-gray-700 text-base leading-relaxed">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Hover effect - subtle shine */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}