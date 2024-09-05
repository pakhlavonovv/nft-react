import './sass/style.scss'
import HomeHero from './img/home-hero.svg'

const index = () => {
  return (
    <>
        <section className='home-hero'>
            <div className="container">
                <div className="hero_wrapper">
                    <div className="left_hero">
                        <h1>Discover digital art & Collect NFTs</h1>
                        <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                        <button>Get started</button>
                    </div>
                    <div className="right_hero">
                        <img src={HomeHero} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default index