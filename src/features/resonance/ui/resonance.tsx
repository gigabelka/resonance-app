import { Button } from "@/shared/ui/button.tsx";
import { Input } from "@/shared/ui/input.tsx";

export const Resonance = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className={"flex flex-row gap-2"}
    >
      <Input
        className={"w-[200px]"}
        value={1}
        // onChange={(e) => setBoardName(e.target.value)}
        placeholder={"New board"}
      ></Input>
      <Button
      // disabled={!boardName.trim() || isPending}
      >
        +
      </Button>
    </form>
  );
};
