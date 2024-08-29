const Footer = ({leftCol,rightCol}) => {
    return (
        <nav className="footer">
            <div className="footer-left">
                {leftCol()}
            </div>
            <div className="footer-right">
                {rightCol()}
            </div>
        </nav>
    )
}

export default Footer