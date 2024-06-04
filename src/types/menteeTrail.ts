import { Trail } from "./trail";
import { TrailStatusType } from "./trailStatus";
import { User } from "./user";

export interface MenteeTrail {
  id: number;
  userId: number;
  trailId: number;
  point: number;
  status: TrailStatusType;
  createdAt: Date;

  trail?: Trail
  user?: User
}

export interface CreateMenteeTrail {
  userId: number;
  trailId: number;
}