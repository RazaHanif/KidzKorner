const Parties = () => {
    return (
        <>
            <h4>Drop-In Fun!</h4>
            <p>
                Looking for a fun and safe indoor space for your child to play?<br/>
                Our indoor playground is open for drop-in play from 9 am to 3 pm Monday to Friday
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

            <br/>
            <p>
                Tea and Coffee are complimentary!
            </p>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            item 1
                        </div>
                    </div>
                </div>
            
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            item 2
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            item 3
                        </div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Accordion Item #4
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            item 4
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}
  
export default Parties;