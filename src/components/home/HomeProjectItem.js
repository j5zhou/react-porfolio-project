function Home_ProjectItem(props) {
    return (
        <div className="col-sm-4 col-md-4 text-center">
            <div className={props.projectTitle+" project-card"}>
                <h3>{props.header}</h3>
                <p>{props.description} </p>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                        <div className="project-more-info">
                            <a className="btn btn-default btn-border" href="#">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_ProjectItem;