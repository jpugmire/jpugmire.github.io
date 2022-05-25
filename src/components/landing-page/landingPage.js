//import css
import './landingPage.css';

function landingPage() {
    return(
        <div className='landing-wrapper'>
            <div className='content-section'>
                <div className='info-section'>
                    <header><h1>Hi, I'm Joseph</h1></header>
                    <div><h3>Software Engineer | React.js and Node.js</h3></div>
                    <div className='info-btn-wrapper'>
                    <a href='https://www.linkedin.com/in/joseph-p-605820122/' target='_blank' rel='noreferrer'><button className='info-btn' >LinkedIn</button></a>
                    <a href='https://www.github.com/jpugmire' target='_blank' rel='noreferrer'><button className='info-btn'>GitHub</button></a>
                    </div>
                    <div className='info-profile'>I'm a web developer living in Atlanta, GA.<br/>I make full stack web apps, hopefully for you!</div>
                </div>
                <img src='/images/square.jpeg' className='profile-image'></img>
            </div>
      </div>
    );
}

export default landingPage;