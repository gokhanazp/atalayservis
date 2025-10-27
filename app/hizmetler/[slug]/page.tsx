import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { CheckCircle2, Clock, DollarSign, Award, Zap, Wrench } from 'lucide-react';

// Hizmet verileri
const services: Record<string, any> = {
  'atalay-ocak-servisi': {
    title: 'Ocak Servisi',
    description: 'Profesyonel ocak bakım ve onarım hizmetleri',
    keywords: 'ocak servisi, ocak onarım, ocak bakım, İstanbul',
    isHTML: true,
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-l-4 border-red-600">
          <p class="text-lg text-gray-700 leading-relaxed">
            <strong>Atalay Servis</strong> olarak, İstanbul'da tüm markaların ocaklarına profesyonel bakım ve onarım hizmetleri sunuyoruz. Endüstriyel mutfaklarda kullanılan gaz ve elektrikli ocaklara uzman hizmet veriyoruz.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-red-600 to-red-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></span>
                Arıza Teşhisi ve Onarımı
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Gaz akışı kontrolü ve ayarlaması</p>
                    <p class="text-sm text-gray-600 mt-1">Güvenli ve verimli gaz akışı sağlanır</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Ateşleme sisteminin kontrol ve onarımı</p>
                    <p class="text-sm text-gray-600 mt-1">Güvenilir ateşleme sistemi garantisi</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Brülör temizliği ve onarımı</p>
                    <p class="text-sm text-gray-600 mt-1">Maksimum performans için brülör bakımı</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Elektrik bağlantılarının kontrolü</p>
                    <p class="text-sm text-gray-600 mt-1">Elektrik güvenliği sertifikası ile kontrol</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                Düzenli Bakım ve Temizlik
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Derinlemesine ocak temizliği</p>
                    <p class="text-sm text-gray-600 mt-1">Hijyenik ve profesyonel temizlik</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Brülör ve ızgaraların temizliği</p>
                    <p class="text-sm text-gray-600 mt-1">Tüm parçaların detaylı temizliği</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Yağ ve kir birikintilerinin temizlenmesi</p>
                    <p class="text-sm text-gray-600 mt-1">Çevre dostu temizlik ürünleri kullanılır</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Sistem performans kontrolü</p>
                    <p class="text-sm text-gray-600 mt-1">Optimal çalışma koşulları sağlanır</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  'atalay-izgara-servisi': {
    title: 'Izgara Servisi',
    description: 'Izgara temizliği, bakım ve onarım hizmetleri',
    keywords: 'izgara servisi, izgara onarım, izgara bakım, İstanbul',
    isHTML: true,
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-l-4 border-orange-600">
          <p class="text-lg text-gray-700 leading-relaxed">
            <strong>Atalay Servis</strong> olarak, izgara ekipmanlarının bakım, temizlik ve onarımında uzmanız. Endüstriyel mutfaklarda kullanılan tüm izgara modellerine profesyonel hizmet veriyoruz.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></span>
                Temizlik ve Dezenfeksiyon
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Derinlemesine izgara temizliği</p>
                    <p class="text-sm text-gray-600 mt-1">Hijyenik ve profesyonel temizlik</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Gıda kalıntılarının temizlenmesi</p>
                    <p class="text-sm text-gray-600 mt-1">Tüm kalıntılar tamamen uzaklaştırılır</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Hijyenik dezenfeksiyon</p>
                    <p class="text-sm text-gray-600 mt-1">HACCP uyumlu dezenfeksiyon işlemi</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Yağ ve kir birikintileri temizliği</p>
                    <p class="text-sm text-gray-600 mt-1">Çevre dostu temizlik ürünleri</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-yellow-600 to-yellow-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></span>
                Arıza Teşhisi ve Onarımı
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100">
                      <svg class="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Isıtma sisteminin kontrolü</p>
                    <p class="text-sm text-gray-600 mt-1">Tam sistem kontrolü ve ayarlaması</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100">
                      <svg class="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Elektrik bağlantılarının kontrolü</p>
                    <p class="text-sm text-gray-600 mt-1">Elektrik güvenliği sertifikası ile kontrol</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100">
                      <svg class="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Termostat ayarlaması</p>
                    <p class="text-sm text-gray-600 mt-1">Optimal sıcaklık ayarı</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100">
                      <svg class="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Mekanik parçaların onarımı</p>
                    <p class="text-sm text-gray-600 mt-1">Tüm mekanik parçalar kontrol edilir</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">📅</span>
                Bakım Programları
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Haftalık hijyenik temizlik</p>
                    <p class="text-sm text-gray-600 mt-1">Düzenli temizlik programı</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Aylık sistem kontrolü</p>
                    <p class="text-sm text-gray-600 mt-1">Sistem performans kontrolü</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Üç aylık bakım paketi</p>
                    <p class="text-sm text-gray-600 mt-1">Kapsamlı bakım ve kontrol</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Yıllık tam revizyon</p>
                    <p class="text-sm text-gray-600 mt-1">Tam sistem kalibrasyonu</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-green-600 to-green-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">🔩</span>
                Parça Değişimi
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Orijinal yedek parçalar</p>
                    <p class="text-sm text-gray-600 mt-1">Sadece orijinal parçalar kullanılır</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Isıtma elemanlarının değişimi</p>
                    <p class="text-sm text-gray-600 mt-1">Yeni isıtma elemanları kurulumu</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Kontrol sisteminin yenilenmesi</p>
                    <p class="text-sm text-gray-600 mt-1">Elektrik kontrol sistemi güncelleme</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Grill ızgaraların değişimi</p>
                    <p class="text-sm text-gray-600 mt-1">Yeni grill ızgaraları kurulumu</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  'atalay-fritoz-servisi': {
    title: 'Fritöz Servisi',
    description: 'Fritöz bakım, temizlik ve onarım hizmetleri',
    keywords: 'fritöz servisi, fritöz onarım, fritöz bakım, İstanbul',
    isHTML: true,
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-600">
          <p class="text-lg text-gray-700 leading-relaxed">
            <strong>Atalay Servis</strong> olarak, fritöz ekipmanlarının güvenli ve hijyenik bakımını profesyonel standartlarda sağlıyoruz. Endüstriyel mutfaklarda kullanılan tüm fritöz modellerine hizmet veriyoruz.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-yellow-600 to-yellow-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">🛢️</span>
                Yağ Değişimi
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100">
                      <svg class="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Eski yağın güvenli tahliyesi</p>
                    <p class="text-sm text-gray-600 mt-1">Çevre dostu tahliye işlemi</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100">
                      <svg class="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Filtre sisteminin temizliği</p>
                    <p class="text-sm text-gray-600 mt-1">Derinlemesine filtre temizliği</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100">
                      <svg class="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Yeni, kaliteli yağ doldurulması</p>
                    <p class="text-sm text-gray-600 mt-1">Premium kalite yağ kullanılır</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100">
                      <svg class="h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Yağ sıcaklığı kalibrasyonu</p>
                    <p class="text-sm text-gray-600 mt-1">Optimal sıcaklık ayarı</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                Filtre Temizliği
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Derinlemesine filtre temizliği</p>
                    <p class="text-sm text-gray-600 mt-1">Tüm filtre elemanları temizlenir</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Filtre elemanlarının kontrol ve değişimi</p>
                    <p class="text-sm text-gray-600 mt-1">Hasarlı filtreler değiştirilir</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Hava filtresi temizliği</p>
                    <p class="text-sm text-gray-600 mt-1">Hava sirkülasyonu optimize edilir</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100">
                      <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Sistem performans kontrolü</p>
                    <p class="text-sm text-gray-600 mt-1">Tam sistem kontrolü yapılır</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-red-600 to-red-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></span>
                Arıza Teşhisi
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Elektrik sisteminin kontrolü</p>
                    <p class="text-sm text-gray-600 mt-1">Elektrik güvenliği sertifikası ile</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Isıtma elemanlarının kontrol ve onarımı</p>
                    <p class="text-sm text-gray-600 mt-1">Isıtma sistemi tam kontrol</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Termostat ayarlaması</p>
                    <p class="text-sm text-gray-600 mt-1">Optimal sıcaklık ayarı</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Acil arıza müdahalesi</p>
                    <p class="text-sm text-gray-600 mt-1">24/7 acil servis hizmeti</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">📅</span>
                Bakım Programları
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Haftalık hijyenik temizlik</p>
                    <p class="text-sm text-gray-600 mt-1">Düzenli temizlik programı</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Aylık sistem kontrolü</p>
                    <p class="text-sm text-gray-600 mt-1">Sistem performans kontrolü</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Üç aylık bakım paketi</p>
                    <p class="text-sm text-gray-600 mt-1">Kapsamlı bakım ve kontrol</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <svg class="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Yıllık tam revizyon</p>
                    <p class="text-sm text-gray-600 mt-1">Tam sistem kalibrasyonu</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  'atalay-kuzine-servisi': {
    title: 'Kuzine Servisi',
    description: 'Endüstriyel kuzine ekipmanları bakım ve onarım',
    keywords: 'kuzine servisi, kuzine onarım, kuzine bakım, İstanbul',
    isHTML: true,
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-600">
          <p class="text-lg text-gray-700 leading-relaxed">
            <strong>Atalay Servis</strong> olarak, endüstriyel kuzine ekipmanlarının tüm bakım ve onarım işlerini profesyonel standartlarda yapıyoruz. Ocak, izgara, fritöz ve diğer tüm kuzine ekipmanlarına kapsamlı hizmet veriyoruz.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></span>
                Ekipman Onarımı
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100">
                      <svg class="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Ocak, izgara ve fritöz onarımı</p>
                    <p class="text-sm text-gray-600 mt-1">Tüm kuzine ekipmanları onarılır</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100">
                      <svg class="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Elektrik sisteminin kontrol ve onarımı</p>
                    <p class="text-sm text-gray-600 mt-1">Elektrik güvenliği sertifikası ile</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100">
                      <svg class="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Mekanik parçaların onarımı</p>
                    <p class="text-sm text-gray-600 mt-1">Tüm mekanik parçalar kontrol edilir</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100">
                      <svg class="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Kontrol panellerinin onarımı</p>
                    <p class="text-sm text-gray-600 mt-1">Kontrol sistemleri güncellenir</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-pink-600 to-pink-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">📅</span>
                Bakım Programları
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-pink-100">
                      <svg class="h-4 w-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Haftalık hijyenik temizlik</p>
                    <p class="text-sm text-gray-600 mt-1">Düzenli temizlik programı</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-pink-100">
                      <svg class="h-4 w-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Aylık sistem kontrolü</p>
                    <p class="text-sm text-gray-600 mt-1">Sistem performans kontrolü</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-pink-100">
                      <svg class="h-4 w-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Üç aylık bakım paketi</p>
                    <p class="text-sm text-gray-600 mt-1">Kapsamlı bakım ve kontrol</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-pink-100">
                      <svg class="h-4 w-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Yıllık tam revizyon</p>
                    <p class="text-sm text-gray-600 mt-1">Tam sistem kalibrasyonu</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">🔩</span>
                Parça Değişimi
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                      <svg class="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Orijinal yedek parçalar</p>
                    <p class="text-sm text-gray-600 mt-1">Sadece orijinal parçalar kullanılır</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                      <svg class="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Isıtma elemanlarının değişimi</p>
                    <p class="text-sm text-gray-600 mt-1">Yeni isıtma elemanları kurulumu</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                      <svg class="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Elektrik bileşenlerinin yenilenmesi</p>
                    <p class="text-sm text-gray-600 mt-1">Elektrik sistemi güncelleme</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100">
                      <svg class="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Kontrol sisteminin güncellenmesi</p>
                    <p class="text-sm text-gray-600 mt-1">Kontrol sistemi yenilenir</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-r from-green-600 to-green-500 px-8 py-6">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <span class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg></span>
                Acil Servis (24/7)
              </h3>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Gece ve hafta sonu hizmet</p>
                    <p class="text-sm text-gray-600 mt-1">7/24 hizmet mevcuttur</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Hızlı müdahale (1 saat içinde)</p>
                    <p class="text-sm text-gray-600 mt-1">Acil çağrılarda hızlı yanıt</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Acil arızalarda anında çözüm</p>
                    <p class="text-sm text-gray-600 mt-1">Sorunlar hemen çözülür</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Nöbetçi teknisyen hizmeti</p>
                    <p class="text-sm text-gray-600 mt-1">Her zaman hazır teknisyen</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  
  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    };
  }

  return {
    title: `${service.title} | Atalay Servis`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Atalay Servis",
      "telephone": "+905013001981",
      "url": "https://atalayservis.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "priceRange": "₺₺",
    "serviceType": "Repair"
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-0">
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

      {/* Schema Markup - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-red-600 hover:text-red-800 transition">Ana Sayfa</Link>
          <span className="text-gray-400">/</span>
          <Link href="/hizmetler" className="text-red-600 hover:text-red-800 transition">Hizmetler</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 hero-zoom opacity-20" style={{backgroundImage: 'url(/img/slider-05.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 leading-tight">{service.title}</h1>
          <p className="text-xl text-red-100 max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Content */}
          <div className="mb-16">
            {service.isHTML ? (
              <div dangerouslySetInnerHTML={{ __html: service.content }} />
            ) : (
              (() => {
                const lines = service.content.split('\n');
                let currentSection: { title: string; items: string[] } | null = null;
                const sections: { title: string; items: string[] }[] = [];
                let intro = '';
                let introEnded = false;

                lines.forEach((line: string) => {
                  if (line.startsWith('##')) {
                    if (currentSection) {
                      sections.push(currentSection);
                    }
                    currentSection = {
                      title: line.replace('## ', '').trim(),
                      items: [],
                    };
                  } else if (line.startsWith('-')) {
                    if (currentSection) {
                      currentSection.items.push(line.replace('- ', '').trim());
                    }
                  } else if (line.trim() && !introEnded) {
                    intro += line + ' ';
                  } else if (line.trim()) {
                    introEnded = true;
                  }
                });

                if (currentSection) {
                  sections.push(currentSection);
                }

                return (
                  <>
                    {/* Intro */}
                    {intro && (
                      <div className="mb-12 bg-white rounded-2xl p-8 shadow-md border-l-4 border-red-600">
                        <p className="text-lg text-gray-700 leading-relaxed">{intro.trim()}</p>
                      </div>
                    )}

                    {/* Sections Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {sections.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                          {/* Section Header */}
                          <div className="bg-gradient-to-r from-red-600 to-red-500 px-8 py-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                                {idx + 1}
                              </span>
                              {section.title}
                            </h3>
                          </div>

                          {/* Section Content */}
                          <div className="p-8">
                            <ul className="space-y-4">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-4">
                                  <div className="flex-shrink-0 mt-1">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                                      <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  </div>
                                  <p className="text-gray-700 leading-relaxed">{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()
            )}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-red-500 to-red-600 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hızlı Hizmet</h3>
                <p className="text-gray-600 text-sm">24/7 acil servis hizmetleri ile her zaman yanınızdayız.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Profesyonel Ekip</h3>
                <p className="text-gray-600 text-sm">Deneyimli ve sertifikalı teknisyenlerimiz en iyi hizmeti sunar.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-green-500 to-green-600 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Garantili Hizmet</h3>
                <p className="text-gray-600 text-sm">Tüm işlerimize 6 ay garantisi veriyoruz.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Uygun Fiyatlar</h3>
                <p className="text-gray-600 text-sm">Şeffaf ve rekabetçi fiyatlandırma politikası.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white rounded-3xl p-12 md:p-16 mb-16 shadow-2xl">
            <div className="max-w-3xl">
              <h3 className="text-4xl font-bold mb-4">Hizmet Almak İstiyorsanız?</h3>
              <p className="text-red-100 mb-8 text-lg leading-relaxed">
                Profesyonel tamircisi ekibimiz her zaman hazır. Endüstriyel mutfak ekipmanlarınızın bakım ve onarımı için hemen iletişime geçin. 24/7 acil servis hizmetimizden yararlanabilirsiniz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/iletisim"
                  className="bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-xl font-bold transition shadow-lg transform hover:scale-105 duration-300"
                >
                  📧 İletişim Formu
                </Link>
                <a
                  href="https://wa.me/905336681981?text=Merhaba%20Atalay%20Servis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white hover:bg-green-600 px-8 py-4 rounded-xl font-bold transition shadow-lg transform hover:scale-105 duration-300"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="tel:+905336681981"
                  className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 rounded-xl font-bold transition shadow-lg transform hover:scale-105 duration-300"
                >
                  ☎️ Telefon
                </a>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Diğer Hizmetlerimiz</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(services)
                .filter(([key]) => key !== slug)
                .slice(0, 3)
                .map(([key, svc]: [string, any]) => (
                  <Link
                    key={key}
                    href={`/hizmetler/${key}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="h-2 bg-gradient-to-r from-red-600 to-red-500 group-hover:h-4 transition-all duration-300"></div>
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition flex-1">
                          {svc.title}
                        </h4>
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">→</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {svc.description}
                      </p>
                      <div className="flex items-center gap-2 text-red-600 font-bold text-sm group-hover:gap-3 transition-all">
                        <span>Detayları Gör</span>
                        <span className="group-hover:translate-x-1 transition">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

