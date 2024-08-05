import { content } from "./Content"

const Footer = () => {
    return (
        <div className="footer">
            {
                content.map((c,i) => {
                    return (
                        <a href={`/${c.slug}`} className="footer-item">{c.title}</a>
                    )
                })
            }
        </div>
    )
}

export default Footer