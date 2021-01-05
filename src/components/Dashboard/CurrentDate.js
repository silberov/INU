import React from 'react';
import { H1, H3 } from "../utils/typography"



function CurrentDate() {

    const d = new Date();
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    const month = months[d.getMonth()]
    const year = d.getUTCFullYear()
    const date = d.getDate()
    
    return (
        <div className='currentDate'>
            <H1>{date} {month} {year}</H1>
            <H3>X day of your cycle</H3>

        </div>
    )
}


export default CurrentDate

