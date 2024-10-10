"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { CalendarDays } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <CalendarDays className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold">EventsHub</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" passHref>
              <Button variant={pathname === '/' ? 'default' : 'ghost'}>Home</Button>
            </Link>
            <Link href="/events" passHref>
              <Button variant={pathname === '/events' ? 'default' : 'ghost'}>Events</Button>
            </Link>
            <Link href="/login" passHref>
              <Button variant="outline">Login</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar