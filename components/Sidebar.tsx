'use client';
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SidebarProps) => {

    const pathname = usePathname();

    return (
      <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
          <Link href='/' className='mb-12 cursor-pointer items-center gap-2'>
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
                {items.label}
                </Link>
            )
          })}
        </nav>
      </section>
    )
  }

export default Sidebar
