import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Childcare from './pages/Childcare'
import Home from './pages/Home'
import Parties from './pages/Parties'
import Playground from './pages/Playground'
import Workshops from './pages/Workshops'


function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          
        </main>
      </div>
    </Router>
  );
}

export default App;
