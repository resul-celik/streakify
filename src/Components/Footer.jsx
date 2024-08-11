import { content } from "./Content"


const Footer = () => {
    return (
        <nav className="footer">
            {
                content.map((c,i) => {
                    return (
                        <a href={`/#/${c.slug}`} key={i} className="footer-item">{c.title}</a>
                    )
                })
            }
            <a href="https://github.com/resul-celik/streakify" target="_blank" className="footer-item">Github</a>
        </nav>
    )
}

export default Footer