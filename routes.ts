import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  Code,
  VideoIcon,
  Settings,
  Music,
} from "lucide-react";

export const routes = [
  {
    label: "Dasboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },

  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },

  {
    label: "Image generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },

  {
    label: "Video generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },

  {
    label: "Music generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },

  {
    label: "Code generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
