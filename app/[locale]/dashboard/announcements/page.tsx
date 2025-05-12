import { AnnouncementsHeader } from "@/components/ui/announcements/header";
import { AnnouncementCard } from "@/components/ui/announcements/announcementCard";

export default function AnnouncementsPage() {
  return (
    <div className="p-5 flex flex-col gap-4">
      <AnnouncementsHeader />

      <AnnouncementCard />
      <AnnouncementCard />
    </div>
  );
}
