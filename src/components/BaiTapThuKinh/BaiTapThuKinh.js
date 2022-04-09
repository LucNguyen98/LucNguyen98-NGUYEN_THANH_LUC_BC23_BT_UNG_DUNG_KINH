import React, { Component } from "react";
import Card from "./Card";
import GlassItem from "./GlassItem";
import danhSachKinh from "../../dataGlasses.json";
const urlBg = "./glassesImage/background.jpg";
export default class BaiTapThuKinh extends Component {

  //state glassSelected thay doi
  state = {
    glassSelected: danhSachKinh[0],
  };

  changeGlasses = (glassSelected) => {
    this.setState({
      glassSelected,
    });
  };

  renderTitle = () => (
    <h3 className="text-center text-white p-5 bg-dark">
      TRY GLASSES APP ONLINE
    </h3>
  );

  renderModels = () => {
    return (
      <div className="container">
        <div class="row mt-5 text-center">
          <div className="col-6">
            <Card
              glassSelected={this.state.glassSelected}
              animation={`animChangeGlasses${Date.now()} 2s`}
            />
          </div>
          <div className="col-6">
            <Card
              glassSelected={this.state.glassSelected}
              animation={`animChangeGlasses${Date.now()} 2s`}
            />
          </div>
        </div>
      </div>
    );
  };

  renderGlasses = () => {
    return danhSachKinh.map((item, index) => (
      <GlassItem
        key={index + ""}
        glassesItem={item}
        index={index}
        changeGlasses={this.changeGlasses}
      />
    ));
  };

  render() {
    const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
      from {
          width: 0;
          transform: rotate(45deg) translateX(-50%);
          opacity:0;
      }
      to {
          width:150px;
          opacity:0.7;
          transform: rotate(0deg) translateX(-50%);

      }
  }`;
    return (
      <div
        style={{
          backgroundImage: `url(${urlBg})`,
          height: "100vh",
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>{keyFrame}</style>
        <div
          style={{
            backgroundColor: "#000000cc",
            height: "100vh",
          }}
        >
          {this.renderTitle()}
          {this.renderModels()}
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
