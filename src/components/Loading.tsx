import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <section className="flex justify-center items-center h-[50vh]">
      <Loader className="size-4 animate-spin" />
    </section>
  );
};

export default Loading;
