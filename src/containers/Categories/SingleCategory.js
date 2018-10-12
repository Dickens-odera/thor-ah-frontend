import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

// Import single category action
import { fetchCategoryAction } from '../../actions/categories';

//  import component
import Article from '../../components/Article/Article';

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../components/Articles/articles.module.scss';

// images
import thumbnailImage from '../../demo.png';

class SingleCategory extends Component {
  constructor(props) {
    super(props);
    this.state ={};

  }

  componentDidMount() {
    const {
      fetchCategoryAction: fetchCategory,
      match: { params: { name: searchTerm } },
    } = this.props;
    fetchCategory(searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params: { name: oldSearchTerm } }} = this.props;

    const {
      fetchCategoryAction: fetchCategory,
      match: { params: { name: newSearchTerm } },
    } = nextProps;

    if (newSearchTerm !== oldSearchTerm) {
      fetchCategory(newSearchTerm);
    }
  }

  render() {
    const { category } = this.props;
    let data = { category };
    if (category && category.isLoading) {
      return (
        <div className='loading-spinner'>
          <i className='fa fa-3x fa-spinner fa-spin' />
        </div>
      )
    }

    if (category && category.isError) {
      return (
        <div className='loading-spinner'>
          <h2> Server unreachable at the moment. Please Refresh the Page </h2>
        </div>
      )
    }

    if (category && !category.isLoading) {
      data = category.data;
      console.log('DATA', data);
    }
    
    
    return (
      <div className={ styles.categoryBody }>
        <hr className='category-hr'/>
        <h1>{data.name}</h1>
        <hr/>
        <div className={ styles.articles }>
          <div className={ styles.active }>
            {data.category && data.category.map(article => {
              const { id, title, image, slug, description, timeToRead, author, createdAt } = article;
              const snippet = description;
              const details = {
                author: `${author.firstName} ${author.lastName}`,
                timeToRead: `${timeToRead} min Read`,
                date: moment(createdAt).format("Do MMM, YY"),
              }
              return (
                <Article
                  key={ id }
                  title={ title }
                  snippet={ snippet }
                  slug={ slug }
                  thumbnail={ image || thumbnailImage }
                  details={ details }
                />
              )
            }) }
          </div>
        </div>
        <hr/>
      </div>
    )
  }
  
}


SingleCategory.propTypes = {
  fetchCategoryAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { category: { category } } = state;
  return {
    category,
  }
};

const ArticleCategory = connect(mapStateToProps, { fetchCategoryAction })(SingleCategory);

export default ArticleCategory;
