import './projects.css'

export default function Projects() {
    return (
        <div class="projects-wrapper">
            <div class="content-section">
                <div class="info-section">
                    <header><h1>My Work</h1></header>
                    <div class='info-profile'>Below you'll find solo and group projects I've worked on.
                    Everything here is something I'm proud of for one reason or another.
                    <br></br><br></br>
                    Click the cards below to see the deployed project.</div>
                </div>
                <div class="card-wrapper">
                    <div class='card'>
                        <a href='https://jpugmire.github.io/hw-06-weather-dash/' target='_blank' rel='noreferrer'>
                            <div class='card-preview-wrapper'>
                                <img src='/images/weather-card-prev.png'></img>
                            </div>
                        </a>
                        <div class="card-desc-wrapper">
                            <h3>Weather Dashboard</h3>
                            <div class="card-desc">
                                Another homework assignment from GT, this
                                required me to use a third party api
                                as well as local storage to allow users to input a city
                                name, get up to date weather output,
                                and save their previous searches.
                            </div>
                        </div>
                    </div>
                    
                    <div class='card'>
                        <a href='https://jpugmire.github.io/hackathon-01-family-calendar' target='_blank' rel='noreferrer'>
                            <div class='card-preview-wrapper'>
                                <img src='/images/family-calendar-card-prev.png'></img>
                            </div>
                        </a>
                        <div class="card-desc-wrapper">
                            <h3>Family Calendar</h3>
                            <div class="card-desc">
                            This is an HTML/CSS/JS based calendar app that allows you to add 
                            and manipulate events as well as add locations and view 
                            potential weather forecasts for the date in question.
                            </div>
                        </div>
                    </div>
                        <div class='card'>
                            <a href='https://www.npmjs.com/package/@gtbootcampproject2/community-bulletin-board' target='_blank' rel='noreferrer'>
                                <div class='card-preview-wrapper'>
                                    <img src='/images/npm-card-prev.png'></img>
                                </div>
                            </a>
                            <div class="card-desc-wrapper">
                                <h3>Community Bulletin Board NPM Package</h3>
                                <div class="card-desc">
                                My second hackathon team decided to build a community bulletin board, published on NPM, 
                                effectively allowing a slightly technology-inclined person to download
                                 and set up their own version
                                for their community.
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}