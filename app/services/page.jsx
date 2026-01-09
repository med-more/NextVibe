import Link from 'next/link';
import Container from '@/components/Container';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'Design Moderne',
      description: 'Création de designs élégants et modernes qui reflètent parfaitement votre identité de marque. Nous créons des interfaces utilisateur intuitives et attrayantes.',
      features: ['UI/UX Design', 'Identité visuelle', 'Prototypage'],
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Performance Optimale',
      description: 'Optimisation complète de votre site pour des temps de chargement ultra-rapides. Performance garantie pour une expérience utilisateur exceptionnelle.',
      features: ['Optimisation SEO', 'Vitesse de chargement', 'CDN intégré'],
    },
    {
      id: 3,
      icon: '📱',
      title: 'Design Responsive',
      description: 'Votre site s\'adapte parfaitement à tous les écrans : smartphones, tablettes et ordinateurs. Une expérience optimale sur tous les appareils.',
      features: ['Mobile-first', 'Tablette optimisé', 'Desktop parfait'],
    },
    {
      id: 4,
      icon: '🔍',
      title: 'SEO Optimisé',
      description: 'Optimisation pour les moteurs de recherche afin d\'améliorer votre visibilité en ligne et attirer plus de visiteurs qualifiés.',
      features: ['Référencement naturel', 'Mots-clés optimisés', 'Meta tags'],
    },
    {
      id: 5,
      icon: '🛠️',
      title: 'Maintenance',
      description: 'Support continu et maintenance de votre site pour garantir sa sécurité, ses performances et sa mise à jour régulière.',
      features: ['Mises à jour', 'Sécurité', 'Support 24/7'],
    },
    {
      id: 6,
      icon: '💼',
      title: 'Conseil Stratégique',
      description: 'Accompagnement personnalisé pour définir la meilleure stratégie digitale adaptée à vos objectifs et à votre secteur d\'activité.',
      features: ['Stratégie digitale', 'Analyse de marché', 'Roadmap'],
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-floral-white">
      <Container>

        <div className="text-center mb-20 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-bone text-olive-drab rounded-full text-sm font-semibold mb-6">
            Nos Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-smoky-black mb-6">
            Des solutions
            <span className="block text-olive-drab">
              sur mesure pour vous
            </span>
          </h1>
          <p className="text-olive-drab text-lg max-w-3xl mx-auto leading-relaxed">
            Découvrez l'ensemble de nos services pour créer et développer votre présence en ligne 
            avec des solutions adaptées à vos besoins spécifiques
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white p-8 rounded-2xl shadow-soft card-hover overflow-hidden border border-bone"
            >

              <div className="absolute inset-0 bg-bone/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              

              <div className="absolute top-0 right-0 w-32 h-32 bg-bone/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              

              <div className="relative mb-6">
                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-olive-drab/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-smoky-black group-hover:text-olive-drab transition-all duration-500 relative z-10">
                {service.title}
              </h2>
              
              <p className="text-olive-drab leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>
              

              <ul className="space-y-2 mb-6 relative z-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-olive-drab/80 group-hover:text-olive-drab transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-drab mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-olive-drab group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>


        <div className="relative bg-gradient-to-br from-smoky-black via-olive-drab to-smoky-black rounded-3xl p-12 md:p-16 text-center text-floral-white overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D8CFBC' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intéressé par nos services ?
            </h2>
            <p className="text-xl mb-8 text-bone max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-10 py-4 bg-floral-white text-smoky-black rounded-xl font-bold text-lg shadow-soft-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-bone"
            >
              Discutons de votre projet
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
