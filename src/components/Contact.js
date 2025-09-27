import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const ContactContainer = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.surface};
  position: relative;
  overflow: hidden;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  backdrop-filter: blur(10px);
  transition: all ${props => props.theme.transitions.fast};
  min-height: 80px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(249, 115, 22, 0.2);
    background: rgba(28, 25, 23, 0.9);
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${props => props.theme.colors.textSecondary};
  filter: grayscale(100%) contrast(1.2);
  opacity: 0.8;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xs};
  text-transform: uppercase;
  letter-spacing: 1px;
  
  ${ContactItem}:hover & {
    color: #a1a1aa;
  }
`;

const ContactValue = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  
  ${ContactItem}:hover & {
    color: #ffffff;
  }
`;


const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  

  const contactItems = [
    {
      icon: <MdEmail />,
      label: t('contact.email'),
      value: 'csz5302017@gmail.com'
    },
    {
      icon: <MdPhone />,
      label: t('contact.phoneChina'),
      value: '18201796637'
    },
    {
      icon: <MdPhone />,
      label: t('contact.phoneJapan'),
      value: '07033326637'
    },
    {
      icon: <MdLocationOn />,
      label: t('contact.location'),
      value: t('contact.locationValue')
    }
  ];

  return (
    <ContactContainer id="contact" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('contact.title')}
        </SectionTitle>
        
        <ContactGrid>
          <ContactInfo>
            {contactItems.map((item, index) => (
              <ContactItem
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Icon>{item.icon}</Icon>
                <ContactDetails>
                  <ContactLabel>{item.label}</ContactLabel>
                  <ContactValue>{item.value}</ContactValue>
                </ContactDetails>
              </ContactItem>
            ))}
          </ContactInfo>
        </ContactGrid>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
