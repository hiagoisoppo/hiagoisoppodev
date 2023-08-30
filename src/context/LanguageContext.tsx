import { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  isEnglish: boolean;
  toogleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isEnglish, setIsEnglish] = useState<boolean>(false);

  const toogleLanguage = () => {
    setIsEnglish((prev) => !prev);
  };

  return (
    <LanguageContext.Provider
      value={ {
        isEnglish,
        toogleLanguage,
      } }
    >
      { children }
    </LanguageContext.Provider>
  );
}

const useLanguage = () => useContext(LanguageContext);

export { LanguageContext, useLanguage, LanguageProvider };
