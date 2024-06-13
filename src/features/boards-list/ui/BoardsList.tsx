import { useNavigate, useParams } from "react-router-dom";
import { routes } from "@/shared/routes.ts";
import { Card } from "@/shared/ui/card.tsx";
import { Button } from "@/shared/ui/button.tsx";
import { DeleteBoard } from "./DeleteBoard.tsx";
import { useBoards } from "../model/use-boards.ts";

export const BoardsList = () => {
  const boards = useBoards();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const onChangeBoard = (id: string) => {
    navigate(routes.board.getUrl(id));
  };

  return (
    <Card className={"flex flex-col w-[150px] h-full gap-1 "}>
      {boards?.map((board) => {
        return (
          <div key={board.id} className={"flex flex-row gap-2"}>
            <Button
              variant={`${id === board.id ? "default" : "ghost"}`}
              className={"w-full truncate"}
              onClick={() => onChangeBoard(board.id)}
            >
              {board.title}
            </Button>
            <DeleteBoard boardId={board.id} />
          </div>
        );
      })}
    </Card>
  );
};
