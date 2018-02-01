

var VideoListEntry = ({video, handleClick}) => {
  //es6 destructuring method {video} this is equal to 'the first object passed in as an argument has a property of video, set that property to a variable called video'
  // console.log(video)
  return (
    <div onClick={() => handleClick(video)}className="video-list-entry media"> {/*onClick is anonymous function that will invoke our handleClick function, this value is bound using arrow function */}
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{video.snippet.title}</div>
        <div className="video-list-entry-detail">{video.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
