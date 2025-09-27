import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const ProjectsContainer = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.background};
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.theme.shadows.lg};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.colors.gradient};
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ProjectName = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ProjectPeriod = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.primary};
  background: rgba(99, 102, 241, 0.1);
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const TechTag = styled.span`
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: ${props => props.theme.borderRadius.full};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const ProjectDetails = styled.ul`
  list-style: none;
  padding: 0;
`;

const DetailItem = styled(motion.li)`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.sm};
  padding-left: ${props => props.theme.spacing.md};
  position: relative;
  line-height: 1.6;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }
`;

const Projects = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      name: t('projects.project1.name'),
      period: t('projects.project1.period'),
      techStack: ["React", "TypeScript", "Firebase"],
      details: [
        t('projects.project1.details.0'),
        t('projects.project1.details.1')
      ]
    },
    {
      name: t('projects.project2.name'),
      period: t('projects.project2.period'),
      techStack: ["React Native", "TypeScript", "React", "Node.js"],
      details: [
        t('projects.project2.details.0'),
        t('projects.project2.details.1')
      ]
    },
    {
      name: t('projects.project3.name'),
      period: t('projects.project3.period'),
      techStack: ["Vue", "JavaScript", "jQuery", "AWS", "Python"],
      details: [
        t('projects.project3.details.0'),
        t('projects.project3.details.1'),
        t('projects.project3.details.2')
      ]
    },
    {
      name: t('projects.project4.name'),
      period: t('projects.project4.period'),
      techStack: ["React", "TypeScript", "React Hooks", "Less", "Echart", "Three.js"],
      details: [
        t('projects.project4.details.0'),
        t('projects.project4.details.1')
      ]
    },
    {
      name: t('projects.project5.name'),
      period: t('projects.project5.period'),
      techStack: ["React Native"],
      details: [
        t('projects.project5.details.0'),
        t('projects.project5.details.1')
      ]
    },
    {
      name: t('projects.project6.name'),
      period: t('projects.project6.period'),
      techStack: ["Vue", "Echarts"],
      details: [
        t('projects.project6.details.0'),
        t('projects.project6.details.1')
      ]
    }
  ];

  return (
    <ProjectsContainer id="projects" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('projects.title')}
        </SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <ProjectHeader>
                <ProjectName>{project.name}</ProjectName>
                <ProjectPeriod>{project.period}</ProjectPeriod>
                <TechStack>
                  {project.techStack.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectHeader>
              
              <ProjectDetails>
                {project.details.map((detail, detailIndex) => (
                  <DetailItem
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) + (detailIndex * 0.1) }}
                  >
                    {detail}
                  </DetailItem>
                ))}
              </ProjectDetails>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;

