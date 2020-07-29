import React from 'react';
import "../../styles/common.scss";
import "../Button/button.scss";

const Button = ({children, type}) => {

let localClass = "primary";

if (type === "primary") {
localClass = "primary";
}
if (type === "disabled") {
    localClass = "disabled";
}
const buttonClasses = `fontBlack backYellow padding7 width100 radius15 ${localClass}`;
    return ( 
        <div className="button-style">
<button className={buttonClasses}>{children}</button>
        </div>
     );
}
 
export default Button;