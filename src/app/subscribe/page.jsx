import Image from 'next/image';
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import SubscribeForm from './SubscribeForm';

import backgroundImage from '@/assets/images/background-auth.jpg';

export const metadata = {
  title: 'Subscribe for Updates | Peppercorn',
  description: 'Sign up for a free Peppercorn account and start planning your weekly meals today.',
};

export default function Subscribe() {
  return (
    <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            <div className="flex flex-col">
              <Link href="/" aria-label="Home">
                <Logo className="h-10 w-auto" width={110} height={40} />
              </Link>
              <div className="mt-20">
                <h2 className="text-lg font-semibold text-gray-900">
                  Be the First
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                  Shape the future. Sign up to try the beta.
                </p>
              </div>
            </div>
            <SubscribeForm />
          </div>
        </div>
        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage}
            alt=""
            unoptimized
          />
        </div>
    </div>
  )
}