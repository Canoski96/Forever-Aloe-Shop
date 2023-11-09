"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IContext, IProduct, IState, ItemKey } from "@/app/model";
import { useLocalStorage } from "@mantine/hooks";

export const AppContext = createContext<IContext>(null as any);

interface IAppContextProviderProps {
  children: ReactNode;
}

const initialState: IState = {
  cart: [],
  wishlist: [],
  checkout: [],
};

const AppContextProvider: React.FC<IAppContextProviderProps> = ({
  children,
}) => {
  // const [state, setState] = useState<IState>(initialState);
  const [state, setState] = useLocalStorage<IState>({
    key: "forever-aloe",
    defaultValue: initialState,
  });

  if (!state) {
    // handle the case where state is undefined
    return null;
  }

  // const addItem = (key: ItemKey, product: IProduct, count?: number) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     [key]: [...prevState[key], { ...product, count: count || 1 }],
  //   }));
  // };

  const addItem = (key: ItemKey, product: IProduct, count?: number) => {
    setState((prevState) => {
      const existingItemIndex = prevState[key].findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex >= 0) {
        // If item already exists in the state, do nothing
        return prevState;
      } else {
        // If item does not exist in the state, add a new item
        return {
          ...prevState,
          [key]: [...prevState[key], { ...product, count: count || 1 }],
        };
      }
    });
  };

  const removeItem = (key: ItemKey, productId: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: prevState[key].filter((item) => item.id !== productId),
    }));
  };

  const increaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === productId);
    items[index].count += 1;
    setState((prevState) => ({ ...prevState, [key]: items }));
  };

  const decreaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === productId);
    if (items[index].count > 1) {
      items[index].count -= 1;
    }
    setState((prevState) => ({ ...prevState, [key]: items }));
  };

  const resetItems = (key: ItemKey) => {
    setState((prevState) => ({
      ...prevState,
      [key]: [],
    }));
  };

  const isAdded = (key: ItemKey, productId: string): boolean => {
    return state[key].some((item) => item.id === productId);
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        increaseCount,
        decreaseCount,
        isAdded,
        resetItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
