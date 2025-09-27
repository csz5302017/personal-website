import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.surface};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['4xl']};
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const Content = styled.div`
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: ${props => props.theme.spacing.lg};
  background: rgba(99, 102, 241, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid rgba(99, 102, 241, 0.2);
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.div`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Visual = styled(motion.div)`
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    min-height: auto;
    margin-top: ${props => props.theme.spacing.xl};
  }
`;

const FloatingCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.xl};
  border: 1px solid ${props => props.theme.colors.border};
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 300px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 100%;
  }
`;

const CardTitle = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CardContent = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
`;

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: '7+', label: 'Years Experience' },
    { number: '2+', label: 'Years in Japan' },
    { number: '4+', label: 'React Native Years' },
    { number: 'N2', label: 'Japanese Level' }
  ];

  return (
    <AboutContainer id="about" ref={ref}>
      <Container>
        <Content>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </SectionTitle>
          
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('about.content')}
          </Description>
          
          <StatsGrid
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </Content>
        
        <Visual>
          <FloatingCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardTitle>{t('about.cards.react.title')}</CardTitle>
            <CardContent>{t('about.cards.react.content')}</CardContent>
          </FloatingCard>
          
          <FloatingCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardTitle>{t('about.cards.reactNative.title')}</CardTitle>
            <CardContent>{t('about.cards.reactNative.content')}</CardContent>
          </FloatingCard>
          
          <FloatingCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardTitle>{t('about.cards.japanese.title')}</CardTitle>
            <CardContent>{t('about.cards.japanese.content')}</CardContent>
          </FloatingCard>
          
          <FloatingCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardTitle>{t('about.cards.japanExperience.title')}</CardTitle>
            <CardContent>{t('about.cards.japanExperience.content')}</CardContent>
          </FloatingCard>
        </Visual>
      </Container>
    </AboutContainer>
  );
};

export default About;
