import { OrderItem } from '../types'

type OrderContentsProps = {
    orders: OrderItem[];
}

export const OrderContents = ({ orders } : OrderContentsProps) => {
  return (
    <>
      <h2 className="text-4xl font-black">Consumo</h2>
      <ul className='space-y-3 mt-5'>

        {
          orders.length === 0 ?
            <p className='text-center'>La orden está vacia</p>
            : (
            orders.map((orderItem: OrderItem)=> (
              <li key={orderItem.id}>
                <p className='text-lg'>
                  {orderItem.name} - {orderItem.price}
                </p>
                <p className='font-black'>
                  Cantidad: {orderItem.quantity}
                </p>
              </li>
            ))
          )
        }
      </ul>
    </>
  )
}
