import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className={"h-[100vh] w-full"}>
      <Outlet />
    </div>
  );
}
