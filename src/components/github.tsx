import github from '../assets/github.svg'


export function GitHub(){
  return(
    <div className=' p-5  bg-cyan-300 rounded-full cursor-pointer hover:border-none hover:scale-125 duration-300 transition-transform hover:bg-cyan-500'>
    <a target='blank' href='https://github.com/AlvesGus'><img src={github} className='size-16' /></a>
  </div>
  )
}