// Google Analytics Event Tracking Utility
// Bu dosya Google Analytics'te custom event'ler göndermek için kullanılır

/**
 * Google Analytics'e custom event gönder
 * @param eventName - Event adı (örn: "whatsapp_click")
 * @param eventData - Event verileri (isteğe bağlı)
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData || {});
  }
};

/**
 * WhatsApp butonuna tıklamayı takip et
 * @param location - Butonun konumu (örn: "header", "footer", "contact_page", "mobile_bottom")
 */
export const trackWhatsAppClick = (location: string = 'unknown') => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: location,
    value: 1,
  });
};

/**
 * Telefon butonuna tıklamayı takip et
 * @param location - Butonun konumu
 */
export const trackPhoneClick = (location: string = 'unknown') => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: location,
    value: 1,
  });
};

/**
 * E-mail linkine tıklamayı takip et
 * @param location - Linkinin konumu
 */
export const trackEmailClick = (location: string = 'unknown') => {
  trackEvent('email_click', {
    event_category: 'engagement',
    event_label: location,
    value: 1,
  });
};

/**
 * Sayfa görüntülemesini takip et
 * @param pageName - Sayfa adı
 */
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_title: pageName,
  });
};

/**
 * Hizmet tıklamasını takip et
 * @param serviceName - Hizmet adı
 */
export const trackServiceClick = (serviceName: string) => {
  trackEvent('service_click', {
    event_category: 'services',
    event_label: serviceName,
  });
};

// TypeScript için gtag global type tanımı
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

