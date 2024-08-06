import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './blogPosts';
import { Helmet } from 'react-helmet';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const styles = {
  blogContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  blogTitle: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  searchContainer: {
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
  },
  searchInput: {
    width: '100%',
    maxWidth: '600px',
    padding: '0.5rem 1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.375rem',
    fontSize: '1rem',
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
  blogCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
  blogCardImage: {
    width: '40%',
    objectFit: 'cover',
  },
  blogCardContent: {
    width: '60%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  blogCardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  blogCardDescription: {
    color: '#4a5568',
    marginBottom: '0.5rem',
  },
  blogCardDate: {
    fontSize: '0.875rem',
    color: '#718096',
    marginBottom: '0.5rem',
  },
  blogCardLink: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#4299e1',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0.25rem',
    transition: 'background-color 0.3s ease',
    alignSelf: 'center',
  },
  '@media (max-width: 767px)': {
    blogContainer: {
      padding: '1rem 0.5rem',
    },
    blogTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },
    blogCard: {
      flexDirection: 'column',
    },
    blogCardImage: {
      width: '100%',
      height: '150px',
    },
    blogCardContent: {
      width: '100%',
      padding: '0.75rem 0.5rem',
      display: 'flex',
      flexDirection: 'column',
    },
    blogCardTitle: {
      fontSize: '0.9rem',
      lineHeight: '1.3',
      fontWeight: '700',
      marginBottom: '0.5rem',
      textAlign: 'left',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      hyphens: 'auto',
      whiteSpace: 'pre-wrap',
    },
    blogCardDescription: {
      fontSize: '0.8rem',
      lineHeight: '1.4',
      marginBottom: '0.5rem',
      textAlign: 'left',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      hyphens: 'auto',
      whiteSpace: 'pre-wrap',
    },
    blogCardDate: {
      fontSize: '0.75rem',
      marginBottom: '0.5rem',
      textAlign: 'center',
    },
    blogCardLink: {
      fontSize: '0.85rem',
      padding: '0.3rem 0.6rem',
      alignSelf: 'center',
      textAlign: 'center',
      width: 'auto',
      marginTop: '0.5rem',
    },
  },
};

const BlogCard = ({ post }) => {
  const width = useWindowWidth();
  const isMobile = width <= 767;

  return (
    <div style={{...styles.blogCard, ...(isMobile && styles['@media (max-width: 767px)'].blogCard)}}>
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        style={{...styles.blogCardImage, ...(isMobile && styles['@media (max-width: 767px)'].blogCardImage)}} 
      />
      <div style={{...styles.blogCardContent, ...(isMobile && styles['@media (max-width: 767px)'].blogCardContent)}}>
        <h2 style={{...styles.blogCardTitle, ...(isMobile && styles['@media (max-width: 767px)'].blogCardTitle)}}>{post.title}</h2>
        <p style={{...styles.blogCardDescription, ...(isMobile && styles['@media (max-width: 767px)'].blogCardDescription)}}>{post.description}</p>
        <div style={{ marginTop: 'auto' }}>
          <p style={{...styles.blogCardDate, ...(isMobile && styles['@media (max-width: 767px)'].blogCardDate)}}>Posted on {post.date}</p>
          <Link to={`/blog/${post.slug}`} style={{...styles.blogCardLink, ...(isMobile && styles['@media (max-width: 767px)'].blogCardLink)}}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div style={styles.blogContainer}>
       <Helmet>
        <title>Hendoi Technologies Blog | Insights on Web, Mobile, and Cloud Development</title>
        <meta name="description" content="Explore the latest insights, tips, and trends in web development, mobile app creation, cloud solutions, and digital marketing from Hendoi Technologies' expert team." />
      </Helmet>
      <h1 style={styles.blogTitle}>Our Blog</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>
      <div style={styles.blogGrid}>
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;