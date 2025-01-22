import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
    return (
        <div className="">
            <Image src={"/auth/banner.jpg"} width={900} height={900} alt='banner' className='h-full w-full object-contain'/>
            <div className="absolute top-16 right-5">
            <SignUp />
            </div>
        </div>
    )
}