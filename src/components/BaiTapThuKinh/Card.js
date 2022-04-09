import React, { Component } from "react";

const urlModel = "./glassesImage/model.jpg";

class Card extends Component {
  render() {
    const { glassSelected ,animation} = this.props;
    const { name, desc, url } = glassSelected || {};
    return (
      <div>
        <img
          src={urlModel}
          width="250px"
          alt="..."
          className="position-relative"
        />

        <img
          className="position-absolute"
          style={{
            width: "150px",
            left: "50%",
            transform: "rotate(0deg) translateX(-50%)",
            top: "25%",
            opacity: 0.7,
            animation
          }}
          src={url}
          alt={name}
        />
        <div
          className="position-absolute"
          style={{
            bottom: 0,
            backgroundColor: "#ff7f0080",
            height: "105px",
            width: " 250px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "left",
            paddingLeft: "15px",
          }}
        >
          <span
            className="text-uppercase font-weight-bold"
            style={{
              color: "#ab82ff",
              fontSize: "17px",
            }}
          >
            {name}
          </span>
          <p
            style={{
              fontSize: "14px",
              paddingRight: "5px",
              fontWeight: 400,
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    );
  }
}

export default React.memo(Card);
