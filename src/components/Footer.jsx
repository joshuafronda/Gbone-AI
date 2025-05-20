import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Logo size={32} />
            <div className="ml-2">
              <h2 className="text-xl font-bold text-primary-600">BGone</h2>
              <p className="text-xs text-zinc-500">© 2025 All rights reserved</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm mb-6 md:mb-0">
            <div>
              <h3 className="font-medium text-zinc-800 mb-2">Product</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-zinc-500 hover:text-primary-600 transition-colors">Features</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-primary-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-primary-600 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-zinc-800 mb-2">Company</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-zinc-500 hover:text-primary-600 transition-colors">About</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-primary-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-primary-600 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-zinc-800 mb-2">Legal</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-zinc-500 hover:text-primary-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-primary-600 transition-colors">Terms</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-primary-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            >
              <FiTwitter size={16} />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            >
              <FiGithub size={16} />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            >
              <FiInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer