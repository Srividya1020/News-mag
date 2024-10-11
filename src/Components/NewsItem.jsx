// import React from 'react'

// const NewsItem = ({title,description,src,url,author,publishedAt}) => {
//   return (
//     <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: '345px'}}>
//     <img src={src} style ={{height:'200px',width:'325px'}}className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">{title.slice(0,50)}</h5>
//       <p className="card-text">{description? description.slice(0,90) : "The news articles has no content."}</p>
//       <p className="card-text"><small className="text-muted">By {author} on {publishedAt}</small></p>
//       <a href= {url} className="btn btn-primary">Read More</a>
//     </div>
//   </div>
//   )
// }

// export default NewsItem

// import React from 'react';

// const NewsItem = ({ title, description, src, url, author, publishedAt, content }) => {
//     return (
//         <div className="card  bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 objectFit: 'cover' style={{maxWidth: '345px'}}"> {/* h-100 ensures the card takes full height */}
//             <img src={src} className=" card bg-dark card-img-top" alt={title} />
//             <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">{description}</p>
//                 <p className="card-text mt-auto"><small className="text-muted">By {author} on {publishedAt}</small></p>
//                 <p className="card-text">{content}</p>
//             </div>
//             <div className="card-footer">
//                 <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">Read More</a>
//             </div>
//         </div>
//     );
// };

// export default NewsItem;


import React from 'react';
import image from '../assets/News.jpeg';

const NewsItem = ({ title, description, src, url, author, publishedAt, content }) => {
    // Check for "Removed" or null values and provide alternate text
    const cleanTitle = title === '[Removed]' || !title ? 'Title not available' : title;
    const cleanDescription = description === '[Removed]' || !description ? 'Description not available' : description;
    const cleanAuthor = author === '[Removed]' || !author ? 'Unknown author' : author;
    const cleanContent = content === '[Removed]' || !content ? 'No content available' : content;
    const cleanPublishedAt = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Date not available';
    const cleanSrc = src === '[Removed]' || !src ? image : src; // Provide fallback for image

    return (
        <div className="card h-100 bg-dark text-light p-3">
            <img 
                src={cleanSrc} 
                className="card-img-top" 
                alt={cleanTitle} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Uniform image size
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{cleanTitle}</h5>
                <p className="card-text">{cleanDescription}</p>
                <p className="card-text"><small className="text-muted">By {cleanAuthor} on {cleanPublishedAt}</small></p>
                <p className="card-text">{cleanContent}</p>
                <a href={url || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">Read More</a>
            </div>
        </div>
    );
};

export default NewsItem;
