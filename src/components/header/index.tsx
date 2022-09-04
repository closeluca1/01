export function Header() {
  return(
    <header className='w-full flex items-center justify-center py-2 my-5'>
      <div className='w-11/12 max-w-6xl flex items-center justify-between py-2'>
        
        <nav className='w-80'>
          <ul className='w-full flex justify-between font-semibold'>
            <li className='hover:text-secondary transition duration-300 cursor-pointer'>Início</li>
            <li className='hover:text-secondary transition duration-300 cursor-pointer'>Hamburgers</li>
            <li className='hover:text-secondary transition duration-300 cursor-pointer'>Bebidas</li>
            <li className='hover:text-secondary transition duration-300 cursor-pointer'>Pizzas</li>
          </ul>
        </nav>

        <div className='flex items-end justify-between'>
          <span className='text-sm mb-1 mr-2'>R$</span>
          <span className='text-3xl'>0,00</span>
        </div>

      </div>
    </header>
  )
}