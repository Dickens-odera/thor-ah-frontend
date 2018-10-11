import React from 'react';
// images
import sceneImage from '../../assets/finepic.png';
import cinemaImage from '../../assets/cinema.png';
import profileImage from "../../assets/Ellipse.png";
// styles
import styles from './RelatedArticle.module.scss';

const RelatedArticle = () => (
  <React.Fragment>
    <div className="col-md-1">{/* Gap between columns */}</div>
    <div className="col-md-4">
      <h4 className="font-italic text-left">Related Articles</h4>
      <div className="card">
        <img src={sceneImage} alt="banner" />
        <p className={`${styles.card_title} p-2 text-left`}>
          Earth Tremors and Night Skies
        </p>
        <hr />
        <div className="p-3 text-left">
          <img src={profileImage} alt="profile" />
          <span className="text-secondary font-weight-bold">
            Jane Doe
          </span>
        </div>
      </div>
      <br />
      <div className="card">
        <img src={cinemaImage} alt="banner" />
        <p className={`${styles.card_title} p-2 text-left`}>
          How to Organize a Central Cinema.
        </p>
        <hr />
        <div className="p-3 text-left">
          <img src={profileImage} alt="profile" />
          <span className="text-secondary font-weight-bold">Jane Doe</span>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default RelatedArticle;
