import React from "react";
import Footer_MediaItem from "./footerMediaItem";
function Footer_MediaRow() {
    return (
        <div className="row">
            <div className="media-links">
                <Footer_MediaItem srctitle="facebook" imgsrc="facebook-icon" extraCL="col-sm-offset-4 col-md-offset-4" />
                <Footer_MediaItem srctitle="linkedin" imgsrc="linkedin-icon" />
                <Footer_MediaItem srctitle="pinterest" imgsrc="pinterest-icon" />
                <Footer_MediaItem srctitle="email-icon" imgsrc="email-icon" />
            </div>
        </div>
    );
}

export default Footer_MediaRow;