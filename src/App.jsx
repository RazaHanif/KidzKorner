import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About.jsx'
import Childcare from './pages/Childcare.jsx'
import Home from './pages/Home.jsx'
import Parties from './pages/Parties.jsx'
import Playground from './pages/Playground.jsx'
import Workshops from './pages/Workshops.jsx'

function App(){
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <div>Hello World!</div>
      </main>
    </div>
  );
}

export default App;
