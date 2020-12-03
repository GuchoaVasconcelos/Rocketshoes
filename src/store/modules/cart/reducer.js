export default function Cart(state = [], action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];

    default:
      return state;
  }
}
