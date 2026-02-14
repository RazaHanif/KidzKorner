import PartyForm from "@/components/PartyForm";
import PartyCard from "@/components/PartyCard";
import Image from "@/components/Image"

const Parties = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl font-bold text-center font-serif">
                    Host Your Child's Party at Kidz Korner
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 m-4">
                <p className="flex flex-col justify-center items-center lg:w-3/4 text-center">
                    Make your child's special day unforgettable with a Kidz Korner Party! Enjoy exclusive access to our indoor playground, just for you and your guests.
                </p>
            </div>

            <div className="flex flex-1 flex-col lg:flex-row justify-center gap-4 w-3/4">
                <PartyCard 
                    title={"Tiny Tornado Package"} 
                    price={"395"} 
                    desc={"Enjoy exclusive venue access and full use of our indoor play space for your guests!"}
                    bullet={[
                        <li key={1}>
                            <span className="font-semibold">3.5</span> Hours of Private Access
                        </li>,
                        <li key={2}>
                            Complimentary Tea & Coffee Station for Adults
                        </li>,
                        <li key={3}>
                            Bring your own food at no additional cost and use the private kitchen space
                            <div className="font-semibold text-xs">Strict Nut-Free Policy for children's safety</div>
                        </li>,
                        <li key={4}>
                            Bring your own decorations to transform the space
                        </li>,
                        <li key={5}>
                            Bring up to 50 guests
                        </li>
                    ]}
                />

                <PartyCard 
                    title={"Platinum Play Package"} 
                    price={"550"} 
                    desc={"Elevate your experience with extended time and food inclusions!"}
                    bullet={[
                        <div key={1} className="font-semibold text-xs">
                            Includes everything in the Tiny Tornado Package plus
                        </div>,
                        <li key={2}>
                            <span className="font-semibold">4.5</span> Hours of Private Access
                        </li>,
                        <li key={3}>
                            2 Jumbo Cheese Pizza's
                        </li>,
                    ]}
                />
                
                <PartyCard 
                    title={"VIP Package"} 
                    price={"750"} 
                    desc={"The ultimate private party package with extended time, decor upgrades and interactive party features!"}
                    bullet={[
                        <div key={1} className="font-semibold text-xs">
                            Includes everything in the Tiny Tornado Package & the Platinum Play Package plus
                        </div>,
                        <li key={2}>
                            <span className="font-semibold">5.5</span> Hours of Private Access
                        </li>,
                        <li key={3}>
                            DIY Ballon Arch & Table Cloths provided for self-setup
                        </li>,
                        <li key={4}>
                            Kidz Activity Table
                        </li>,
                    ]}
                />
            </div>


            <div className="flex flex-col justify-center items-center w-3/4 m-4 text-center">
                    <div>
                        <p>
                            Full payment required at time of booking.
                        </p>
                        <p>
                            Additional Time: Extra party time available at $50 per hour.
                        </p>
                        <p>
                            Prior approval of all 3rd party vendors is required.
                        </p>
                        <p className="text-sm font-semibold">
                            Prices are subject to change without notice
                        </p>
                    </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 mb-4">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-2 w-full">
                    <Image src='/IMG-20250302-WA0001.jpg' alt='Girls Birthday Setup at Kidz Korner Milton, Ontario' />
                    <Image src='/IMG-20250714-WA0026.jpg' alt='Children Climbing On Structure at Kidz Korner Milton, Ontario' />
                    <Image src='/IMG-20250519-WA0002.jpg' alt='Child Overlooking Cake at Kidz Korner Milton, Ontario' />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 gap-4">
                <PartyForm />
            </div>

            <title>
                Kids Parties in Miltion, Ontario | Kidz Korner 
            </title>
        </div>
    );
}
  
export default Parties;