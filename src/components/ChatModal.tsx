import { useState, useRef, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  aiPersonality: string;
}

const ChatModal = ({ isOpen, onClose, title, aiPersonality }: ChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        text: `Hey there! 🌟 I'm the AI spirit of ${title}! ${aiPersonality} What would you like to chat about?`,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, title, aiPersonality, messages.length]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (title.includes("Dandadan")) {
      if (lowerMessage.includes("ghost") || lowerMessage.includes("spirit")) {
        return "Ooh, the supernatural world is wild! 👻 Did you know ghosts and aliens can actually coexist? What's your favorite spooky moment from the series?";
      }
      if (lowerMessage.includes("alien")) {
        return "Aliens are everywhere! 🛸 The blend of sci-fi and horror makes everything so much more exciting. Which alien encounter scared you the most?";
      }
      return "The energy in Dandadan is incredible! ⚡ I love how comedy and horror dance together. What draws you to this chaotic world?";
    }
    
    if (title.includes("GACHIAKUTA")) {
      if (lowerMessage.includes("dark") || lowerMessage.includes("steampunk")) {
        return "The dark steampunk aesthetic is mesmerizing! ⚙️ Those mechanical elements tell such deep stories. What fascinates you about this world?";
      }
      return "Welcome to the gritty underground! 🔧 This world has so many layers to explore. What aspect intrigues you most?";
    }
    
    if (title.includes("Witch") || title.includes("witch")) {
      if (lowerMessage.includes("magic") || lowerMessage.includes("spell")) {
        return "Magic flows through everything here! ✨ Silent spells can be the most powerful ones. What kind of magic would you want to learn?";
      }
      return "The mystical arts await! 🔮 There's so much wisdom hidden in silence. What magical secrets would you like to uncover?";
    }
    
    // General responses
    const responses = [
      "That's really interesting! Tell me more about your thoughts! 💭",
      "I love discussing this topic! What's your favorite aspect? ⭐",
      "Fascinating perspective! How did you get into this series? 🤔",
      "That's a great question! What draws you to this story? 📚",
      "Amazing! I could talk about this all day! What else would you like to know? 🌟"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-card rounded-lg shadow-cosmic w-full max-w-md h-[500px] flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-accent rounded-full p-2 animate-glow-pulse">
              <Bot className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Chat with {title} AI!</h3>
              <p className="text-xs text-muted-foreground">Powered by Galaxy AI</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 ${
                  message.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-secondary text-secondary-foreground rounded-lg px-3 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-background/50"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-gradient-accent hover:opacity-90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;