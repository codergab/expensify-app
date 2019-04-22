// console.log('HOC is A component (HOC) that renders another component');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
        
        
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAdmin && <p>This is a private info, Please don't share</p>
            }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            <h2>Authorized Users Only</h2>
            {
                props.isAuthenticated ? ( 
                <WrappedComponent {...props} />
                 ) :
                 (
                    <h4>Plesae Login to view this info</h4>
                 ) 
            }
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are the detaisl" />, document.getElementById('app'));