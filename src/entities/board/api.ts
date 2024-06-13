import { baseApi } from "@/shared/api/instance.ts";
import { BoardId, NodeId } from "@/shared/kernel";
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

const NodeDTO = z.object({
  x: z.number(),
  y: z.number(),
});

export const BoardDTO = z.object({
  id: BoardId,
  title: z.string(),
  nodes: z.record(NodeId, NodeDTO),
});
const BoardListDTO = z.array(BoardDTO);

export type BoardListDTO = z.infer<typeof BoardListDTO>;
export type BoardDTO = z.infer<typeof BoardDTO>;
export const getBoardsList = async () => {
  const { data } = await baseApi.get<BoardListDTO>("/boards");
  return BoardListDTO.parse(data);
};

export const addBoard = (board: BoardDTO) => {
  return baseApi.post("/boards", board);
};

export const deleteBoard = (id: string) => {
  return baseApi.delete(`/boards/${id}`);
};

export const updateBoard = (board: BoardDTO) => {
  return baseApi.put(`/boards/${board.id}`, board);
};

export const bordsQueryOptions = queryOptions({
  queryFn: getBoardsList,
  queryKey: ["boards"],
});
