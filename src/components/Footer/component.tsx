import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { CircleEllipsis, CirclePlus, ShoppingCart } from 'lucide-react'

export default function Footer() {
    return <div>
<footer className='absolute bottom-0 border-t-2 flex items-center justify-center w-full h-16  bg-gray-100'>
                {/* <Menubar className='border-0 shadow-none w-full bottom-1 flex items-center justify-center space-x-8 bg-gray-100'>
                    <MenubarMenu>
                        <MenubarTrigger className='block'>
                            <CirclePlus className='w-10 h-10' color='gray' size={48} strokeWidth={3} absoluteStrokeWidth />
                            <p>Nova Rifa</p>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className='block'>
                            <CircleEllipsis className='w-10 h-10' color='gray' size={48} strokeWidth={3} absoluteStrokeWidth />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className='block'>
                            <ShoppingCart className='w-10 h-10' color='gray' size={48} strokeWidth={3} absoluteStrokeWidth />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                </Menubar> */}

            </footer>
    </div>

}
