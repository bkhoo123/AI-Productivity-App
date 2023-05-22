import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '../../public/images/Logo.png'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`h-screen flex flex-col items-center justify-center`}>

        <div className="flex flex-col justify-center items-center mt-5 "> 
          <div className="font-bold text-3xl my-10 ">AI / Business Playground</div>
          <Image
          className="w-[500px] h-[700px] rounded-md flex items-center justify-center]"
          src={Logo}
          />
          <Link className="my-10 bg-teal-600 font-semibold text-white rounded-md p-2 hover:bg-slate-500" href="/dashboard">Dashboard</Link>
        </div>

      
    </main>
  );
}