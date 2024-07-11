
function Footer() {
    const date = new Date().getFullYear();
    return<div className="footer">
    <h1 className="h1">Copyright {date}  </h1>
    </div>
}

export default Footer;