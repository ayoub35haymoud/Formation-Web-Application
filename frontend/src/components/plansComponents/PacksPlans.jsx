

const PricingCard = ({ title, description, features, isDark }) => {
  return (
    <div className={`p-8 rounded-lg flex flex-col h-full ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-sm opacity-80">{description}</p>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`mt-1 flex items-center justify-center rounded-full w-5 h-5 mr-3 ${isDark ? 'bg-orange-500' : 'bg-orange-500'}`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-3 w-3 text-white" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-10">
        <button 
          className={`py-3 px-6 w-full rounded-md text-center font-medium transition-colors ${
            isDark 
              ? 'bg-white text-gray-800 hover:bg-gray-200' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          Demande de devis
        </button>
      </div>
    </div>
  );
};

const PacksPlans = () => {
  const pricingData = [
    {
      title: "Pack Standard",
      description: "Accès aux éléments essentiels pour démarrer avec une qualité de base.",
      features: [
        "Ingénierie de formation", 
        "Conseil au Recrutement", 
        "Formation Continue"
      ],
      isDark: false
    },
    {
      title: "Pack Gold",
      description: "Accès à des outils et ressources plus élaborés, offrant une qualité supérieure.",
      features: [
        "Ingénierie de formation", 
        "Conseil au Recrutement", 
        "Formation Continue"
      ],
      isDark: true
    },
    {
      title: "Pack Premium",
      description: "Accès à des éléments exclusifs et personnalisés, garantissant une qualité exceptionnelle.",
      features: [
        "Ingénierie de formation", 
        "Conseil au Recrutement", 
        "Formation Continue"
      ],
      isDark: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            description={plan.description}
            features={plan.features}
            isDark={plan.isDark}
          />
        ))}
      </div>
    </div>
  );
};

export default PacksPlans;