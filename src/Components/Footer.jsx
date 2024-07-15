
function Footer() {
    const date = new Date().getFullYear();
    return<div className="footer">
    <h2 className="h1">Copyright {date}  </h2>
    </div>
}

export default Footer;