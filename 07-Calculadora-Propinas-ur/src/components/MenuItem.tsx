import type { MenuItem } from "../types";
import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer.ts";

type MenuItemProps = {
    item: MenuItem;
    dispatch: Dispatch<OrderActions>;
}

export function MenuItem({ item, dispatch } : MenuItemProps) {
    return (
        <>
            <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 text-lg rounded-lg" onClick={() => dispatch({ type: 'add-item', payload: { item }})}>
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>
        </>
    );
}