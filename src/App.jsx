import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About.jsx";
import Childcare from "./pages/Childcare.jsx";
import Home from "./pages/Home.jsx";
import Parties from "./pages/Parties.jsx";
import Playground from "./pages/Playground.jsx";
import Workshops from "./pages/Workshops.jsx";
import Camp from "./pages/Camp.jsx";
import Test from "./pages/Test.jsx";
import NotFound from "./pages/NotFound.jsx";
import Daycare from "./pages/Daycare.jsx";
import ToddlerDaycare from "./pages/ToddlerDaycare.jsx";
import PreschoolDaycare from "./pages/PreschoolDaycare.jsx";
import BeforeAfterDaycare from "./pages/BeforeAfterDaycare.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SummerCamp from "./pages/SummerCamp.jsx";
import MarchCamp from "./pages/MarchCamp.jsx";
import WinterCamp from "./pages/WinterCamp.jsx";
import PADayCamp from "./pages/PADayCamp.jsx";
import Blog from "./pages/Blog.jsx";
import BlogSlug from "./pages/BlogSlug.jsx";

/* 

/
/daycare
/daycare/toddler
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
/about
/blog
/blog/:slug
/faq

*/

function App() {
    return (
        <div className="flex-1 flex flex-col w-full min-h-screen">
            <Header />
            <div className="flex-1 flex flex-col w-full p-4 relative">

                <ScrollToTop />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />

                    <Route path="/about" element={<About />} />

                    {/* Blog */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogSlug />} />

                    {/* Camp */}
                    <Route path="/camp" element={<Camp />} />
                    <Route path="/camp/summer-camp" element={<SummerCamp />} />
                    <Route path="/camp/march-break-camp" element={<MarchCamp />} />
                    <Route path="/camp/winter-break-camp" element={<WinterCamp />} />
                    <Route path="/camp/pa-day-camp" element={<PADayCamp />} />

                    {/* Daycare */}
                    <Route path="/daycare" element={<Daycare />} />
                    <Route path="/daycare/toddler" element={<ToddlerDaycare />} />
                    <Route path="/daycare/preschool" element={<PreschoolDaycare />} />
                    <Route path="/daycare/before-after-school-care" element={<BeforeAfterDaycare />} />
                    
                    {/* 
                    <Route path="/faq" element={<Test />} /> 
                    */}

                    <Route path="/birthday-parties" element={<Parties />} />

                    <Route path="/indoor-playground" element={<Playground />} />

                    {/*                     
                        Only activate in dev
                        <Route path="/test" element={<Test />} />
                    */}

                    <Route path="/workshops" element={<Workshops />} />

                    {/* Redirected but keeping here */}
                    <Route path="/childcare" element={<Childcare />} />
                    <Route path="/parties" element={<Parties />} />
                    <Route path="/playground" element={<Playground />} />
                    <Route path="/workshop" element={<Workshops />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;