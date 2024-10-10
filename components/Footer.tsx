import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              EventsHub is your go-to platform for discovering and booking exciting events worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="/events" className="text-muted-foreground hover:text-primary">Events</a></li>
              <li><a href="/login" className="text-muted-foreground hover:text-primary">Login</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; 2023 EventsHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer