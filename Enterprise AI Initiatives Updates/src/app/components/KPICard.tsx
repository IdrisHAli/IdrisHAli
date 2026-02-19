import { TrendingUp, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface KPICardProps {
  label: string;
  value: number;
  variant?: 'blue' | 'green' | 'yellow' | 'red';
}

export function KPICard({ label, value, variant = 'blue' }: KPICardProps) {
  const configs = {
    blue: {
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      border: 'border-blue-400',
      icon: TrendingUp,
      label: 'Total Initiatives',
    },
    green: {
      gradient: 'bg-gradient-to-br from-green-500 to-green-600',
      border: 'border-green-400',
      icon: CheckCircle,
      label: 'On Track',
    },
    yellow: {
      gradient: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      border: 'border-yellow-400',
      icon: AlertTriangle,
      label: 'At Risk',
    },
    red: {
      gradient: 'bg-gradient-to-br from-red-500 to-red-600',
      border: 'border-red-400',
      icon: XCircle,
      label: 'Delayed',
    },
  };

  const config = configs[variant];
  const Icon = config.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-md border shadow-sm transition-all hover:shadow-md ${config.gradient} ${config.border}`}
    >
      <div className="relative z-10 flex items-center gap-3 px-4 py-2">
        {/* Icon */}
        <Icon className="h-5 w-5 flex-shrink-0 text-white opacity-90" />
        
        {/* Content */}
        <div className="flex flex-1 items-baseline gap-2">
          <div className="font-bold text-white text-2xl tabular-nums">
            {value}
          </div>
          <div className="font-medium text-xs text-white/80 uppercase tracking-wide">
            {config.label}
          </div>
        </div>
      </div>
    </div>
  );
}