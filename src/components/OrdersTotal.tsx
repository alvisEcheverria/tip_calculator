import { useMemo, useCallback } from "react";
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrdersTotalProps = {
    orders: OrderItem[];
    tip: number;
    placeOrder: ()=> void;
}

export const OrdersTotal = ({ orders, tip, placeOrder }: OrdersTotalProps) => {

    const subtotalAmount = useMemo(()=> orders.reduce((acc, el) => acc + (el.price * el.quantity) , 0), [orders]);
    const tipAmount = useCallback(()=> subtotalAmount * tip, [ tip, subtotalAmount ]);
    const orderTotalAmount = useCallback(()=> subtotalAmount + tipAmount(), [ tipAmount, subtotalAmount ]);;

    return (
        <>
            <div className="space-y-3 uppercase">
                <h2 className="font-black text-2xl">totales y propinas:</h2>
                <p>
                    subtotal a pagar
                    <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
                </p>
                <p>
                    propina
                    <span className="font-bold"> {formatCurrency(tipAmount())}</span>
                </p>
                <p>     
                    total a pagar:
                    <span className="font-bold"> {formatCurrency(orderTotalAmount())}</span>
                </p>
            </div>
            <button className="w-full bg-black p-3 uppercase 
                disabled:opacity-5 text-white font-bold mt-10"
                disabled={subtotalAmount === 0}
                onClick={placeOrder}>
                guardar orden
            </button>
        </>
        
    )
};
