import { useEffect } from "react"
import { content } from "./Content"
import Footer from "./Footer"
import Logo from "./Logo"

const Page = ({page}) => {

    useEffect(() => {
        content.map((c,i) => {
            if (c.slug == page) {
                document.title = `${c.title} - Streakify.art`;
            }
        })
    }, [page]);

    return (
        <div className="page">
            <a href="/">
                <Logo color='DEFF7F' width={142} height={34} />
            </a>
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
            <Footer />
        </div>
    )
}

export default Page