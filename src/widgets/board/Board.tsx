import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription } from "@/shared/ui/card.tsx";

export const Board = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <Card className={"w-full h-full p-2"}>
      <CardDescription>Board ID : {id} </CardDescription>
      <CardContent></CardContent>
    </Card>
  );
};
