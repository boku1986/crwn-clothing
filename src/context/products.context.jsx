import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // we use this useEffect to fire only once, when the component mounts
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
