import { useState } from "react"
import UserForm from "../components/UserForm"
import RepoList from "../components/RepoList"
import CommitChart from "../components/CommitChart"
import { fetchUserRepos, fetchCommitsByDay, fetchUserInfo } from "../utils/fetchGithub"
import { Repo } from "../types/github"
import { Skeleton } from "../components/ui/skeleton"
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert"

export default function HomePage() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [commitData, setCommitData] = useState<{ day: string; commits: number }[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [userInfo, setUserInfo] = useState<any>(null)

  const handleUsernameSubmit = async (username: string) => {
    setLoading(true)
    setError("")
    setRepos([])
    setCommitData([])
    setUserInfo(null)

    try {
      const [reposData, user] = await Promise.all([
        fetchUserRepos(username),
        fetchUserInfo(username),
      ])
      setRepos(reposData)
      setUserInfo(user)

      const commitsPerDay = await fetchCommitsByDay(username, reposData)
      setCommitData(commitsPerDay)
    } catch (err) {
      setError("Failed to fetch GitHub data. Check the username.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-3xl bg-white dark:bg-zinc-800 text-black dark:text-white shadow-xl rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          GitHub User Profile Analyzer 🤖
        </h1>

        <UserForm onSubmit={handleUsernameSubmit} />

        {loading && (
          <div className="mt-6 space-y-4">
            <Skeleton className="h-6 w-1/2 mx-auto" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        )}

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {userInfo && (
          <div className="flex items-center gap-4 mt-6">
            <img
              src={userInfo.avatar_url}
              alt="Avatar"
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h2 className="text-xl font-semibold">{userInfo.name || userInfo.login}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">@{userInfo.login}</p>
              {userInfo.bio && (
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-1">{userInfo.bio}</p>
              )}
            </div>
          </div>
        )}

        <RepoList repos={repos} />
        {commitData.length > 0 && <CommitChart data={commitData} />}
      </div>
    </main>

  )
}
