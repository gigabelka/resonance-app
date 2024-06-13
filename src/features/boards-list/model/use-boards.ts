import { useSuspenseQuery } from "@tanstack/react-query";
import { BoardListItem } from "./domain.ts";
import { boardsApi } from "@/entities/board/index.ts";

export const useBoards = (): BoardListItem[] => {
  const { data } = useSuspenseQuery({ ...boardsApi.bordsQueryOptions });
  return data;
};
