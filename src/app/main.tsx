import React from "react";
import ReactDOM from "react-dom/client";
import { Resonance } from "../features/resonance/index";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router";
// import "./global.css";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { queryClient } from "@/shared/api/instance";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider> */}
    <Resonance />
  </React.StrictMode>,
);
