'use client';


import  { useState } from 'react';

const FAQItem = ({ number, question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200">
      <div 
        className="flex justify-between items-center py-5 cursor-pointer" 
        onClick={toggleOpen}
      >
        <div className="flex items-center">
          <span className="text-orange-500 font-medium mr-4">
            {number.toString().padStart(2, '0')}
          </span>
          <h3 className="font-medium text-gray-800">{question}</h3>
        </div>
        <button className="h-6 w-6 flex items-center justify-center text-gray-400">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(1);

  const faqData = [
    {
      id: 1,
      question: "Combien de temps cela prend-il ?",
      answer: "Chaque pack est conçu pour offrir un niveau croissant de qualité et de personnalisation. Le Pack Standard offre des ressources de base, tandis que le Pack Gold propose des outils plus avancés, et le Pack Premium garantit un accompagnement exclusif et personnalisé pour répondre à tous vos besoins."
    },
    {
      id: 2, 
      question: "Combien de temps cela prend-il ?",
      answer: "Le temps nécessaire dépend du pack choisi et de la complexité de vos besoins. En général, nous estimons entre 2 à 4 semaines pour le Pack Standard, 3 à 6 semaines pour le Pack Gold, et 4 à 8 semaines pour le Pack Premium. Nous vous fournirons un calendrier détaillé lors de notre première consultation."
    },
    {
      id: 3,
      question: "Comment communiquons-nous ?",
      answer: "Nous utilisons plusieurs canaux de communication selon vos préférences : réunions vidéo, appels téléphoniques, emails, et une plateforme de gestion de projet dédiée. Chaque client reçoit un contact principal qui coordonne toutes les communications."
    },
    {
      id: 4,
      question: "Offrez-vous un support après la formation ?",
      answer: "Oui, tous nos packs incluent un support après formation. Le Pack Standard comprend 1 mois de support par email, le Pack Gold offre 3 mois de support téléphonique et par email, et le Pack Premium inclut 6 mois de support complet avec des sessions de suivi mensuelles."
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Questions Fréquentes</h2>
            <a href="#" className="text-orange-500 hover:text-orange-600">
              Contactez-nous pour plus d'informations
            </a>
          </div>
          <div className="md:w-2/3 mt-6 md:mt-0">
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                number={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openItem === item.id}
                toggleOpen={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;