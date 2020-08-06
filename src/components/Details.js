import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "../contexts/ThemeContext";

class Details extends React.Component {
  state = { loading: true };

  //   constructor(props) {
  //     super(props);
  //     this.state = { loading: true };
  //   }

  componentDidMount() {
    // throw new Error("lol 2");
    pet
      .animal(this.props.id)
      .then(
        ({ animal, error }) => {
          if (animal) {
            this.setState({
              name: animal.name,
              animal: animal.type,
              location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
              description: animal.description,
              media: animal.photos,
              breed: animal.breeds.primary,
              loading: false,
              error: null,
            });
          } else {
            console.warn(error);
            this.setState({ loading: false, error: "Error :(" });
          }
        },
        (error) => {
          throw new Error(error);
        }
      )
      .catch((error) => {
        throw new Error(error);
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }
    // if (this.state.error) {
    //   return <h1>{this.state.error}</h1>;
    // }
    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button style={{ backgroundColor: theme }}>
              Adopt {name} (theme: {theme})
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
        <Carousel photos={media} />
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
