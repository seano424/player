import React from 'react';
import './Searchbar.css'

class Searchbar extends React.Component {
  state = {
    term: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment search-bar" style={{marginTop: '10px'}}>
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
          <label htmlFor="">Search Meeeee</label>
          <input
          value={this.state.term}
          onChange={(e) => this.setState({term: e.target.value})} 
          type="text"/>
          </div>
        </form>
      </div>
    )
  }
}

export default Searchbar;