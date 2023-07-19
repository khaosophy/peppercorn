"use client"
import Image from 'next/image';
import clsx from 'clsx';

import Container from '@/components/Container'
import featureLoseWeight from '@/assets/images/feature--weight.jpg'
import featureSaveTime from '@/assets/images/feature--relax-cropped.jpg'
import featureSaveMoney from '@/assets/images/feature--money.jpg'

const features = [
  {
    name: 'Save money',
    summary: 'Stop buying too many groceries. Get just what you need.',
    description:
      'When you don\'t have a clear plan in mind, it\'s easy to buy too much food. Peppercorn makes it easy to buy just what you need.',
    image: featureSaveMoney,
  },
  {
    name: 'Save time',
    summary:
      'Stop wasting time trying to figure out what to cook every day.',
    description:
      'How much mental energy goes into figuring out what to cook for yourself or your family every day? Remove that stress. Let Peppercorn help.',
    image: featureSaveTime,
  },
  {
    name: 'Lose weight',
    summary:
      'When you eat out less, you will weigh less.',
    description:
      'Remove the temptation to eat out by planning your meals. You\'ll be surprised how much weight you lose when you cook at home more.',
    image: featureLoseWeight,
  },
]

function Feature({ feature, className, ...props }) {
  return (
    <div
      className={clsx(className)}
      {...props}
    >
      <div
        className={clsx('rounded-lg')}
      >
        <Image
          className="rounded-md bg-slate-50 shadow-md"
          src={feature.image}
          alt=""
          width={640}
          height={427}
          unoptimized
        />
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          'text-blue-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

export default function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Reasons it is important to plan your meals"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Food simplified.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Take the guesswork out of cooking. Eat healthier. Reduce stress.
          </p>
        </div>
        <div className="mt-20 flex flex-col lg:flex-row gap-20 px-4 sm:px-6">
          {features.map((feature) => (
            <div key={feature.name}>
              <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
