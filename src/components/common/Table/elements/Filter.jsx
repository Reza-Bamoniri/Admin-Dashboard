import React from "react";
import { HiFilter } from "react-icons/hi";

const Filter = () => {
  return (
    <button className="flex-center gap-1 border primary-border-color">
      <HiFilter className="text-lg" />
      <span className="text-sm">Filter</span>
    </button>
  );
};

export default Filter;
