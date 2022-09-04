interface CardProps {
  screensize: string;
  text: string;
  image: any;
}

export function Card({screensize, text, image}: CardProps) {
  return (
    <div className={`w-[290px] h-64 sm:h-72 bg-gray rounded-md border-b-4 border-b-light pb-10 pr-10 pl-10 flex flex-col items-center justify-between ${screensize}`}>

      <img className='w-48 h-48 -mt-14 md:-mt-14' src={image} alt="olá mundo" />


      <p className='text-center text-sm leading-5 mb-6 sm:mb-4 sm:my-5'>{text}</p>

      <button className='w-full bg-primary hover:bg-secondary py-2 rounded-md transition duration-300 cursor-pointer title text-xl'>
        Ver mais
      </button>
    </div>
  )
}