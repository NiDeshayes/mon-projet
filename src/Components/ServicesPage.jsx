import React, { useState } from 'react';
import './Assets/Styles/services.css'; 
import artisansData from '../Data'; 

const ArtisanCard = ({ artisan }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`artisan-card ${expanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <h3>{artisan.name}</h3>
      <div className="rating">
        {Array.from({ length: Math.floor(artisan.note) }, (_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </div>
      {expanded && (
        <div className="details">
          <p><strong>Spécialité:</strong> {artisan.specialty}</p>
          <p><strong>Localisation:</strong> {artisan.location}</p>
          <p><strong>Email:</strong> {artisan.email}</p>
          <p><strong>Site Web:</strong> {artisan.website}</p>
          <p><strong>À propos:</strong> {artisan.about}</p>
          
        </div>
      )}
    </div>
  );
};

const ServicesPage = () => {
  const [selectedArtisan, setSelectedArtisan] = useState(null);

  const servicesArtisans = artisansData.filter(artisan => artisan.category === 'Services');

  const handleArtisanClick = (id) => {
    setSelectedArtisan(id);
    console.log(`Redirection vers la fiche de l'artisan avec l'ID ${id}`);
    
  };

  return (
    <div className="services-page">
      <h1>Liste des Artisans en Services</h1>
      <div className="artisan-list">
        {servicesArtisans.map((artisan) => (
          <ArtisanCard key={artisan.id} artisan={artisan} onClick={handleArtisanClick} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
