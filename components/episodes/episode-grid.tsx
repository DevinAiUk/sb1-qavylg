"use client";

import { EpisodeCard } from "@/components/episodes/episode-card";

const MOCK_EPISODES = [
  {
    id: "1",
    title: "The Future of AI: Opportunities and Challenges",
    description: "An in-depth exploration of artificial intelligence's impact on society and technology.",
    duration: "54:32",
    publishedAt: "2024-03-20",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "Technology",
    tags: ["AI", "Technology", "Future"],
    listens: 1234,
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  },
  {
    id: "2",
    title: "Climate Change: Latest Scientific Findings",
    description: "Breaking down the most recent climate research and its implications.",
    duration: "48:15",
    publishedAt: "2024-03-18",
    thumbnail: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
    category: "Science",
    tags: ["Climate", "Science", "Environment"],
    listens: 982,
    author: {
      name: "Prof. Michael Roberts",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
  },
  {
    id: "3",
    title: "Digital Privacy in the Modern Age",
    description: "Understanding the complexities of privacy in our connected world.",
    duration: "62:45",
    publishedAt: "2024-03-15",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    category: "Technology",
    tags: ["Privacy", "Security", "Digital"],
    listens: 1567,
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  },
];

export function EpisodeGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {MOCK_EPISODES.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
}