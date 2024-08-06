import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { FaSearchDollar, FaBullhorn, FaChartLine, FaUsers, FaMobileAlt, FaEnvelope, FaFacebookF, FaSearchPlus, FaAd, FaComments, FaRocket, FaLightbulb, FaWhatsapp } from 'react-icons/fa';

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

const QuizContainer = styled(motion.div)`
  background-color: #e6f7ff;
  border-radius: 15px;
  padding: 30px;
  margin-top: 40px;
`;

const QuizQuestion = styled.h3`
  font-size: 1.5rem;
  color: #2c5282;
  margin-bottom: 20px;
`;

const QuizOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

const QuizOption = styled(motion.button)`
  background-color: #fff;
  border: 2px solid #4299e1;
  border-radius: 10px;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4299e1;
    color: #fff;
  }
`;

const StrategyBuilder = styled(motion.div)`
  background-color: #f0f4f8;
  border-radius: 15px;
  padding: 30px;
  margin-top: 40px;
`;

const StrategyStep = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StepNumber = styled.span`
  background-color: #4299e1;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-weight: bold;
`;

const Testimonial = styled(motion.div)`
  background-color: #e6f7ff;
  border-radius: 15px;
  padding: 30px;
  margin-top: 40px;
  text-align: center;
  font-style: italic;
`;

const DigitalMarketing = () => {
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
        <title>Boost Your Business with Expert Digital Marketing | Hendoi Technologies</title>
        <meta name="description" content="Skyrocket your online presence with our comprehensive digital marketing services. From SEO and social media to PPC and content marketing, we've got the tools to grow your business. Let's create your digital success story!" />
      </Helmet>
      <Section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Header variants={itemVariants}>Skyrocket Your Business with Digital Marketing! 🚀💼</Header>
        
        <Paragraph variants={itemVariants}>
          Ready to conquer the digital world? Let's embark on an exciting journey to boost your online presence and turn your brand into an internet sensation! 🌟
        </Paragraph>

        <Subheader variants={itemVariants}>Why Digital Marketing is Your Secret Weapon 🦸‍♂️</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaSearchDollar /></Icon>
            <h3>Cost-Effective 💰</h3>
            <p>Get more bang for your buck compared to traditional marketing!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaBullhorn /></Icon>
            <h3>Wider Reach 🌍</h3>
            <p>Connect with audiences across the globe, 24/7!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaChartLine /></Icon>
            <h3>Measurable Results 📊</h3>
            <p>Track and optimize your campaigns in real-time!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaUsers /></Icon>
            <h3>Targeted Approach 🎯</h3>
            <p>Reach the right people with laser-focused precision!</p>
          </Card>
        </Grid>

        <Subheader variants={itemVariants}>Our Digital Marketing Toolbox 🧰</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaMobileAlt /></Icon>
            <h3>Mobile Marketing 📱</h3>
            <p>Capture attention on the small screen with responsive designs and mobile-first strategies!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaEnvelope /></Icon>
            <h3>Email Marketing 📧</h3>
            <p>Craft compelling newsletters and automated sequences that convert!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaFacebookF /></Icon>
            <h3>Social Media Magic 🧙‍♂️</h3>
            <p>Build communities, engage audiences, and drive traffic across all major platforms!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaSearchPlus /></Icon>
            <h3>SEO Sorcery 🔮</h3>
            <p>Optimize your content to climb search rankings and attract organic traffic!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaAd /></Icon>
            <h3>Pay-Per-Click Advertising 💡</h3>
            <p>Create targeted ad campaigns that deliver ROI across search and social platforms!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaComments /></Icon>
            <h3>Content Marketing 📝</h3>
            <p>Develop valuable, relevant content that attracts and retains a clearly defined audience!</p>
          </Card>
        </Grid>

        <QuizContainer variants={itemVariants}>
          <QuizQuestion>🤔 Pop Quiz: What's Your Digital Marketing IQ?</QuizQuestion>
          <QuizOptions>
            <QuizOption whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              SEO Savant 🧠
            </QuizOption>
            <QuizOption whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Social Media Maven 📱
            </QuizOption>
            <QuizOption whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Content Creation King 👑
            </QuizOption>
            <QuizOption whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Digital Newbie (but eager to learn!) 🌱
            </QuizOption>
          </QuizOptions>
        </QuizContainer>

        <Subheader variants={itemVariants}>Let's Craft Your Digital Success Story 📖✨</Subheader>
        <StrategyBuilder variants={itemVariants}>
          <StrategyStep variants={itemVariants}>
            <StepNumber>1</StepNumber>
            <p>Analyze your current digital footprint and identify opportunities 🕵️‍♂️</p>
          </StrategyStep>
          <StrategyStep variants={itemVariants}>
            <StepNumber>2</StepNumber>
            <p>Set SMART goals aligned with your business objectives 🎯</p>
          </StrategyStep>
          <StrategyStep variants={itemVariants}>
            <StepNumber>3</StepNumber>
            <p>Craft a tailor-made strategy leveraging the right digital channels 🧵</p>
          </StrategyStep>
          <StrategyStep variants={itemVariants}>
            <StepNumber>4</StepNumber>
            <p>Create compelling content and launch targeted campaigns 🎭</p>
          </StrategyStep>
          <StrategyStep variants={itemVariants}>
            <StepNumber>5</StepNumber>
            <p>Continuously measure, analyze, and optimize for peak performance 📈</p>
          </StrategyStep>
          <StrategyStep variants={itemVariants}>
            <StepNumber>6</StepNumber>
            <p>Scale successful strategies and explore new digital frontiers 🚀</p>
          </StrategyStep>
        </StrategyBuilder>

        <Subheader variants={itemVariants}>Why Choose Us for Your Digital Marketing Journey? 🌟</Subheader>
        <Grid>
          <Card variants={itemVariants}>
            <Icon><FaRocket /></Icon>
            <h3>Results-Driven Approach</h3>
            <p>We focus on metrics that matter to your business growth!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaLightbulb /></Icon>
            <h3>Innovative Strategies</h3>
            <p>Stay ahead of the curve with cutting-edge digital tactics!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaUsers /></Icon>
            <h3>Dedicated Team</h3>
            <p>Our digital marketing experts are passionate about your success!</p>
          </Card>
          <Card variants={itemVariants}>
            <Icon><FaChartLine /></Icon>
            <h3>Transparent Reporting</h3>
            <p>Get clear insights into your campaign performance and ROI!</p>
          </Card>
        </Grid>

        <Testimonial variants={itemVariants}>
          <p>"Working with this digital marketing team has been a game-changer for our business. Our online presence has skyrocketed, and we're seeing real results in our bottom line!" - Sarah J., Happy Client 😊</p>
        </Testimonial>

        <Paragraph variants={itemVariants}>
          Ready to turn your digital dreams into reality? Let's chat and create some marketing magic together! ✨🎩
        </Paragraph>

        <motion.div style={{ textAlign: 'center' }}>
          <WhatsAppButton 
            href="https://wa.me/919677261485?text=Hey there! I'm excited to boost my digital marketing game. Can we chat about creating an awesome strategy?"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp style={{ marginRight: '15px' }} /> Let's Create Digital Magic!
          </WhatsAppButton>
        </motion.div>

        <Paragraph variants={itemVariants} style={{ marginTop: '40px', fontStyle: 'italic' }}>
          Remember, in the digital world, the sky's not the limit – it's just the beginning! 🌠 Let's make your brand shine brighter than a supernova! 💫
        </Paragraph>
      </Section>
    </PageContainer>
  );
};

export default DigitalMarketing;
