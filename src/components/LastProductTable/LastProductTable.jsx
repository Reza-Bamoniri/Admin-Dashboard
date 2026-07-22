import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import Table from "../common/Table/Table";
import { Link } from "react-router";
import TableHead from "../common/Table/elements/TableHead";
import { productsTableHeadRow, products } from "../../data/products";
import TableHeadCell from "../common/Table/elements/TableHeadCell";
import TableBody from "../common/Table/elements/TableBody";
import TableRow from "../common/Table/elements/TableRow";
import TableCell from "../common/Table/elements/TableCell";
import RemoveProductIcon from "./RemoveProductIcon";
import ChangePublication from "./ChangePublication";
import EditProductIcon from "./EditProductIcon";

const LastProductTable = ({allProducts}) => {
  const [lastProducts, setLastProducts] = useState([...products]);

  const removeProduct = (id) => {
    const updatedProducts = lastProducts.filter((product) => product.id !== id);
    setLastProducts(updatedProducts);
  };

  const ChangePublicationProduct = (id) => {
    const updatedProducts = lastProducts.map((product) => {
      return product.id === id
        ? { ...product, isPublished: !product.isPublished }
        : { ...product };
    });

    setLastProducts(updatedProducts);
  };

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
      <Table header={{ title: "Products", Buttons: Buttons }}
       products={allProducts} setProducts={setLastProducts}>

        
        <TableHead>
          {productsTableHeadRow.map((item) => {
            return <TableHeadCell key={item}>{item}</TableHeadCell>;
          })}
        </TableHead>

        <TableBody>
          {lastProducts.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id.slice(0, 10)}...</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>
                  <p
                    className={
                      product.isPublished
                        ? "success-badge badge"
                        : " badge danger-badge"
                    }
                  >
                    {product.isPublished ? "Public" : "Private"}
                  </p>
                </TableCell>
                <TableCell>{product.price.toLocaleString()} $</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <RemoveProductIcon
                      product={product}
                      handleRemove={removeProduct}
                    />
                    <ChangePublication
                      product={product}
                      handlePublication={ChangePublicationProduct}
                    />
                    <EditProductIcon product={product} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default LastProductTable;
