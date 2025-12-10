import PartyForm from "../components/PartyForm";

const Parties = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-3xl font-bold">
                    Host Your Child's Party at Kidz Korner
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-md">
                    Make your child's special day unforgettable with a Kidz Korner Party! Enjoy exclusive access to our indoor playground, just for you and your invited family and friends.
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
                <h5 className="self-center text-xl font-bold">
                    Party Package
                </h5>
                <div className="text-md">
                    3.5 hours of private access
                </div>
                <div className="text-md">
                    Complimentary tea and coffee for guests
                </div>
                <div className="text-md">
                    Bring your own food at no extra charge (peanut/nut-free)
                </div>
                <div className="text-md">
                    Bring your own decorations to personalize the space.
                </div>
                <div className="text-md">
                    Max capacity: 50 guests (seating available for up to 40 adults)
                </div>
                <div className="text-md">
                    Extra 15 minutes before & after for setup and wrap-up. Free of charge
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
                <h5 className="self-center text-xl font-bold">
                    Pricing & Booking Details
                </h5>
                <p className="font-bold">
                    $395 + tax
                </p>
                <div className="text-md">
                    Full payment required at time of booking.
                </div>
                <div className="text-md">
                    Additional Time: Extra party time available at $50 per hour.
                </div>
                <div className="text-md">
                    Prior approval of all 3rd party vendors is required.
                </div>
                <p className="text-sm">
                    *Prices are subject to change without notice*
                </p>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
                <PartyForm/>
            </div>

        </div>
    );
}
  
export default Parties;