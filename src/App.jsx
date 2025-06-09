import { BrowserRouter, Routes, Route } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About.jsx'
import Childcare from './pages/Childcare.jsx'
import Home from './pages/Home.jsx'
import Parties from './pages/Parties.jsx'
import Playground from './pages/Playground.jsx'
import Workshops from './pages/Workshops.jsx'
import SummerCamp from './pages/SummerCamp.jsx'
import './app.css'

function App(){
  return (
    <BrowserRouter>
      <div className='body'>
        <Header/>
        <main className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/childcare' element={<Childcare />} />
            <Route path='/parties' element={<Parties />} />
            <Route path='/playground' element={<Playground />} />
            <Route path='/workshop' element={<Workshops />} />
            <Route path='/summer-camp' element={<SummerCamp />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
