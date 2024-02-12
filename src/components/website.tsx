import globe from '../assets/globe.svg'

export function Globe(){
  return(
    <div className=' p-5  bg-cyan-300 rounded-full cursor-pointer hover:border-none hover:scale-125 duration-300 transition-transform hover:bg-cyan-500'>
    <img src={globe} className='size-16' />
  </div>
  )
}