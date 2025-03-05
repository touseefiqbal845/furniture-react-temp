import React from "react";
import Layout from "../Layout";
import ShoppingCart from "./Cart";
import CustomHeader from "../CustomHeader/CustomHeader";

function CartPage() {
  return (
    <Layout>
      <div className="">
        <CustomHeader title="Cart" breadcrumbs={["Home", "Cart"]} />
        <ShoppingCart />
      </div>
    </Layout>
  );
}

export default CartPage;
