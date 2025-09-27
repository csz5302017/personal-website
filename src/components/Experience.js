import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const ExperienceContainer = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.surface};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing['3xl']};
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.theme.colors.gradient};
    transform: translateX(-50%);
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: ${props => props.theme.spacing['3xl']};
  display: flex;
  align-items: center;
  
  &:nth-child(odd) {
    flex-direction: row;
    
    .timeline-content {
      margin-left: auto;
      margin-right: ${props => props.theme.spacing.xl};
      text-align: right;
      
      @media (max-width: ${props => props.theme.breakpoints.md}) {
        margin-left: ${props => props.theme.spacing['2xl']};
        margin-right: 0;
        text-align: left;
      }
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    .timeline-content {
      margin-right: auto;
      margin-left: ${props => props.theme.spacing.xl};
      text-align: left;
      
      @media (max-width: ${props => props.theme.breakpoints.md}) {
        margin-left: ${props => props.theme.spacing['2xl']};
        margin-right: 0;
        text-align: left;
      }
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row !important;
  }
`;

const TimelineDot = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: ${props => props.theme.colors.gradient};
  border-radius: ${props => props.theme.borderRadius.full};
  border: 4px solid ${props => props.theme.colors.surface};
  z-index: 2;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    left: 20px;
  }
`;

const TimelineContent = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.theme.shadows.lg};
  width: calc(50% - 40px);
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: calc(100% - 60px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      left: -20px;
      border-right-color: ${props => props.theme.colors.background};
    }
  }
  
  &:nth-child(odd) &::before {
    right: -20px;
    border-left-color: ${props => props.theme.colors.background};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      right: auto;
      left: -20px;
      border-left-color: transparent;
      border-right-color: ${props => props.theme.colors.background};
    }
  }
  
  &:nth-child(even) &::before {
    left: -20px;
    border-right-color: ${props => props.theme.colors.background};
  }
`;

const CompanyName = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Position = styled.h4`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Period = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: 500;
`;

const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 1.6;
  color: ${props => props.theme.colors.textSecondary};
`;

const Experience = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      company: t('experience.company1.name'),
      position: t('experience.company1.position'),
      period: t('experience.company1.period'),
      description: t('experience.company1.description')
    },
    {
      company: t('experience.company2.name'),
      position: t('experience.company2.position'),
      period: t('experience.company2.period'),
      description: t('experience.company2.description')
    },
    {
      company: t('experience.company3.name'),
      position: t('experience.company3.position'),
      period: t('experience.company3.period'),
      description: t('experience.company3.description')
    }
  ];

  return (
    <ExperienceContainer id="experience" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('experience.title')}
        </SectionTitle>
        
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TimelineDot
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
              <TimelineContent className="timeline-content">
                <CompanyName>{exp.company}</CompanyName>
                <Position>{exp.position}</Position>
                <Period>{exp.period}</Period>
                <Description>{exp.description}</Description>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceContainer>
  );
};

export default Experience;
