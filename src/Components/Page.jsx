import { useEffect } from "react"
import { content } from "./Content"
import Footer from "./Footer"
import Logo from "./Logo"
import Header from "./Header"
import { headerMenu, footerMenu } from "./Menus"

const Page = ({page}) => {

    useEffect(() => {
        content.map((c,i) => {
            if (c.slug == page) {
                document.title = `${c.title} - Streakify.art`;
            }
        })
    }, [page]);

    const headerLeft = () => {
        return (
            <a href="/">
                <Logo color='DEFF7F' width={142} height={34} />
            </a>
        )
    }

    const footerLeft = () => {
        return <Logo color='5F6469' width={109} height={25} />
    }

    return (
        <div className="page">
            <Header leftCol={headerLeft} rightCol={headerMenu} />
            {
                content.map((c,i) => {
                    return (
                        <>
                            {
                                c.slug == page && (
                                    <article className="content" key={i}>
                                        <h1 className="content-title">{c.title}</h1>
                                        <p className="details">{c.content}</p>
                                    </article>
                                ) 
                            }
                        </>
                    )
                })
            }
            <Footer leftCol={footerLeft} rightCol={footerMenu} />
        </div>
    )
}

export default Page