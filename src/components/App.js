import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (terms) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: terms },
      headers: {
        Authorization: "Client-ID aOxF_EOqUteEPpXlw9BitLwdoVU6-kCuPbs0NovPXyg",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
