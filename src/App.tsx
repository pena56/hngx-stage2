import { Route, Routes } from "react-router-dom"

import Index from "./pages"
import Movie from "./pages/movie-id"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  )
}

export default App
