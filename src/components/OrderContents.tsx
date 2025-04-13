import { OrderItem } from '../types'

type OrderContentsProps = {
    order: OrderItem;
}

export const OrderContents = ({ order } : OrderContentsProps) => {
  return (
    <li>
        {order.name}
        {order.price}
        {order.quantity}
    </li>
  )
}
