import React from 'react';
import { MainHeader, SubHeader } from "../typography"



function CurrentDate() {

    const d = new Date();
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    const month = months[d.getMonth()]
    const year = d.getUTCFullYear()
    const date = d.getDate()
    
    return (
        <div className='currentDate'>
            <MainHeader>{date} {month} {year}</MainHeader>
            <SubHeader>X day of your cycle</SubHeader>

        </div>
    )
}


export default CurrentDate

