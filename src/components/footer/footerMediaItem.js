import React from "react";
function Footer_MediaItem(props) {
  const cl = `img-responsive media-icon ${props.imgsrc}`
  const extraCL = `col-sm-1 col-md-1 ${props.extraCL}`;
  return (
    <div className = {extraCL}>
    <div className = {props.srctitle}>
        <a href = "#"><div className = {cl}></div></a>
    </div>
    </div>
  )  
}

export default Footer_MediaItem;