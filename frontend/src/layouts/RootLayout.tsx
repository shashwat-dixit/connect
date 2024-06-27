import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
