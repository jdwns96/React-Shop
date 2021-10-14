// function
export const selectCart = <T extends { id: number; quantity: number }>(state: T[], payload: T) => {
  const index = [...state].findIndex((elem) => elem.id === payload.id);
  if (index > -1) {
    const newList = [...state];
    const calcCart = {
      ...[...state][index],
      quantity: [...state][index].quantity + 1,
    };
    newList[index] = calcCart;
    return newList;
  } else {
    return [...state, { ...payload }];
  }
};

export const deleteCart = <T extends { id: number }>(state: T[], id: number) => {
  const result = [...state].filter((elem) => elem.id !== id);
  return result;
};

export const plusCart = <T extends { id: number; quantity: number }>(state: T[], id: number) => {
  const index = [...state].findIndex((elem) => elem.id === id);
  const newList = [...state];
  const calcCart = {
    ...[...state][index],
    quantity: [...state][index].quantity + 1,
  };
  newList[index] = calcCart;
  return newList;
};

export const minusCart = <T extends { id: number; quantity: number }>(state: T[], id: number) => {
  const index = [...state].findIndex((elem) => elem.id === id);
  const newList = [...state];
  if (newList[index].quantity === 1) return newList;
  const calcCart = {
    ...[...state][index],
    quantity: [...state][index].quantity - 1,
  };
  newList[index] = calcCart;
  return newList;
};

export const totalPrice = <T extends { price: number; quantity: number }>(cart: T[]) => {
  let result;
  result = cart.reduce((acc: number, cur: T, i: number) => {
    return (acc += cur.price * cur.quantity);
  }, 0);

  return result;
};
