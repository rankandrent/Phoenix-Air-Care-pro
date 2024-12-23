import React from 'react';
import PageHero from '../components/shared/PageHero';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <div>
      <PageHero
        title="Latest Updates & Tips"
        description="Stay informed with the latest news, tips, and insights about air duct cleaning and indoor air quality."
      />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              title="Benefits of Professional Air Duct Cleaning"
              excerpt="Learn why regular air duct cleaning is essential for Phoenix homes..."
              image="https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              date="March 15, 2024"
            />
            <BlogCard
              title="Air Duct Cleaning Cost Guide"
              excerpt="Understanding air duct cleaning costs in Phoenix, AZ..."
              image="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              date="March 10, 2024"
            />
            <BlogCard
              title="Commercial Air Duct Cleaning"
              excerpt="Expert commercial air duct cleaning services in Phoenix..."
              image="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              date="March 5, 2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;