import './sass/style.scss'
import Logo from '../header/img/logo.png'
import Icons from './img/Icons.png'
const Index = () => {
  return (
    <>
        <footer className='footer'>
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_left">
                        <img className='logo' src={Logo} alt="" />
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <h4>Join our community</h4>
                        <img className='icons-img' src={Icons} alt="" />
                    </div>
                    <div className="footer_center">
                        <h3>Explore</h3>
                        <a href="#">Marketplace</a>
                        <a href="#">Rankings</a>
                        <a href="#">Connect a wallet</a>
                    </div>
                    <div className="footer_right">
                        <h3>Join our weekly digest</h3>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <div className="right_actions">
                            <input type="email" placeholder='Enter your email here'/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  ) 
}

export default Index