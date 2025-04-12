import type { Items } from "../types";
import { useOrder } from "../hooks/useOrder"; 


type MenuItemsProps = {
    item: Items; 
}

export const MenuItem = ({ item } : MenuItemsProps) => {
  return (
    <button className="w-full p-3 border-2 border-indigo-400 border-r-2 hover:bg-indigo-400 flex justify-between cursor-pointer"
      onClick={useOrder().addItem}
    >
        <p>{item.name}</p>
        <p>{item.price}</p>
    </button>
  )
}
