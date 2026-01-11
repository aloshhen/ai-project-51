import { motion } from 'framer-motion'
import { cn } from '../utils'

export default function About() {
  return (
    <section className="py-24 bg-coffee-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-coffee-900">
              Our Story
            </h2>
            <p className="text-coffee-700 text-lg">
              Coffee Haven was born from a simple idea: to create a space where people could enjoy exceptional coffee in a warm and welcoming environment. Our journey began in 2015, and since then, we've been dedicated to sourcing the finest beans, perfecting our craft, and building a community around our love for coffee.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/800x600/?coffee,beans"
            alt="Coffee Beans"
            className="rounded-3xl shadow-xl shadow-coffee-900/10"
          />
        </motion.div>
      </div>
    </section>
  )
}