class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {
        id: {
          videoId: '' //this is a placeholder
        }, 
        snippet: {
          title: '',
          description: ''
        },
      },
      searchTerm: ''
    };
    this.options = {
      key: YOUTUBE_API_KEY,
      query: 'dogs',
      max: 5
    };
  }

  handleClick(selected) { /*handleClick is a method on our App */

    this.setState({selectedVideo: selected});
  }

  handleChange(input) {
    this.setState({searchTerm: input});
    var options = {
      key: YOUTUBE_API_KEY,
      query: input.length < 1 ? 'dogs' : input,
      max: 5
    };
      
    this.props.searchYouTube(options, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  componentDidMount() {
    this.props.searchYouTube(this.options, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  handleSubmit() {
    console.log('handleSubmit!!');
    var options = {
      key: YOUTUBE_API_KEY,
      query: this.state.searchTerm,
      max: 5
    };
    this.props.searchYouTube(options, data => { 
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSubmit={() => this.handleSubmit()} handleChange={(input) => { this.handleChange(input); } } />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selectedVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={(e) => this.handleClick(e)}/> {/*handleClick is a property on the videoList component */}
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
