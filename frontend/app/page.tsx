import Footer from "@/components/ui/Footer";
import NavMenu from "@/components/ui/NavMenu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <NavMenu />

      {/* Hero and Content */}
      <main className="flex-grow">
        <section className="text-center px-6 py-20 bg-gray-100 dark:bg-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Level Up Your Coding Skills
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Track your coding sessions, earn EXP, and climb the leaderboard. Join a community of motivated developers!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm md:text-base">
                Get Started
              </button>
            </Link>
            <Link href="/login">
              <button className="border border-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-300 px-6 py-2 rounded-xl text-sm md:text-base">
                Log In
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-16 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">⏱️ Track Time</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Use a built-in timer to log coding sessions and stay productive.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">💡 Earn EXP</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Gain experience points for every session and level up over time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">🏆 Leaderboard</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                See how you rank against other coders and climb the board.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
