// components/TrainingPacks.tsx
export default function TrainingPacks() {
    return (
      <section className="relative flex items-center justify-center text-center py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="absolute inset-0  bg-cover opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Nos Packs de Formation</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Découvrez nos packs de formation adaptés à vos besoins pour développer vos compétences et booster votre carrière
          </p>
        </div>
      </section>
    );
  }
  