import { useState } from "react";
import type { Items, OrderItem } from "../types";

export const useOrder = ()=> {
    const[ orders, setOrder ] = useState<OrderItem[]>([]);

    const addItem = (item: Items): void => {
        const newItem = {...item, quantity: 1};
        const itemExist = orders.find((orderItem)=> orderItem.id === item.id);
        if(!itemExist){
            setOrder([...orders, newItem]);
        } else{
            const updatedOrder = orders.map((orderItem)=> {
                return orderItem.id === item.id 
                    ? {...orderItem, quantity: orderItem.quantity + 1}
                    : orderItem
            })
            setOrder(updatedOrder);
        };
    };

    const removeItem = (itemId: Items["id"]): void => {
        const updatedOrder = orders.filter(order => order.id !== itemId);
        setOrder(updatedOrder);
    }

    return{
        orders,
        addItem,
        removeItem
    };
};