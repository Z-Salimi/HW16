import {
  Navigate,
  UNSAFE_ErrorResponseImpl,
  useRouteError,
} from "react-router-dom";
import React from "react";
import { NotFound } from "../pages/notFound";

export const ErrorBoundary: React.FC = () => {
  const error: any = useRouteError();

  if (
    error instanceof UNSAFE_ErrorResponseImpl &&
    (error as UNSAFE_ErrorResponseImpl).status === 404
  ) {
    // return <NotFound />;
  }
  return (
    <div>
      {/* <Navigate to={"/404"}/> */}
      <div className="flex flex-col justify-center items-center gap-4  p-5 bg-yellow-200">
        <h2 className="font-bold text-4xl text-red-800">
          Something is wrong...{" "}
        </h2>
        <h2 className="font-bold text-2xl text-red-800">
          {(error as Error).message}
        </h2>
      </div>
      <NotFound />
    </div>
  );
};
