import { useState } from 'react'

const hambugers = [
  {
    id: 1,
    name: 'Mini Gourmet',
    description: 'Pão brioche, 150g de carne caseira, cheddar',
    price: 22.40
  },
  {
    id: 2,
    name: 'Baccon Chedar',
    description: 'Pão brioche, 150g de carne caseira, cheddar, baccon, barbecue, tomate e alface',
    price: 24.50
  },
  {
    id: 3,
    name: 'Mega Burger',
    description: 'Pão brioche, 300g de carne caseira, 2 ovos, cebola crisp, tomate e alface',
    price: 30.90
  },
  {
    id: 4,
    name: 'Kit Combo',
    description: '2 Vegan Burger, 400g de fritas, 800ml de suco de laranja',
    price: 55.20
  },
  {
    id: 5,
    name: 'X Baccon',
    description: 'Pão, hamburger, baccon, barbecue, tomate e alface',
    price: 13.80
  }
]


export function Items() {
  return (
    <article className='w-full max-w-xl flex flex-col items-center border-light rounded-md'>
      {hambugers.slice(0, 5).map((Items, index) => (
        <div
          className='w-[98%] h-24 flex border-r-2 border-l-2 rounded-md items-center justify-between mb-4 p-4 cursor-pointer hover:border-secondary transition duration-300'
          key={index}>
          <div>
            <h3 className='title text-2xl md:text-3xl'>#{Items.id} {Items.name}</h3>
            <p className='title text-sm md:text-md'>{Items.description}</p>
          </div>
          <div>
            <span className='mr-2 text-sm'>R$</span>
            <span className='text-3xl md:text-5xl'>{Items.price.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      ))}
    </article>
  )
}