import Image from 'next/image'

import Button from '@/components/Button'
import Container from '@/components/Container'
import backgroundImage from '@/assets/images/background-call-to-action.jpg'

export default function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Be the First
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Take control of your meals. Sign up to get notified when the beta is available.
          </p>
          <Button href="#" size="lg" shape="rounded" color="white" className="mt-10">
            Sign Up Now
          </Button>
        </div>
      </Container>
    </section>
  )
}
