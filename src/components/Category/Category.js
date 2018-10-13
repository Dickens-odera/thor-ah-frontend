import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import windowSize from 'react-window-size';
// styles
import styles from './category.module.scss';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Business' },
        { id: 2, name: 'Technology' },
        { id: 3, name: 'Science' },
        { id: 4, name: 'Sports' },
        { id: 5, name: 'Design' },
        { id: 6, name: 'Politics' },
      ],
    };
  }

  render() {
    const { categories } = this.state;
    const { mobileCategory } = this.props
    const categoryStyle = {
      display: mobileCategory === 'visible' ? 'block' : 'none',
    }
    return (
      <div className={`${styles.category}`} style={categoryStyle}>
        <ul>
          {categories.map(category => {
            const { id, name } = category;
            return (
              <li key={id}><Link to={ `/category/${name}` }>{ name }</Link></li>
            );
          })}
          <li>
            <Link to="/categories"> All Categories </Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default windowSize(Category);
