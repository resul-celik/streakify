import Footer from "./Components/Footer";
import Logo from "./Components/Logo";
import Streakifiy from "./Streakify";
import Upload from "./Upload";
import originalImage from './assets/original.png'
import finalImage from './assets/final.png'

const Home = ({setImage,setLoading,loading}) => {

    let canvasWidth = (window.innerWidth - 64) / 2

    if (window.innerWidth < 768) {
    canvasWidth = window.innerWidth - 40
    }

    return (
        <div className="home">
            <div className="hero">
                <div className="logo-and-text">
                    <Logo color='DEFF7F' width={142} height={34} />
                    <div className="title">Transform your photos into vibrant streaked art.</div>
                </div>
                <Upload setImage={setImage} setLoading={setLoading} loading={loading} />
            </div>
            <div className="demo">
                <div className="hero-image">
                    <div className="tag">Original</div>
                    <div className="credit">Photo by <a href="https://unsplash.com/@jennabee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Jenna Beekhuis</a> on <a href="https://unsplash.com/photos/rocks-on-sea-under-sunset-Bm0Ja6LZWl4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a></div>
                    <img src={originalImage} alt="" />
                </div>
                <div className="hero-image">
                    <div className="tag">Streakified</div>
                    <img src={finalImage} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home