import quickresult from "../../quickresult.jpg";
import { Link } from "react-router-dom";

let Quick = () =>{
    return(
        <>
            <img src={quickresult} alt="" style={{width:"100%"}} />
            <div className="container">
                <span className="text-muted">
                    <b>India has reached the rampant proportions of obesity.</b>
                </span>
                <p className="text-secondary mt-4">
                Due To Many Reasons Like Sedentary Lifestyle, Reduced Energy Expenditure, Unhealthy Eating Habits, High Stress Levels Etc. BMI And Body Fat Levels Are Increasing Day By Day Which Is Causing Obesity. And Obesity Further Leads To Medical Conditions Like High Cholesterol, High Blood Pressure, Heart Diseases, Stroke, Diabetes, PCOD, Hypothyroidism, Gall Stones, Depression, Knee Pain Etc.
                <br />
                <br />
                Hence <b>Quick Result Program at FIT|INDIA Gym</b> Helps In Reducing Excess Fat Mass. It Is A Quick Way To Achieve Your Fitness Goals. This Program Not Only Make You Lose But Also Gain And Tone Up Your Body With The Help Of Fitness Orientation, Functional Training And Nutritional Counseling. This Program Is A Combination Of Cardio Training, High Intensity Functional Training, Nutritionist’s Support And Blood Tests. Here We Deliver On Time Results By Monitoring Them On Regular Basis.
                <br />
                <br />
                Features Of Quick Result Program Are:
                <br />
                <br />
                <span>
                <b>1. Functional Training:</b> It involves mainly weight bearing activities targeted at core muscles of the abdomen and lower back. Functional training attempts to adapt or develop exercises which allow individuals to perform the activities of daily life more easily and without injuries
                </span>
                <br />
                <br />
                <span><b>Benefits of Functional Training</b>
                <br />
                <br />
                Prolongs life <br />
                Improves mood <br />
                Achieves metabolic balance <br />
                Promotes sustainable weight loss <br />
                Strengthens heart and blood vessels <br />
                Increases bone density <br />
                Decreases risk for chronic conditions</span>
                </p>
                <p className="text-secondary">
                    <span><b>2. Cardiovascular Training:</b> The Aerobics exercise may include Spinning / Aerobics / Swimming / Pilates/ Rock climbing / Kick boxing as per the requirement with the guidance of functional trainer.</span>
                    <br />
                    <br />
                    <span>Aerobic Exercises Are Performed As A Group. A Qualified Instructor Who Will Lead You Through A Variety Of Structured Movements That Will Raise Your Heart Rate And Get Blood And Oxygen Flowing More Quickly Around Your Body. The Important Idea Behind Aerobic Exercise Today, Is To Get Up And Get Moving!! A Good Aerobics Class Will Benefit Your Body In Many Ways. While The Workout Will Help You Burn Calories And Reduce Your Body Fat.</span>
                </p>
                <p className="text-secondary">
                    <span><b>3. Nutrition support:</b> The Food You Eat Becomes The Blood Running Through Your Veins. A Balanced Low Calorie Diet Is Essential To Get The Results Fast. The In-House Dietician Will Prescribe A Diet Plan As Per The Lifestyle And Eating Pattern. The In-House Dietician Keeps A Count Of Calories Consumed And Interacts With The Members On Regular Basis. It’s A Complete Assistance Even When Traveling.</span>
                    <br />
                    <br />
                    <span><b>Blood Test:</b></span>
                    <br />
                    <span>Complete Blood Count <br />
                    Fasting Blood Sugar <br />
                    Thyroid Function Test <br />
                    Lipid Profile</span>
                    <br />
                    <br />
                    <span><b>In Body Assessment:</b> The test is repeated every 15 days. Since body weight alone is not a clear indicator of good health, it provides a break up of your body weight in terms of fat, muscle and hydration status. Thus it becomes easy to identify areas for improvement.</span>
                    <br />
                    <br />
                    <span><b>Physiotherapist:</b> Available on appointment basis.</span>
                </p>
            </div>
            <div className="p-3" id="joinUs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 p-5">
                            <h2 className="text-light">
                            Join this month and get 2 months FREE
                            </h2>
                            <p className="text-light">
                             Get So Much Awards & Offers!
                            </p>
                        </div>
                        <div className="col-md-3 p-5">
                           <Link to="/contact">
                            <button className="btn btn-outline-light btn-lg">Join Us</button>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quick;