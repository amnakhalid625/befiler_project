import React from "react";
import "./blog.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "Benefits of Sales Tax Filing",
      subtitle: "in Pakistan",
      description: "As a business owner in Pakistan, it is essential to understand the regulations surrounding sales tax filing. Failing to comply can result in penalties...",
      image: "https://www.befiler.com/wordpress/wp-content/uploads/2025/03/Benefits-of-Filing-Sales-Tax-in-Pakistan.jpg"
    },
    {
      title: "Understanding Sales Tax",
      subtitle: "Registration in Pakistan",
      description: "If you are running a business in Pakistan? Then sales tax registration should be your must-know topic! It's not just about fulfilling...",
      image: "https://www.befiler.com/wordpress/wp-content/uploads/2025/03/Understanding-Sales-Tax-Registration-in-Pakistan.jpg"
    },
    {
      title: "Why do people need",
      subtitle: "to file their taxes?",
      description: "A majority of Pakistani people confuse tax filing with tax paying. Both of these two terms are actually two different things...",
      image: "https://www.befiler.com/wordpress/wp-content/uploads/2025/01/Why-do-People-Need-to-File-their-Taxes.jpg"
    },
    {
      title: "Tax Planning for",
      subtitle: "Freelancers in Pakistan",
      description: "Navigating taxes can be a daunting task for freelancers in Pakistan. With freelancing becoming a booming sector and a major contributor...",
      image: "https://www.befiler.com/wordpress/wp-content/uploads/2025/01/Tax-Planning-for-Freelancers-in-Pakistan.jpg"
    },
    {
      title: "Understanding the BOIR",
      subtitle: "Filing Requirement",
      description: "The Corporate Transparency Act (CTA) mandates that certain U.S. business entities disclose information about their beneficial owners...",
      image: "https://www.befiler.com/wordpress/wp-content/uploads/2025/01/Understanding-the-BOI-Report-Filing-Requirement.jpg"
    },
    {
      title: "Pakistan's Real Estate",
      subtitle: "Sector: Taxes and Impact",
      description: "Pakistan's real estate sector is a larger contributor to the country's GDP and is also one of the most heavily taxed industries...",
      image: "https://www.befiler.com/wordpress/wp-content/uploads/2024/12/Pakistans-Real-Estate-Sector-Taxes-and-Its-Impact-.jpg"
    },
    {
      title: "Sindh Finance Act",
      subtitle: "2024 – 2025",
      description: "The Sindh Finance Bill 2024, passed by the Provincial Assembly of Sindh on June 28, 2024, has been enacted as the Sindh Finance Act 2024...",
      image: "https://www.befiler.com/wordpress/wp-content/uploads/2024/07/Sindh-Finance-Act-2024.jpg"
    },
    {
      title: "Tax Card",
      subtitle: "2024-2025",
      description: "As Pakistan enters the fiscal year 2024-2025, understanding the updated tax regulations is crucial for individuals and businesses alike...",
      image: "https://www.befiler.com/wordpress/wp-content/uploads/2024/07/Tax-Card-2024-25.jpg"
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h1 className=" text-center text-2xl lg:text-4xl sm:text-3xl font-semibold mb-10">Recent Blogs</h1>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image-container">
                <img 
                  src={post.image} 
                  alt={`${post.title} ${post.subtitle}`}
                  className="blog-image"
                  loading="lazy"
                />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <h4 className="blog-subtitle">{post.subtitle}</h4>
                <p className="blog-description">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;