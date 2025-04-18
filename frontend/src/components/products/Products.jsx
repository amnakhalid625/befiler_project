import React, { useState, useEffect, useRef } from 'react';
import './products.css';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const products = [
    {
      id: 1,
      title: "Individual NTN Registration",
      description: "Just register your Individual NTN in 3 simple steps. Register, Upload, Pay.",
      link: "ntn-services"
    },
    {
      id: 2,
      title: "Tax Filing",
      description: "No appointments, no documents, File your taxes within minutes.",
      link: "tax-form/year"
    },
    {
      id: 3,
      title: "Business NTN Registration",
      description: "The simplest and quickest way to start your business in pakistan.",
      link: "ntn-services/business-ntn/add-ntn-business"
    },
    {
      id: 4,
      title: "Sales Tax Registration",
      description: "GST Registration was never this easy, Register your sales tax with Befiler Now.",
      link: "sales-tax/registration"
    },
    {
      id: 5,
      title: "Business Tax Filing",
      description: "Stop worrying about your taxes, Befiler team of experts got you covered.",
      link: "dashboard"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
      if (window.innerWidth <= 820) {
        setCurrentIndex(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigateTo = (path) => {
    console.log(`Navigating to ${path}`);
    // window.location.href = path;
  };

  const scrollToItem = (index) => {
    if (index < 1 || index > products.length) return;

    setCurrentIndex(index);
    const container = scrollContainerRef.current;
    const item = document.getElementById(`product__item-${index}`);

    if (container && item) {
      const containerWidth = container.offsetWidth;
      const itemWidth = item.offsetWidth;
      const itemOffset = item.offsetLeft;
      const scrollPosition = itemOffset - (containerWidth / 2) + (itemWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (currentIndex >= products.length) return;
    scrollToItem(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex <= 1) return;
    scrollToItem(currentIndex - 1);
  };

  return (
    <div className="products">
      <div className="products__container">
        <div className="products__title">Popular Products</div>
        <div className="products__wrapper">
          <div
            className="products__scroll"
            ref={scrollContainerRef}
          >
            <div className="products__list">
              <div className="products__item--invisible"></div>

              {products.map((product) => (
                <div
                  key={product.id}
                  id={`product__item-${product.id}`}
                  className={`products__item ${currentIndex === product.id ? 'products__item--center' : ''}`}
                >
                  <div className="products__item-title">{product.title}</div>
                  <div className="products__item-description">{product.description}</div>
                  <div className="products__item-button">
                    <button onClick={() => navigateTo(product.link)}>
                      Click here to start now
                    </button>
                  </div>
                </div>
              ))}

              <div className="products__item--invisible"></div>
            </div>
          </div>

          <div className="products__navigation">
            <div className="products__nav-prev" onClick={handlePrev}>‹</div>
            <div className="products__nav-next" onClick={handleNext}>›</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
