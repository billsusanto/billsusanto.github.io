import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <Card className="overflow-hidden border border-border bg-card h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
          <CardDescription className="line-clamp-2 h-10">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 pt-0 flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-xs px-2 py-1 rounded-full ${tag.color} bg-secondary`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex justify-between">
          {source_code_link && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(source_code_link, "_blank")}
              className="gap-1"
            >
              <Github className="h-4 w-4" />
              Code
            </Button>
          )}

          {live_link && (
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open(live_link, "_blank")}
              className="gap-1"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
