import Container from '@/components/Container';

export default function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet que nous réalisons, en ne laissant aucun détail au hasard.',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et leurs objectifs.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Nous restons à la pointe des dernières technologies et tendances pour offrir des solutions modernes.',
    },
    {
      icon: '❤️',
      title: 'Passion',
      description: 'Nous sommes passionnés par ce que nous faisons et cela se reflète dans chaque projet que nous créons.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projets réalisés' },
    { number: '98%', label: 'Clients satisfaits' },
    { number: '5+', label: 'Années d\'expérience' },
    { number: '24/7', label: 'Support disponible' },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-floral-white">
      <Container>

        <div className="text-center mb-20 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-bone text-olive-drab rounded-full text-sm font-semibold mb-6">
            À propos de nous
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-smoky-black mb-6">
            Qui sommes-nous ?
            <span className="block text-olive-drab">
              Notre histoire
            </span>
          </h1>
          <p className="text-olive-drab text-lg max-w-3xl mx-auto leading-relaxed">
            Découvrez qui nous sommes, ce qui nous motive et pourquoi nous sommes le bon choix pour votre projet
          </p>
        </div>


        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-smoky-black">
                Notre Histoire
              </h2>
              <p className="text-olive-drab leading-relaxed text-lg">
                NextVibe Studio est une agence spécialisée dans la création de sites vitrines 
                modernes et performants. Fondée avec la vision de rendre le web plus accessible 
                et plus beau, nous accompagnons nos clients dans leur transformation digitale.
              </p>
              <p className="text-olive-drab leading-relaxed text-lg">
                Notre équipe de développeurs et designers passionnés travaille chaque jour 
                pour créer des expériences web exceptionnelles qui marquent les esprits 
                et génèrent des résultats concrets pour nos clients.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {['Next.js', 'React', 'Tailwind CSS', 'TypeScript'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-bone text-olive-drab rounded-full text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            

            <div className="relative">
              <div className="bg-gradient-to-br from-smoky-black via-olive-drab to-smoky-black rounded-3xl p-12 text-floral-white shadow-soft-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-7xl mb-6 text-center">🚀</div>
                <h3 className="text-3xl font-bold mb-4 text-center">Notre Mission</h3>
                <p className="text-bone text-lg leading-relaxed text-center">
                  Créer des sites web modernes, performants et accessibles qui permettent 
                  à nos clients de se démarquer et d'atteindre leurs objectifs dans le monde digital.
                </p>
              </div>

              <div className="absolute -top-4 -right-4 w-32 h-32 bg-olive-drab/30 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </section>


        <section className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-soft text-center border border-bone hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-olive-drab mb-2">
                  {stat.number}
                </div>
                <div className="text-smoky-black/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>


        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-smoky-black mb-4">
              Nos Valeurs
            </h2>
            <p className="text-olive-drab text-lg">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-soft card-hover border border-bone overflow-hidden"
              >

                <div className="absolute inset-0 bg-bone/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-smoky-black">
                    {value.title}
                  </h3>
                  <p className="text-olive-drab leading-relaxed">
                    {value.description}
                  </p>
                </div>
                

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-olive-drab group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section>


        <section className="relative bg-gradient-to-br from-smoky-black via-olive-drab to-smoky-black rounded-3xl p-12 md:p-16 text-floral-white overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D8CFBC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Pourquoi choisir NextVibe ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: '⭐', title: 'Qualité Premium', desc: 'Des sites de qualité professionnelle qui respectent les meilleures pratiques du web moderne.' },
                { icon: '⚡', title: 'Rapidité', desc: 'Livraison rapide sans compromis sur la qualité du résultat final.' },
                { icon: '💬', title: 'Support', desc: 'Accompagnement personnalisé et support continu après la livraison.' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-bone leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
