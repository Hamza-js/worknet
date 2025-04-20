// hooks/useTooltip.ts
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipProps {
  content: string; // Tooltip content
  children: React.ReactNode; // Element that will trigger the tooltip
}

export const useTooltip = ({ content, children }: TooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="text-xs px-2 py-1 rounded-lg bg-gray-800 text-white">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
