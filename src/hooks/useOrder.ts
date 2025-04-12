import { useState } from "react";
import type { OrderItem } from "../types";

export const useOrder = ()=> {
    const[ order, setOrder ] = useState<OrderItem[]>([]);

    const addItem = (): void =>{
        console.log("Añadiendo Item")
    }
    return{
        order,
        addItem,
    }
};