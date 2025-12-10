import PartyForm from "../components/PartyForm";

const Parties = () => {
    return (
        <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-2xl">
                    Host Your Child's Party at Kidz Korner
                </div>
            </div>

            <div className="flex flex-col justify-center items-start w-full">
                <p>
                    Make your child's special day unforgettable with a Kidz Korner Party! Enjoy exclusive access to our indoor playground, just for you and your invited family and friends.
                </p>
            </div>

            <div className="flex flex-col justify-center items-start w-full">
                <h5 className="self-center">
                    Party Package
                </h5>
                <p>
                    3.5 hours of private access
                </p>
                <p>
                    Complimentary tea and coffee for guests
                </p>
                <p>
                    Bring your own food at no extra charge (peanut/nut-free)
                </p>
                <p>
                    Bring your own decorations to personalize the space.
                </p>
                <p>
                    Max capacity: 50 guests (seating available for up to 40 adults)
                </p>
                <p>
                    Extra 15 minutes before & after for setup and wrap-up. Free of charge
                </p>
            </div>

            <div className="flex flex-col justify-center items-start w-full">
                <h5 className="self-center">
                    Pricing & Booking Details
                </h5>
                <p className="font-bold">
                    $395 + tax
                </p>
                <p>
                    Full payment required at time of booking.
                </p>
                <p>
                    Additional Time: Extra party time available at $50 per hour.
                </p>
                <p>
                    Prior approval of all 3rd party vendors is required.
                </p>
                <p className="text-sm">
                    *Prices are subject to change without notice*
                </p>
            </div>

            <div className="flex flex-col justify-center items-start w-full">
                <PartyForm/>
            </div>

        </div>
    );
}
  
export default Parties;