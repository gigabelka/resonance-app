import { BoardId, NodeId } from "@/shared/kernel";

type Position = {
  relative?: NodeId;
  x: number;
  y: number;
};

type Dementions = {
  widhth: number;
  height: number;
};

type NodeBase = {
  id: NodeId;
};

type RectangleNode = NodeBase & {
  type: "rectangle";
  position: Position;
  dementions: Dementions;
};

type EdgeNode = NodeBase & {
  type: "edge";
  start: Position;
  end: Position;
};

type Node = RectangleNode | EdgeNode;

export type Board = {
  id: BoardId;
  title: string;
  nodes: Record<NodeId, Node>;
};
