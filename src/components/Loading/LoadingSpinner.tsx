/** @format */
import React from "react";
import { Loader2 } from "lucide-react";

export const Icons = {
  spinner: Loader2,
};

const LoadingSpinner = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Icons.spinner className="h-25 w-25 animate-spin" />
    </div>
  );
};

export { LoadingSpinner };
