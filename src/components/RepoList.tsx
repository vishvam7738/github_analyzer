import { Card } from "../components/ui/card"

interface Repo {
  id: number
  name: string
  html_url: string
  description: string
}

interface Props {
  repos: Repo[]
}

export default function RepoList({ repos }: Props) {
  return (
    <div className="grid gap-4 mt-4">
      {repos.map((repo) => (
        <Card key={repo.id} className="p-4">
          <a href={repo.html_url} target="_blank" className="text-lg font-bold hover:underline">
            {repo.name}
          </a>
          <p className="text-sm text-muted-foreground">{repo.description}</p>
        </Card>
      ))}
    </div>
  )
}
