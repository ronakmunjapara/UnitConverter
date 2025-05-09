
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ConverterCardProps {
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export default function ConverterCard({
  title,
  description,
  className,
  children
}: ConverterCardProps) {
  return (
    <Card className={cn("converter-card", className)}>
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
