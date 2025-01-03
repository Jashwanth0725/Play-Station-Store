export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

export const discount = (basket) => getBasketTotal(basket) / 10;

export const totalPrice = (basket) => getBasketTotal(basket) - discount(basket);

export const quantityCount = (basket) => {
  let count = 0;
  basket.forEach((item) => {
    count += item.quantity;
  });
  return count;
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      const productIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedBasket = [...state.basket];
      if (action.item.quantity > 0) {
        if (productIndex >= 0) {
          // Update the quantity if the item exists
          updatedBasket[productIndex] = {
            ...updatedBasket[productIndex],
            quantity:
              updatedBasket[productIndex].quantity + action.item.quantity,
          };
        } else {
          // Add the item if it doesn't exist
          updatedBasket.push(action.item);
        }
      } else {
        console.warn("Adding to cart cannot be done as qunatity is < 1");
      }

      return {
        ...state,
        basket: updatedBasket,
      };

    case "REMOVE_FROM_BASKET":
      // const index = state.basket.findIndex(
      //   (basketItem) => basketItem.id === action.id
      // );
      // let newBasket = [...state.basket];
      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn(
      //     `Can't remove product (id: ${action.id}) as its not in basket!`
      //   );
      // }
      return {
        // ...state,
        // basket: newBasket,

        ...state,
        basket: state.basket.filter(
          (basketItem) => basketItem.id !== action.id
        ),
      };

    case "INCREASE_QUANTITY":
      const indexQuantity = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasketIncrease = [...state.basket];
      if (indexQuantity >= 0) {
        console.log(newBasketIncrease[indexQuantity].quantity);
        newBasketIncrease[indexQuantity] = {
          ...newBasketIncrease[indexQuantity],
          quantity: newBasketIncrease[indexQuantity].quantity + 1,
        };
        console.log(newBasketIncrease[indexQuantity].quantity);
      } else {
        console.warn(
          `Can't update quantity of product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasketIncrease,
      };

    case "DECREASE_QUANTITY":
      const indexDecreaseQuantity = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasketDecrease = [...state.basket];

      if (indexDecreaseQuantity >= 0) {
        const currentQuantity =
          newBasketDecrease[indexDecreaseQuantity].quantity;

        if (currentQuantity > 1) {
          newBasketDecrease[indexDecreaseQuantity] = {
            ...newBasketDecrease[indexDecreaseQuantity],
            quantity: currentQuantity - 1,
          };
        } else {
          newBasketDecrease.splice(indexDecreaseQuantity, 1);
        }
      } else {
        console.warn(
          `Can't update quantity of product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasketDecrease,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "LOAD_CART":
      return {
        ...state,
        basket: action.cart, // Loaded cart from localStorage
      };

    case "TOTAL_SAVE":
      return {
        ...state,
        total: action.total,
      };

    default:
      return state;
  }
};

export default reducer;
