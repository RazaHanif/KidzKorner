import { Routes, Route, Navigate } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About.jsx'
import Childcare from './pages/Childcare.jsx'
import Home from './pages/Home.jsx'
import Parties from './pages/Parties.jsx'
import Playground from './pages/Playground.jsx'
import Workshops from './pages/Workshops.jsx'
import Camp from './pages/Camp.jsx'
import Test from './pages/Test.jsx'
import NotFound from './pages/NotFound.jsx'

/* 

/daycare

/daycare/toddler-daycare-milton

/daycare/preschool-milton

/daycare/before-after-school-care-milton

/camp

/camp/summer-break
/camp/march-break
/camp/winter-break
/camp/pa-days

/indoor-playground

/birthday-parties

/workshops

/about-us



*/

function App() {
  return (
    <div className='flex-1 flex flex-col w-full min-h-screen'>
      <Header/>
      <div className='flex-1 flex flex-col w-full p-4 relative'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* /childcare -> /daycare */}
          {/* Make /childcare redirect for SEO */}
          <Route path='/childcare' element={<Childcare />} />
          <Route path='/daycare' element={<Childcare />} />
          <Route path='/parties' element={<Parties />} />
          <Route path='/playground' element={<Playground />} />
          <Route path='/workshop' element={<Workshops />} /> 
          <Route path='/camp' element={<Camp />} />
          <Route path='/about' element={<About />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
