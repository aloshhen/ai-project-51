import { motion } from 'framer-motion'
import { cn } from '../utils'

export default function CTA() {
  return (
    <section className="py-24 bg-coffee-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={cn(
            'bg-coffee-900 rounded-3xl',
            'px-8 py-12 text-center',
            'space-y-6'
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Ready to Experience Coffee Haven?
          </h2>
          <p className="text-coffee-200 text-lg max-w-2xl mx-auto">
            Join us for a cup of coffee that will awaken your senses and warm your soul.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-coffee-600 text-white px-8 py-4 rounded-2xl font-medium"
          >
            Book Your Table Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}