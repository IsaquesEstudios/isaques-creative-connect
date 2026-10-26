import { Camera, Crown, Megaphone, Monitor, Palette, Search, Share2 } from "lucide-react";
import type { ServiceIcon as IconName } from "@/lib/site";

const map = { megaphone: Megaphone, search: Search, monitor: Monitor, crown: Crown, share: Share2, palette: Palette, camera: Camera };

export function ServiceIcon({ name }: { name: IconName }) {
  const Icon = map[name];
  return <Icon aria-hidden />;
}
