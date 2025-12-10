import { BrowserRouter, Routes, Route } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About.jsx'
import Childcare from './pages/Childcare.jsx'
import Home from './pages/Home.jsx'
import Parties from './pages/Parties.jsx'
import Playground from './pages/Playground.jsx'
import Workshops from './pages/Workshops.jsx'
import Camp from './pages/Camp.jsx'
import './app.css'

function App(){
  return (
    <BrowserRouter>
      <div className='bg-(--primary) flex flex-col min-h-dvh '>
        <Header/>
        <main className='mr-8 ml-8 mt-4 mb-4 p-2 flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/childcare' element={<Childcare />} />
            <Route path='/parties' element={<Parties />} />
            <Route path='/playground' element={<Playground />} />
            <Route path='/workshop' element={<Workshops />} />
            <Route path='/camp' element={<Camp />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
