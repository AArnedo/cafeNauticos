import {Coffee, User, UserPlus } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="bg-amber-600 text-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Coffee className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">CafeNauticos</span>
            </div>
            <div className="flex items-center">
              <button className="flex items-center px-3 py-2 border rounded text-amber-50 border-amber-50 hover:bg-amber-700 hover:border-transparent">
                <User className="h-4 w-4 mr-2" />
                Login
              </button>
              <button className="ml-4 flex items-center px-3 py-2 border rounded text-amber-800 bg-amber-50 hover:bg-amber-100">
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}
