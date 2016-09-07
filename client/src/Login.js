import React from 'react';
import IndexNav from './IndexNav'
import IndexNavTwo from './IndexNavTwo'

let About = () => {
    const contentStyle = {
        padding: 15
    }
    return (
        <div className="About">
            <SiteNav />
            <main style={contentStyle}>
                <p>I made this About page to test out React Router</p>
                <p>This is a React chat application built for WDI DTLA 11</p>
        
            </main>
        </div>
    )
}


export default About