import React from "react";
import ProductListComponent from "./ProductListPage";
import Layout from "../Layout";
import StoreProfile from "./Profile";
import CustomHeader from "../CustomHeader/CustomHeader";

const ProductListPage = () => {
  return (
    <Layout>
      <CustomHeader
        title="Vendor profile"
        breadcrumbs={["Home", "Vendor profile "]}
      />

      <div className="container mx-auto lg:px-8 lg:py-8">
        <StoreProfile />
        <ProductListComponent />
      </div>
    </Layout>
  );
};

export default ProductListPage;
