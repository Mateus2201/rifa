import { Bell, CircleEllipsis, CircleHelp, CirclePlus, Plus, ShoppingCart, Users } from 'lucide-react';
import image from '../../../public/images/MONEY.png'
import Image from 'next/image';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'


import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer/component';
import { FormNewRaffle } from '@/components/FormNewRaffles';

export default function newCampaign() {
    return <section className='h-screen w-screen bg-white'>
        <header className='h-20 flex items-center border-b-2 '>
            <div className='h-10 w-10 m-8'>
                <Image src={image} alt='Money' />
            </div>
            <nav className='absolute right-5 flex gap-3'>
                <button aria-label='Help' className='flex items-center justify-center h-10 w-10 bg-gray-300 rounded-md'>
                    <CircleHelp color='black' />
                </button>
                <button aria-label='Notifications' className='flex items-center justify-center h-10 w-10 bg-gray-300 rounded-md'>
                    <Bell color='black' />
                </button>
                <button aria-label='User settings' className='flex items-center justify-center h-10 w-10 bg-gray-300 rounded-md'>
                    <Users color='black' />
                </button>
            </nav>
        </header>
        <main>

            <section className='flex justify-center items-center p-3'>
                <div className=' w-full sm:w-1/3 my-3'>
                    <FormNewRaffle />
                </div>
            </section>
            <Footer />
        </main>
    </section>


}
