import { ReactElement } from "react";

export interface AccordionDataType {
  id: number;
  title: string;
  body: string;
}

export interface CardProps {
  id: number;
  icon: React.ElementType;
  title: string;
  text: string;
  size?: number;
}

export interface TestimonyCardProps {
  id?: number;
  icon: ReactElement;
  name: string;
  stars: number;
  text: string;
}

export interface ExplorePagesType {
  id: number;
  title: string;
  body: string;
}
