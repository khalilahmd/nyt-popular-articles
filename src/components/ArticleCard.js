import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </li>
  );
};

export default ArticleCard;
