import Link from 'next/link'
import { Home } from 'lucide-react'

export default function GreetingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-500">
      <div className="text-center space-y-12 px-6">
        {/* Greeting message */}
        <div className="space-y-6">
          <h1 className="text-8xl md:text-9xl font-bold text-white drop-shadow-2xl animate-bounce-in">
            Hi
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light animate-fade-in-delayed">
            Welcome to the greeting page!
          </p>
        </div>

        {/* Back home link */}
        <div className="pt-8 animate-fade-in-delayed">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-10 py-4 text-lg font-medium text-white bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full hover:bg-white/30 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out"
          >
            <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}
