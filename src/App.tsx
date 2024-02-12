import gustavo from './assets/gustavo.jpg'
import { Globe } from './components/website'
import { Linkedin } from './components/linkedin'
import { GitHub } from './components/github'

export default function App() {
  return (
    <div className="bg-gradient-to-b from-slate-500/50 to-slate-900 w-full h-[100vh] flex flex-col space-y-8 items-center">
      <div>
        <img src={gustavo} className='rounded-full size-[250px] border-[5px] border-cyan-700 mt-20' />
      </div>
      <div className="text-slate-700 font-bold flex flex-col items-center">
        <div>
        <h1 className='text-7xl mb-5'>Gustavo Alves</h1>
        <p className="flex items-center justify-center text-lg gap-3">Web Developer <div className="size-2  rounded-full item-center justify-center bg-slate-700"/> React </p>
      </div>
      <div className='flex flex-row item-center justify-center w-auto gap-10 mt-10'>
      
       <GitHub/>
       <Linkedin/>
       <Globe/>
      </div>
      </div>

    
    </div>
  )
}