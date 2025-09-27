import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  right: ${props => props.theme.spacing.lg};
  transform: translateY(-50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    top: auto;
    bottom: ${props => props.theme.spacing.lg};
    right: ${props => props.theme.spacing.lg};
    transform: none;
    flex-direction: row;
  }
`;

const LanguageButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.active ? props.theme.colors.gradient : props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.sm};
  border: 2px solid ${props => props.active ? 'transparent' : props.theme.colors.border};
  box-shadow: ${props => props.active ? props.theme.shadows.glow : 'none'};
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'EN', fullName: 'English' },
    { code: 'ja', name: '日', fullName: '日本語' },
    { code: 'zh', name: '中', fullName: '中文' }
  ];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <LanguageContainer
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {languages.map((lang) => (
        <LanguageButton
          key={lang.code}
          active={i18n.language === lang.code}
          onClick={() => changeLanguage(lang.code)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={lang.fullName}
        >
          {lang.name}
        </LanguageButton>
      ))}
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
