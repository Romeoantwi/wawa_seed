import {
  Heart,
  Sparkles,
  Users,
  GraduationCap,
  HeartHandshake,
  Stethoscope,
  Brain,
  Wrench,
  Wheat,
  Handshake,
  BookOpen,
  Home,
  Leaf,
  type LucideIcon,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Heart,
  Sparkles,
  Users,
  GraduationCap,
  HeartHandshake,
  Stethoscope,
  Brain,
  Wrench,
  Wheat,
  Handshake,
  BookOpen,
  Home,
  Leaf,
};

export const iconNames = Object.keys(iconMap);

export const getIcon = (name: string): LucideIcon => iconMap[name] ?? Heart;
