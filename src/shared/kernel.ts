import { z } from "zod";

export const BoardId = z.string().brand("Board");
export type BoardId = z.infer<typeof BoardId>;

export const NodeId = z.string().brand("NodeId");
export type NodeId = z.infer<typeof NodeId>;
