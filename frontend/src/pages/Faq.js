import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiCode, FiSmartphone, FiCloud, FiTrello, FiDollarSign, FiShield, FiClock, FiGlobe, FiServer, FiHeadphones, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
const FaqContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Roboto', sans-serif;
  color: #333;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FaqHeading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #2c5282;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const AccordionItem = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const AccordionHeader = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c5282;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f7ff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 16px;
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 0 20px 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 16px 16px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4299e1;
  color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  margin-left: 16px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const QuestionIcon = styled.div`
  color: #4299e1;
  font-size: 1.4rem;
  margin-right: 16px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-right: 12px;
  }
`;

const QuestionText = styled.span`
  flex: 1;
`;

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does Hendoi Technologies offer?",
      answer: "Hendoi Technologies offers a comprehensive range of digital services to meet diverse business needs. Our core offerings include custom web development, mobile app development for iOS and Android platforms, cloud application development, digital marketing and SEO services, SaaS (Software as a Service) development, and reliable web, app, and email hosting solutions. We specialize in creating tailored digital solutions that help businesses thrive in the modern digital landscape.",
      icon: <FiGlobe />
    },
    {
      question: "How long does it typically take to develop a website or mobile app?",
      answer: "The development timeline for websites and mobile apps can vary significantly based on the project's complexity, features, and scope. For a simple, informational website, we can typically complete the project within 4-6 weeks. More complex web applications with custom functionalities might take 2-4 months. Mobile app development generally requires 3-6 months, depending on the app's complexity and whether it's being developed for multiple platforms. Complex, enterprise-level applications or those requiring extensive backend development can take 6 months or more. During our initial consultation and project scoping phase, we provide a detailed timeline tailored to your specific project requirements.",
      icon: <FiClock />
    },
    {
      question: "What is your approach to web development?",
      answer: "Our web development approach is centered on creating responsive, user-friendly, and scalable websites. We use modern frameworks and technologies to ensure fast loading times and optimal performance. Our process includes thorough planning, design, development, testing, and deployment phases. We emphasize clean code practices, SEO optimization, and accessibility standards in all our web projects.",
      icon: <FiCode />
    },
    {
      question: "Can you develop mobile apps for both iOS and Android?",
      answer: "Yes, we specialize in developing mobile applications for both iOS and Android platforms. We use cross-platform frameworks like React Native or Flutter when appropriate, which allows us to develop apps that run on both platforms with a single codebase. For projects requiring native development, we have separate teams skilled in Swift for iOS and Kotlin for Android development.",
      icon: <FiSmartphone />
    },
    {
      question: "What cloud services do you offer?",
      answer: "Our cloud services include cloud application development, cloud migration, and cloud infrastructure management. We work with major cloud providers like AWS, Google Cloud, and Azure to build scalable, secure, and efficient cloud solutions. Our expertise covers serverless computing, containerization, microservices architecture, and cloud-native application development.",
      icon: <FiCloud />
    },
    {
      question: "How do you manage projects and ensure timely delivery?",
      answer: "We follow Agile methodologies for project management, which allows for flexibility and iterative development. We use project management tools like Jira or Trello to track progress and maintain transparency. Regular sprint reviews and client meetings ensure that we stay aligned with project goals and timelines. Our team is committed to meeting deadlines and communicating proactively about any potential delays or issues.",
      icon: <FiTrello />
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing model varies depending on the project type and scope. For most projects, we offer a fixed-price model based on detailed requirements. For long-term or evolving projects, we may use a time and materials model. We also offer retainer packages for ongoing support and maintenance. We provide detailed quotes after our initial consultation and requirements gathering phase, ensuring transparency in our pricing.",
      icon: <FiDollarSign />
    },
    {
      question: "How do you ensure the security of web and mobile applications?",
      answer: "Security is a top priority in all our development processes. We implement best practices such as secure coding, regular security audits, and penetration testing. All sensitive data is encrypted both in transit and at rest. We implement robust authentication and authorization mechanisms and keep our systems updated against the latest security threats. For applications handling sensitive data, we ensure compliance with relevant standards like GDPR, HIPAA, or PCI-DSS.",
      icon: <FiShield />
    },
    {
      question: "Can you help with migrating an existing website or app to a new platform?",
      answer: "Absolutely! We have extensive experience in migrating websites and applications across various platforms. Our migration process includes a thorough assessment of the current system, data mapping, content transfer, and functionality replication. We ensure minimal downtime during the migration and optimize the application for its new environment. Post-migration, we conduct rigorous testing to ensure everything functions as expected on the new platform.",
      icon: <FiServer />
    },
    {
      question: "What kind of support do you offer after project delivery?",
      answer: "We offer comprehensive post-delivery support to ensure the continued success of your digital solution. This includes a dedicated support team available during business hours, with 24/7 emergency support for critical issues. We provide regular maintenance, updates, and performance optimizations. Our support packages can be tailored to your specific needs, ranging from basic technical support to full managed services.",
      icon: <FiHeadphones />
    },
    {
      question: "Do you offer digital marketing services?",
      answer: "Yes, we offer a full suite of digital marketing services. This includes search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content marketing, and email marketing campaigns. Our digital marketing strategies are data-driven and tailored to meet your specific business goals, whether that's increasing brand awareness, driving traffic, or generating leads.",
      icon: <FiTrendingUp />
    },
    {
      question: "How do you handle intellectual property rights for developed solutions?",
      answer: "Upon full payment for the project, all intellectual property rights for the developed solutions are transferred to the client. This includes source code, design assets, and any custom algorithms or processes developed specifically for your project. We respect the confidentiality of our clients' ideas and innovations and are happy to sign Non-Disclosure Agreements (NDAs) when required.",
      icon: <FiUsers />
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <FaqContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
       <Helmet>
        <title>FAQ | Hendoi Technologies - Your Digital Solutions Partner</title>
        <meta name="description" content="Find answers to common questions about Hendoi Technologies' services, including web and mobile app development, cloud solutions, digital marketing, project timelines, pricing, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Helmet>
      <FaqHeading
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Frequently Asked Questions
      </FaqHeading>
      {faqData.map((faq, index) => (
        <AccordionItem
          key={index}
          variants={itemVariants}
        >
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            <QuestionWrapper>
              <QuestionIcon>{faq.icon}</QuestionIcon>
              <QuestionText>{faq.question}</QuestionText>
            </QuestionWrapper>
            <IconWrapper>
              {activeIndex === index ? <FiMinus size={16} /> : <FiPlus size={16} />}
            </IconWrapper>
          </AccordionHeader>
          <AnimatePresence>
            {activeIndex === index && (
              <AccordionContent
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {faq.answer}
              </AccordionContent>
            )}
          </AnimatePresence>
        </AccordionItem>
      ))}
    </FaqContainer>
  );
};

export default Faq;