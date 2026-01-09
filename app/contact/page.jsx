'use client';

import { useState } from 'react';
import Container from '@/components/Container';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Données du formulaire:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    { icon: '📧', title: 'Email', value: 'contact@nextvibe.fr', link: 'mailto:contact@nextvibe.fr' },
    { icon: '📞', title: 'Téléphone', value: '+33 1 23 45 67 89', link: 'tel:+33123456789' },
    { icon: '📍', title: 'Adresse', value: 'Paris, France', link: '#' },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-floral-white">
      <Container>

        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-bone text-olive-drab rounded-full text-sm font-semibold mb-6">
            Contactez-nous
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-smoky-black mb-6">
            Parlons de votre
            <span className="block text-olive-drab">
              projet ensemble
            </span>
          </h1>
          <p className="text-olive-drab text-lg max-w-2xl mx-auto leading-relaxed">
            Une question ? Un projet ? N'hésitez pas à nous écrire, nous vous répondrons rapidement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

          <div className="lg:col-span-2">

            {isSubmitted && (
              <div className="mb-6 bg-bone/50 border-2 border-olive-drab/30 rounded-2xl p-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-olive-drab rounded-full flex items-center justify-center text-2xl text-floral-white">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-smoky-black">Message envoyé avec succès !</p>
                    <p className="text-sm text-olive-drab">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              </div>
            )}


            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-soft-lg border border-bone">
              <div className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-smoky-black font-semibold mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-bone rounded-xl focus:outline-none focus:border-olive-drab focus:ring-4 focus:ring-bone/30 transition-all text-smoky-black"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-smoky-black font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-bone rounded-xl focus:outline-none focus:border-olive-drab focus:ring-4 focus:ring-bone/30 transition-all text-smoky-black"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>


                <div>
                  <label htmlFor="subject" className="block text-smoky-black font-semibold mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-bone rounded-xl focus:outline-none focus:border-olive-drab focus:ring-4 focus:ring-bone/30 transition-all text-smoky-black"
                    placeholder="Sujet de votre message"
                  />
                </div>


                <div>
                  <label htmlFor="message" className="block text-smoky-black font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-bone rounded-xl focus:outline-none focus:border-olive-drab focus:ring-4 focus:ring-bone/30 transition-all resize-none text-smoky-black"
                    placeholder="Dites-nous en plus sur votre projet..."
                  />
                </div>


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-smoky-black text-floral-white py-4 px-8 rounded-xl font-bold text-lg shadow-soft-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:bg-olive-drab"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-floral-white border-t-transparent rounded-full animate-spin"></span>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </div>
            </form>
          </div>


          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group block bg-smoky-black p-8 rounded-2xl text-floral-white shadow-soft-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-olive-drab"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-bone">{info.value}</p>
              </a>
            ))}
            

            <div className="bg-white p-8 rounded-2xl shadow-soft border border-bone">
              <h3 className="text-xl font-bold mb-4 text-smoky-black">Horaires</h3>
              <div className="space-y-2 text-olive-drab">
                <p>Lun - Ven: 9h - 18h</p>
                <p>Sam: 10h - 16h</p>
                <p className="text-olive-drab/60">Dim: Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
