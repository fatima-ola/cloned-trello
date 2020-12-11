import React from 'react';
import ButtonSection from './../Button/ButtonSection';

const Info =()=> {
    return (
        <div >
            <div className="boardinfo">
                board info
            </div>
           <div className="panel">
            <ButtonSection text="Boards" className="tab_btn black-text "/>
            <ButtonSection text="Members" className="tab_btn black-text"/>
            <ButtonSection text="Settings" className="tab_btn black-text"/>
            <ButtonSection text="Business Class" className="tab_btn black-text"/>
           </div>
        </div>
    )
}

export default Info
