import { menuItems } from "./data/db";
import { MenuItem } from "./components/MenuItem";
import { useOrder } from "./hooks/useOrder";
import { OrderContents } from "./components/OrderContents";

function App() {

  const { orders, addItem } = useOrder();

  return (
    <>
      <header className='bg-indigo-400 py-5'>
        <h1 className='text-center text-4xl font-black'>
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <ul className="space-y-3 mt-10">
            {  
              menuItems.map(item => (
                <MenuItem 
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              )
            )}
          </ul>
        </div>
        <div className="border border-dashed border-slate-200 p-5 rounded-lg space-y-10">
          {
            orders.map((orderItem)=> (
              <OrderContents
                key={orderItem.id}
                order={orderItem}
              />
            )
          )}
        </div>
      </main>
    </>
  )
}

export default App;
