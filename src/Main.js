import React, { Component } from "react";
// import BoundingBox from "./BoundingBox";
import { withRouter } from "react-router";
import Photoes from "./photoes";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoesArray: [
        "https://www.azutura.com/media/catalog/product/cache/47/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-45443_WP.jpg",
        "https://images.freeimages.com/images/premium/previews/2691/26910580-sunset-over-the-meadow.jpg",
        "https://s14.flog.pl/media/foto/10028083_zachod-slonca-nad-rzeka-muchawka.jpg",
        "https://static.zoom.nl/0DACD7EA7F368BC28F0C57BD20B21323-zonsondergang-in-drenthe.jpg"
      ],
      image: "",
      boxes: [],
      showPhotoes: true,
      colors: {
        normal: '#9797E8',
        selected: '#97B650',
        unselected: '#ff9999'
      }
    };
  }
  handleCLick = () => {
    this.setState({
      showPhotoes: false
    })
    this.props.history.push({
      pathname: '/customPhoto',
      state: { ...this.states }
    })
  };

  render() {
    return (
      <div className="Main">
        {this.state.showPhotoes ?
          <div className="photo gallery">
            <p className="galleryText"> Photo Gallery </p>
            <p className="customPhoto">Want to upload CustomPhoto </p>
            <button
              type="button"
              className="btn btn-primary submitButton"
              onClick={this.handleCLick}
            >
              Click Me!
      </button>
            <div className="displayPhotoes">
              {this.state.photoesArray.map(item => (
                <Photoes value={item} key={item} />
              ))}
            </div>
          </div> : ''}
      </div>
    );
  }
}

export default withRouter(Main);
