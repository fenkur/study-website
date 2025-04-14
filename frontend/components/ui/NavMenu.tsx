'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const NavMenu = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">Studious</h1>
      <NavigationMenu className="ml-auto">
        <NavigationMenuList className="space-x-4">
          <NavigationMenuItem>
            <Link href="/" passHref>
              <NavigationMenuLink asChild>
                <span className="px-4 py-2 text-sm font-medium hover:text-blue-500">Home</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/register" passHref>
              <NavigationMenuLink asChild>
                <span className="px-4 py-2 text-sm font-medium hover:text-blue-500">Register</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/login" passHref>
              <NavigationMenuLink asChild>
                <span className="px-4 py-2 text-sm font-medium hover:text-blue-500">Login</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/leaderboard" passHref>
              <NavigationMenuLink asChild>
                <span className="px-4 py-2 text-sm font-medium hover:text-blue-500">Leaderboard</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/profile" passHref>
              <NavigationMenuLink asChild>
                <span className="px-4 py-2 text-sm font-medium hover:text-blue-500">Profile</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default NavMenu
