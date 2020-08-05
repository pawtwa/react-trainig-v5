import React from "react";

class Carousel extends React.Component {
  state = { photos: [], active: 0 };

  static getDerivedStateFromProps({ photos: media }) {
    let photos = ["https://via.placeholder.com/300.png/09f/fff"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        {/* <pre>{JSON.stringify(this.props, null, 4)}</pre>
        <pre>{JSON.stringify(this.state, null, 4)}</pre> */}
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
