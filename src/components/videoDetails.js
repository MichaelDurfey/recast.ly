class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
  } 

  componentDidMount() {
    this.getRating( data => { this.setState({details: data}); });
  }

  getRating(callback) {
    let url = 'https://www.googleapis.com/youtube/v3/videos';
    var options = {
      id: this.props.video.id.videoId,
      key: window.YOUTUBE_API_KEY,
      part: 'statistics,status,topicDetails'
    };
    $.get({
      url: url, 
      data: options,
      success: function(data) {
        callback(data);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
  
  render() {
    return (
      <div>
        {console.log(this.state.data)}
      </div> 
    );
  }
}




window.VideoDetails = VideoDetails;