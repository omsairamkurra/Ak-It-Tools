import React from 'react'
import './about.css'


const About = () => {
    const togglePortfolio = () => {
        window.open("https://omsairamkurra-portfolio.netlify.app/", "_blank");
    };

    return (
        <div>
            <div className='container'>
                <h4 className='about-heading'>About IT-Tools</h4>
                <p className='about-paragraph'>
                    This wonderful website, made with ❤ by <span onClick={togglePortfolio}>OmSaiRam</span>, aggregates useful tools for developers and people working in IT.
                    If you find it useful, please feel free to share it with people you think may find it useful too and don't forget to bookmark it in your shortcut bar!
                    IT Tools is open-source (under the GPL-3.0 license) and free, and will always be, but it costs me money to host and renew the domain name.
                    If you want to support my work, and encourage me to add more tools.
                </p>
            </div>
            <div className='container'>
                <h4 className='about-heading'>Technologies</h4>
                <p className='about-paragraph'>
                    IT Tools is made in React.js with the the Material UI component library and is hosted and continuously deployed by Vercel. Third-party open-source libraries are used in some tools, you may find the complete list in the package.json file of the repository.
                </p>
            </div>
            <div className='container'>
                <h4 className='about-heading'>Found a bug? A tool is missing?</h4>
                <p className='about-paragraph'>
                    If you need a tool that is currently not present here, and you think can be useful, you are welcome to submit a feature request in the issues section in the GitHub repository. And if you found a bug, or something doesn't work as expected, please file a bug report in the issues section in the GitHub repository.
                </p>
            </div>
        </div>
    );
};

export default About;


