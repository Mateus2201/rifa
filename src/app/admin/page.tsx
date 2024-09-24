import React from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

export default function Admin() {
    return (
        <div className='flex flex-col md:flex-row bg-white h-screen w-screen'>
            {/* Primeira Seção (esquerda no desktop) */}
            <section className='w-full md:w-1/4 py-5 px-2'>
                <Command className='bg-[#BAE1FF] text-white border rounded-lg'>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem className='text-white'>Calendar</CommandItem>
                            <CommandItem className='text-white'>Search Emoji</CommandItem>
                            <CommandItem className='text-white'>Calculator</CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem className='text-white border'>Profile</CommandItem>
                            <CommandItem className='text-white'>Billing</CommandItem>
                            <CommandItem className='text-white'>Settings</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </section>

            {/* Segunda Seção (central no desktop) */}
            <section className='w-full md:w-2/4 py-5 px-2 h-full'>
                <div className='border h-full rounded-lg text-white'>
                    {/* Conteúdo da seção */}
                </div>
            </section>

            {/* Terceira Seção (direita no desktop) */}
            <section className='w-full md:w-1/4 py-5 px-2 h-full'>
                <div className='border h-full rounded-lg text-white'>
                    <Command className='bg-black text-white border rounded-lg'>
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem className='bg-black text-white'>Calendar</CommandItem>
                                <CommandItem className='bg-black text-white'>Search Emoji</CommandItem>
                                <CommandItem className='bg-black text-white'>Calculator</CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="Settings">
                                <CommandItem className='bg-black text-white'>Profile</CommandItem>
                                <CommandItem className='bg-black text-white'>Billing</CommandItem>
                                <CommandItem className='bg-black text-white'>Settings</CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
            </section>
        </div>
    );
}
