import { motion } from 'framer-motion'
import { Coffee, Heart, Clock, Smile } from 'lucide-react'
import { cn } from '../utils'

export default function Features() {
  const features = [
    {
      icon: <Coffee className="w-8 h-8 text-coffee-600" />,
      title: "Premium Coffee",
      description: "Sourced from the finest beans around the world."
    },
    {
      icon: <Heart className="w-8 h-8 text-coffee-600" />,
      title: "Crafted with Love",
      description: "Every cup is prepared with passion and care."
    },
    {
      icon: <Clock className="w-8 h-8 text-coffee-600" />,
      title: "Fast Service",
      description: "Get your coffee quickly without compromising quality."
    },
    {
      icon: <Smile className="w-8 h-8 text-coffee-600" />,
      title: "Cozy Atmosphere",
      description: "Relax in our warm and inviting space."
    }
  ]

  return (
    <section className="py-24 bg-coffee-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -4 }}
              className={cn(
                'bg-white/80 backdrop-blur-xl',
                'rounded-3xl border border-coffee-200/50',
                'p-6 space-y-4'
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-coffee-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-coffee-900">{feature.title}</h3>
              <p className="text-coffee-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}