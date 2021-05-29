import React from 'react'
import { HanifLogo, ICDiscord, ICFacebook, ICGithub, ICInstragram, ICTelegram, ICTwitter } from '../../../assets';
import './footer.scss'

const Icon = ({img}) => {
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}
const Footer = () => {
    return (
        <div >
            <div className="footer">
                <div>
                    <img className="logo" src={HanifLogo} alt="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICInstragram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICFacebook} />

                </div>
          
             </div>
           <div className="copyright">
               <p>Copyright</p>
           </div>
        </div>
    )
}

export default Footer
