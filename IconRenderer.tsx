import React from "react";
import { 
  FolderClosed, 
  Search, 
  Cpu, 
  Users, 
  Sparkles, 
  ShieldAlert, 
  Gift, 
  Heart, 
  Compass, 
  MapPin, 
  Bookmark, 
  ChevronRight, 
  CheckCircle,
  ExternalLink,
  BookOpen,
  Calendar,
  Layers,
  GraduationCap,
  Sparkle,
  Menu,
  X,
  Mail,
  Facebook,
  Github,
  Send,
  Award,
  Type
} from "lucide-react";

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = "", size = 20 }) => {
  // Graceful fallback helper
  switch (name) {
    case "FolderHeart":
    case "FolderClosed":
      return <FolderClosed className={className} size={size} />;
    case "FileSearch":
    case "Search":
      return <Search className={className} size={size} />;
    case "Cpu":
      return <Cpu className={className} size={size} />;
    case "Users":
      return <Users className={className} size={size} />;
    case "Sparkles":
    case "Sparkle":
      return <Sparkles className={className} size={size} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} size={size} />;
    case "Gift":
      return <Gift className={className} size={size} />;
    case "Heart":
      return <Heart className={className} size={size} />;
    case "Compass":
      return <Compass className={className} size={size} />;
    case "Milestone":
    case "MapPin":
      return <MapPin className={className} size={size} />;
    case "Bookmark":
      return <Bookmark className={className} size={size} />;
    case "ChevronRight":
      return <ChevronRight className={className} size={size} />;
    case "CheckCircle":
      return <CheckCircle className={className} size={size} />;
    case "ExternalLink":
      return <ExternalLink className={className} size={size} />;
    case "BookOpen":
      return <BookOpen className={className} size={size} />;
    case "Calendar":
      return <Calendar className={className} size={size} />;
    case "Layers":
      return <Layers className={className} size={size} />;
    case "GraduationCap":
      return <GraduationCap className={className} size={size} />;
    case "Menu":
      return <Menu className={className} size={size} />;
    case "X":
      return <X className={className} size={size} />;
    case "Mail":
      return <Mail className={className} size={size} />;
    case "Facebook":
      return <Facebook className={className} size={size} />;
    case "Github":
      return <Github className={className} size={size} />;
    case "Send":
      return <Send className={className} size={size} />;
    case "Award":
      return <Award className={className} size={size} />;
    default:
      return <Sparkles className={className} size={size} />;
  }
};
