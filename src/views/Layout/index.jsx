/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 18/05/2024 - 00:05:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/05/2024
    * - Author          : Saif
    * - Modification    : 
**/
import React from "react";
import { Footer } from "../../components/Layout/footer";
import { Header } from "../../components/Layout/header";

const LayoutTheme = (props) => {

 return (
    <div className={`themeLayout ${props?.className ? props?.className : ''}`}>
        <div className="headerLayout">
            <Header />
        </div>
        <div className="mainLayout">
            {props.children}
        </div>
        <div className="footerLayouts">
            <Footer />
        </div>
    </div>
);
}
export default LayoutTheme;