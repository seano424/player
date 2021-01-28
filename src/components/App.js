import React from "react";
import youtube from "../api/youtube";
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import './App.css'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onFormSubmit('dogs')
  }

  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoPlayer video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
