import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGlobe, FaRocket, FaShieldAlt, FaServer, FaCloud, FaSync, FaUserFriends, FaSearch, FaDatabase, FaLaptopCode, FaNetworkWired, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

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
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: inline-block;
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

const ConversationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const ChatBubble = styled(motion.div)`
  max-width: 80%;
  padding: 15px 20px;
  border-radius: 20px;
  font-size: 1.1rem;
  line-height: 1.4;
  ${props => props.isUser ? `
    align-self: flex-end;
    background-color: #4299e1;
    color: white;
  ` : `
    align-self: flex-start;
    background-color: #e2e8f0;
    color: #2d3748;
  `}
`;

const FeatureList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.1rem;

  svg {
    margin-right: 10px;
    color: #4299e1;
  }
`;

const WebEmailAppHosting = () => {
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
        <title>Comprehensive Hosting Solutions | Website, App & Email Hosting | Hendoi Technologies</title>
        <meta name="description" content="Supercharge your digital presence with Hendoi Technologies' integrated hosting solutions. We offer secure, scalable hosting for websites, mobile apps, web apps, and email. Power up your online business today!" />
      </Helmet>
      <Section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Header variants={itemVariants}>Supercharge Your Digital Presence with Our Hosting Solutions! 🚀🌐📱</Header>
        
        <ConversationContainer>
          <ChatBubble variants={itemVariants} isUser={true}>
            Hey there! 👋 I need reliable hosting for my website, mobile app, web app, and email. Can you help?
          </ChatBubble>
          
          <ChatBubble variants={itemVariants} isUser={false}>
            Absolutely! You've come to the right place. 😃 We offer top-notch hosting solutions for all your digital needs. Let's break it down and see how we can power up your online presence!
          </ChatBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Website Hosting: Your 24/7 Digital Storefront 🏪💻</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaRocket /></Icon>
            <h3>Lightning Fast Speeds</h3>
            <p>Optimized servers for quick loading times!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaShieldAlt /></Icon>
            <h3>Ironclad Security</h3>
            <p>Advanced protection against cyber threats!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaCloud /></Icon>
            <h3>Scalable Resources</h3>
            <p>Grow your site without worrying about server capacity!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaSearch /></Icon>
            <h3>SEO Boost</h3>
            <p>Optimized hosting environment for better search rankings!</p>
          </Card>
        </Grid>

        <ConversationContainer>
          <ChatBubble variants={itemVariants} isUser={true}>
            That sounds great for my website! 😮 But what about hosting for my mobile and web apps?
          </ChatBubble>
          
          <ChatBubble variants={itemVariants} isUser={false}>
            We've got you covered! Our app hosting solutions are designed to keep your apps running smoothly and securely. Check this out! 📱💻
          </ChatBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Mobile & Web App Hosting: Powering Your Digital Innovations 💪🚀</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaServer /></Icon>
            <h3>Robust Infrastructure</h3>
            <p>High-performance servers for smooth app operation!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaDatabase /></Icon>
            <h3>Scalable Databases</h3>
            <p>Flexible storage solutions for growing user bases!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaLaptopCode /></Icon>
            <h3>Developer-Friendly</h3>
            <p>Easy deployment and management tools!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaNetworkWired /></Icon>
            <h3>Global CDN</h3>
            <p>Fast content delivery worldwide!</p>
          </Card>
        </Grid>

        <ConversationContainer>
          <ChatBubble variants={itemVariants} isUser={true}>
            Wow, this is exactly what I need for my apps! 🎉 Now, what about email hosting?
          </ChatBubble>
          
          <ChatBubble variants={itemVariants} isUser={false}>
            Of course! Our email hosting service is designed to keep your communication secure, efficient, and professional. Take a look! 📧🛡️
          </ChatBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Email Hosting: Your Professional Communication Hub 📬💼</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaShieldAlt /></Icon>
            <h3>Advanced Security</h3>
            <p>Robust spam filters and encryption for your peace of mind!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaCloud /></Icon>
            <h3>Ample Storage</h3>
            <p>Large mailboxes to keep all your important emails!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaSync /></Icon>
            <h3>Seamless Sync</h3>
            <p>Access your emails from any device, anytime!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaGlobe /></Icon>
            <h3>Custom Domains</h3>
            <p>Professional email addresses with your own domain!</p>
          </Card>
        </Grid>

        <ConversationContainer>
          <ChatBubble variants={itemVariants} isUser={true}>
            This all sounds amazing! 🤩 But how do these hosting services work together?
          </ChatBubble>
          
          <ChatBubble variants={itemVariants} isUser={false}>
            Great question! Our integrated hosting solutions create a powerful ecosystem for your digital presence. Let me show you how it all comes together! 🌐🔄📱
          </ChatBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>The Power of Integrated Hosting: Your Digital Ecosystem 🔗💪</Subheader>
        <FeatureList>
          <FeatureItem variants={itemVariants}>
            <FaRocket /> Optimized performance across all platforms
          </FeatureItem>
          <FeatureItem variants={itemVariants}>
            <FaShieldAlt /> Unified security measures to protect all your digital assets
          </FeatureItem>
          <FeatureItem variants={itemVariants}>
            <FaSync /> Seamless data synchronization between your website, apps, and email
          </FeatureItem>
          <FeatureItem variants={itemVariants}>
            <FaUserFriends /> Consistent user experience across all hosted services
          </FeatureItem>
          <FeatureItem variants={itemVariants}>
            <FaDatabase /> Centralized data management for efficient operations
          </FeatureItem>
          <FeatureItem variants={itemVariants}>
            <FaCloud /> Scalable resources to support your growth across all platforms
          </FeatureItem>
        </FeatureList>

        <ConversationContainer>
          <ChatBubble variants={itemVariants} isUser={true}>
            This is exactly what my business needs! 🙌 How do we get started with your hosting services?
          </ChatBubble>
          
          <ChatBubble variants={itemVariants} isUser={false}>
            I'm thrilled to hear that! 😄 Getting started is easy. Just click the button below to start a WhatsApp chat with our team. We'll discuss your specific hosting needs and create a tailored plan for your digital success!
          </ChatBubble>
        </ConversationContainer>

        <motion.div style={{ textAlign: 'center' }}>
          <WhatsAppButton 
            href="https://wa.me/919677261485?text=Hi! I'm interested in your hosting solutions for my website, apps, and email. Can we discuss how to boost my online presence?"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp style={{ marginRight: '15px' }} /> Let's Supercharge Your Digital Presence!
          </WhatsAppButton>
        </motion.div>

        <Paragraph variants={itemVariants} style={{ marginTop: '40px', fontStyle: 'italic' }}>
          Remember, reliable hosting is the backbone of a strong digital presence. Let's work together to create a robust, secure, and scalable hosting solution for all your digital needs! 🌟🚀💻
        </Paragraph>
      </Section>
    </PageContainer>
  );
};

export default WebEmailAppHosting;
