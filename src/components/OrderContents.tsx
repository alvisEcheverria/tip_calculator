import { formatCurrency } from '../helpers';
import { OrderItem } from '../types'

type OrderContentsProps = {
    orders: OrderItem[];
    removeItem: (item: OrderItem["id"]) => void;
}

export const OrderContents = ({ orders, removeItem } : OrderContentsProps) => {
  return (
    <>
      <h2 className="text-4xl font-black">Consumo</h2>
      <ul className='space-y-3 mt-5'>
        { 
          orders.map((orderItem: OrderItem)=> (
              <li className='flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b' 
                key={orderItem.id}>
                <div>
                  <p className='text-lg'>
                    {orderItem.name} - {formatCurrency(orderItem.price)}
                  </p>
                  <p className='font-black'>
                    Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.price * orderItem.quantity)}
                  </p>
                </div>

                <button className='cursor-pointer bg-red-600 h-8 w-8 rounded-full text-white font-black'
                  onClick={()=> removeItem(orderItem.id)}>
                  X
                </button>
              </li>
          ))
        }
      </ul>
    </>
  )
}
