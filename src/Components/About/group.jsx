import group from "../../group.jpg";
import FITINDIA from "../../FITINDIA.jpg";

let Group = () => {
    return(
        <>
            <img src={group}  style={{width:"100%"}} alt="" />
            <div className="container">
                <h2 className="text-dark mt-5 mb-4">
                    WHY <span className="text-warning">FIT</span>|<span className="text-success">INDIA's</span> Gym?
                </h2>
                <div className="row">
                    <div className="col-md-6">
                        <span className="text-muted mt-4"><b>Now completing 50 years. We Keep Getting Stronger The India chapter of FIT|INDIA's Gym started in 2002, when the first FIT|INDIA's Gym India branch was set up in Mumbai. With over 701+ Facilities across 30 countries. It has cut out for itself 102 gyms in India with another 5 under construction and ready to start in this year.</b></span>
                        <br />
                        <br />
                        <span className="text-muted">
                            <b>With multiple awards for excellence under its belt including 2 awards from the Lions Club for the “Best Fitness Chain”, an award from the Images Beauty & Wellness for the Most admired fitness chain of the year”, an award from Franchise India, 8 awards from Gold’s Gym International, making it a very eventful 12 years in the growth of the business. Gold’s Gym India has bagged the most prestigious Economic Times ET award for ‘Excellence in Marketing 2013’ & ‘Excellence in Customer Service 2014’.</b>
                        </span>
                    </div>
                    <div className="col-md-6">
                        <img src={FITINDIA} style={{width:"100%"}} alt="" />
                    </div>
                </div>
            </div>
            <div className="p-5 mt-5" id="imagecouple">
                <div className="container">
                    <h2 className="text-center mt-4"><b className="text-warning">FIT|INDIA </b> <span className="text-light">OUR KEY DEMOGRAPHICS</span></h2>
                    <br />
                    <span className="text-secondary">
                        <b>Members: </b>We Cater To Very Niche Captive Audience Who Are Already Prominent People In Society And Fitness Enthusiast. Some Of The Past And Present.
                    </span>
                    <br />
                    <br />
                    <p className="text-light">
                      <span><b>* FOOTFALLS:</b> ON AN AVERAGE WE HAVE 350 WORKOUTS PER DAY PER GYM.</span>
                      <br />
                      <span><b>* GYM SIZE:</b> 7000SQ FT TO 15000 SQ FT</span>
                      <br />
                      <span><b>* </b>All Gyms have 30% Female & 70% Male Ratio.</span>
                      <br />
                      <span><b>* Age Group: </b> <li>15% Below 24 Yrs.</li>
                      <li>75% Beltween 24-50 Yrs.</li>
                      <li>10% Above 50 Yrs.</li></span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Group;