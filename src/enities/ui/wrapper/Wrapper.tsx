import React from "react";
import { PropsWithChildren } from "react";

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="max-w-screen-xl container mx-auto px-4">{children}</div>
);

export default Wrapper;
