import { MessageCircle, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnimeCardProps {
  title: string;
  image: string;
  onAIChat: () => void;
  onAddToList: () => void;
}

const AnimeCard = ({ title, image, onAIChat, onAddToList }: AnimeCardProps) => {
  return (
    <div className="group relative bg-gradient-card rounded-lg overflow-hidden shadow-card hover:shadow-cosmic transition-all duration-300 transform hover:scale-105">
      {/* Cover Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Sparkle Effect */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-5 h-5 text-accent animate-sparkle" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            onClick={onAddToList}
            size="sm"
            variant="secondary"
            className="bg-secondary/80 hover:bg-secondary text-secondary-foreground text-xs px-2 py-1 h-7"
          >
            <Plus className="w-3 h-3 mr-1" />
            Add
          </Button>
          
          <Button
            onClick={onAIChat}
            size="sm"
            className="bg-gradient-accent hover:opacity-90 text-foreground shadow-glow hover:shadow-glow animate-glow-pulse px-3 py-2 h-8 flex-1 relative overflow-hidden group"
            title="Chat with AI"
          >
            <div className="flex items-center gap-1.5 relative z-10">
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">Chat with AI</span>
            </div>
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;