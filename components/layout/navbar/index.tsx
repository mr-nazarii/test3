import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/bigcommerce';
import { VercelMenu as Menu } from 'lib/bigcommerce/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search from './search';
// const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="fixed z-10 mb-0 flex w-full items-center justify-between bg-white bg-opacity-30 px-20 py-4 ">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full justify-between">
        <div className="visible flex w-full  md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            {/* <LogoSquare /> */}
            <div className="text-md ml-2  flex-none font-medium uppercase text-black md:hidden lg:block">
              AC INFINITY
            </div>
          </Link>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          {/* <Search /> */}
          {menu.length ? (
            <ul className="hidden text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="rounded-sm px-5 py-2 font-medium text-black  transition duration-300 ease-in-out	 hover:bg-white hover:bg-opacity-30"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
