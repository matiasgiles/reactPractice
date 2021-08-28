import React from "react";
import {Route} from "react-router-dom"
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
        <Route path="/table" component={TableContent} />
        <Footer />




</div>


    )
}

export default ContentWrapper