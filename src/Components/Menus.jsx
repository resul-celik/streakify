import { content } from "./Content"

const footerMenu = () => {
    return (
        <nav className="menu footer-menu" role="navigation">
            {
                content.map((c,i) => {
                    return (
                        <a href={`/#/${c.slug}`} key={i} className="menu-item">{c.title}</a>
                    )
                })
            }
            <a href="https://github.com/resul-celik/streakify" target="_blank" className="menu-item">Github</a>
        </nav>
    )
}

const headerMenu = () => {
    return (
        <nav className="menu header-menu" role="navigation">
            <a href={`/#/${content[0].slug}`} className="menu-item">{content[0].title}</a>
            <a href={`/#/${content[1].slug}`} className="menu-item">{content[1].title}</a>
        </nav>
    )
}

export {headerMenu,footerMenu}