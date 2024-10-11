// import React, { useEffect, useState } from 'react';
// import NewsItem from './NewsItem';

// const NewsBoard = ({category}) => {
//     const [articles, setArticles] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 if (data.articles) {
//                     setArticles(data.articles); // No filtering, keep all articles
//                 } else {
//                     setError('No articles found');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 setError('Failed to fetch news');
//             });
//     }, []);

//     return (
//         <div className="container">
//             <h2 className='text-center my-4'>
//                 Latest <span className='badge bg-danger'> News</span>
//             </h2>
//             {error ? (
//                 <p>{error}</p>
//             ) : articles.length > 0 ? (
//                 <div className="row">
//                     {articles.map((news, index) => (
//                         <div key={index} className="col-md-4 mb-4">
//                             <NewsItem
//                                 title={news.title || "No title available"} // Fallback for missing title
//                                 description={news.description || "Description not available"} // Fallback for missing description
//                                 src={news.urlToImage || "https://via.placeholder.com/150"} // Fallback image if urlToImage is null
//                                 url={news.url || "#"}  // Use "#" if URL is null
//                                 author={news.author || "Unknown author"} // Handle missing author
//                                 publishedAt={news.publishedAt || "Date not available"} // Handle missing publish date
//                                 content={news.content || "No content available"} // Handle missing content
//                             />
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default NewsBoard;

import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setArticles(data.articles || []);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch news');
            });
    }, [category]);

    return (
        <div className="container">
            <h2 className='text-center my-4'>
                 <span className='badge bg-danger'> Latest News</span>
            </h2>
            {error ? (
                <p>{error}</p>
            ) : articles.length > 0 ? (
                <div className="row">
                    {articles.map((news, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <NewsItem
                                title={news.title}
                                description={news.description}
                                src={news.urlToImage}
                                url={news.url}
                                author={news.author}
                                publishedAt={news.publishedAt}
                                content={news.content}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default NewsBoard;
