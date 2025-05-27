import React from 'react'

function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BGone AI. Created by Joshua Fronda
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer