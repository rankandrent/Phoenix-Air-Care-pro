import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

const BlogCard = ({ title, excerpt, image, date }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href="#" className="text-blue-600 hover:text-blue-700">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;