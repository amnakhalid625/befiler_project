import React, { useRef } from 'react';
import './testimonial.css';

import AboutImage from '../../assets/test.png';
import Profile1 from '../../assets/r1.jpg';
import Profile2 from '../../assets/r2.jpg';
import Profile3 from '../../assets/r3.jpg';
import Profile4 from '../../assets/r4.jpg';
import Profile5 from '../../assets/r5.jpg';
import Profile6 from '../../assets/r6.jpg';
import Profile7 from '../../assets/r7.jpg';
import Profile8 from '../../assets/r8.jpg';
import Profile9 from '../../assets/r9.jpg';
import Profile10 from '../../assets/r10.jpg';

const Testimonial = () => {
  const reviewsListRef = useRef(null);

  const reviews = [
    {
      id: 1,
      review: "Its a great service to deal with the FBR issues. staff is very cooperative, helpful and responds quickly.",
      author: "Muhammad Umair Umer",
      image: Profile1
    },
    {
      id: 2,
      review: "I was struggling in tax filing, Befiler helped me in the process. The team is really professional and competent in their work. Highly recommend.",
      author: "Rizwan Muhammad",
      image: Profile2
    },
    {
      id: 3,
      review: "My experience have been quite good so far. They do focus on the significance of customer satisfaction.",
      author: "Mamoon Javaid",
      image: Profile3
    },
    {
      id: 4,
      review: "I filed my tax returns through Befiler and it was an excellent experience.",
      author: "Hussain Khan",
      image: Profile4
    },
    {
      id: 5,
      review: "I really appreciated the team's support and their customers service.Highly recommended.",
      author: "Syed Abid",
      image: Profile5
    },
    {
      id: 6,
      review: "My experience with Befiler is going great. They are professional and they are also very helpful. Highly recommend them.",
      author: "Subhan Waheed",
      image: Profile6
    },
    {
      id: 7,
      review: "I think it's a great way to become a Filer. Their correspondence and response is outstanding. They put in extra effort to accommodate their customers on daily basis.",
      author: "Danyal Rahmani",
      image: Profile7
    },
    {
      id: 8,
      review: "Great service provider. Highly recommend to new freelancers and businessmen to avail their services and register yourselves with FBR.",
      author: "Rai Ghulam Qadir",
      image: Profile8
    },
    {
      id: 9,
      review: "Befiler has provided a great service in filing the tax return, each step was guided properly and if there were any concerns they do clear it before proceeding to process.",
      author: "Abdul Moiz",
      image: Profile9
    },
    {
      id: 10,
      review: "It was very difficult to file the tax. A common citizen was not properly guided to file the tax. But with this app its the easiest thing to do.",
      author: "Yawar Khan",
      image: Profile10
    }
  ];

  const handleNavigation = (direction) => {
    if (!reviewsListRef.current) return;
    
    const scrollAmount = reviewsListRef.current.clientWidth / 2;
    reviewsListRef.current.scrollBy({
      left: direction === 'NEXT' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="reviews">
      <div className="container ">
        <div className="reviews__title">
          <h1 className='text-2xl lg:text-4xl sm:text-3xl font-semibold mb-8'>
          What people has to say about us
          </h1>
          </div>
        
        <div className="d-flex justify-content-between">
          {/* Left side - Image */}
          <div className="reviews__image">
            <img src={AboutImage} alt="reviews" loading="lazy" />
          </div>
          
          {/* Right side - Reviews content */}
          <div className="reviews__content">
            <div className="content__list" ref={reviewsListRef}>
              {reviews.map((item) => (
                <div key={item.id} className="list__item">
                  <div className="item__profile">
                    <img src={item.image} alt="profile" loading="lazy" />
                  </div>
                  <div className="item__text">
                    <span className="text__review">"{item.review}"</span>
                    <span className="text__author">— {item.author}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="navigation-btn">
              <span className="prev" onClick={() => handleNavigation('PREV')}>‹</span>
              <span className="next" onClick={() => handleNavigation('NEXT')}>›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;