import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { boardsApi } from "@/entities/board";
import { BoardId } from "@/shared/kernel";

export const useAddBoard = () => {
  const [boardName, setBoardName] = useState("");

  const client = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      const res = await boardsApi.addBoard({
        id: "2sgert5e56g456457" as BoardId,
        title: boardName,
        nodes: {},
      });
      setBoardName("");
      return res;
    },
    onSettled: async () => {
      await client.invalidateQueries({ queryKey: ["boards"] });
    },
  });

  return {
    boardName,
    setBoardName,
    onAddBoard: mutateAsync,
    isPending,
  };
};
