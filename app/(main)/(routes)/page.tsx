import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div >
    {/* <h1 className='text-3xl font-bold text-green-600'>discord clone</h1>
       <Button>click me</Button> */}
       <UserButton afterSignOutUrl='/'/>
       <ModeToggle/>
    </div>
    </>
  )
}
