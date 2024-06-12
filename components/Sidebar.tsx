'use client';
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer';

const Sidebar = ({ user }: SidebarProps) => {

    const pathname = usePathname();

    return (
      <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
          <Link href='/' className='mb-12 flex cursor-pointer items-center gap-2'>
            <Image
              alt='Banqsy'
              src='/icons/app.svg' 
              width={34}
              height={34}
              className='size-[24px] max-xl:size-14'
            />
            <h1 className='sidebar-logo'>Banqsy</h1>
          </Link>
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

        <Footer user={user}/>
      </section>
    )
  }

export default Sidebar
