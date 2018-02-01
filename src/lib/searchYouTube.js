var searchYouTube = (options, callback) => {
  console.log(options);
  let url = 'https://www.googleapis.com/youtube/v3/search';
  options.part = 'snippet';
  options.q = options.query;
  delete options.query;
  options.maxResults = options.max;
  delete options.max;
  $.get({
    url: url, 
    data: options,
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.log(error);
    }
  });
};
//?key=AIzaSyCBsKbxElw71tJeEaGD6HSLVsDXM0WdTV8&query=react&max=5

window.searchYouTube = searchYouTube;
