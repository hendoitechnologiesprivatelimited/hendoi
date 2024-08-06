import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from './blogPosts';
import { Helmet } from 'react-helmet';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <div className="post-not-found">Post not found</div>;
  }

   // Generate meta description from the post's description or content
   const metaDescription = post.description || post.content.substring(0, 160).replace(/<[^>]*>/g, '');

  return (
    <div className="blog-post-container">
      <Helmet>
        <title>{post.title} | Hendoi Technologies Blog</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Link to="/blog" className="back-link">&larr; Back to Blog</Link>
      <article className="blog-post">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-meta">Posted on {post.date} by {post.author}</p>
        <img src={post.imageUrl} alt={post.title} className="post-image" />
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </article>
      <style jsx>{`
        /* Global styles */
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f0f2f5;
        }

        .blog-post-container {
          max-width: 800px;
          margin: 3rem auto;
          padding: 0 20px;
        }

        /* Back link */
        .back-link {
          display: inline-block;
          margin-bottom: 1.5rem;
          color: #3498db;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
          font-size: 1.1rem;
        }

        .back-link:hover {
          color: #2980b9;
        }

        /* Blog post */
        .blog-post {
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 3rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-post:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        /* Post title */
        .post-title {
          font-size: 3rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          font-weight: 700;
        }

        /* Post meta */
        .post-meta {
          font-size: 1rem;
          color: #7f8c8d;
          margin-bottom: 2rem;
          font-style: italic;
        }

        /* Post image */
        .post-image {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* Post tags */
        .post-tags {
          margin-top: 3rem;
        }

        .tag {
          display: inline-block;
          background-color: #3498db;
          color: #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          margin-right: 1rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .tag:hover {
          background-color: #2980b9;
        }

        /* Post not found */
        .post-not-found {
          font-size: 1.5rem;
          color: #e74c3c;
          text-align: center;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
