'use client'

import { Bell, CircleHelp, Plus, Users } from 'lucide-react';
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
import { useRouter } from 'next/navigation'; // Import 'useRouter' com Tipos de navegação do Next.js
import { MouseEvent } from 'react';  // Tipando o evento de clique

export default function campaign() {
    const router = useRouter();

    // Função com tipo correto para eventos de clique
    function onClickNewRaffle(event: MouseEvent<HTMLButtonElement>) {
        router.push('/newCampaign');
    }

    return (
        <section className='h-screen w-screen bg-white'>
            <header className='h-20 flex items-center border-b-2'>
                <div className='h-10 w-10 m-8'>
                    <Image src={image} alt='Money' />
                </div>
                <nav className='absolute right-5 flex gap-3'>
                    <button aria-label='Help' className='flex items-center justify-center h-9 w-9 bg-gray-300 rounded-md'>
                        <CircleHelp color='black' />
                    </button>
                    <button aria-label='Notifications' className='flex items-center justify-center h-9 w-9 bg-gray-300 rounded-md'>
                        <Bell color='black' />
                    </button>
                    <button aria-label='User settings' className='flex items-center justify-center h-9 w-9 bg-gray-300 rounded-md'>
                        <Users color='black' />
                    </button>
                </nav>
            </header>
            <main>
                <section className='p-3 flex-row sm:block w-full'>
                    <div className='my-3 flex items-center justify-center w-auto'>
                        <Command className='rounded-lg border border-gray-300 shadow-md w-full sm:w-1/3'>
                            <CommandInput placeholder='Procure pela rifa...' />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading='Sugestões'>
                                    <CommandItem>
                                        <span>teste</span>
                                    </CommandItem>
                                </CommandGroup>
                                <CommandSeparator />
                            </CommandList>
                        </Command>
                    </div>
                    <div className='my-3 flex items-center justify-center w-full'>
                        <Button className='w-full md:w-1/3 p-5 bg-green-500' onClick={onClickNewRaffle}>
                            <Plus />
                            Nova Campanha
                        </Button>
                    </div>
                </section>
                <section>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-xl font-bold text-gray-500'>Suas rifas aparecerão aqui</h2>
                    </div>
                </section>

                <Footer />
            </main>
        </section>
    );
}
