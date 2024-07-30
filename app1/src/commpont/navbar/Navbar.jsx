import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: 'about', current: false },
  { name: 'Portfolio', href: 'portfolio', current: false },
  { name: 'Contact', href: 'contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
  return (
<>
 {/* <nav className='navbar fixed right-0 top-0 left-0'>
          <div className='container'>
            <div>
                <ul className='flex justify-around items-center'>
                  <div>
                    <li>     
                   <Link to='' className='text-white text-3xl font-bold	'>START FRAMEWORK</Link>
                    </li>
                    </div>
                    <div className='flex'>
                    <li>     
                   <NavLink to='about' className='text-white text-xl font-bold	px-4'>About</NavLink>
                    </li>
                    <li>     
                   <NavLink to='portfolio' className='text-white text-xl px-4 font-bold	'>Portfolio</NavLink>
                    </li>
                    <li>     
                   <NavLink to='contact' className='text-white text-xl	px-4 font-bold'>Contact</NavLink>
                    </li>
                    </div>
                </ul>
            </div>
            </div>


 </nav> */}
 <Disclosure as="nav" className="bg-gray-800 fixed top-0 right-0 left-0 z-9999">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center lg:pe-96 ">     
                <Link to='' className='text-white text-3xl font-bold	'>START FRAMEWORK</Link>
            </div>
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-white text-xl font-bold',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>

 

</>
  )
}
