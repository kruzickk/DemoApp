'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

export default function EnterButton() {
  const router = useRouter()

  const handleClick = () => {
    router?.push?.('/greeting')
  }

  return (
    <button
      onClick={handleClick}
      className="group relative px-12 py-5 text-xl font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full hover:bg-white/30 hover:border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out"
    >
      <span className="flex items-center gap-3">
        Enter
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
    </button>
  )
}
