class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.handleChange(term);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value ={this.state.value} onChange={(input) => this.onInputChange(input.target.value)}/>
        <button className="btn hidden-sm-down" onClick={() => this.props.handleSubmit()}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
