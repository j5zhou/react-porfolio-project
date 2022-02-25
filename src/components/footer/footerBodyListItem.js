function Footer_BodyListItem(props){
    return (
        <div className="col-sm-2 col-md-2 text-center">
            <div className={props.innerCL}>
                <h4><a href="#">{props.title}</a></h4>
                <ul>
                    {props.list?.map(item => <li key={item}><a href="#">{item}</a></li>)}
                </ul>
            </div>
        </div>
    )
}
export default Footer_BodyListItem;