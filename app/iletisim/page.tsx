'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <style>{`
        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }
        .hero-zoom {
          animation: zoomIn 3s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-600 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 hero-zoom opacity-20" style={{backgroundImage: 'url(/img/slider-05.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">İletişime Geçin</h1>
          <p className="text-lg md:text-xl">Sorularınız için bize ulaşın, 24/7 hizmetinizdeyiz</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Quick Contact Cards */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Telefon</h3>
              <p className="text-gray-600 mb-4">Hemen arayın, acil durumlarda 24/7 hizmetinizdeyiz</p>
              <div className="space-y-2">
                <a href="tel:+902125671560" className="block text-red-600 hover:text-red-800 font-bold text-lg">
                  0212 567 15 60
                </a>
                <a href="tel:+902123535360" className="block text-red-600 hover:text-red-800 font-bold text-lg">
                  0212 353 53 60
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Hızlı iletişim için WhatsApp'tan yazın</p>
              <a
                href="https://wa.me/905494778038?text=Merhaba%20Atalay%20Servis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                WhatsApp ile Yazın
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">E-mail</h3>
              <p className="text-gray-600 mb-4">Detaylı bilgi için e-mail gönderin</p>
              <a href="mailto:info@atalayservis.com" className="inline-block text-red-600 hover:text-red-800 font-bold text-lg">
                info@atalayservis.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">İletişim Formu</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition"
                    placeholder="0212 XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Hizmet Türü</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition"
                  >
                    <option value="">Seçiniz</option>
                    <option value="ocak">🔥 Ocak Servisi</option>
                    <option value="izgara">🍖 Izgara Servisi</option>
                    <option value="fritoz">🍟 Fritöz Servisi</option>
                    <option value="kuzine">👨‍🍳 Kuzine Servisi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Mesaj</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition"
                    placeholder="Mesajınız..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-bold py-3 rounded-lg transition shadow-lg"
                >
                  Mesaj Gönder
                </button>

                {submitted && (
                  <div className="bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-lg font-bold">
                    ✅ Mesajınız başarıyla gönderildi!
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">İletişim Bilgileri</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">⏰ Çalışma Saatleri</h3>
                  <p className="text-gray-600 text-lg">
                    <strong>Pazartesi - Cuma:</strong> 08:00 - 18:00<br />
                    <strong>Cumartesi:</strong> 09:00 - 14:00<br />
                    <strong className="text-red-600">Acil Servis:</strong> 24/7
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-700 to-red-600 text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3">🚀 Hızlı İletişim</h3>
                  <p className="mb-4">
                    Acil durumlarda hemen arayın veya WhatsApp gönderin. Profesyonel ekibimiz en kısa sürede yanıt verecektir.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="tel:+902125671560"
                      className="flex-1 bg-white text-red-600 hover:bg-gray-100 font-bold py-2 px-4 rounded-lg transition text-center"
                    >
                      Ara
                    </a>
                    <a
                      href="https://wa.me/905494778038?text=Merhaba%20Atalay%20Servis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition text-center"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

