import EnterButton from './_components/enter-button'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center space-y-8 px-6">
        {/* Welcome heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg animate-fade-in">
            Welcome
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Click below to continue
          </p>
        </div>

        {/* Enter button */}
        <div className="pt-4">
          <EnterButton />
        </div>
      </div>
    </main>
  )
}
