import { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"

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
      <Button
        type="submit"
        className="cursor-pointer group flex items-center gap-1"
      >
        Analyze
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 transform group-hover:translate-x-1"
        />
      </Button>
    </form>

  )
}
