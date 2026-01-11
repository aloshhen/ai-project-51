import { Coffee } from 'lucide-react'
import { cn } from '../utils'

export default function Navigation() {
  return (
    <nav className={cn(
      'fixed top-0 w-full z-50',
      'backdrop-blur-xl bg-white/80 border-b border-coffee-200/50'
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 text-coffee-600" />
          <span className="text-xl font-bold text-coffee-900">Coffee Haven</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#menu" className="text-coffee-700 hover:text-coffee-900">Menu</a>
          <a href="#reservation" className="text-coffee-700 hover:text-coffee-900">Reservation</a>
          <a href="#about" className="text-coffee-700 hover:text-coffee-900">About</a>
        </div>
      </div>
    </nav>
  )
}