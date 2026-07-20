import React from 'react'
import { MdOpenInNew } from 'react-icons/md';
import Table from "../common/Table/Table";
import { Link } from "react-router";

const LastProductTable = () => {
  const Buttons = () => {
    return (
      <Link
        to={"/products"}
        className="underline hover:text-blue-400 text-blue-500 flex-center gap-1"
      >
        <span>Products Page</span>
        <MdOpenInNew />
      </Link>
    );
  };

  return (
    <div>
      <Table header={{ title: "Products", Buttons: Buttons }}>
        {/* Children */}
      </Table>
    </div>
  );
}

export default LastProductTable