export const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
      case "ADD_TO_CART":
          return { ...state, cartList: payload.products };

      case "REMOVE_FROM_CART":
          return { ...state, cartList: payload.products };

      case "UPDATE_TOTAL":
          return { ...state, total: payload.total };

      case "FILTER_PRODUCTS":
          const searchTerm = payload.toLowerCase();
          const filteredProducts = searchTerm
              ? state.products.filter(product =>
                  product.name.toLowerCase().includes(searchTerm)
              )
              : []; // Return an empty array if there's no search term

          return {
              ...state,
              filterProduct: filteredProducts,
          };

      default:
          throw new Error("no cases found");
  }
};
