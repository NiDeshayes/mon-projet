import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Assets/Styles/ficheartisan.css';
import artisansData from '../Data';

const FicheArtisanAvecListe = () => {
  const [selectedArtisan, setSelectedArtisan] = useState(null);

  const handleSelect = (event) => {
    const selectedId = event.target.value;
    const artisan = artisansData.find(artisan => artisan.id === selectedId);
    setSelectedArtisan(artisan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u7h9xbi', 'template_h8ow4nd', e.target, '8IBzTvNU8_WpFyvvR')
      .then((result) => {
        console.log('E-mail envoyé avec succès:', result.text);
      }, (error) => {
        console.log('Erreur lors de l\'envoi de l\'e-mail:', error.text);
      });
  };

  const displayArtisanDetails = () => {
    if (!selectedArtisan) {
      return (
        <div>
          <p>Sélectionnez un artisan dans la liste déroulante pour afficher ses détails.</p>
        </div>
      );
    }

    return (
      <div className="fiche-artisan-container">
        <h2>{selectedArtisan.name}</h2>
        <div className="rating">
          {Array.from({ length: Math.floor(selectedArtisan.note) }, (_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
        <p><strong>Spécialité:</strong> {selectedArtisan.specialty}</p>
        <p><strong>Localisation:</strong> {selectedArtisan.location}</p>
        <div>
          <h3>A propos</h3>
          <p>{selectedArtisan.about}</p>
        </div>
        <div>
          <h3>Contactez {selectedArtisan.name}</h3>
          <form onSubmit={handleSubmit}>
            <div className='blase'>
              <input type="text" placeholder="Votre nom" name="from_name" required />
              <input type="text" placeholder="Votre prénom" name="from_lastname" required />
            </div>
            <div className='Message'>
              <textarea placeholder="Votre message" name="message" required />
            </div>
            <div className='bouton'>
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
        {selectedArtisan.website && (
          <div>
            <a href={selectedArtisan.website} target="_blank" rel="noopener noreferrer">
              Visitez le site web de {selectedArtisan.name}
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <select onChange={handleSelect}>
        <option value="">Sélectionnez un artisan</option>
        {artisansData.map(artisan => (
          <option key={artisan.id} value={artisan.id}>{artisan.name}</option>
        ))}
      </select>
      {displayArtisanDetails()}
    </div>
  );
};

export default FicheArtisanAvecListe;
