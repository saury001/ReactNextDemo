import React from 'react';
import User from '../../components/User';

const authIndexPage = (props)=>{

    return(
        <div>
            <h1>Hey this is auth index page</h1>
            <User page="Auth"/>
        </div>
    );
} 

export default authIndexPage;