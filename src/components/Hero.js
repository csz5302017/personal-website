import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  overflow: hidden;
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const Content = styled.div`
  text-align: center;
  z-index: 2;
  position: relative;
  max-width: 800px;
  padding: 0 ${props => props.theme.spacing.md};
`;

const Greeting = styled(motion.div)`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: 300;
`;

const Name = styled(motion.h1)`
  font-size: clamp(${props => props.theme.fontSizes['4xl']}, 8vw, ${props => props.theme.fontSizes['6xl']});
  font-weight: 700;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.2;
`;

const Title = styled(motion.h2)`
  font-size: clamp(${props => props.theme.fontSizes.xl}, 4vw, ${props => props.theme.fontSizes['3xl']});
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-weight: 500;
`;

const Subtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(motion.a)`
  display: inline-block;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.lg};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.fast};
  position: relative;
  overflow: hidden;
  
  ${props => props.primary ? `
    background: ${props.theme.colors.gradient};
    color: white;
    box-shadow: ${props.theme.shadows.glow};
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(249, 115, 22, 0.4);
    }
  ` : `
    background: transparent;
    color: ${props.theme.colors.text};
    border: 2px solid ${props.theme.colors.border};
    
    &:hover {
      background: ${props.theme.colors.surface};
      border-color: ${props.theme.colors.primary};
    }
  `}
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${props => props.theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const ScrollArrow = styled(motion.div)`
  width: 2px;
  height: 30px;
  background: ${props => props.theme.colors.gradient};
  border-radius: ${props => props.theme.borderRadius.full};
`;

const Hero = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <HeroContainer ref={ref}>
      <BackgroundAnimation />
      <Content>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          👋 Hello, I'm
        </Greeting>
        
        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('name')}
        </Name>
        
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('title')}
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {t('subtitle')}
        </Subtitle>
      </Content>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <span>Scroll Down</span>
        <ScrollArrow
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
