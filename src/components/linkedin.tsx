
import linkedin from '../assets/linkedin.svg'



export function Linkedin(){
  return(
    <button className=' p-5  bg-cyan-300 rounded-full cursor-pointer hover:border-none hover:scale-125 duration-300 transition-transform hover:bg-cyan-500'>
    <a target='blank' href='https://www.linkedin.com/in/gustavo-alves-dos-santos-1263b72a8/'><img src={linkedin} className='size-16' /></a>
  </button>

  )
}