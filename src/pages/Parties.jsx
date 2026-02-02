import PartyForm from "@/components/PartyForm";
import PartyCard from "../components/PartyCard";

const Parties = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex flex-col justify-center items-center w-full mb-4">
                <div className="text-3xl font-bold text-center">
                    Host Your Child"s Party at Kidz Korner
                </div>
            </div>

            <PartyCard 
                title={"Tiny Tornado Package"} 
                price={"395"} 
                desc={"3.5"}
                bullet={[
                    "Complimentary Tea & Coffee Station for Adults",
                    "Bring your own food at no aditional cost ( Strict NUT free policy for childrens safety)",
                    "Bring your own decoration to transform the space",
                    "Bring up to 50 guests"
                ]}
            />

            <PartyCard 
                title={"Platnium Play Package"} 
                price={"550"} 
                desc={"Enjoy 4.5 hours of "}
                bullet={[
                    "point 1",
                ]}
            />
            
            <PartyCard 
                title={"VIP Package"} 
                price={"750"} 
                desc={"desc"}
                bullet={[
                    "point 1",
                ]}
            />

            <div className="flex flex-col justify-center items-center w-3/4">
                <div className="flex flex-col justify-center items-center md:w-3/4">
                    Make your child"s special day unforgettable with a Kidz Korner Party! Enjoy exclusive access to our indoor playground, just for you and your invited family and friends.
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <div className="self-center text-xl font-bold">
                    Party Package
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <div>
                        <div>
                            3.5 hours of private access
                        </div>
                        <div>
                            Complimentary tea and coffee for guests
                        </div>
                        <div>
                            Bring your own food at no extra charge (peanut/nut-free)
                        </div>
                        <div>
                            Bring your own decorations to personalize the space.
                        </div>
                        <div>
                            Max capacity: 50 guests (seating available for up to 40 adults)
                        </div>
                        <div>
                            Extra 15 minutes before & after for setup and wrap-up. Free of charge
                        </div>
                    </div>
                    <img 
                        src="/K_K_29.jpg"
                        alt="Kid admiring cake"
                        className="w-3xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <div className="self-center text-xl font-bold">
                    Pricing & Booking Details
                </div>
                <div className="text-lg font-bold">
                    $395 + tax
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <img 
                        src="/K_K_18.jpg"
                        alt="Playground view"
                        className="w-xs rounded-lg border-2 shadow-lg"
                        loading="lazy"
                    />
                    <div>
                        <div>
                            Full payment required at time of booking.
                        </div>
                        <div>
                            Additional Time: Extra party time available at $50 per hour.
                        </div>
                        <div>
                            Prior approval of all 3rd party vendors is required.
                        </div>
                        <div className="text-sm">
                            *Prices are subject to change without notice*
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <PartyForm/>
            </div>

        </div>
    );
}
  
export default Parties;