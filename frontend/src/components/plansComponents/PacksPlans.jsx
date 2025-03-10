'use client';

import  { useState } from 'react';

const ServiceCategory = ({ name, features, dark }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="space-y-3">
      <div 
        className="flex items-start cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`rounded-full p-1 mr-2 ${dark ? 'bg-orange-500' : 'bg-orange-500'}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 text-white transition-transform ${isOpen ? 'rotate-90' : ''}`} 
            viewBox="0 0 16 16" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
        <p className="text-sm font-medium">{name}</p>
      </div>
      
      {isOpen && (
        <div className="ml-7 space-y-2 transition-all duration-300">
          {features.map((feature, featureIndex) => (
            <p key={featureIndex} className="text-xs opacity-90">- {feature}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const ServicePack = ({ title, description, serviceCategories, dark = false }) => {
  return (
    <div className={`rounded-lg p-8 h-full flex flex-col ${dark ? 'bg-slate-800 text-white' : 'bg-slate-100'}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm mb-8 opacity-80">{description}</p>
      
      <div className="space-y-6 flex-grow">
        {serviceCategories.map((category, index) => (
          <ServiceCategory 
            key={index} 
            name={category.name} 
            features={category.features} 
            dark={dark} 
          />
        ))}
      </div>
      
      <div className="mt-8">
        <button 
          className={`rounded-full py-2 px-6 text-sm font-medium transition-all ${
            dark 
              ? 'bg-white text-slate-800 hover:bg-slate-200' 
              : 'bg-slate-800 text-white hover:bg-slate-700'
          }`}
        >
          Demande de devis
        </button>
      </div>
    </div>
  );
};

const ServicePacksSection = () => {
  const packs = [
    {
      title: "Pack Standard",
      description: "Accès aux éléments essentiels pour démarrer avec une qualité de base.",
      serviceCategories: [
        {
          name: "Ingénierie de formation",
          features: [
            "Analyse des besoins de formation.",
            "Conception de programmes de formation personnalisés.",
            "Création de supports de formation de base."
          ]
        },
        {
          name: "Conseil au Recrutement",
          features: [
            "Évaluation des besoins en personnel.",
            "Rédaction d'offres d'emploi standard.",
            "Référencement de candidats via votre réseau."
          ]
        },
        {
          name: "Formation Continue",
          features: [
            "Accès à une variété de ressources en ligne, y compris des articles informatifs, des vidéos instructives et des webinaires éducatifs.",
            "Restez à jour grâce à des mises à jour trimestrielles sur les dernières tendances de l'industrie.",
            "Bénéficiez de l'accès à une bibliothèque de cours en ligne variés pour enrichir vos compétences.",
            "Participez à des sessions de webinaires mensuelles pour un apprentissage interactif."
          ]
        }
      ],
      dark: false
    },
    {
      title: "Pack Gold",
      description: "Accès à des outils et ressources plus élaborés, offrant une qualité supérieure.",
      serviceCategories: [
        {
          name: "Ingénierie de formation",
          features: [
            "Analyse approfondie des besoins de formation.",
            "Développement de programmes de formation avancés.",
            "Création de supports de formation haut de gamme."
          ]
        },
        {
          name: "Conseil au Recrutement",
          features: [
            "Évaluation des besoins en personnel et planification stratégique du recrutement.",
            "Rédaction d'offres d'emploi attractives.",
            "Recherche active de candidats hautement qualifiés."
          ]
        },
        {
          name: "Formation Continue",
          features: [
            "Profitez d'un accès étendu à des ressources en ligne avancées et à des cours en ligne approfondis.",
            "Participez à des sessions de formation en direct trimestrielles pour un apprentissage pratique.",
            "Obtenez des certifications officielles avec l'accès à des formations certifiantes reconnues.",
            "Accédez en priorité à des événements en personne pour le réseautage et l'apprentissage en face-à-face."
          ]
        }
      ],
      dark: true
    },
    {
      title: "Pack Premium",
      description: "Accès à des éléments exclusifs et personnalisés, garantissant une qualité exceptionnelle.",
      serviceCategories: [
        {
          name: "Ingénierie de formation",
          features: [
            "Analyse approfondie des besoins de formation.",
            "Conception de programmes de formation de pointe.",
            "Création de supports de formation personnalisés haut de gamme."
          ]
        },
        {
          name: "Conseil au Recrutement",
          features: [
            "Évaluation complète des besoins en personnel, planification stratégique et recrutement exclusif.",
            "Rédaction d'offres d'emploi hautement personnalisées.",
            "Recherche active et approfondie de candidats hautement qualifiés avec garantie de placement."
          ]
        },
        {
          name: "Formation Continue",
          features: [
            "Bénéficiez de l'accès complet à toutes les ressources en ligne, y compris des ressources de pointe, des cours en ligne complets et des formations en personne.",
            "Participez à des sessions de formation en direct mensuelles pour une immersion régulière dans de nouveaux sujets.",
            "Profitez de sessions de coaching individuelles pour un développement personnalisé.",
            "Explorez une bibliothèque exclusive de ressources de haute qualité.",
            "Collaborez avec d'autres professionnels à travers la participation à des projets collaboratifs stimulants."
          ]
        }
      ],
      dark: false
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packs.map((pack, index) => (
          <ServicePack 
            key={index} 
            title={pack.title} 
            description={pack.description} 
            serviceCategories={pack.serviceCategories} 
            dark={pack.dark} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePacksSection;