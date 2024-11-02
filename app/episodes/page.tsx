import { EpisodeGrid } from "@/components/episodes/episode-grid";
import { EpisodeFilters } from "@/components/episodes/episode-filters";
import { EpisodeSearch } from "@/components/episodes/episode-search";

export default function EpisodesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Episodes</h1>
          <p className="text-muted-foreground">
            Explore our collection of in-depth analysis and discussions.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <EpisodeSearch />
            <EpisodeFilters />
          </div>
          <EpisodeGrid />
        </div>
      </div>
    </div>
  );
}