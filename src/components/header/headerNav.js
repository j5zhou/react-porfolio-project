import React from 'react';
function Header_Nav(props) {
    const nav_items = ["Home","Portfolio","Contact"];
    const nav_item_li = nav_items.map(item=> <li key={item}><a href={item+".html"} onClick={(event)=>{event.preventDefault();props.setPage(item)}}>{item}</a></li>)

    return (
    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
    <div className="primary-nav">
        <ul>
            {nav_item_li}
        </ul>
    </div>
</div>);
}
export default Header_Nav;