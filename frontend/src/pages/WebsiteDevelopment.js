import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaShoppingCart, FaCalendarAlt, FaUser, FaBuilding,  FaPaintBrush, FaMobileAlt, FaSearch, FaWhatsapp, FaLaptopCode, FaChartLine, FaHospital, FaGraduationCap, FaUtensils, FaPlane, FaDumbbell, FaStore, FaCoffee, FaLightbulb, FaHandshake } from 'react-icons/fa';
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

const IndustryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const IndustryItem = styled(motion.div)`
  text-align: center;
  padding: 20px;
  background-color: #edf2f7;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4299e1;
    color: white;
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    margin-bottom: 10px;
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

const WebsiteDevelopment = () => {
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
        <title>Custom Website Development | Boost Your Business Online</title>
        <meta name="description" content="Transform your business with a custom website from Hendoi Technologies. We offer tailored web solutions for e-commerce, booking systems, business showcases, and personal branding. Let's create your dream website together!" />
      </Helmet>
      <Section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Header variants={itemVariants}>Hey there! Let's Chat About Your Dream Website 🌟</Header>
        
        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "I've been thinking about getting a website for my business, but I'm not sure where to start..."
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            I totally get it! Starting a website project can feel overwhelming, but don't worry – we're here to make it super easy and fun for you. Imagine having a virtual storefront that's open 24/7, showcasing your awesome products or services to the world. Exciting, right? 😊
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={true}>
            "That does sound great! But I'm not very tech-savvy. Will I be able to manage it?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Absolutely! We design our websites to be user-friendly, even for those who aren't tech wizards. Think of it like setting up your social media profile, but cooler and more powerful for your business. Plus, we'll be here to guide you every step of the way. No tech stress, promise! 🤗
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Why Your Business Needs an Awesome Website</Subheader>
        <List>
          <ListItem variants={itemVariants}>
            <Icon><FaRocket /></Icon>
            Boost your street cred (aka credibility) in the digital world
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaShoppingCart /></Icon>
            Turn your website into a 24/7 sales machine (cha-ching! 💰)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaCalendarAlt /></Icon>
            Let clients book you while you sleep (hello, easier life!)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaSearch /></Icon>
            Get found on Google (wave goodbye to those dusty yellow pages)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaChartLine /></Icon>
            Understand your customers better (mind-reading powers, activated!)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaLaptopCode /></Icon>
            Show off your awesomeness to the world (your talents deserve the spotlight!)
          </ListItem>
        </List>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "Wow, I hadn't thought about all those benefits! But how do I know what kind of website I need?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Great question! Let's break it down into a few common types. Think of it like choosing the perfect outfit for your business – we want it to fit just right and make you look amazing! 👔✨
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Tailored Solutions for Your Unique Flavor</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaShoppingCart size={50} /></Icon>
            <h3>E-commerce Extravaganza</h3>
            <p>Turn your site into a 24/7 sales superstar. Cha-ching! 🛍️</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaCalendarAlt size={50} /></Icon>
            <h3>Booking Brilliance</h3>
            <p>Let clients snag your time while you catch some Z's. Easy peasy! 📅</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaBuilding size={50} /></Icon>
            <h3>Business Showcase Bonanza</h3>
            <p>Strut your professional stuff and wow potential clients! 🌟</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaUser size={50} /></Icon>
            <h3>Personal Brand Paradise</h3>
            <p>Your online home to share your awesomeness with the world! 🎭</p>
          </Card>
        </Grid>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "Those all sound great! But my industry is pretty specific. Do you have experience with that?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            You bet! We've worked with all sorts of amazing businesses. Whether you're serving up gourmet dishes or crunching numbers, we've got you covered. Check out some of the industries we love working with:
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Industries We Love to Empower</Subheader>
        <IndustryGrid>
          <IndustryItem variants={itemVariants}>
            <FaHospital />
            <p>Healthcare Heroes</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaGraduationCap />
            <p>Education Rockstars</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaUtensils />
            <p>Culinary Wizards</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaPlane />
            <p>Travel Gurus</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaDumbbell />
            <p>Fitness Fanatics</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaStore />
            <p>Retail Revolutionaries</p>
          </IndustryItem>
        </IndustryGrid>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "This all sounds amazing! But I'm worried about the process. Is it complicated?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Not at all! We've got this down to a fun, smooth process. It's kind of like cooking up your favorite recipe – we've got all the ingredients, and we'll guide you through each step. Let me show you how we do it:
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Our Secret Sauce for Website Success</Subheader>
        <List>
          <ListItem variants={itemVariants}>
            <Icon><FaCoffee /></Icon>
            We kick things off with a fun strategy session (coffee's on us! ☕)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaPaintBrush /></Icon>
            Our design wizards work their magic to make your site pop 🎨
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaMobileAlt /></Icon>
            We build a responsive site that looks fab on phones, tablets, and desktops 📱💻
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaRocket /></Icon>
            Launch day! We celebrate as your site takes off 🚀🎉
          </ListItem>
        </List>

        <Paragraph variants={itemVariants}>
          From our first coffee chat to launch day, we're usually looking at about 4-6 weeks. But hey, if you're in a hurry, we can put on our superhero capes and speed things up! 🦸‍♂️💨
        </Paragraph>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "You've got me excited now! What's the next step?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
          That's what I love to hear! The next step is super easy – let's have a chat! No pressure, no sales pitch, just a friendly conversation about your ideas and how we can bring them to life. Ready to take that first step towards your dream website?
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Ready to Make Your Website Dreams Come True?</Subheader>
        <Paragraph variants={itemVariants}>
          Let's turn those amazing ideas of yours into a stunning website that works hard for your business. It's time to shine online and show the world how awesome you are!
        </Paragraph>

        <motion.div style={{ textAlign: 'center' }}>
          <WhatsAppButton 
            href="https://wa.me/919677261485?text=Hey there! I'm excited about creating an awesome website for my business. Can we chat about making it happen?"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp style={{ marginRight: '15px' }} /> Let's Chat and Create Magic!
          </WhatsAppButton>
        </motion.div>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={false}>
            <Icon><FaLightbulb /></Icon>
            Pro Tip: Jot down some ideas about what you want your website to do before our chat. It'll help us hit the ground running! And don't worry if you're not sure – we're here to guide you every step of the way. 😊
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            <Icon><FaHandshake /></Icon>
            Can't wait to meet you and start this exciting journey together! Your amazing website is just a conversation away. Let's make it happen! 🌟
          </ConversationBubble>
        </ConversationContainer>
      </Section>
    </PageContainer>
  );
};

export default WebsiteDevelopment;
