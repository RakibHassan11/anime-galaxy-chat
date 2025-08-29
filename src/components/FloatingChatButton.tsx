import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingChatButtonProps {
  onClick: () => void;
}

const FloatingChatButton = ({ onClick }: FloatingChatButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={onClick}
        className="relative bg-gradient-accent hover:opacity-90 text-foreground shadow-cosmic hover:shadow-glow w-14 h-14 rounded-full animate-float group"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Sparkle Effect */}
        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-4 h-4 text-accent animate-sparkle" />
        </div>
        
        {/* Pulse Ring */}
        <div className="absolute inset-0 bg-gradient-accent rounded-full animate-ping opacity-20"></div>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-popover text-popover-foreground px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with General AI
        <div className="absolute top-full right-4 border-4 border-transparent border-t-popover"></div>
      </div>
    </div>
  );
};

export default FloatingChatButton;