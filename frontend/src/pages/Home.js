import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaMobileAlt, FaCloud, FaChartLine, FaCogs, FaServer } from 'react-icons/fa';
import { Helmet } from 'react-helmet';


const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #f4f7f9;
`;

const Section = styled.section`
  padding: 80px 0;
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px; 
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled(animated.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(animated.p)`
  font-size: 1.5rem;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled(animated(Link))`
  display: inline-block;
  background-color: #ffd166;
  color: #333;
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ffca3a;
    transform: translateY(-3px);
  }
`;

const ServiceSection = styled(Section)`
  background-color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled(animated.div)`
  background-color: #f8f9fa;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const FeatureSection = styled(Section)`
  background-color: #f4f7f9;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #667eea;
  margin-right: 20px;
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const CTASection = styled(Section)`
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const heroProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.molasses,
  });

  const serviceSpring = useSpring({
    transform: hoveredService !== null ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hoveredService !== null ? '0 10px 20px rgba(0, 0, 0, 0.1)' : '0 0 0 rgba(0, 0, 0, 0)',
  });

  const serviceProps = (index) => ({
    ...serviceSpring,
    onMouseEnter: () => setHoveredService(index),
    onMouseLeave: () => setHoveredService(null),
  });

  const services = [
    { icon: <FaCode />, title: 'Web Development', description: 'Crafting responsive and dynamic websites tailored to your needs.' },
    { icon: <FaMobileAlt />, title: 'Mobile App Development', description: 'Building innovative apps for iOS and Android platforms.' },
    { icon: <FaCloud />, title: 'Cloud Solutions', description: 'Leveraging cloud technology to scale your business efficiently.' },
    { icon: <FaChartLine />, title: 'Digital Marketing', description: 'Boosting your online presence with data-driven strategies.' },
    { icon: <FaCogs />, title: 'SaaS Development', description: 'Creating scalable software solutions for modern businesses.' },
    { icon: <FaServer />, title: 'Hosting Solutions', description: 'Providing reliable and secure hosting for your digital assets.' },
  ];

  const features = [
    { icon: <FaRocket />, title: 'Rapid Development', description: 'We employ agile methodologies to deliver projects quickly without compromising quality.' },
    { icon: <FaCode />, title: 'Cutting-edge Technology', description: 'Our team stays ahead of the curve, utilizing the latest technologies and frameworks.' },
    { icon: <FaChartLine />, title: 'Scalable Solutions', description: 'We build with growth in mind, ensuring your digital solutions can scale as your business expands.' },
    { icon: <FaCogs />, title: 'Customized Approach', description: 'Every business is unique. We tailor our solutions to meet your specific needs and goals.' },
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Hendoi Technologies - Web, Mobile, Cloud, SaaS Development</title>
        <meta name="description" content="Transform your business with our cutting-edge digital solutions. We offer web design, mobile app development, digital marketing, hosting, cloud solutions, and SaaS development services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Helmet>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle style={heroProps}>Innovate. Create. Succeed.</HeroTitle>
            <HeroSubtitle style={heroProps}>
              Empowering businesses with cutting-edge digital solutions
            </HeroSubtitle>
            <Button to="/contact" style={heroProps}>
              Get Started
            </Button>
          </HeroContent>
        </Container>
      </HeroSection>

      <ServiceSection>
        <Container>
          <SectionTitle>Our Expertise</SectionTitle>
          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                style={serviceProps(index)}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </Container>
      </ServiceSection>

      <FeatureSection>
        <Container>
          <SectionTitle>Why Choose Us</SectionTitle>
          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureContent>
              </FeatureItem>
            ))}
          </FeatureGrid>
        </Container>
      </FeatureSection>

      <CTASection>
        <Container>
          <CTATitle>Ready to Transform Your Digital Presence?</CTATitle>
          <CTAText>
            Let's collaborate to create innovative solutions that drive your business forward.
          </CTAText>
          <Button to="/contact" style={{ backgroundColor: 'white', color: '#667eea' }}>
            Start Your Project
          </Button>
        </Container>
      </CTASection>
    </PageContainer>
  );
};

export default Home;