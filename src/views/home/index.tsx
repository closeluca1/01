import { Meta } from '../../components/head';
import { Card } from '../../components/card';
import { Items } from '../../components/items/hamburger';

import hamburgerImage from '../../assets/hambugers.svg';
import drinks from '../../assets/drinks.svg';
import pizza from '../../assets/pizza.svg';



export function Home() {
  return (
    <main className='w-full min-h-screen flex flex-col items-center'>

      <Meta
        title='Início'
        description='Cardápio online'
      />

      <section className='w-11/12 h-72 max-w-6xl bg-dark border-b-4 border-b-gray rounded-md px-4 sm:pl-12 pt-10 sm:pr-12 mb-48'>

        <div className='w-full flex items-center sm:justify-between flex'>
          <span className='text-lg hidden md:block w-36'>Início / Cardápio</span>
          <h3 className='title text-center text-4xl w-full md:hidden'>Bem vindo!</h3>
          <h3 className='title text-center text-4xl hidden md:block'>Variedades</h3>
          <span className='w-36 text-end text-lg hidden md:block'>Ver tudo</span>
        </div>

        <div className='w-full flex items-center justify-center mt-24 sm:flex md:hidden'>

          <Card
            text='Conheça nossas várias opções de hamburgers classicos e gourmet'
            image={hamburgerImage}
            screensize=''
          />
        </div>

        <div className='w-full hidden md:flex items-center justify-between mt-20'>

          <Card
            text='Conheça nossas várias opções de hamburgers classicos e gourmet'
            image={hamburgerImage}
            screensize=''
          />

          <Card
            text='Sua ocasião pede; A bebida preferida não pode faltar'
            image={drinks}
            screensize=''
          />

          <Card
            text='Pizzas de sabores e tamanhos diversos para toda a ocasião'
            image={pizza}
            screensize='md:hidden lg:flex'
          />
        </div>

      </section>

      <section className='w-11/12 flex px-3 mt-10'>
        <Items />
      </section>
    </main>
  )
}