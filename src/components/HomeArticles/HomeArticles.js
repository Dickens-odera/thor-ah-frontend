import React, { Component } from 'react';
// components
import ArticlesTab from '../ArticlesTab/ArticlesTab';
import Articles from '../Articles/Articles';
// styles
import styles from './homeArticles.module.scss';

class HomeArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'featured',
      tabContent: 'featured',
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    this.setState({
      activeTab: tab,
      tabContent: tab,
    })
  }

  render() {
    const { activeTab, tabContent } = this.state;
    return (
      <div className={styles.homeArticles}>
        <ArticlesTab toggle={ this.toggleTab } active={ activeTab } />
        <Articles content={ tabContent } />
      </div>
    )
  }
}

export default HomeArticles;
