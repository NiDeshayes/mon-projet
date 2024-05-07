

import React from "react";
import { Link } from "react-router-dom";
import data from "../Data";
import "./Accueil.css"; 

const Accueil = () => {
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    if (rating % 1 !== 0) {
      stars.push(<span key="half" className="half-star">&#9733;</span>);
    }
    return stars;
  };

  const renderTopArtisans = () => {
    const topArtisans = data.filter((artisan) => artisan.top).slice(0, 3);
    return topArtisans.map((artisan) => (
      <div className="col-sm-4 mb-4" key={artisan.id}>
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{artisan.name}</h5>
            <div className="rating">
              {renderRatingStars(artisan.note)}
              <span className="rating-text">({artisan.note})</span>
            </div>
            <p className="card-text"><strong>Spécialité:</strong> {artisan.specialty}</p>
            <p className="card-text"><strong>Localisation:</strong> {artisan.location}</p>
            <p className="card-text"><strong>email:</strong> {artisan.email}</p>
            <p className="card-text"><strong>website:</strong> {artisan.website}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    
    <div>
      <h1 className="mt-5 center-title"></h1>
      <div className="container"></div>
      <section className="how-to-find">
        <h2>Comment trouver mon artisan ?</h2>
        <ol>
          <li>Choisir la catégorie d’artisanat dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
          <li>Une réponse sera apportée sous 48h.</li>
        </ol>
      </section>
      <section className="top-artisans">
        <h2>Les trois artisans du mois</h2>
        <div className="row">{renderTopArtisans()}</div>
      </section>
      <Link to="/categories" className="btn btn-primary mt-3">Voir toutes les catégories d'artisans</Link>
    </div>
  );
};

export default Accueil;
