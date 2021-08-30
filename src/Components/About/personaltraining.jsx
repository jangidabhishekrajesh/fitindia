import personalTrainer from "../../personalTrainer.jpg";


let Personal = () =>{
    return (
        <>
            <img src={personalTrainer} alt="" style={{width:"100%"}} />
            <div className="container">
                <h3 className="mt-5 mb-3" id="textHoverTrainer">Personal Training Program</h3>
                <span className="text-muted"><b>The FIT|INIDA's Gym Fitness Institute GGFI is India’s first International Fitness Management Institute. It offers certificate courses in Fitness Management, Personal Training and Spinning Instructing. It covers a range of subjects to comprehensively address and ensure the best international brand practices in India. The 3 month courses are monitored by qualified personnel of FIT|INIDA's Gym, and also hosts guest lectures by the biggest names in the international fitness industry with guaranteed internships and a firsthand opportunity to experience fitness training from the world leaders in it. The GGFI offers the most exciting and up-to-date education pathway to gain industry leading qualifications as well as ongoing training in all aspects of the fitness industry.</b></span>

                <hr />

                <h3 className="mt-3" id="textHoverTrainer">Benefits</h3>
                <p className="text-secondary mb-5">You can earn anything between Rs. 8000 – Rs. 50000 depending on what you are doing. <br /><br />
                The job is flexible. You can work in the gym or freelance outside the gym.<br /><br />
                The pros of working within a gym is you have immediate access to hundreds of potential clients, access to top of the range equipment and, gym dependant, you will have the support of advertising.
                If you are working outside the gym, you are not restricted to one location, it can be extremely convenient for your client to train in the comfort of their own home and the hours you work are entirely yours to decide.<br /><br />
                And mainly you get Job satisfaction.<br /><br />
                You can have a positive impact on people’s lives. You can help them increase strength, improve appearance or become a healthier person, whatever it may be you are there to help</p>
            </div>
        </>
    );
}
export default Personal;