import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnimeCard from "@/components/AnimeCard";
import ChatModal from "@/components/ChatModal";
import FloatingChatButton from "@/components/FloatingChatButton";

// Import anime covers
import dandadanCover from "@/assets/anime-dandadan.jpg";
import gachiakutaCover from "@/assets/anime-gachiakuta.jpg";
import witchCover from "@/assets/anime-witch.jpg";
import drstoneCover from "@/assets/anime-drstone.jpg";
import betrothedCover from "@/assets/anime-betrothed.jpg";

// Import manga covers  
import knightCover from "@/assets/manga-knight.jpg";
import flowerCover from "@/assets/manga-flower.jpg";
import demonCover from "@/assets/manga-demon.jpg";
import bluelockCover from "@/assets/manga-bluelock.jpg";
import mysticCover from "@/assets/manga-mystic.jpg";

const Index = () => {
  const { toast } = useToast();
  const [activeChatModal, setActiveChatModal] = useState<{
    isOpen: boolean;
    title: string;
    personality: string;
  }>({ isOpen: false, title: "", personality: "" });

  const animeData = [
    {
      title: "Dandadan 2nd Season",
      image: dandadanCover,
      personality: "I'm all about supernatural chaos and alien encounters! 👻🛸"
    },
    {
      title: "GACHIAKUTA",
      image: gachiakutaCover,
      personality: "Welcome to the dark steampunk underground where every gear tells a story! ⚙️"
    },
    {
      title: "Secrets of the Silent Witch",
      image: witchCover,
      personality: "Magic flows through silence and wisdom whispers in every spell! ✨🔮"
    },
    {
      title: "Dr. Stone: Science Future - Part II",
      image: drstoneCover,
      personality: "Science is the ultimate power! Let's explore the fascinating world of discovery! 🧪⚗️"
    },
    {
      title: "Betrothed to my Sister's Ex",
      image: betrothedCover,
      personality: "Love is complicated, but that's what makes it beautiful! 💕 Let's talk feelings!"
    }
  ];

  const mangaData = [
    {
      title: "The Knight Only Lives Today",
      image: knightCover,
      personality: "Honor and valor guide every battle! ⚔️ What knightly adventure calls to you?"
    },
    {
      title: "Fragrant Flower Blooms with Dignity",
      image: flowerCover,
      personality: "Beauty blooms in every moment of grace! 🌸 Let's discuss elegant storytelling!"
    },
    {
      title: "Demon Slayer Chronicles",
      image: demonCover,
      personality: "The darkness holds many secrets, but courage lights the way! 🗡️ Ready for battle?"
    },
    {
      title: "Blue Lock: Next Generation",
      image: bluelockCover,
      personality: "Soccer is life! Every goal is a step toward greatness! ⚽ What's your winning strategy?"
    },
    {
      title: "Mystic Academy",
      image: mysticCover,
      personality: "Welcome to the academy where magic meets mystery! 📚✨ What powers would you learn?"
    }
  ];

  const handleAIChat = (title: string, personality: string) => {
    setActiveChatModal({
      isOpen: true,
      title,
      personality
    });
  };

  const handleGeneralAIChat = () => {
    setActiveChatModal({
      isOpen: true,
      title: "General Anime AI",
      personality: "I'm your friendly anime companion! Ask me anything about any anime or manga universe! 🌟"
    });
  };

  const handleAddToList = (title: string) => {
    toast({
      title: "Added to list! ✨",
      description: `${title} has been added to your watchlist!`,
    });
  };

  const closeChatModal = () => {
    setActiveChatModal({ isOpen: false, title: "", personality: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Popular Anime Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            ⭐ Popular anime this week
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {animeData.map((anime, index) => (
              <AnimeCard
                key={index}
                title={anime.title}
                image={anime.image}
                onAIChat={() => handleAIChat(anime.title, anime.personality)}
                onAddToList={() => handleAddToList(anime.title)}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="secondary" 
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3"
            >
              SEE ALL POPULAR ANIME
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Manga Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            📚 Popular manga this week
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {mangaData.map((manga, index) => (
              <AnimeCard
                key={index}
                title={manga.title}
                image={manga.image}
                onAIChat={() => handleAIChat(manga.title, manga.personality)}
                onAddToList={() => handleAddToList(manga.title)}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="secondary" 
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3"
            >
              SEE ALL POPULAR MANGA
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-cosmic py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🌌</span>
            <h3 className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Anime Galaxy
            </h3>
          </div>
          <p className="text-muted-foreground">
            Discover infinite worlds with AI companions
          </p>
        </div>
      </footer>

      {/* Floating AI Chat Button */}
      <FloatingChatButton onClick={handleGeneralAIChat} />

      {/* Chat Modal */}
      <ChatModal
        isOpen={activeChatModal.isOpen}
        onClose={closeChatModal}
        title={activeChatModal.title}
        aiPersonality={activeChatModal.personality}
      />
    </div>
  );
};

export default Index;
