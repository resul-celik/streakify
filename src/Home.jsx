import Footer from "./Components/Footer";
import Logo from "./Components/Logo";
import { randomImages } from "./Components/RandomImages";

const Home = ({uploadForm}) => {

    let canvasWidth = (window.innerWidth - 64) / 2
    let rand = Math.floor(Math.random() * randomImages.length);

    if (window.innerWidth < 768) {
        canvasWidth = window.innerWidth - 40
    }

    return (
        <section className="home">
            <div className="hero">
                <div className="logo-and-text">
                    <Logo color='DEFF7F' width={142} height={34} />
                    <h1 className="title">Transform your photos into vibrant streaked art.</h1>
                </div>
                {uploadForm}
            </div>
            <div className="demo">
                <div className="hero-image">
                    <div className="tag">Original</div>
                    <div className="credit">Photo by <a href={randomImages[rand].authorLink} target="_blank">{randomImages[rand].author}</a> on <a href={randomImages[rand].publisherLink} target="_blank">{randomImages[rand].publisher}</a></div>
                    <img src={randomImages[rand].original} alt={randomImages[rand].alt} loading="lazy" />
                </div>
                <div className="hero-image">
                    <div className="tag">Streakified</div>
                    <img src={randomImages[rand].streakified} alt={randomImages[rand].streakedAlt} loading="lazy" />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Home