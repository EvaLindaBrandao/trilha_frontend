import { Career } from "./career";
import { Mentor } from "./mentor";

export interface Trail {
  id: number;
  name: string; 
  description :string;
  point: number;
  imageSrc: string;
  areaId: number;
  career?: Career;
  mentor?: Mentor;
}