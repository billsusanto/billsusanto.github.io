import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, BuildingIcon } from "lucide-react";

const ExperienceItem = ({ experience, index }) => {
  const { title, company_name, icon, iconBg, date, points } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8"
    >
      <Card className="overflow-hidden border border-border">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: iconBg || "hsl(var(--muted))" }}
            >
              <img
                src={icon}
                alt={company_name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <CardDescription className="flex items-center gap-1 text-sm">
                <BuildingIcon className="w-3.5 h-3.5" />
                {company_name}
              </CardDescription>
              <CardDescription className="flex items-center gap-1 text-sm">
                <CalendarIcon className="w-3.5 h-3.5" />
                {date}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <ul className="space-y-2 mt-2 list-disc list-inside text-sm text-muted-foreground">
            {points.map((point, pointIndex) => (
              <li key={pointIndex} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceItem;
