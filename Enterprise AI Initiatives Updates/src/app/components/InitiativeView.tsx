import { StatusBadge } from '@/app/components/StatusBadge';
import { KPICard } from '@/app/components/KPICard';
import { InitiativesGrid, InitiativeItem } from '@/app/components/InitiativesGrid';
import { ExternalLink, Sparkles, Zap, TrendingUp, X, Play, Workflow, BarChart3 } from 'lucide-react';
import jeevanPhoto from 'figma:asset/5c9458cd7f843dd3300798912ab84b6a819971b1.png';
import ruchiPhoto from 'figma:asset/c646fae5ec64f91d6829526d4dfc4a7026d41b15.png';
import siddharthPhoto from 'figma:asset/f871bd1cd0785a657556adbe36039382dd955f66.png';
import ashishPhoto from 'figma:asset/7b0b37def2c51113d98c8f72cb5180c768bdab41.png';
import tomPhoto from 'figma:asset/455f4c32ae93df3de006198996137a8116180b49.png';
import { TrendingTools } from '@/app/components/TrendingTools';
import { WorkflowBoard } from '@/app/components/WorkflowBoard';
import { WorkflowStage } from '@/app/data/productivityWorkflow';
import { useState } from 'react';

export interface InitiativeDetail {
  title: string;
  subtitle: string;
  overallStatus: 'green' | 'yellow' | 'red';
  totalTasks: number;
  onTrack: number;
  atRisk: number;
  delayed: number;
  tasks?: InitiativeItem[];
  sections?: {
    title: string;
    subtitle: string;
    status: 'green' | 'yellow' | 'red';
    tasks: InitiativeItem[];
  }[];
  demoLink?: {
    url: string;
    label: string;
    description: string;
  };
  workflow?: WorkflowStage[];
}

interface InitiativeViewProps {
  initiative: InitiativeDetail;
}

