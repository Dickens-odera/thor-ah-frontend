import React from "react";
import ContentLoader from "react-content-loader";

const ArticleLoader = props => (
  <ContentLoader
    rtl
    height={360}
    width={300}
    speed={4}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
    <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
    <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
    <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
    <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
    <circle cx="30" cy="30" r="30" />
    <rect x="-2" y="135" rx="3" ry="3" width="350" height="6.4" />
    <rect x="-3" y="151" rx="3" ry="3" width="350" height="6.4" />
    <rect x="-4" y="165" rx="3" ry="3" width="350" height="6.4" />
    <rect x="-4" y="180" rx="3" ry="3" width="201" height="6.4" />
    <rect x="-20" y="200" rx="3" ry="3" width="350" height="6.4" />
    <rect x="-11" y="216" rx="3" ry="3" width="350" height="6.4" />
    <rect x="-9" y="234" rx="3" ry="3" width="350" height="6.4" />
    <rect x="-2" y="249" rx="3" ry="3" width="250" height="6.4" />
    <rect x="-4" y="269" rx="3" ry="3" width="250" height="6.4" />
  </ContentLoader>
);

export default ArticleLoader;
