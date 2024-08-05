import { content } from "./Content"
import Footer from "./Footer"
import Logo from "./Logo"

const Page = ({page}) => {

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
                                    <div className="content" key={i}>
                                        <div className="content-title">{c.title}</div>
                                        <div className="details">{c.content}</div>
                                    </div>
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