import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/bigcommerce';
import { VercelMenu as Menu } from 'lib/bigcommerce/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
// const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav
      style={{
        borderBottom: '1px solid #00000025',
        background: '#171717a8',
        backdropFilter: 'blur(60px)',
        visibility: 'hidden'
      }}
      className="fixed z-50 mb-0 flex w-full items-center justify-between px-20 py-4 "
    >
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full justify-between">
        <div className="hidden justify-center md:flex md:w-1/3">
          {/* <Search /> */}
          {menu.length ? (
            <ul className="hidden text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="rounded-sm px-5 py-2 font-medium text-white   transition duration-300 ease-in-out	 hover:bg-white hover:bg-opacity-30"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className=" flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
