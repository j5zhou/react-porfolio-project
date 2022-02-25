import Home_ContactInstrBody from "./HomeContactInstBody";

function Home_ContactInstr() {
    const contact_info = ["XXXX","XXXX","(XXXX)-445-7747","XXXXXX@gmail.com"];
    return (
        <div className="row">
            <div className="col-sm-6 col-md-6">
                <div className="contact-instructions">
                    <h2>Reaching out to me</h2>
                    <p>Don't be afraid to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXX.</p>
                    <br />
                    <br />
                    <br />
                    <h2>Contact Information</h2>
                    {contact_info.map((item,index) => <p key={item+"-"+index}>{item}</p>)}
                </div>
            </div>
            <Home_ContactInstrBody />
        </div>
    )
}
export default Home_ContactInstr;