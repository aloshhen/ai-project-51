import { motion } from 'framer-motion'
import { cn } from '../utils'

export default function Hero() {
  return (
    <section className={cn(
      'min-h-screen flex flex-col items-center justify-center',
      'bg-gradient-to-br from-coffee-100 via-coffee-50 to-coffee-100',
      'relative overflow-hidden'
    )}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-coffee-600 to-coffee-800 bg-clip-text text-transparent">
          Coffee Haven
        </h1>
        <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
          Where every cup tells a story. Experience the art of coffee in the heart of the city.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-coffee-600 text-white px-6 py-3 rounded-2xl font-medium"
          >
            Explore Menu
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-transparent border-2 border-coffee-600 text-coffee-600 px-6 py-3 rounded-2xl font-medium"
          >
            Book a Table
          </motion.button>
        </div>
      </motion.div>
      <img
        src="https://source.unsplash.com/800x600/?coffee,cafe"
        alt="Coffee"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    </section>
  )
}