import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import all category action
import { getAllCategories } from '../../actions/categories';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state ={};

  }

  componentDidMount() {
    const { getAllCategories: fetchAllCategories } = this.props;
    fetchAllCategories();
  }

  render() {
    const { categories } = this.props;
    if (categories && categories.isLoading) {
      return (
        <div className='loading-spinner'>
          <i className='fa fa-3x fa-spinner fa-spin' />
        </div>
      )
    }

    if (categories && categories.isError) {
      return (
        <div className='loading-spinner'>
          <h2> Server unreachable at the moment. Please Refresh the Page </h2>
        </div>
      )
    }
  
    const { data } = categories;
    console.log('DATA', data);
    
    
    return (
      <div className='container'>
        <hr className='category-hr'/>
        <h1>Categories</h1>
        <hr/>
        <div className='row'>
          {data && data.map(category => {
            const { id, name } = category;
            return (
              <div key={id} className='col-sm-6 col-md-4 col-sm-offset-6'>
                <div className='card text-center'>
                  <div className='card-body'>
                    <Link to={ `/articles/categories/${name}` }
                      className='category-card'
                    >
                      { name }
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
          <hr/>
      </div>
    )
  }
  
}


Categories.propTypes = {
  getAllCategories: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { category } = state;
  return {
    categories: category.categories,
  }
};

const AllCategories =  connect(mapStateToProps, { getAllCategories })(Categories);

export default AllCategories;

