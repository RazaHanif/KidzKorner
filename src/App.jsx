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

/
/daycare
/daycare/toddler-daycare
/daycare/preschool
/daycare/before-after-school-care
/camp
/camp/summer-camp
/camp/march-camp
/camp/winter-camp
/camp/pa-day-camp
/indoor-playground
/birthday-parties
/workshops
/about-us
/blog
/faq

*/

function App() {
  return (
    <div className='flex-1 flex flex-col w-full min-h-screen'>
      <Header/>
      <div className='flex-1 flex flex-col w-full p-4 relative'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />

          <Route path='/about-us' element={<About />} />

          <Route path='/blog' element={<Test />} />
          <Route path='/blog/:slug' element={<Test />} />

          {/* Camp */}
          <Route path='/camp' element={<Camp />} />
          <Route path='/camp/summer-camp' element={<Camp />} />
          <Route path='/camp/march-break-camp' element={<Camp />} />
          <Route path='/camp/winter-break-camp' element={<Camp />} />
          <Route path='/camp/pa-day-camp' element={<Camp />} />

            {/* Daycare */}
          <Route path='/daycare' element={<Childcare />} />
          <Route path='/daycare/toddler-daycare' element={<Childcare />} />
          <Route path='/daycare/preschool' element={<Childcare />} />
          <Route path='/daycare/before-after-school-care' element={<Childcare />} />

          <Route path='/faq' element={<Test />} />

          <Route path='/birthday-parties' element={<Parties />} />

          <Route path='/indoor-playground' element={<Playground />} />

          <Route path='/test' element={<Test />} />

          <Route path='/workshops' element={<Workshops />} /> 

          {/* Redirected but keeping here */}
          <Route path='/about' element={<About />} />
          <Route path='/childcare' element={<Childcare />} />
          <Route path='/parties' element={<Parties />} />
          <Route path='/playground' element={<Playground />} />
          <Route path='/workshops' element={<Workshops />} /> 
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
