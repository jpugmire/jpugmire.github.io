import './experience.css';

function Experience () {
    return(
        <div className='experience-wrapper'>
            <div className='content-section'>
                <div className='info-section'>
                    <header><h1>My Experience</h1></header>
                    <div className='info-profile'>My foundation in computer science is built on significant development 
                    experience through internships with eVestment, bolstered by Georgia Tech's Full Stack Development 
                    Bootcamp.</div>
                </div>
                <div className='card-wrapper'>
                    <div className='card' id='ev-card'></div>
                    <div className='card' id='gt-card'></div>
                </div>
            </div>
        </div>
    );
}

export default Experience;