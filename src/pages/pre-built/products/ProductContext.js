import React, { useState, createContext } from "react";
import { productCardData } from "./ProductData";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [data, setData] = useState(productCardData);

  return <ProductContext.Provider value={{ contextData: [data, setData] }}>{props.children}</ProductContext.Provider>;
};
