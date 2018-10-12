import React, { Component } from 'react';
// components
import Article from '../Article/Article';
// styles
import styles from './articles.module.scss'
// images
import thumbnailImage from '../../demo.png';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 1,
          title: 'This Article talks about some Tall Buildings And City Night Life',
          slug: 'this-is-slug',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          thumbnail: thumbnailImage,
        },
        {
          id: 2,
          title: 'This Article talks about some Tall Buildings And City Night Life',
          slug: 'this-is-slug',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          thumbnail: thumbnailImage,
        },
        {
          id: 3,
          title: 'This Article talks about some Tall Buildings And City Night Life',
          slug: 'this-is-slug',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          thumbnail: thumbnailImage,
        },
        {
          id: 4,
          title: 'This Article talks about some Tall Buildings And City Night Life',
          slug: 'this-is-slug',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          thumbnail: thumbnailImage,
        }
      ]
    }
  }

  render() {
    const { articles } = this.state;
    const { content } = this.props;
    if (articles.length < 1) {
      return (
        <div className={ styles.not_found_message }>
          <h1>No Articles Found!</h1>
        </div>
      )
    }
    return (
      <div className={ styles.articles }>
        <div data-content="featured" className={ content === 'featured' ? styles.active : '' }>
          { articles.map(article => {
            const { id, title, slug, thumbnail, description } = article;
            const snippet = description;
            const details = {
              author: 'John Doe',
              timeToRead: '2 mins Read',
              date: '4th, Oct',
            }
            return (
              <Article
                key={ id }
                title={ title }
                snippet={ snippet }
                slug={ slug }
                thumbnail={ thumbnail }
                details={ details }
              />
            )
          }) }
        </div>
        <div data-content="collections" className={ content === 'collections' ? styles.active : '' }>
          <h1>Collections</h1>
        </div>
        <div data-content="recommended" className={ content === 'recommended' ? styles.active : '' }>
          <h1>Recommended</h1>
        </div>
      </div>
    )
  }
}

export default Articles;
