import SummercampForm from "../components/summercampForm";

const SummerCamp = () => {
    return (
        <>
            <h4>Summer Camp 2025: Arts & Cooking Adventure!</h4>

            <p>Welcome to an unforgettable summer of creativity, flavor, and fun! Our Summer Camp 2025 offers hands-on experiences in both the visual arts and culinary arts, perfect for young artists and aspiring chefs alike.</p>

            <h5>Camp Dates:</h5>
            <p>July 2, 2025 - August 29, 2025</p>
            <p>Monday to Friday | 9:00 AM - 3:00 PM</p>

            <h5>Arts Classes</h5>
            <p>Campers explore a wide range of mediums and techniques:</p>
            <ul>
                <li>Painting & Drawing</li>
                <li>Sculpture & Ceramics</li>
                <li>Printmaking</li>
                <li>Mixed Media & Collage</li>
                <li>End of term art gallery</li>
            </ul>

            <h5>Cooking Classes</h5>
            <p>Each week features fun, age-appropriate kitchen adventures:</p>
            <ul>
                <li>Hands-on cooking and baking</li>
                <li>International cuisines</li>
                <li>Kitchen safety & teamwork</li>
                <li>Mini cook-offs and tasting days</li>
            </ul>

            <h5>Ages:</h5>
            <p>Open to children ages 5-14, grouped by age for activities</p>

            <h5>Cost: $200/week</h5>
            <p>
                <strong>Early Bird:</strong> $175/week<br></br>Limited Spots Available - Small Class Size = More 1 on 1 support<br></br>
                Multi week and sibling discounts available<br></br>
                All materials and ingredients included
            </p>

    name: '',
    email: '',
    phone: '',
    dob: '',
    startDate: '',
    message: '',
    type: 'summercamp'
            <SummercampForm/>
        </>
    );
}
  
export default SummerCamp;