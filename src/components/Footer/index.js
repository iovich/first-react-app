import React from 'react';
class Footer extends React.Component {
    render() {
        return React.createElement("footer", { className: "footer" },
            React.createElement("div", { className: "phone-number" }, "0996544321"),
            React.createElement("div", { className: "gmail" }, "1234@gmail.com")
        );
    }
}

export default Footer;