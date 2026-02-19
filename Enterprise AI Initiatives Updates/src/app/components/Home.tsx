import { Home as HomeIcon, Headset, Bot, Scale, Wrench, BarChart3, GraduationCap, Mail, TrendingUp, Network, Users, FolderKanban } from 'lucide-react';
import { StatusBadge } from '@/app/components/StatusBadge';
import { initiativesData } from '@/app/data/initiatives';
import { Play } from 'lucide-react';
import React from 'react';

interface HomeProps {
  onSelectInitiative: (initiativeId: string) => void;
}

export function Home({ onSelectInitiative }: HomeProps) {
  const initiatives = [
    {
      id: 'zero-service-desk',
      title: 'Zero Service Desk',
      icon: Headset,
      description: 'AI-powered service desk automation to reduce manual support tickets',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      id: 'ask-joe',
      title: 'Ask JoE',
      icon: Bot,
      description: 'Enterprise AI assistant for instant answers and productivity',
      color: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      id: 'legal',
      title: 'Legal',
      icon: Scale,
      description: 'AI-driven legal document analysis and compliance automation',
      color: 'from-gray-600 to-gray-800',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-700',
    },
    {
      id: 'hr',
      title: 'HR Initiatives',
      icon: Users,
      description: 'AI-powered HR agents for job descriptions and dedicated HR support',
      color: 'from-pink-500 to-rose-500',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      id: 'productivity-tools',
      title: 'Productivity Tools',
      icon: Wrench,
      description: 'Smart tools to enhance workflow efficiency and collaboration',
      color: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      id: 'interface-mapping',
      title: 'Interface Mapping & Monitoring',
      icon: Network,
      description: 'AI-based interface search and mapping for partner onboarding',
      color: 'from-violet-500 to-purple-500',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600',
    },
    {
      id: 'other-initiatives',
      title: 'Other Initiatives',
      icon: FolderKanban,
      description: 'Additional AI initiatives including spend analysis and communications',
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'education-training',
      title: 'Education & Training',
      icon: GraduationCap,
      description: 'AI-enhanced learning programs and skill development initiatives',
      color: 'from-yellow-500 to-amber-500',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-700',
    },
  ];

  return (
    <div className="relative flex h-screen flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1737998245935-8bc0eefebd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwQUklMjB0ZWNobm9sb2d5JTIwYmx1ZXxlbnwxfHx8fDE3NzAyMTI4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better content visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85 backdrop-blur-sm"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-screen flex-col overflow-hidden p-4">
        {/* Page Header */}
        <div className="mb-4 flex-shrink-0">
          <div className="mb-1.5 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0067C6]">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <h2 className="font-bold text-white text-2xl drop-shadow-lg">
              Enterprise AI Initiatives Scorecard
            </h2>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mb-4 flex-shrink-0 grid grid-cols-4 gap-3">
          <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-3 shadow-sm">
            <div className="mb-0.5 text-xl font-bold text-blue-900">
              {Object.values(initiativesData).reduce((sum, init) => sum + init.totalTasks, 0)}
            </div>
            <div className="text-xs text-blue-700">Total Tasks</div>
          </div>
          <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 p-3 shadow-sm">
            <div className="mb-0.5 text-xl font-bold text-green-900">
              {Object.values(initiativesData).reduce((sum, init) => sum + init.onTrack, 0)}
            </div>
            <div className="text-xs text-green-700">On Track</div>
          </div>
          <div className="rounded-xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-3 shadow-sm">
            <div className="mb-0.5 text-xl font-bold text-yellow-900">
              {Object.values(initiativesData).reduce((sum, init) => sum + init.atRisk, 0)}
            </div>
            <div className="text-xs text-yellow-700">At Risk</div>
          </div>
          <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100/50 p-3 shadow-sm">
            <div className="mb-0.5 text-xl font-bold text-red-900">
              {Object.values(initiativesData).reduce((sum, init) => sum + init.delayed, 0)}
            </div>
            <div className="text-xs text-red-700">Delayed</div>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-4 gap-3 pb-4">
            {initiatives.map((initiative, index) => {
              const data = Object.values(initiativesData).find(d => d.title === initiative.title);
              const Icon = initiative.icon;
              const isAskJoE = initiative.id === 'ask-joe';
              const isInterfaceMapping = initiative.id === 'interface-mapping';
              const isZeroServiceDesk = initiative.id === 'zero-service-desk';
              const isProductivityTools = initiative.id === 'productivity-tools';
              
              return (
                <button
                  key={initiative.id}
                  onClick={() => onSelectInitiative(initiative.id)}
                  className={`group relative overflow-hidden rounded-lg border-2 ${
                    isAskJoE 
                      ? 'border-[#0067C6] shadow-lg shadow-blue-500/30' 
                      : 'border-gray-200'
                  } bg-white p-3 text-left transition-all hover:scale-102 hover:border-[#0067C6] hover:shadow-xl`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 transition-opacity group-hover:opacity-5`}></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="mb-2.5 flex items-start justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${initiative.iconBg} transition-transform group-hover:scale-110`}>
                        <Icon className={`h-6 w-6 ${initiative.iconColor}`} />
                      </div>
                      {data && (
                        <StatusBadge status={data.overallStatus} size="sm" />
                      )}
                    </div>
                    
                    <h3 className="mb-1.5 font-bold text-gray-900 text-sm leading-tight group-hover:text-[#0067C6]">
                      {initiative.title}
                    </h3>
                    
                    <p className="mb-2.5 text-gray-600 text-xs leading-snug line-clamp-2">
                      {initiative.description}
                    </p>
                    
                    {data && (
                      <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 pt-2 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-gray-600">{data.totalTasks}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                          <span className="text-gray-600">{data.onTrack}</span>
                        </div>
                        {data.atRisk > 0 && (
                          <div className="flex items-center gap-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                            <span className="text-gray-600">{data.atRisk}</span>
                          </div>
                        )}
                        {data.delayed > 0 && (
                          <div className="flex items-center gap-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            <span className="text-gray-600">{data.delayed}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}