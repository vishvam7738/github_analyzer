import { Repo } from "../types/github"

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const headers: HeadersInit = {
  Accept: "application/vnd.github.v3+json",
}

if (GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${GITHUB_TOKEN}`
}

export const fetchUserRepos = async (username: string): Promise<Repo[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers,
  })

  if (!response.ok) {
    throw new Error("GitHub user not found")
  }

  const data = await response.json()
  return data
}

export const fetchCommitsByDay = async (username: string, repos: Repo[]) => {
  const dayMap: Record<string, number> = {
    Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0
  }

  for (const repo of repos) {
    const url = `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}`

    try {
      const res = await fetch(url, { headers })
      if (!res.ok) continue // skip if fetch fails

      const data = await res.json()

      for (const commit of data) {
        const dateStr = commit?.commit?.author?.date
        if (dateStr) {
          const day = new Date(dateStr).toLocaleDateString("en-US", {
            weekday: "short",
          })
          dayMap[day] = (dayMap[day] || 0) + 1
        }
      }
    } catch (err) {
      console.warn(`⚠️ Failed to fetch commits for ${repo.name}`)
    }
  }

  return Object.entries(dayMap).map(([day, commits]) => ({ day, commits }))
}

export const fetchUserInfo = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}`, { headers })
  if (!res.ok) throw new Error("Failed to fetch user info")
  return res.json()
}

