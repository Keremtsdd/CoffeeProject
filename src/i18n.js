// src/i18n.js

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Dil algılayıcı
import Backend from 'i18next-http-backend'; // HTTP backend, dil dosyalarını almak için

// Dil kaynaklarını tanımlıyoruz
const resources = {
    en: {
        translation: {
            greeting: 'Hello, click to select a language!',
            description: 'The content of the website will update as you change the language.',
            language1: 'Türkçe',
            language2: 'English',
            language3: 'Deutsch',
            language4: 'العربية', // Arapça dil seçeneği
        },
    },
    tr: {
        translation: {
            greeting: 'Merhaba, dil seçmek için tıklayın!',
            description: 'Web sitesinin içeriği, dil değiştikçe güncellenir.',
            language1: 'Türkçe',
            language2: 'English',
            language3: 'Deutsch',
            language4: 'العربية', // Arapça dil seçeneği
        },
    },
    de: {
        translation: {
            greeting: 'Hallo, klicken Sie, um eine Sprache auszuwählen!',
            description: 'Der Inhalt der Website wird aktualisiert, wenn Sie die Sprache ändern.',
            language1: 'Türkçe',
            language2: 'English',
            language3: 'Deutsch',
            language4: 'العربية', // Arapça dil seçeneği
        },
    },
    ar: { // Arapça diline ait çeviriler
        translation: {
            greeting: 'مرحبًا ، انقر لاختيار لغة!',
            description: 'سيتغير محتوى الموقع عندما تقوم بتغيير اللغة.',
            language1: 'Türkçe',
            language2: 'English',
            language3: 'Deutsch',
            language4: 'العربية', // Arapça dil seçeneği
        },
    },
};

// src/i18n.js

i18next
    .use(Backend)
    .use(LanguageDetector)  // Dil algılamayı aktif hale getiriyoruz
    .use(initReactI18next)
    .init({
        resources,
        lng: 'tr', // Varsayılan dil
        interpolation: {
            escapeValue: false, // React zaten escape işlemi yapıyor
        },
        detection: {
            order: ['navigator', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        react: {
            useSuspense: false, // Hata alma durumlarını önlemek için
        },
    });

// HTML veya BODY'ye 'dir' özelliği ekleme
i18next.on('languageChanged', (lng) => {
    const dir = lng === 'ar' ? 'rtl' : 'ltr'; // Arapça ise RTL, diğer dillerde LTR
    document.documentElement.setAttribute('dir', dir);
});


export default i18next;

