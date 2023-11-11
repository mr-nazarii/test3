import Scene from 'components/animation';
// import { Carousel } from 'components/carousel';
// import { ThreeItemGrid } from 'components/grid/three-items';
// import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <div>
      {/* <ThreeItemGrid /> */}

      <Scene />

      <Suspense>
        {/* <Carousel /> */}
        {/* <Suspense>
          <Footer />
        </Suspense> */}
      </Suspense>
    </div>
  );
}
