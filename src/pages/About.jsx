import ContactForm from "@/components/ContactForm";
import ContactUsTable from "../components/ContactUsTable";
import HoursTimeTable from "../components/HoursTimeTable";
import Image from '@/components/Image'

const About = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full text-justify">
            <div className="flex md:flex-row flex-col justify-center w-3/4 m-4 gap-4">
                <div>
                    <ContactUsTable />
                </div>

                <div>
                    <Image 
                        src='/K_K_2.jpg'
                        alt='Kid making silly face'
                        w={'w-sm'}
                    />
                </div>

                <div>
                    <HoursTimeTable />
                </div>
            </div>

            <div className="flex justify-center items-center w-3/4 rounded-lg border-2 shadow-lg overflow-hidden mb-4">
                <iframe
                    title="Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API}&q=Kidz+Korner+Milton+Ontario`}
                    className="border-4 w-full h-[75vw] md:"
                />
            </div>
            
            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <ContactForm/>
            </div>
        </div>
    );
}
  
export default About;