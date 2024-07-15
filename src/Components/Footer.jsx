
function Footer() {
    const date = new Date().getFullYear();
    return<div className="footer">
    <h3 className="h1">Copyright {date}  </h3>
    </div>
}

export default Footer;