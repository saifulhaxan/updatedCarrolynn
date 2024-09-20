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
import React, { useEffect } from "react";
import { Footer } from "../../components/Layout/footer";
import { Header } from "../../components/Layout/header";
import { initBFCacheHandling } from "../../utils/bfcache";
const LayoutTheme = (props) => {
    useEffect(() => {
        const onShow = () => {
          console.log('Page was restored from bfcache');
          // Any reinitialization logic
        };
    
        const onHide = () => {
          console.log('Page is being stored in bfcache');
          // Any cleanup logic
        };
    
        initBFCacheHandling(onShow, onHide);
    
        // Clean up event listeners when the component unmounts
        return () => {
          window.removeEventListener('pageshow', onShow);
          window.removeEventListener('pagehide', onHide);
        };
      }, []);
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