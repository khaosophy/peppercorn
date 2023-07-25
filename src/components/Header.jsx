"use client"
import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import supabase from '@/lib/supabase';
import Link from './Link'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'
import NavLink from './NavLink'
import routes from '@/routes.config'

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 origin-top rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <ul className="flex flex-col text-right">
              <NavLink href={routes.home}>Home</NavLink>
              <NavLink href={routes.recipes}>Recipes</NavLink>
              <NavLink href={routes.mealplans}>Meal Plan</NavLink>
            </ul>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavList({ className }) {
  return (
    <ul className={className}>
      <li>
        <NavLink href={routes.home}>Home</NavLink>
      </li>
      <li>
        <NavLink href={routes.recipes}>Recipes</NavLink>
      </li>
      <li>
        <NavLink href={routes.mealplans}>Meal Plan</NavLink>
      </li>
    </ul>
  )
}

function HeaderActions() {
  return (<>
    <div className="hidden sm:block">
      <NavLink href={routes.login}>Sign in</NavLink>
    </div>
    <Button href={routes.register} color="blue" shape="rounded">
      <span>
        Get started <span className="hidden lg:inline">today</span>
      </span>
    </Button>
  </>)
}

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) console.log(sessionError);
      if (session) setIsLoggedIn(true);
      if (!session) setIsLoggedIn(false);
    }
    getSession();
  }, []);

  return (
    <header className="py-6 border-b border-slate-100">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <Link href={routes.home} aria-label="Home">
            <Logo className="h-10 w-auto" width={200} height={74} />
          </Link>
          <div className="flex items-center gap-x-5 sm:gap-x-8">
            {isLoggedIn && (<>
              <NavList className="hidden sm:flex sm:gap-x-6" />
              <div className="-mr-1 sm:hidden">
                <MobileNavigation />
              </div>
            </>)}
            {isLoggedIn === false && (<>
              <HeaderActions />
            </>)}
          </div>
        </nav>
      </Container>
    </header>
  )
}
