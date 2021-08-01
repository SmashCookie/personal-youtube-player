import React from "react";
import youtubeApi from "./API/youtube";
import Search from "./Components/Search";
import VideoList from "./Components/VideoList";
import VideoPlayer from "./Components/VideoPlayer";

export default class App extends React.Component {
  state = {
    videoMetaInfo: [],
    selectedVideoId: null,
  };

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId,
    });
  };

  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });

    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });

    console.log(this.state);
  };

  render() {
    return (
      <div className="parent">
        <Search onSearch={this.onSearch} />
        <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videoMetaInfo}
        />
        <VideoPlayer videoId={this.state.selectedVideoId} />
      </div>
    );
  }
}
