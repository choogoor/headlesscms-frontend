import { Routes, Route } from 'react-router-dom'
import Sample from './pages/Sample/Sample'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sample />} />
    </Routes>
  )
}

export default App
