import { routes } from "@/shared/routes";
import { createBrowserRouter, redirect } from "react-router-dom";
import { App } from "./app";
import { BoardsPage } from "@/widgets/boards";
import { BoardPage } from "@/widgets/board";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Spinner } from "@/shared/ui/spinner.tsx";
import { boardsApi } from "@/entities/board";
import { queryClient } from "@/shared/api/instance";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary
        fallback={
          <div className={"w-full h-full flex justify-center items-center"}>
            Something went wrong
          </div>
        }
      >
        <Suspense
          fallback={
            <div className={"w-full h-full flex justify-center items-center"}>
              <Spinner />
            </div>
          }
        >
          <App />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      { index: true, loader: () => redirect(routes.boards.getUrl()) },
      {
        path: routes.boards.getUrl(),
        element: <BoardsPage />,
        children: [
          {
            index: true,
            loader: async () => {
              const boards = await queryClient.fetchQuery(
                boardsApi.bordsQueryOptions,
              );

              return redirect(routes.board.getUrl(boards[0].id));
            },
            errorElement: <div>Error</div>,
          },
          {
            loader: async () => {
              await queryClient.prefetchQuery(boardsApi.bordsQueryOptions);
              return null;
            },
            path: routes.board.getUrl(":id"),
            element: <BoardPage />,
          },
        ],
      },
    ],
  },
]);
