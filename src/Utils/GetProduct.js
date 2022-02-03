import axios from "axios";

export const GetProduct = async (products) => {
  try {
    return Promise.all(
      products.map(async (product) => {
        const result = await axios.get(
          `https://fakestoreapi.com/products/${product}`
        );

        return result;
      })
    ).then((result) => {
      return result;
    });
  } catch (error) {
   console.log(error) 
  }
};
