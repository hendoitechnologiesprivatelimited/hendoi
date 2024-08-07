import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {  FaHandshake, FaCreditCard, FaLock, FaHeadset } from 'react-icons/fa';

const PolicyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: #f8fafc;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const PolicyHeader = styled(motion.header)`
  text-align: center;
  margin-bottom: 60px;
`;

const PolicyHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PolicySubtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
`;

const PolicyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const PolicyCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const PolicyIcon = styled.div`
  font-size: 2.5rem;
  color: #4299e1;
  margin-bottom: 20px;
`;

const PolicyCardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 15px;
`;

const PolicyList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PolicyListItem = styled(motion.li)`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;

  &:before {
    content: '•';
    color: #4299e1;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
  }
`;

const Policy = () => {
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
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <PolicyContainer>
      <Helmet>
        <title>Our Policies | Transparency and Commitment at Hendoi Technologies</title>
        <meta name="description" content="Learn about Hendoi Technologies' policies on work delivery, payments, data security, and client support. We're committed to transparency, security, and your complete satisfaction." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Helmet>
      <PolicyHeader
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PolicyHeading>Our Policies</PolicyHeading>
        <PolicySubtitle>Committed to transparency, security, and client satisfaction</PolicySubtitle>
      </PolicyHeader>

      <PolicyGrid>
        <PolicyCard
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <PolicyIcon><FaHandshake /></PolicyIcon>
          <PolicyCardTitle>Work & Delivery Policy</PolicyCardTitle>
          <PolicyList>
            <PolicyListItem variants={itemVariants}>Agile development methodology</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Regular progress updates</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Strict adherence to timelines</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Comprehensive quality assurance</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Post-delivery support</PolicyListItem>
          </PolicyList>
        </PolicyCard>

        <PolicyCard
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <PolicyIcon><FaCreditCard /></PolicyIcon>
          <PolicyCardTitle>Payment Policy</PolicyCardTitle>
          <PolicyList>
            <PolicyListItem variants={itemVariants}>Transparent project fees</PolicyListItem>
            <PolicyListItem variants={itemVariants}>50% upfront payment</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Milestone-based payments</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Final payment upon approval</PolicyListItem>
            <PolicyListItem variants={itemVariants}>IP rights transfer on full payment</PolicyListItem>
          </PolicyList>
        </PolicyCard>

        <PolicyCard
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <PolicyIcon><FaLock /></PolicyIcon>
          <PolicyCardTitle>Data Security Policy</PolicyCardTitle>
          <PolicyList>
            <PolicyListItem variants={itemVariants}>Encrypted data storage</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Strict access controls</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Regular security audits</PolicyListItem>
            <PolicyListItem variants={itemVariants}>GDPR compliance</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Non-disclosure agreements</PolicyListItem>
          </PolicyList>
        </PolicyCard>

        <PolicyCard
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <PolicyIcon><FaHeadset /></PolicyIcon>
          <PolicyCardTitle>Support Policy</PolicyCardTitle>
          <PolicyList>
            <PolicyListItem variants={itemVariants}>Dedicated support team</PolicyListItem>
            <PolicyListItem variants={itemVariants}>24/7 emergency support</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Regular maintenance updates</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Comprehensive training</PolicyListItem>
            <PolicyListItem variants={itemVariants}>Extended support options</PolicyListItem>
          </PolicyList>
        </PolicyCard>
      </PolicyGrid>
    </PolicyContainer>
  );
};

export default Policy;