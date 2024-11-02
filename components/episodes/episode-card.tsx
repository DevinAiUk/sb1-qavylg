import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Play, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Episode {
  id: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  thumbnail: string;
  category: string;
  tags: string[];
  listens: number;
  author: {
    name: string;
    avatar: string;
  };
}

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            className="object-cover"
          />
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-4 right-4 h-10 w-10 rounded-full"
          >
            <Play className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <Badge className="w-fit" variant="secondary">
          {episode.category}
        </Badge>
        <h3 className="line-clamp-2 text-lg font-semibold">
          <Link href={`/episodes/${episode.id}`} className="hover:underline">
            {episode.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {episode.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={episode.author.avatar} alt={episode.author.name} />
              <AvatarFallback>{episode.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-sm">
              <span className="font-medium">{episode.author.name}</span>
              <span className="text-muted-foreground">
                {formatDistanceToNow(new Date(episode.publishedAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{episode.duration}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}