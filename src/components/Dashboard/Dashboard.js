import React from 'react';
import Navigation from '../NavBar/Navigation';
import Info from './../Info/Info';
import BoardSection from './../BoardCreated/BoardSection';

const Dashboard =()=> {
    return (
        <div>
            <Navigation />
            <Info />
            <div className="newboard">
                <BoardSection />
            </div>
        </div>
    )
}

export default Dashboard
