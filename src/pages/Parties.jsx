import PartyForm from "../components/partyForm";

const Parties = () => {
    return (
        <>
            <h4>Host Your Child's Party at Kidz Korner</h4>

            <h6>
                Make your child's special day unforgettable with a Kidz Korner Party! Enjoy exclusive access to our indoor playground—just for you and your invited family and friends.
            </h6>

            <h5>Party Package:</h5>
            <li>3.5 hours of private playground access</li>
            <li>Complimentary tea and coffee for guests</li>
            <li>Bring your own food at no extra charge (peanut/nut-free)</li>
            <li>Bring your own decorations to personalize the space.</li>
            <li>Max capacity: 50 guests (seating available for up to 40 adults)</li>
            <li>Extra 15 minutes before & after for setup and wrap-up—free of charge</li>

            <br/>

            <h5>Pricing & Booking Details:</h5>
            <li>Price: $395 + tax</li>
            <li>Full payment required at time of booking.</li>
            <li>Additional Time: Extra party time available at $50 per hour.</li>
            <li>Prior approval of all 3rd party vendors is required.</li>
            <p className="vsmall">*Prices are subject to change without notice*</p>

            <PartyForm/>
        </>
    );
}
  
export default Parties;