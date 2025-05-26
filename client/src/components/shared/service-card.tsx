import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
}

export default function ServiceCard({ icon: Icon, title, description, features, image, href }: ServiceCardProps) {
  return (
    <Card className="service-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-3">
          <Icon className="text-primary text-2xl mr-3" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex-1">
          {description}
        </p>
        <ul className="text-sm text-gray-600 mb-4 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="text-accent w-4 h-4 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href={href}>
          <Button className="w-full bg-primary hover:bg-blue-700 text-white">
            Saiba Mais
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
