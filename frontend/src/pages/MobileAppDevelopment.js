import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { FaMobileAlt, FaRocket, FaCode, FaApple, FaAndroid, FaGamepad, FaShoppingCart, FaHeartbeat, FaGraduationCap, FaPlane, FaUtensils, FaChartLine, FaCogs, FaPaintBrush, FaLightbulb, FaHandshake, FaWhatsapp } from 'react-icons/fa';

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

const MobileAppDevelopment = () => {
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
        <title>Custom Mobile App Development | Transform Your Business</title>
        <meta name="description" content="Turn your app idea into reality with Hendoi Technologies. We create innovative, user-friendly mobile apps for iOS and Android. From e-commerce to lifestyle apps, we've got you covered. Let's build your dream app together!" />
      </Helmet>
      <Section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Header variants={itemVariants}>Ready to Turn Your App Idea into Reality? Let's Chat! 📱✨</Header>
        
        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "I've got this amazing app idea, but I'm not sure how to make it happen. Can you help?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Absolutely! We're thrilled to hear about your app idea. It's like you're holding a seed of innovation, and we're here to help it grow into a flourishing digital tree. Whether it's the next big social platform or a game-changing business tool, we've got the expertise to bring it to life. Ready to embark on this exciting journey? 🚀
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={true}>
            "That sounds great! But I'm worried about the technical stuff. Is it complicated?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            No worries at all! Think of us as your tech translators and wizards rolled into one. We handle all the complex coding and technical challenges, so you can focus on what you do best – your vision and business goals. It's like having a personal chef; you decide on the menu, and we'll take care of all the cooking. How does that sound? 👨‍🍳💻
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Why Your Business Needs a Mobile App</Subheader>
        <List>
          <ListItem variants={itemVariants}>
            <Icon><FaMobileAlt /></Icon>
            Be in your customers' pockets 24/7 (literally!)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaRocket /></Icon>
            Skyrocket your brand engagement and loyalty
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaCode /></Icon>
            Create a unique, tailored user experience
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaChartLine /></Icon>
            Gather invaluable data and insights about your users
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaShoppingCart /></Icon>
            Boost sales with mobile-exclusive offers and easy purchasing
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaLightbulb /></Icon>
            Stay ahead of the competition with cutting-edge tech
          </ListItem>
        </List>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "Wow, I can see how an app could really help my business. But what kind of app should I make?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Great question! The type of app you create should align with your business goals and your customers' needs. Let's explore some popular options to spark your imagination. Remember, this is just the beginning – your unique idea could create a whole new category! 🌟
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Unlock Your App's Potential</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaApple size={50} /><FaAndroid size={50} /></Icon>
            <h3>Cross-Platform Wonder</h3>
            <p>Reach both iOS and Android users with one amazing app! 🍏🤖</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaGamepad size={50} /></Icon>
            <h3>Gamification Magic</h3>
            <p>Turn everyday tasks into fun, engaging experiences! 🎮</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaShoppingCart size={50} /></Icon>
            <h3>E-commerce Enabler</h3>
            <p>Your store in every pocket, boosting sales 24/7! 🛍️</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaHeartbeat size={50} /></Icon>
            <h3>Lifestyle Companion</h3>
            <p>Be part of your users' daily routines and habits! 🧘‍♀️</p>
          </Card>
        </Grid>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "These all sound fantastic! But my industry is quite specific. Do you have experience with that?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            Absolutely! We've had the pleasure of working with a diverse range of industries, each with its unique challenges and opportunities. Whether you're in finance or fitness, education or entertainment, we've got the expertise to create an app that resonates with your specific audience. Let's take a look at some industries we've worked with:
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Industries We've Revolutionized with Apps</Subheader>
        <IndustryGrid>
          <IndustryItem variants={itemVariants}>
            <FaHeartbeat />
            <p>Healthcare Heroes</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaGraduationCap />
            <p>EdTech Innovators</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaUtensils />
            <p>Food & Beverage Pioneers</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaPlane />
            <p>Travel & Hospitality Gurus</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaChartLine />
            <p>FinTech Disruptors</p>
          </IndustryItem>
          <IndustryItem variants={itemVariants}>
            <FaShoppingCart />
            <p>Retail Revolutionaries</p>
          </IndustryItem>
        </IndustryGrid>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "This is exciting! But how does the app development process work?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            I'm thrilled you're excited! Our app development process is like crafting a gourmet meal – carefully planned, expertly executed, and absolutely delicious in the end. Let me walk you through our secret recipe for app success:
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Our Recipe for App Development Success</Subheader>
        <List>
          <ListItem variants={itemVariants}>
            <Icon><FaLightbulb /></Icon>
            Brainstorming session to refine your app idea (coffee and creativity included ☕💡)
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaPaintBrush /></Icon>
            Design a user interface that's so intuitive, it feels like mind-reading 🎨
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaCode /></Icon>
            Our coding ninjas work their magic to bring your app to life 🥷
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaCogs /></Icon>
            Rigorous testing to ensure your app runs smoother than a buttered slide 🧈
          </ListItem>
          <ListItem variants={itemVariants}>
            <Icon><FaRocket /></Icon>
            Launch day! We celebrate as your app takes off to the stars 🚀🎉
          </ListItem>
        </List>

        <Paragraph variants={itemVariants}>
          From our first idea jam to the grand launch, we're usually looking at about 8-12 weeks. But hey, if you're in a hurry to change the world, we can put on our superhero capes and speed things up! ⚡
        </Paragraph>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={true}>
            "You've got me excited now! What's the next step?"
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            That's music to our ears! The next step is as easy as pie – let's have a friendly chat about your app dreams. No pressure, no tech jargon overload, just a fun conversation about how we can turn your idea into the next big thing. Ready to take that first step towards app stardom?
          </ConversationBubble>
        </ConversationContainer>

        <Subheader variants={itemVariants}>Ready to Bring Your App Idea to Life?</Subheader>
        <Paragraph variants={itemVariants}>
          Let's transform your brilliant idea into an app that users will love and your business will thrive on. It's time to make your mark in the digital world and show everyone what you're made of!
        </Paragraph>

        <motion.div style={{ textAlign: 'center' }}>
          <WhatsAppButton 
            href="https://wa.me/919677261485?text=Hey there! I'm super excited about creating an awesome mobile app. Can we chat about making it happen?"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp style={{ marginRight: '15px' }} /> Let's Chat and Create App Magic!
          </WhatsAppButton>
        </motion.div>

        <ConversationContainer>
          <ConversationBubble variants={itemVariants} isUser={false}>
            <Icon><FaLightbulb /></Icon>
            Pro Tip: Before our chat, jot down some cool features you'd love to see in your app. Don't worry if you're not sure about everything – that's what our brainstorming session is for! We'll help you refine your ideas and add some extra pizzazz. 🌟
          </ConversationBubble>
          
          <ConversationBubble variants={itemVariants} isUser={false}>
            <Icon><FaHandshake /></Icon>
            We're on the edge of our seats, excited to meet you and kick off this amazing app adventure! Your dream app is just a conversation away. Let's make it happen and create something extraordinary together! 🚀📱
          </ConversationBubble>
        </ConversationContainer>
      </Section>
    </PageContainer>
  );
};

export default MobileAppDevelopment;
