import { Bot, Plus, Sparkles } from "lucide-react";
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
            className="flex-1 bg-secondary/80 hover:bg-secondary text-secondary-foreground text-xs"
          >
            <Plus className="w-3 h-3 mr-1" />
            Add to list
          </Button>
          
          <Button
            onClick={onAIChat}
            size="sm"
            className="bg-gradient-accent hover:opacity-90 text-foreground shadow-glow hover:shadow-glow animate-glow-pulse px-2"
            title="Chat with AI"
          >
            <Bot className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;