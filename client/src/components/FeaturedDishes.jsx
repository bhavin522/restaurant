import React from 'react';
import paneerMasala from '../assets/images/Paneer_Masala.png';
import dosa from '../assets/images/Dosa.png';
import vegBiryani from '../assets/images/Veg_Biryani.png';

const dishes = [
  {
    name: 'Paneer Masala',
    img: paneerMasala,
  },
  {
    name: 'Dosa',
    img: dosa,
  },
  {
    name: 'Veg Biryani',
    img: vegBiryani,
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