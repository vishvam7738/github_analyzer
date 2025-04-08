import { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

interface Props {
  onSubmit: (username: string) => void
}

export default function UserForm({ onSubmit }: Props) {
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) onSubmit(username.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <Input
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button type="submit">Analyze</Button>
    </form>
  )
}
