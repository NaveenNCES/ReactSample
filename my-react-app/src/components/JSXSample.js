import React from "react";

const JSXSample = () => {
    // return (
    //     <div>
    //         <h1>Hey Sample text without JSX</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'This is JSX format text')
    )
}

export default JSXSample