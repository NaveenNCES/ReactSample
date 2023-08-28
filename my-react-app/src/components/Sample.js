import React, { Component } from "react";

//-----Function-------//
function SampleFunction() {
    return <h1>Hello World!</h1>
}

//----const----//
const SampleConstant = () => <h1>Hello World! </h1>

//----Props Component------//
const PropsSampleConst = ({name, children}) => {
    return (
        <div>
            <h1>Hi {name}</h1>
            {children}
        </div>
    )
}

export default PropsSampleConst