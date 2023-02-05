import * as React from 'react'
import { Link } from 'gatsby'
import CountdownTimer from '../components/countdown/countdown.js'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  topnav,
  about,
  navbar,
  frame,
  apply,
  image,
  banner, 
  date,
  pennapps,
  rectangle, 
  beleaf,
  landingPage,
  hosted,
  aboutText,
  applyButton,
  button,
  buttonRectangle,
  frameTwo,
  college,
  difference,
  context,
  founded,
  box,
  boxTwo,
  applyText,
  process,
  thousands,
  footerContent,
  footerBackground,
  footer,
  footerTitle,
  trademark,
  group,
  social,
  conduct,
  groupTwo,
  groupThree,
  organised,
  logo,
  countdown
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>

      {/* <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main> */}
      <div className={landingPage}>
        <StaticImage className={banner}
            src="../images/banner.png" 
            alt="Banner"
            placeholder="blurred"
            layout="fixed"
            width={881}
            height={77.86}
          />
        <div className={date}>September 8-10, 2023</div>
        
        <StaticImage className={image}
            src="../images/landing-background.png" 
            alt="Landing"
            placeholder="blurred"
        />
      </div>

      <div className={countdown}>
        <CountdownTimer
        countdownTimestampMs={1683357999999}/>
      </div>
      
      <div className={navbar}></div>
      
      <nav>
      
        <div className={topnav}></div>
        <div className={pennapps}>PENNAPPS</div>
        
            <div className={frame}>
                <a className={about} href="#about">
                    ABOUT
                </a>
                <a className={apply} href="#apply">
                    APPLY
                </a>
            </div>
        </nav>

      
    <div className={rectangle}></div>
    <div className={beleaf}>Beleaf it or not, applications are open!</div>
    <div className={hosted}>Hosted at the nation’s first university, PennApps is the original <br></br>college hackathon. 
    Come join us to learn something new, build an <br></br>app, or start a company. Let’s continue to make history together.</div>
    <div className={button}>
      <div className={buttonRectangle}></div>
      <div className={applyButton}>
        APPLY
      </div>

    </div>
    <div className={aboutText} id="about">About</div>
    <div className={frameTwo}>
      <div className={box}>
        <div className={context}>In the context of a hackathon, the word "hack" is used to describe how multiple technologies can be used together in a new and innovative way. Teams of up to four people spend the weekend working on innovative software and hardware solutions to real-world problems. These projects range in platform and application, including elements of web development, mobile applications, drones, and more. However, many times the most important aspect of a hackathon is the community it generates and skills that inexperienced hackers walk away with.</div>
        <div className={college}>The College Hackathon</div>
      </div>
      <div className={boxTwo}>
        <div className={difference}>The PennApps Difference</div>
        <div className={founded}>Founded in the fall of 2009, PennApps was the nation's first student-run college hackathon. Since then, it has spurred a revolution in the way engineering students develop and showcase their skills, spawning an entire "league" of hackathons across the nation. In past years, over a thousand students from the U.S. and other countries like Switzerland, Canada, England, and Singapore have converged in Philadelphia for the spring and fall editions of the event for a weekend of creation and discovery. Both beginners and experts alike will work together, learn and compete to become better engineers and work on awesome projects. This year, PennApps is expanding its focus on learning by emphasizing the collaboration of new and experienced hackers, and providing more learning opportunities and workshops throughout the weekend.</div>
      </div>
    </div>
    <div className={applyText} id="apply">Apply</div>
    <div className={process}>The Application Process</div>
    <div className={thousands}>Thousands of qualified candidates apply to participate in PennApps every year, however our space can only support a limited number of participants and as much as we'd like to take everyone, it just isn't possible. We think that the fairest way to decide who we invite is by asking everyone to tell us a little bit about themselves, so that we can invite people who have demonstrated interest and skill. <br></br>
    <br></br>
We don't expect everyone to have been to a hackathon before, in fact, we love first-time hackers having been there ourselves when we started! We're just trying to bring those who most want to really build something awesome and learn something new, and while we can't invite everyone, we're striving to continue building a community of diverse and amazing hackers at PennApps. Just show us what you've made, tell us about why you want to be at PennApps, and we'll do our best to get you here! Applications are currently open.
</div>

<div className={footer}>
  <div className={footerBackground}>
    <StaticImage 
      src="../images/footer-background.png"> 
    </StaticImage>
  </div>

  <div className={group}>
    <div className={conduct}>Code of Conduct</div>
    <div className={social}>Facebook Twitter Instagram</div>
  </div>

  <div className={footerContent}>
    <div className={trademark}>© 2022 PennApps
        contact@pennapps.com</div>
    <div className={footerTitle}>PENN<br></br>APPS</div>
  </div>


  <div className={groupTwo}>
    <div className={groupThree}>
    </div>
    <StaticImage className={logo} src="../images/penn-logo.png">
      </StaticImage>
    
    <div className={organised}>Organized with support from:</div>
  </div>


</div>

  </div>
    

  )
}

export default Layout