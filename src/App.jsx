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
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' children={<Home />} />
            <Route path='/childcare' children={<Childcare />} />
            <Route path='/parties' children={<Parties />} />
            <Route path='/playground' children={<Playground />} />
            <Route path='/workshop' children={<Workshops />} />
            <Route path='/about' children={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
