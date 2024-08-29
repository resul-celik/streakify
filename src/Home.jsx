import Footer from "./Components/Footer";
import Logo from "./Components/Logo";
import { randomImages } from "./Components/RandomImages";
import Header from "./Components/Header";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Item from "./Components/Item";
import { footerMenu, headerMenu } from "./Components/Menus";

const Home = ({uploadForm}) => {

    let gap = '48px'

    if (window.innerWidth < 768) gap = '10px'
    
    const headerLeft = () => {
        return <Logo color='DEFF7F' width={142} height={34} />
    }

    const footerLeft = () => {
        return <Logo color='5F6469' width={109} height={25} />
    }

    return (
        <section className="home">
            <Header leftCol={headerLeft} rightCol={headerMenu} className='home-header' />
            <div className="hero">
                <div className="logo-and-text">
                    
                    <h1 className="title">Transform your photos into vibrant streaked art.</h1>
                </div>
                {uploadForm}
            </div>
            <div className="discover" id="discover">
            <ResponsiveMasonry columnsCountBreakPoints={{150: 1, 768: 2, 900: 3}}>
                <Masonry gutter={gap}>
                    {
                        randomImages.map((img,i) => {
                            return (
                                <Item image={img} id={i} />
                            )
                        })
                    }
                </Masonry>
            </ResponsiveMasonry>
                
           </div>
            <Footer leftCol={footerLeft} rightCol={footerMenu} />
        </section>
    )
}

export default Home