import React, { Component } from 'react';
// icons
import { FaSearch } from 'react-icons/fa';
// styles
import styles from './search.module.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: 0
    };
    this.processEvent = this.processEvent.bind(this);
  }

  processEvent(e) {
    e.preventDefault();
    const { searchActive } = this.state;
    this.setState({ searchActive: !searchActive });
  }

  render() {
    const { searchActive } = this.state;
    const inputStyle = {
      borderWidth: searchActive ? '1px' : '0',
      width: searchActive ? '200px' : '0',
    };
    return (
      <div className={`${styles.search}`}>
        <form>
          <input type="text" placeholder="Search here" className={styles.search_input} style={inputStyle} />
          <button className={styles.search_submit} type="submit" onClick={this.processEvent}><FaSearch /></button>
        </form>
      </div>
    );
  }
}


export default Search;
