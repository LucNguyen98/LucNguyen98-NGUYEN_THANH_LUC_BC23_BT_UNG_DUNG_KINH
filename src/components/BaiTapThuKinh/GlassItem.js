import React, { Component } from "react";

class GlassItem extends Component {
  render() {
    const { glassesItem, index, changeGlasses } = this.props;
    return (
      <img
        onClick={() => {
          changeGlasses(glassesItem);
        }}
        className="ml-2 p-2 border border-width-1"
        style={{ width: "110px", cursor: "pointer" }}
        key={index}
        src={glassesItem.url}
        alt="..."
      />
    );
  }
}

export default React.memo(GlassItem);