export function InitiativeView({ initiative }: InitiativeViewProps) {
  // Check if this is Ask JoE for enhanced demo link
  const isAskJoE = initiative.title === 'Ask JoE';
  
  // Check if this is Productivity Tools for presenter avatar
  const isProductivityTools = initiative.title === 'Productivity Tools';
  
  // Check if this is Interface Mapping & Monitoring for presenter avatar
  const isInterfaceMapping = initiative.title === 'Interface Mapping & Monitoring';
  
  // Check if this is Zero Service Desk
  const isZeroServiceDesk = initiative.title === 'Zero Service Desk';
  
  // Check if this is Other AI Initiatives with sections
  const isOtherInitiatives = initiative.title === 'Other AI Initiatives' || initiative.title === 'Other Initiatives';
  
  // State for trending tools modal
  const [showTrendingTools, setShowTrendingTools] = useState(false);

  // Calculate total workflow cards for Productivity Tools
  const totalWorkflowCards = isProductivityTools && initiative.workflow 
    ? initiative.workflow.reduce((sum, stage) => sum + stage.cards.length, 0)
    : 0;
  
  // Use workflow count for Productivity Tools, otherwise use regular totalTasks
  const displayTotalCount = isProductivityTools ? totalWorkflowCards : initiative.totalTasks;
  
  // Map initiative titles to themed background images
  const backgroundImages: { [key: string]: string } = {
    'Zero Service Desk': 'https://images.unsplash.com/photo-1759143545924-beb85b33c0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBzZXJ2aWNlJTIwZGVzayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMjEyODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Ask JoE': 'https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBpbnRlcmZhY2UlMjBjb252ZXJzYXRpb258ZW58MXx8fHwxNzcwMjEyODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Legal': 'https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGNvbnRyYWN0JTIwcGFwZXJzfGVufDF8fHx8MTc3MDIxMjg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Productivity Tools': 'https://images.unsplash.com/photo-1734208682292-df2643d0c8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjB0b29scyUyMGRlc2t8ZW58MXx8fHwxNzcwMjEyODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Daily AI Newsletter': 'https://images.unsplash.com/photo-1683117927786-f146451082fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzbGV0dGVyJTIwZW1haWwlMjBkaWdpdGFsJTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3NzAyMTI4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Spend Analysis': 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXRhfGVufDF8fHx8MTc3MDEzMjUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Interface Mapping & Monitoring': 'https://images.unsplash.com/photo-1681770678332-3a190df72091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjB0ZWNobm9sb2d5JTIwY2FibGVzfGVufDF8fHx8MTc3MDIxMjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Other AI Initiatives': 'https://images.unsplash.com/photo-1760433116983-76021bd32307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAyMTI4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Other Initiatives': 'https://images.unsplash.com/photo-1760433116983-76021bd32307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAyMTI4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Education & Training': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGVkdWNhdGlvbiUyMGxlYXJuaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAyMTI4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  };

  const backgroundImage = backgroundImages[initiative.title] || '';

  return (
    <div className="flex h-screen flex-col overflow-hidden p-4">
      {/* Page Header */}
      <div className="mb-3 flex-shrink-0">
        <div className="mb-1 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-gray-900 text-2xl">
              {initiative.title}
            </h2>
            <StatusBadge status={initiative.overallStatus} size="md" />
          </div>
          
          {/* Presenter Avatar - Only for Productivity Tools */}
          {isProductivityTools && (
            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-md border-2 border-[#0067C6]">
              <div className="relative">
                {/* Animated pulsing rings - speaking effect */}
                <div className="absolute inset-0 -m-1">
                  <div className="absolute inset-0 rounded-full border-2 border-[#0067C6] opacity-75 animate-ping" style={{ animationDuration: '2s' }}></div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#0067C6] opacity-50 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Avatar with subtle scale animation */}
                <div className="relative animate-pulse" style={{ animationDuration: '3s' }}>
                  <img
                    src={jeevanPhoto}
                    alt="Jeevan Kulkarni"
                    className="h-10 w-10 rounded-full border-2 border-[#0067C6] object-cover shadow-lg"
                  />
                </div>
                
                {/* Active speaking indicator - animated green dot */}
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#0067C6] border-2 border-white animate-pulse shadow-md"></div>
                
                {/* Sound wave indicators */}
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex gap-0.5">
                  <div className="w-0.5 bg-[#0067C6] rounded-full animate-wave" style={{ height: '4px', animationDelay: '0s' }}></div>
                  <div className="w-0.5 bg-[#0067C6] rounded-full animate-wave" style={{ height: '6px', animationDelay: '0.2s' }}></div>
                  <div className="w-0.5 bg-[#0067C6] rounded-full animate-wave" style={{ height: '8px', animationDelay: '0.4s' }}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-xs leading-tight">Jeevan Kulkarni</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#0067C6] text-xs leading-tight">Presenting</span>
                  <span className="flex gap-0.5 items-center">
                    <span className="h-1 w-1 rounded-full bg-[#0067C6] animate-bounce" style={{ animationDelay: '0s', animationDuration: '1.2s' }}></span>
                    <span className="h-1 w-1 rounded-full bg-[#0067C6] animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '1.2s' }}></span>
                    <span className="h-1 w-1 rounded-full bg-[#0067C6] animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '1.2s' }}></span>
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {/* Presenter Avatar - Only for Ask JoE */}
          {isAskJoE && (
            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-md border-2 border-[#0067C6]">
              <div className="relative">
                {/* Animated pulsing rings - speaking effect */}
                <div className="absolute inset-0 -m-1">
                  <div className="absolute inset-0 rounded-full border-2 border-[#0067C6] opacity-75 animate-ping" style={{ animationDuration: '2s' }}></div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#0067C6] opacity-50 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Avatar with subtle scale animation */}
                <div className="relative animate-pulse" style={{ animationDuration: '3s' }}>
                  <img
                    src={ruchiPhoto}
                    alt="Ruchi Mujumdar"
                    className="h-10 w-10 rounded-full border-2 border-[#0067C6] object-cover shadow-lg"
                  />
                </div>
                
                {/* Active speaking indicator - animated blue dot */}
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#0067C6] border-2 border-white animate-pulse shadow-md"></div>
                
                {/* Sound wave indicators */}
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex gap-0.5">
                  <div className="w-0.5 bg-[#0067C6] rounded-full animate-wave" style={{ height: '4px', animationDelay: '0s' }}></div>
                  <div className="w-0.5 bg-[#0067C6] rounded-full animate-wave" style={{ height: '6px', animationDelay: '0.2s' }}></div>
                  <div className="w-0.5 bg-[#0067C6] rounded-full animate-wave" style={{ height: '8px', animationDelay: '0.4s' }}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-xs leading-tight">Ruchi Mujumdar</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#0067C6] text-xs leading-tight">Presenting</span>
                  <span className="flex gap-0.5 items-center">
                    <span className="h-1 w-1 rounded-full bg-[#0067C6] animate-bounce" style={{ animationDelay: '0s', animationDuration: '1.2s' }}></span>
                    <span className="h-1 w-1 rounded-full bg-[#0067C6] animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '1.2s' }}></span>
                    <span className="h-1 w-1 rounded-full bg-[#0067C6] animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '1.2s' }}></span>
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {/* Presenter Avatar - Only for Interface Mapping & Monitoring */}
          {isInterfaceMapping && (
            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-md border-2 border-[#0067C6]">
              <div className="relative">
                {/* Animated pulsing rings - speaking effect */}
                <div className="absolute inset-0 -m-1">
                  <div className="absolute inset-0 rounded-full border-2 border-[#0067C6] opacity-75 animate-ping" style={{ animationDuration: '2s' }}></div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#0067C6] opacity-50 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Avatar with subtle scale animation */}
                <div className="relative animate-pulse" style={{ animationDuration: '3s' }}>
                  <img
                    src={siddharthPhoto}
                    alt="Siddharth Godbole"
                    className="h-10 w-10 rounded-full border-2 border-[#0067C6] object-cover shadow-lg"
                  />
                </div>
                
                {/* Active speaking indicator - animated blue dot */}
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#0067C6] border-2 border-white animate-pulse shadow-md"></div>
                
                {/* Sound wave indicators */}
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex gap-0.5">
                  <div className="w-0.5 bg-[#0067C6] rounded-full animate-wave" style={{ height: '4px', animationDelay: '0s' }}></div>
                  <div className="w-0.5 bg-[#0067C6] rounded-full animate-wave" style={{ height: '6px', animationDelay: '0.2s' }}></div>
                  <div className="w-0.5 bg-[#0067C6] rounded-full animate-wave" style={{ height: '8px', animationDelay: '0.4s' }}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-xs leading-tight">Siddharth Godbole</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#0067C6] text-xs leading-tight">Presenting</span>
                  <span className="flex gap-0.5 items-center">
                    <span className="h-1 w-1 rounded-full bg-[#0067C6] animate-bounce" style={{ animationDelay: '0s', animationDuration: '1.2s' }}></span>
                    <span className="h-1 w-1 rounded-full bg-[#0067C6] animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '1.2s' }}></span>
                    <span className="h-1 w-1 rounded-full bg-[#0067C6] animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '1.2s' }}></span>
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {/* Presenter Avatar - Only for Zero Service Desk */}
          {isZeroServiceDesk && (
            null
          )}
        </div>
        <p className="text-gray-600 text-sm">
          {initiative.subtitle}
        </p>
      </div>

      {/* Themed Background Container for KPIs and Initiatives */}
      <div 
        className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-5 shadow-inner border border-gray-200 relative"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better content visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-800/70 to-slate-900/75 backdrop-blur-sm rounded-xl"></div>
        
        {/* Content Layer */}
        <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
          {/* KPI Cards */}
          <div className="mb-4 flex-shrink-0 grid grid-cols-4 gap-3">
            <KPICard
              label={isZeroServiceDesk ? "Total Agents" : "Total Initiatives"}
              value={displayTotalCount}
              variant="blue"
            />
            <KPICard
              label={isZeroServiceDesk ? "Agents Deployed" : "On Track"}
              value={initiative.onTrack}
              variant="green"
            />
            <KPICard 
              label={isZeroServiceDesk ? "Agents in Progress" : "At Risk"} 
              value={initiative.atRisk} 
              variant="yellow" 
            />
            <KPICard 
              label={isZeroServiceDesk ? "In Backlog" : "Delayed"} 
              value={initiative.delayed} 
              variant="red" 
            />
          </div>

          {/* Initiatives Grid */}
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            {isOtherInitiatives && initiative.sections ? (
              // Render sections for Other AI Initiatives
              <>
                <h3 className="mb-3 flex-shrink-0 font-semibold text-white text-lg drop-shadow-lg">Initiatives by Category</h3>
                <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                  {initiative.sections.map((section, index) => (
                    <div key={index} className="rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <h4 className="font-bold text-white text-base drop-shadow-md">{section.title}</h4>
                        <StatusBadge status={section.status} size="sm" />
                      </div>
                      <p className="mb-3 text-sm text-white/80 drop-shadow-sm">{section.subtitle}</p>
                      <InitiativesGrid initiatives={section.tasks} />
                    </div>
                  ))}
                </div>
              </>
            ) : isProductivityTools && initiative.workflow ? (
              // Only show workflow for Productivity Tools
              <>
                <div className="flex-1 overflow-y-auto pr-2">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0067C6]">
                      <Workflow className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white text-lg drop-shadow-lg">
                      AI Tools - Roadmap
                    </h3>
                  </div>
                  <WorkflowBoard stages={initiative.workflow} />
                </div>
              </>
            ) : (
              // Standard single grid for other initiatives
              <>
                <h3 className="mb-3 flex-shrink-0 font-semibold text-white text-lg drop-shadow-lg">{isZeroServiceDesk ? "Agents" : "Initiatives"}</h3>
                <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                  <InitiativesGrid initiatives={initiative.tasks || []} />
                  
                  {/* Agent Summary Section - Only for Zero Service Desk */}
                  {isZeroServiceDesk && (
                    <div className="mt-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-5 shadow-lg">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0067C6]">
                          <BarChart3 className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-bold text-white text-lg drop-shadow-md">Agent Summary</h4>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4">
                        {/* Total Agents */}
                        <div className="rounded-lg border border-blue-300/30 bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 backdrop-blur-sm">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"></div>
                            <span className="text-xs font-medium text-blue-200 uppercase tracking-wide">Total</span>
                          </div>
                          <div className="text-3xl font-bold text-white drop-shadow-lg">14</div>
                          <div className="mt-1 text-xs text-blue-100/80">All Agents</div>
                        </div>
                        
                        {/* Deployed */}
                        <div className="rounded-lg border border-green-300/30 bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 backdrop-blur-sm">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                            <span className="text-xs font-medium text-green-200 uppercase tracking-wide">Deployed</span>
                          </div>
                          <div className="text-3xl font-bold text-white drop-shadow-lg">2</div>
                          <div className="mt-1 text-xs text-green-100/80">Live in Production</div>
                        </div>
                        
                        {/* In Progress */}
                        <div className="rounded-lg border border-yellow-300/30 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-4 backdrop-blur-sm">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"></div>
                            <span className="text-xs font-medium text-yellow-200 uppercase tracking-wide">In Progress</span>
                          </div>
                          <div className="text-3xl font-bold text-white drop-shadow-lg">8</div>
                          <div className="mt-1 text-xs text-yellow-100/80">Under Development</div>
                        </div>
                        
                        {/* In Backlog */}
                        <div className="rounded-lg border border-purple-300/30 bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 backdrop-blur-sm">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
                            <span className="text-xs font-medium text-purple-200 uppercase tracking-wide">Backlog</span>
                          </div>
                          <div className="text-3xl font-bold text-white drop-shadow-lg">4</div>
                          <div className="mt-1 text-xs text-purple-100/80">Planned</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Demo Link Tile - Bottom Right */}
      {initiative.demoLink && !isAskJoE && !isInterfaceMapping && !isZeroServiceDesk && (
        <div className="fixed bottom-4 right-20 z-50">
          {/* Compact Standard Demo Tile */}
          <a
            href={initiative.demoLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-64 overflow-hidden rounded-lg border-2 border-blue-500 bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative p-3">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="relative">
                <div className="mb-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 animate-pulse text-yellow-300" />
                    <h4 className="font-bold text-sm text-white">Try Live Demo</h4>
                  </div>
                  <ExternalLink className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-xs text-blue-100">
                  {initiative.demoLink.description}
                </p>
              </div>
            </div>
          </a>
        </div>
      )}
      
      {/* Video Tile - Only for Ask JoE - Center Bottom */}
      {isAskJoE && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <a
            href="https://eaton-my.sharepoint.com/personal/pragyaagarwal_eaton_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fpragyaagarwal_eaton_com%2FDocuments%2FVideos%2FClipchamp%2FMedia1%2FExports%2FAsk+JOE+Demo+Final.mp4&startedResponseCatch=true&referrer=StreamWebApp.Web&referrerScenario=AddressBarCopied.view.42b35959-afcd-4452-bcf7-c09fdf92b520"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-80 overflow-hidden rounded-xl shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
          >
            {/* Video Thumbnail */}
            
            
            {/* Video Info */}
            
          </a>
        </div>
      )}
      
      {/* Video Tile - Only for Interface Mapping & Monitoring - Center Bottom */}
      {isInterfaceMapping && initiative.demoLink && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <a
            href={initiative.demoLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-80 overflow-hidden rounded-xl shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
          >
            {/* Video Thumbnail */}
            
            
            {/* Video Info */}
            
          </a>
        </div>
      )}
      
      {/* Video Tile - Only for Zero Service Desk - Center Bottom */}
      {isZeroServiceDesk && initiative.demoLink && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <a
            href={initiative.demoLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-80 overflow-hidden rounded-xl shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
          >
            {/* Video Thumbnail */}
            
            
            {/* Video Info */}
            
          </a>
        </div>
      )}
    </div>
  );
}