import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCloud, FaRocket, FaChartLine, FaUsers, FaLock, FaCogs, FaMobileAlt, FaGlobe, FaWhatsapp, FaLightbulb, FaHandshake, FaPuzzlePiece, FaCode, FaServer, FaDatabase, FaMoneyBillWave, FaToolbox, FaClipboardCheck, FaRegLifeRing } from 'react-icons/fa';


// ... [Keep all the styled components from the original file] ...

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

const List = styled(motion.ul)`
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
  background-color: #edf2f7;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.span`
  margin-right: 15px;
  color: #4299e1;
  font-size: 1.5rem;
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


const ConversationBubble = styled(motion.div)`
  background-color: ${props => props.isUser ? '#e2e8f0' : '#4299e1'};
  color: ${props => props.isUser ? '#2d3748' : '#ffffff'};
  padding: 15px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  max-width: 80%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ConversationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const SaaSDevelopment = () => {
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
        <title>Custom SaaS Development | Transform Your Business with Hendoi Technologies</title>
        <meta name="description" content="Revolutionize your business with custom SaaS solutions from Hendoi Technologies. From CRM to analytics, we create scalable, secure, and user-friendly software that grows with your business. Let's build your SaaS success story!" />
      </Helmet>
      <Section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Header variants={itemVariants}>Ready to Revolutionize Your Business with SaaS? 🚀</Header>
        
        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "I keep hearing about SaaS, but I'm not sure if it's right for my business. Can you explain it to me?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Absolutely! Think of SaaS like Netflix, but for business software. 🎬 Instead of buying expensive software outright, you subscribe to it. It's always up-to-date, accessible from anywhere, and can seriously level up your business game! 💼✨
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={true}>
            "That sounds interesting! But is it secure? And can it really help my business grow?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Great questions! 🔐 Security is our top priority – we use bank-level encryption to keep your data safe. And as for growth, imagine having powerful tools at your fingertips that streamline your operations, delight your customers, and give you insights to make smart decisions. That's the SaaS magic! ✨📈
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Why SaaS is the Secret Sauce for Business Success</Subheader>
        <List>
          <ListItem variants={itemVariants}>
            <Icon><FaCloud /></Icon>
            Access your software anytime, anywhere (work from the beach, anyone? 🏖️)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaRocket /></Icon>
            Rapid deployment - go from zero to hero in no time! 🦸‍♂️
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaChartLine /></Icon>
            Scalability that grows with your business (dream big, we've got you covered! 🌟)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaUsers /></Icon>
            Collaborate like a pro, even with remote teams (distance is no match for SaaS! 🌍)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaLock /></Icon>
            Bank-level security without the bank-level headaches 🏦🔒
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaCogs /></Icon>
            Automatic updates - always have the latest and greatest features 🆕
          </ListItem>
        </List>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "Wow, SaaS sounds powerful! But how do I know what kind of SaaS solution I need?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            I'm glad you asked! 😊 Let's look at some popular SaaS solutions. Think of it like choosing the perfect tool for your business toolbox - we want to pick the ones that'll make your work easier and your customers happier!
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>SaaS Solutions to Supercharge Your Business</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaUsers size={50} /></Icon>
            <h3>Customer Relationship Magic ✨</h3>
            <p>Keep your customers smiling with top-notch CRM software! 😃</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaChartLine size={50} /></Icon>
            <h3>Analytics Wonderland 📊</h3>
            <p>Turn data into decisions with powerful analytics tools!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaGlobe size={50} /></Icon>
            <h3>E-commerce Empowerment 🛍️</h3>
            <p>Sell like a pro with feature-packed online store solutions!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaMobileAlt size={50} /></Icon>
            <h3>Mobile App Marvels 📱</h3>
            <p>Take your business on-the-go with custom mobile apps!</p>
          </Card>
        </Grid>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "These all sound great! But how does the development process work? Is it complicated?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Not at all! We've streamlined our process to make it smooth and enjoyable for you. It's like building with LEGO blocks - we've got all the pieces, and together we'll create something amazing! Let me walk you through our steps:
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Our SaaS Development Journey: From Idea to Launch! 🚀</Subheader>
        <List>
          <ListItem variants={itemVariants}>
            <Icon><FaLightbulb /></Icon>
            Discovery & Planning: We brainstorm and map out your dream SaaS (coffee's on us! ☕)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaPuzzlePiece /></Icon>
            Design & Prototyping: We craft intuitive interfaces your users will love ❤️
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaCode /></Icon>
            Development: Our coding ninjas bring your SaaS to life 🥷
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaClipboardCheck /></Icon>
            Testing & Quality Assurance: We polish until it shines ✨
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaRocket /></Icon>
            Launch: 3... 2... 1... Blast off! Your SaaS is live 🎉
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaRegLifeRing /></Icon>
            Ongoing Support: We're here for you, every step of the way 🤝
          </ListItem>
        </List>

        <Paragraph variants={itemVariants}>
          Typically, we can go from idea to launch in about 3-6 months. But don't worry, we're flexible! If you need to move faster, just say the word and we'll put on our supersonic shoes! 👟💨
        </Paragraph>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "This is exciting! But what about the costs? Is SaaS development expensive?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Great question! 💡 SaaS development is an investment, but it's one that can pay off big time. Think of it like planting a money tree 🌴💰 - it takes some upfront care, but then it keeps growing and producing value for your business. Plus, with our flexible pricing models, we can find a solution that fits your budget. Want to explore the numbers together?
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Investing in Your SaaS Success</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaMoneyBillWave size={50} /></Icon>
            <h3>Flexible Pricing 💸</h3>
            <p>We'll work with you to find a model that fits your budget and goals!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaToolbox size={50} /></Icon>
            <h3>Scalable Solutions 📦</h3>
            <p>Start small and grow big - our SaaS grows with you!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaServer size={50} /></Icon>
            <h3>Reduced Infrastructure Costs 💻</h3>
            <p>Say goodbye to expensive hardware and hello to cloud savings!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaDatabase size={50} /></Icon>
            <h3>Data-Driven Decisions 📊</h3>
            <p>Gain insights that help you invest wisely and grow smartly!</p>
          </Card>
        </Grid>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "You've got me excited about SaaS now! What's the next step?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            That's music to my ears! 🎵 The next step is super easy - let's have a chat! No pressure, no complicated jargon, just a friendly conversation about your ideas and how SaaS can take your business to the next level. Ready to explore the possibilities? 🌟
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Ready to Start Your SaaS Success Story? 📘</Subheader>
        <Paragraph variants={itemVariants}>
          Let's turn your big ideas into powerful software that works hard for your business. It's time to join the SaaS revolution and watch your business soar! 🚀
        </Paragraph>

        <motion.div style={{ textAlign: 'center' }}>
          <WhatsAppButton 
            href="https://wa.me/919677261485?text=Hey there! I'm excited about developing a SaaS solution for my business. Can we chat about making it happen?"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp style={{ marginRight: '15px' }} /> Let's Chat and Create SaaS Magic!
          </WhatsAppButton>
        </motion.div>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={false}>
            <Icon><FaLightbulb /></Icon>
            Pro Tip: Before our chat, jot down your top 3 business challenges. We love turning problems into awesome SaaS solutions! And don't worry if you're not sure about the tech details - that's what we're here for! 😊
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            <Icon><FaHandshake /></Icon>
            We're thrilled to start this SaaS journey with you! Your game-changing software is just a conversation away. Let's make it happen and watch your business thrive! 🌟💼
          </ConversationBubble>
        </ConversationContainer>
      </Section>
    </PageContainer>
  );
};

export default SaaSDevelopment;
