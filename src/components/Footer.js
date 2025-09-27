import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing['2xl']} 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
`;


const Copyright = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const FooterText = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
  max-width: 600px;
  line-height: 1.6;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          
          <Copyright>
            © 2024 {t('name')}. All rights reserved.
          </Copyright>
          
          <FooterText>
            {t('footer.text')}
          </FooterText>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
