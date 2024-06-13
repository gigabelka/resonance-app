import { boardsApi } from "@/entities/board";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteBoard = () => {
  const deleteBoard = async (id: string) => {
    await mutateAsync(id);
  };

  const client = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id: string) => {
      return boardsApi.deleteBoard(id);
    },
    onSettled: async () => {
      await client.invalidateQueries({ queryKey: ["boards"] });
    },
  });

  return {
    deleteBoard,
    isPending,
  };
};
