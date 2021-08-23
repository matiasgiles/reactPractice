import React from "react";

import TopBar from "./TopBar"
import ContentRowTop from "./ContentRowTop"
import Footer from "./Footer"
import TableContent from "./table/TableContent"

function ContentWrapper (){
    return (
        <div id="content-wrapper" className="d-flex flex-column">

<div id="content">
        <TopBar />
        <ContentRowTop />
        </div>
        <TableContent />
        <Footer />


</div>


    )
}

export default ContentWrapper