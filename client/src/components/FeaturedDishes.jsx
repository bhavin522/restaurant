import React from 'react';

const dishes = [
  {
    name: 'Samosa',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Butter Chicken',
    img: 'https://images.unsplash.com/photo-1600628422019-6c1a9b7b8c5e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Palak Paneer',
    img: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80',
  },
];

const FeaturedDishes = () => (
  <section className="featured-dishes">
    <h3>Featured Dishes</h3>
    <div className="dish-cards">
      {dishes.map((dish) => (
        <div className="dish-card" key={dish.name}>
          <img src={dish.img} alt={dish.name} />
          <span>{dish.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedDishes; 