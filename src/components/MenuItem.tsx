import type { Items } from "../types";

type MenuItemsProps = {
    item: Items; 
    addItem: (item: Items) => void
}

export const MenuItem = ({ item, addItem } : MenuItemsProps) => {
  return (
    <button className="w-full p-3 border-2 border-indigo-400 border-r-2 hover:bg-indigo-400 flex justify-between cursor-pointer"
      onClick={()=> addItem(item)}
    >
        <p>{item.name}</p>
        <p>{item.price}</p>
    </button>
  )
}
