import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: 'green' | 'yellow' | 'red';
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const configs = {
    green: {
      bg: 'bg-green-500',
      text: 'text-white',
      icon: CheckCircle2,
      label: 'On Track',
    },
    yellow: {
      bg: 'bg-yellow-500',
      text: 'text-white',
      icon: AlertCircle,
      label: 'At Risk',
    },
    red: {
      bg: 'bg-red-500',
      text: 'text-white',
      icon: XCircle,
      label: 'Delayed',
    },
  };

  const config = configs[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-semibold shadow-sm ${config.bg} ${config.text} ${sizeClasses[size]}`}
    >
      <Icon className={iconSizes[size]} />
      {config.label}
    </span>
  );
}