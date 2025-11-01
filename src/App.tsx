import { Routes, Route, Link } from 'react-router-dom'
import { Activity, Calendar, FileText, Link as LinkIcon, User } from "lucide-react"
import Button from "@mui/material/Button";
function App() {

  return (
    <>
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary"/>
            <h1 className="text-2xl font-bold text-primary">Portal de Pacientes</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="contained">
              <Link to=""/>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
