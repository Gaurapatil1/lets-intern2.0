import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'mr' | 'hi';
type Theme = 'light' | 'dark';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  theme: Theme;
  toggleTheme: () => void;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.search': 'Search Internships',
    'nav.upload': 'Upload Resume',
    'nav.profile': 'Profile',
    'nav.chatbot': 'Chatbot',
    'nav.about': 'About Us',
    'hero.title': "Let's Intern",
    'hero.subtitle': 'Your Smart Gateway to Internships',
    'hero.description': 'AI-powered recommendations for AICTE/PM Schemes & Private Internships',
    'button.student': 'Login as Student',
    'button.professional': 'Login as Working Professional',
    'notification.banner': 'Latest: PM Internship Scheme 2025 applications open!',
  },
  mr: {
    'nav.home': 'मुख्यपृष्ठ',
    'nav.search': 'इंटर्नशिप शोधा',
    'nav.upload': 'रेज्यूमे अपलोड करा',
    'nav.profile': 'प्रोफाइल',
    'nav.chatbot': 'चॅटबॉट',
    'nav.about': 'आमच्या बद्दल',
    'hero.title': "लेट्स इंटर्न",
    'hero.subtitle': 'इंटर्नशिपसाठी तुमचे स्मार्ट गेटवे',
    'hero.description': 'AICTE/PM योजना आणि खाजगी इंटर्नशिपसाठी AI-संचालित शिफारसी',
    'button.student': 'विद्यार्थी म्हणून लॉगिन करा',
    'button.professional': 'कार्यरत व्यावसायिक म्हणून लॉगिन करा',
    'notification.banner': 'नवीनतम: PM इंटर्नशिप योजना 2025 अर्ज सुरू!',
  },
  hi: {
    'nav.home': 'मुखपृष्ठ',
    'nav.search': 'इंटर्नशिप खोजें',
    'nav.upload': 'रेज़्यूमे अपलोड करें',
    'nav.profile': 'प्रोफ़ाइल',
    'nav.chatbot': 'चैटबॉट',
    'nav.about': 'हमारे बारे में',
    'hero.title': "लेट्स इंटर्न",
    'hero.subtitle': 'इंटर्नशिप के लिए आपका स्मार्ट गेटवे',
    'hero.description': 'AICTE/PM योजनाओं और निजी इंटर्नशिप के लिए AI-संचालित सिफारिशें',
    'button.student': 'विद्यार्थी के रूप में लॉगिन करें',
    'button.professional': 'कार्यरत पेशेवर के रूप में लॉगिन करें',
    'notification.banner': 'ताज़ा: PM इंटर्नशिप योजना 2025 के लिए आवेदन खुले हैं!',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light'); // default light

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    // Optionally: also toggle body or root classes for global dark mode styling
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, theme, toggleTheme }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
