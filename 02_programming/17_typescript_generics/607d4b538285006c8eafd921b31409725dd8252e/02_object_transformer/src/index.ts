type Product = {
  productName: string;
  quantity: number;
};

function productTransformer(objet: Product): [string, string | number][] {
  return [
    ["productName", objet.productName],
    ["quantity", objet.quantity],
  ];
}

// Leave the line below for tests to work properly.
export { productTransformer };
