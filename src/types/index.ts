export type Items = {
    id: number;
    name: string;
    price: number
}

export type OrderItem = Items & {
    quantity: number;
}