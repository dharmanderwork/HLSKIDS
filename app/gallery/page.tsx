import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCategories from "@/components/gallery/GalleryCategories";
import GalleryMasonry from "@/components/gallery/GalleryMasonry";
import GalleryCta from "@/components/gallery/GalleryCta";

export const metadata = {
  title: "Gallery | HLS KIDS",
  description:
    "Explore the vibrant world of HLS KIDS through our photo gallery. Classrooms, activities, events, and joyful moments captured forever.",
};

export default function GalleryPage() {
  return (
    <main className="w-full pt-10">
      <GalleryHero />
      <GalleryCategories />
      <GalleryMasonry />
      <GalleryGrid />
      <GalleryCta />
    </main>
  );
}