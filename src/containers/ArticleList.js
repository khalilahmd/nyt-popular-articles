import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../services/articleService';
import ArticleCard from '../components/ArticleCard';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAndSetArticles = async () => {
            try {
                const fetchedArticles = await fetchArticles();
                setArticles(fetchedArticles);
            } catch (error) {
                console.error("Error while fetching articles", error);
                setError('Failed to fetch articles. Please try again later.');
            }
        };
        fetchAndSetArticles();
    }, []);

    return (
        <div>
        <h1>NY Times Most Popular Articles</h1>
        {error ? (
            <div className="error-message">{error}</div>
        ) : (
            <ul>
            {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
            ))}
            </ul>
        )}
        </div>
    );
};

export default ArticleList;