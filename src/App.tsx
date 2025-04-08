import "./index.css"
import HomePage from "./pages/index"
import {ThemeToggle} from "./components/ThemeToggle"

function App() {
  return (
    <div className="bg-white dark:bg-zinc-900 text-black dark:text-white min-h-screen transition-colors">
      <header className="flex justify-between items-center p-4 shadow-md dark:shadow-none">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          GitHub Analyzer
        </h1>
        <ThemeToggle />
      </header>
      <main className="p-4">
        <HomePage />
      </main>
    </div>
  )
}

export default App
