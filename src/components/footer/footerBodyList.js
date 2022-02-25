import React from "react";
import Footer_BodyListItem from "./footerBodyListItem";
function Footer_BodyList() {

    const projectList = ["Project1","Project2","Project3","See All"];
    const resumeList = ["Download"];

    return (<div className="row">
        <div className="col-sm-4 col-md-4 text-center">
            <div className="company-information">
                <h3>XXXX</h3>
                <h4>Copyright &copy; 2021</h4>
                <h4>NY</h4>
            </div>
        </div>

        <Footer_BodyListItem innerCL="home-footer" title="Home" />
        <Footer_BodyListItem innerCL="portfolio-footer" title="Portfolio" list={projectList} />
        <Footer_BodyListItem innerCL="resume-footer" title="Resume" list={resumeList} />
        <Footer_BodyListItem innerCL="contact-footer" title="Contact"/>
    </div>
    )
}

export default Footer_BodyList;
