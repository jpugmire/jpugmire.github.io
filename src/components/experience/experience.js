import './experience.css';
import { faGraduationCap, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Experience () {
    const focusCard = (e) => {
        if(e.target.classList.contains('focused-card'))
            e.target.classList.remove('focused-card');
        else
            e.target.classList.add('focused-card');
    };

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
                    <div className='card' id='ev-card'>
                        <FontAwesomeIcon icon={faSuitcase} size='4x' className='card-item card-icon'/>
                        <div className='card-item'>Five consecutive internships as a full-stack developer <br/>
                            Primarily worked with Vue, C#, SQL <br/>
                            Large exposure to AGILE methodology / project planning
                        </div>
                        <div class='card-overlay'></div>
                    </div>
                    <div className='card' id='gt-card'>
                        <FontAwesomeIcon icon={faGraduationCap} size='4x' className='card-item card-icon'/>
                        <div className='card-item'>Completed Georgia Tech's Full Stack Bootcamp <br/>
                            Improved experience and competency with previously learned technologies <br/>
                            Gained experience in new languages and technologies, including noSQL and React,
                            as well as with integrating and deploying new projects.
                        </div>
                        <div class='card-overlay'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;