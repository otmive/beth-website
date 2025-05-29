export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-white animate-bounce">
          Coming Soon
        </h1>
        <p className="text-2xl text-white/90 font-light">
          Something awesome is brewing...
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-white animate-pulse delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-white animate-pulse delay-300"></div>
        </div>
      </div>
    </main>
  );
}