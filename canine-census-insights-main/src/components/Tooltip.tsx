import { useState, ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
}

const Tooltip = ({ children, content }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className="relative inline-block cursor-help border-b border-dashed border-primary/50"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-64 animate-fade-in">
          <div className="glass-container rounded-lg p-3 text-sm text-foreground/90">
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[hsl(var(--glass-border))]" />
          </div>
        </div>
      )}
    </span>
  );
};

export default Tooltip;
