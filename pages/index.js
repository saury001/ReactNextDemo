import React from 'react';
import User from '../components/User';

const indexPage = (props)=>{

    return(
        <div>
            <h1>Hey this is main index page</h1>
            <User page="Main"/>
        </div>
    );
} 

export default indexPage;