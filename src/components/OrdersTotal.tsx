import { useMemo } from "react";
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrdersTotalProps = {
    orders: OrderItem[];
}

export const OrdersTotal = ({ orders }: OrdersTotalProps) => {

    const subtotalAmount = useMemo(()=> orders.reduce((acc, el) => acc + (el.price * el.quantity) , 0), [orders]);
    const tipAmount = subtotalAmount * 0.10;
    const orderTotalAmount = subtotalAmount + tipAmount;

    return (
        <>
            <div className="space-y-3 uppercase">
                <h2 className="font-black text-2xl">totales y propinas:</h2>
                <p className="">
                    subtotal a pagar
                    <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
                </p>
                <p className="">
                    propina
                    <span className="font-bold"> {formatCurrency(tipAmount)}</span>
                </p>
                <p className="">
                    total a pagar:
                    <span className="font-bold"> {formatCurrency(orderTotalAmount)}</span>
                </p>
            </div>
            <button></button>
        </>
        
    )
}
