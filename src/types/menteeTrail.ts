import { TrailStatusType } from "./trailStatus";

export interface MenteeTrail {
  id: number;
  userId: number;
  trailId: number;
  point: number;
  status: TrailStatusType;
  createdAt: Date;
}

export interface CreateMenteeTrail {
  userId: number;
  trailId: number;
}