import React from 'react';
import Footer_BodyList from './footerBodyList';
import Footer_ContactRow from './footerContactRow';
import Footer_MediaRow from './footerMediaRow';
function Footer(props) {
    return (
        <div className = "footer">
			<div className = "container-fluid">
				<Footer_MediaRow />
                <Footer_ContactRow />
                <Footer_BodyList />
			</div>
		</div>
        );
}

export default Footer;