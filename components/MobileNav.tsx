'use client';
import React from 'react'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
  

const MobileNav = ({ user } : MobileNavProps) => {
    const pathname = usePathname();

  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image 
                src='/icons/hamburger.svg'
                width={30}
                height={30}
                alt='menu'
                className='cursor-pointer'
                />
            </SheetTrigger>
            <SheetContent side='left'className='border-none bg-white'>
                        <Link href='/' className='flex cursor-pointer items-center gap-1 px-4'>
                        <Image
                        alt='Banqsy'
                        src='/icons/app.svg' 
                        width={34}
                        height={34}
                        />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Banqsy</h1>
                    </Link>

                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>

                                {sidebarLinks.map((items) => {

                                const isActive = pathname === items.route || pathname.startsWith(`${items.route}/`)

                                return (
                                    <Link 
                                    className={cn('sidebar-link', {'bg-bank-gradient' : isActive})}
                                    href={items.route}
                                    key={items.label}>

                                    <div className='relative size-6'>
                                    <Image 
                                    src={items.imgURL}
                                    alt={items.label}
                                    fill
                                    className={cn({ 'brightness-[3] invert-0' : isActive })}
                                    />
                                    </div>
                                    <p className={cn('sidebar-label', {'!text-white' : isActive})}>
                                    {items.label}
                                    </p>
                                    </Link>
                                )
                                })}
                            </nav>
                        </SheetClose>
                    </div>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav
