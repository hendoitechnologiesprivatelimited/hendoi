import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCloud, FaRocket, FaLock, FaGlobe, FaWhatsapp, FaServer, FaDatabase, FaNetworkWired, FaCogs, FaMobileAlt, FaDesktop, FaTabletAlt, FaUsersCog, FaChartLine, FaCloudDownloadAlt, FaCloudUploadAlt, FaCreditCard, FaCode } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: #f0f4f8;
`;

const Section = styled(motion.section)`
  margin-bottom: 80px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Header = styled(motion.h1)`
  font-size: 3rem;
  color: #2c5282;
  margin-bottom: 30px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheader = styled(motion.h2)`
  font-size: 2rem;
  color: #4299e1;
  margin-bottom: 25px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 25px;
  text-align: center;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const Card = styled(motion.div)`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.span`
  color: #4299e1;
  font-size: 3rem;
  margin-bottom: 20px;
`;

const WhatsAppButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  background-color: #25D366;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 40px;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background-color: #128C7E;
    transform: scale(1.05);
  }
`;

const CloudIllustration = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  font-size: 4rem;
  color: #4299e1;
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f0f4f8;
  padding: 20px;
  border-radius: 10px;
`;

const StepNumber = styled.span`
  background-color: #4299e1;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  font-weight: bold;
`;

const StepContent = styled.div`
  flex: 1;
`;

const CloudApplicationDevelopment = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Cloud Application Development | Elevate Your Business with Hendoi Technologies</title>
        <meta name="description" content="Transform your business with our expert cloud application development services. Harness the power of AWS, GCP, and Azure for enhanced scalability, security, and global accessibility. Let's build your future in the cloud!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Helmet>
      <Section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Header variants={itemVariants}>Elevate Your Business with Cloud Application Development ☁️🚀</Header>

        <CloudIllustration variants={itemVariants}>
          <FaCloud /> <FaRocket style={{marginLeft: '20px'}} />
        </CloudIllustration>

        <Paragraph variants={itemVariants}>
          Harness the power of the cloud to transform your business operations, enhance scalability, and drive innovation. Our cloud application development services are designed to propel your organization into the future of technology.
        </Paragraph>

        <Subheader variants={itemVariants}>Why Choose Cloud Application Development?</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaGlobe /></Icon>
            <h3>Global Accessibility</h3>
            <p>Access your applications from anywhere in the world, on any device.</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaLock /></Icon>
            <h3>Enhanced Security</h3>
            <p>Benefit from advanced security measures and data protection protocols.</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaChartLine /></Icon>
            <h3>Scalability</h3>
            <p>Easily scale your applications to meet growing business demands.</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaCreditCard /></Icon>
            <h3>Cost-Effective</h3>
            <p>Reduce infrastructure costs and pay only for the resources you use.</p>
          </Card>
        </Grid>

        <Subheader variants={itemVariants}>Our Cloud Application Development Process</Subheader>
        <ProcessStep variants={itemVariants}>
          <StepNumber>1</StepNumber>
          <StepContent>
            <h3>Discovery and Planning</h3>
            <p>We analyze your business needs and define the project scope.</p>
          </StepContent>
          <Icon><FaUsersCog /></Icon>
        </ProcessStep>
        <ProcessStep variants={itemVariants}>
          <StepNumber>2</StepNumber>
          <StepContent>
            <h3>Architecture Design</h3>
            <p>We create a robust and scalable cloud architecture tailored to your needs.</p>
          </StepContent>
          <Icon><FaServer /></Icon>
        </ProcessStep>
        <ProcessStep variants={itemVariants}>
          <StepNumber>3</StepNumber>
          <StepContent>
            <h3>Development and Integration</h3>
            <p>Our expert developers bring your cloud application to life.</p>
          </StepContent>
          <Icon><FaCode /></Icon>
        </ProcessStep>
        <ProcessStep variants={itemVariants}>
          <StepNumber>4</StepNumber>
          <StepContent>
            <h3>Testing and Quality Assurance</h3>
            <p>Rigorous testing ensures your application is robust and reliable.</p>
          </StepContent>
          <Icon><FaCloudDownloadAlt /></Icon>
        </ProcessStep>
        <ProcessStep variants={itemVariants}>
          <StepNumber>5</StepNumber>
          <StepContent>
            <h3>Deployment and Monitoring</h3>
            <p>We deploy your application and provide ongoing monitoring and support.</p>
          </StepContent>
          <Icon><FaCloudUploadAlt /></Icon>
        </ProcessStep>

        <Subheader variants={itemVariants}>Cloud Technologies We Excel In</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaCloud /></Icon>
            <h3>Amazon Web Services (AWS)</h3>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaCloud /></Icon>
            <h3>Google Cloud Platform (GCP)</h3>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaCloud /></Icon>
            <h3>Microsoft Azure</h3>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaDatabase /></Icon>
            <h3>Cloud Databases</h3>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaNetworkWired /></Icon>
            <h3>Serverless Architecture</h3>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaCogs /></Icon>
            <h3>Microservices</h3>
          </Card>
        </Grid>

        <Subheader variants={itemVariants}>Experience the Cloud Advantage</Subheader>
        <Paragraph variants={itemVariants}>
          Whether you're looking to migrate existing applications to the cloud or develop new cloud-native solutions, our team of experts is here to guide you every step of the way. Let's unlock the full potential of cloud technology for your business.
        </Paragraph>

        <motion.div style={{ textAlign: 'center' }}>
          <WhatsAppButton 
            href="https://wa.me/919677261485?text=Hello! I'm interested in cloud application development services. Can we discuss how it can benefit my business?"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp style={{ marginRight: '15px' }} /> Let's Discuss Your Cloud Strategy
          </WhatsAppButton>
        </motion.div>

        <CloudIllustration variants={itemVariants}>
          <FaMobileAlt /> <FaTabletAlt style={{margin: '0 20px'}} /> <FaDesktop />
        </CloudIllustration>

        <Paragraph variants={itemVariants}>
          Empower your business with cloud applications that work seamlessly across all devices. The future of technology is in the cloud - are you ready to soar? 🚀
        </Paragraph>
      </Section>
    </PageContainer>
  );
};

export default CloudApplicationDevelopment;
