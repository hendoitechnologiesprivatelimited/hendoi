import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaChartLine, FaCogs, FaServer } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Montserrat', sans-serif;
  color: #2c5282;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const AboutSection = styled(motion.section)`
  margin-bottom: 60px;
`;

const AboutHeading = styled(motion.h1)`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #2c5282;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const AboutSubHeading = styled(motion.h2)`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #4299e1;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ServiceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServiceCard = styled(motion.div)`
  background-color: #f0f5ff;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 48px;
  color: #4299e1;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #2c5282;
`;

const ChooseUsList = styled(motion.ul)`
  list-style-type: none;
  padding-left: 0;
  text-align: left;
`;

const ChooseUsItem = styled(motion.li)`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: #4299e1;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <AboutContainer>
    
      <Helmet>
        <title>About Hendoi Technologies | Innovative Digital Solutions Provider</title>
        <meta name="description" content="Learn about Hendoi Technologies, a Chennai-based tech company specializing in web and app development, cloud solutions, and digital marketing. Discover our mission, services, and why businesses choose us." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Helmet>
      <AboutSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <AboutHeading variants={itemVariants}>About Hendoi Technologies</AboutHeading>
        <AboutText variants={itemVariants}>
          Founded in 2023, Hendoi Technologies is a dynamic and innovative tech company based in the vibrant city of Chennai, India. We specialize in web and app development, cloud solutions, and digital marketing services, aiming to empower businesses in the ever-evolving digital landscape.
        </AboutText>
      </AboutSection>

      <AboutSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <AboutSubHeading variants={itemVariants}>Our Mission</AboutSubHeading>
        <AboutText variants={itemVariants}>
          At Hendoi Technologies, our mission is to deliver cutting-edge digital solutions that drive growth and success for our clients. We combine creativity, technical expertise, and industry best practices to create impactful web and mobile applications, robust cloud systems, and effective digital marketing strategies.
        </AboutText>
      </AboutSection>

      <AboutSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <AboutSubHeading variants={itemVariants}>Our Services</AboutSubHeading>
        <ServiceGrid variants={itemVariants}>
          <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconWrapper><FaLaptopCode /></IconWrapper>
            <ServiceTitle>Web Development</ServiceTitle>
            <AboutText>Custom websites and web applications tailored to your business needs.</AboutText>
          </ServiceCard>
          <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconWrapper><FaMobileAlt /></IconWrapper>
            <ServiceTitle>App Development</ServiceTitle>
            <AboutText>Intuitive and powerful mobile apps for iOS and Android platforms.</AboutText>
          </ServiceCard>
          <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconWrapper><FaCloud /></IconWrapper>
            <ServiceTitle>Cloud Solutions</ServiceTitle>
            <AboutText>Scalable and secure cloud applications and infrastructure.</AboutText>
          </ServiceCard>
          <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconWrapper><FaChartLine /></IconWrapper>
            <ServiceTitle>Digital Marketing</ServiceTitle>
            <AboutText>Results-driven digital marketing strategies to boost your online presence.</AboutText>
          </ServiceCard>
          <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconWrapper><FaCogs /></IconWrapper>
            <ServiceTitle>SaaS Development</ServiceTitle>
            <AboutText>Customized Software as a Service solutions for modern businesses.</AboutText>
          </ServiceCard>
          <ServiceCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconWrapper><FaServer /></IconWrapper>
            <ServiceTitle>Hosting Solutions</ServiceTitle>
            <AboutText>Reliable web, app, and email hosting services for seamless operations.</AboutText>
          </ServiceCard>
        </ServiceGrid>
      </AboutSection>

      <AboutSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <AboutSubHeading variants={itemVariants}>Why Choose Us?</AboutSubHeading>
        <ChooseUsList variants={containerVariants}>
          <ChooseUsItem variants={itemVariants}>
            Innovative Approach: We stay ahead of the curve with the latest technologies and trends.
          </ChooseUsItem>
          <ChooseUsItem variants={itemVariants}>
            Tailored Solutions: Our services are customized to meet your unique business requirements.
          </ChooseUsItem>
          <ChooseUsItem variants={itemVariants}>
            Quality Assurance: We maintain high standards in all our deliverables.
          </ChooseUsItem>
          <ChooseUsItem variants={itemVariants}>
            Customer-Centric: Your success is our priority, and we're committed to exceeding your expectations.
          </ChooseUsItem>
          <ChooseUsItem variants={itemVariants}>
            Affordable Excellence: We offer competitive pricing without compromising on quality.
          </ChooseUsItem>
        </ChooseUsList>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;
