import React from 'react';

interface NewsCardProps {
  title: string;
  body: string;
  imageUrl?: string; // Optional image URL
}

const NewsCard: React.FC<NewsCardProps> = ({ title, body, imageUrl }) => {
  return (
    <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '5px' }}>
      {imageUrl && (
        <img src={imageUrl} alt={title} style={{ width: '100%' }} />
      )}
      <h2 style={{ color: 'white', margin: '0 0 10px 0' }}>{title}</h2>
      <p style={{ color: 'white' }}>{body}</p>
    </div>
  );
};

export default NewsCard;
