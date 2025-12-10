const Playground = () => {
    return (
        <>
            <h4>Drop-In Fun!</h4>
            <p>
                Looking for a fun and safe indoor space for your child to play?<br/>
                Our indoor playground is open for drop-in play from 3 pm to 6 pm Monday to Friday
            </p>
            <h5>
                What We Offer:<br/>
            </h5>
            <li>
                A varity of skill-building play areas for your child to explore and enjoy.
            </li>
            <li>
                A perfect escape from the heat, cold, rain or snow.
            </li>
            <li>
                Convenient facilities with two washrooms, diaper changing stations, and step stools.
            </li>

            <div className="accordion accordion-flush" id="accordionFlushExample">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Drop In
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h4>$15 | per Family</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default Playground;