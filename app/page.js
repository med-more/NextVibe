import Link from 'next/link';
import Container from '@/components/Container';

export default function Home() {
  return (
    <>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-floral-white via-bone/30 to-floral-white">

        <div className="absolute top-20 left-10 w-72 h-72 bg-olive-drab/10 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-bone/30 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-olive-drab/10 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        
        <Container>
          <div className="relative z-10 text-center animate-fade-in">

            <div className="inline-block mb-6 px-4 py-2 bg-bone/50 backdrop-blur-md rounded-full text-olive-drab text-sm font-medium border border-olive-drab/20">
              ✨ Création de sites web modernes
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-smoky-black leading-tight">
              Donnez vie à votre
              <span className="block text-olive-drab">
                vision digitale
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-olive-drab max-w-3xl mx-auto leading-relaxed">
              Nous créons des expériences web exceptionnelles qui marquent les esprits 
              et génèrent des résultats concrets pour votre entreprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="group relative px-8 py-4 bg-smoky-black text-floral-white rounded-xl font-semibold text-lg shadow-soft-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Commencer maintenant</span>
                <div className="absolute inset-0 bg-olive-drab transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-floral-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  Commencer maintenant
                </span>
              </Link>
              
              <Link 
                href="/services" 
                className="px-8 py-4 bg-bone/50 backdrop-blur-md text-smoky-black rounded-xl font-semibold text-lg border-2 border-olive-drab/30 hover:bg-bone transition-all duration-300"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </Container>
      </section>


      <section className="py-24 bg-floral-white relative">
        <Container>
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-4 py-2 bg-bone text-olive-drab rounded-full text-sm font-semibold mb-4">
              Nos Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-smoky-black mb-6">
              Des solutions sur mesure
              <span className="block text-olive-drab">
                pour votre succès
              </span>
            </h2>
            <p className="text-olive-drab text-lg max-w-2xl mx-auto">
              Chaque projet est unique, c'est pourquoi nous adaptons nos services à vos besoins spécifiques
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Design Moderne',
                description: 'Création de designs élégants et modernes qui reflètent parfaitement votre identité de marque et captent l\'attention.',
              },
              {
                icon: '⚡',
                title: 'Performance',
                description: 'Optimisation complète pour des temps de chargement ultra-rapides et une expérience utilisateur exceptionnelle.',
              },
              {
                icon: '📱',
                title: 'Responsive Design',
                description: 'Adaptation parfaite sur tous les appareils : smartphones, tablettes et ordinateurs pour une accessibilité maximale.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-soft card-hover overflow-hidden border border-bone"
              >

                <div className="absolute inset-0 bg-bone/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                

                <div className="relative mb-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-olive-drab/20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-smoky-black group-hover:text-olive-drab transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-olive-drab leading-relaxed relative z-10">
                  {service.description}
                </p>
                

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-olive-drab group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>


          <div className="text-center mt-16">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-smoky-black text-floral-white rounded-xl font-semibold text-lg shadow-soft-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-olive-drab"
            >
              Voir tous nos services
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>


      <section className="py-24 bg-gradient-to-br from-smoky-black via-olive-drab to-smoky-black relative overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D8CFBC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <Container>
          <div className="relative z-10 text-center text-floral-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à transformer votre présence en ligne ?
            </h2>
            <p className="text-xl mb-10 text-bone max-w-2xl mx-auto">
              Discutons de votre projet et créons ensemble quelque chose d'exceptionnel
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-10 py-5 bg-floral-white text-smoky-black rounded-xl font-bold text-lg shadow-soft-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-bone"
            >
              Contactez-nous gratuitement
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
