"use client"
import RequireAuth from "@/components/user/RequireAuth"

function Home() {
  return (
    <div>
      hello
    </div>
  )
}


export default RequireAuth(Home);