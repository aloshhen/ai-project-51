import { cn } from '../utils'

export default function Footer() {
  return (
    <footer className={cn(
      'bg-coffee-900 text-coffee-200',
      'py-12'
    )}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Coffee Haven</h3>
            <p className="text-coffee-300">
              Where every cup tells a story. Experience the art of coffee in the heart of the city.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-coffee-300 hover:text-white">Menu</a></li>
              <li><a href="#reservation" className="text-coffee-300 hover:text-white">Reservation</a></li>
              <li><a href="#about" className="text-coffee-300 hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-coffee-300">123 Coffee Street, City</li>
              <li className="text-coffee-300">Phone: (123) 456-7890</li>
              <li className="text-coffee-300">Email: info@coffeehaven.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-coffee-800 mt-8 pt-8 text-center">
          <p className="text-coffee-400">© 2024 Coffee Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}