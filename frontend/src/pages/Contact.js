import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { sendContactForm } from './api';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, User, AtSign, MessageSquare, Building } from 'lucide-react';
import { Helmet } from 'react-helmet';

// ... (all styled components remain the same)

const ContactContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: 'Montserrat', sans-serif;
  color: #2c5282;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
  min-width: 300px;
`;

const ContactForm = styled(motion.div)`
  flex: 1;
  min-width: 300px;
`;

const CompanyName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #2c5282;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const AddressBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
`;

const AddressText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
`;

const ContactText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MapContainer = styled(motion.div)`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SubHeading = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #4299e1;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormField = styled.div`
  position: relative;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 12px 12px 12px 40px;
  font-size: 16px;
  border: 2px solid #cbd5e0;
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4299e1;
    outline: none;
  }
`;

const TextArea = styled(Field)`
  width: 100%;
  padding: 12px 12px 12px 40px;
  font-size: 16px;
  border: 2px solid #cbd5e0;
  border-radius: 8px;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4299e1;
    outline: none;
  }
`;

const ErrorText = styled.div`
  color: #e53e3e;
  font-size: 14px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #4299e1;
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #3182ce;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled(motion.div)`
  margin-top: 20px;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
`;

const SuccessMessage = styled(Message)`
  background-color: #c6f6d5;
  color: #2f855a;
`;

const ErrorMessageStyled = styled(Message)`
  background-color: #fed7d7;
  color: #9b2c2c;
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #4299e1;
`;

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log('Submitting form with values:', values);
      const response = await sendContactForm(values);
      console.log('Response from server:', response);
      if (response.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        resetForm();
      } else {
        throw new Error(response.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error.response?.data?.message || error.message || 'Failed to send message. Please try again later.'
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ContactContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Contact Hendoi Technologies | Get in Touch for Digital Solutions</title>
        <meta name="description" content="Contact Hendoi Technologies for innovative web, mobile, and cloud solutions. Reach out via phone, email, or visit our office in Chennai. Let's discuss your digital needs today!" />
      </Helmet>
      <ContactInfo variants={childVariants}>
        <CompanyName>
          <Building size={28} color="#4299e1" />
          Hendoi Technologies (P) Ltd
        </CompanyName>
        <AddressBlock>
          <MapPin size={20} />
          <AddressText>
            Dr.BRP 1st Street, West Mambalam,<br />
            (Above PERIN Supermarket),<br />
            Chennai City, TN, India - 600033
          </AddressText>
        </AddressBlock>
        <ContactText><Mail size={20} /> support@hendoi.com</ContactText>
        <ContactText><Phone size={20} /> +91 9677261485</ContactText>
        <MapContainer
          variants={childVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <iframe
            title="Hendoi Technologies Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9519427820583!2d80.22388187507765!3d13.038730987282921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e0aa558eb7%3A0xbe38613bf34266fb!2sHendoi%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1722804621034!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </ContactInfo>
      <ContactForm variants={childVariants}>
        <SubHeading>Send us a message</SubHeading>
        <Formik
          initialValues={{ name: '', email: '', phone: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <StyledForm>
              <FormField>
                <IconWrapper><User size={20} /></IconWrapper>
                <Input type="text" name="name" placeholder="Your Name" />
                <ErrorMessage name="name" component={ErrorText} />
              </FormField>
              <FormField>
                <IconWrapper><AtSign size={20} /></IconWrapper>
                <Input type="email" name="email" placeholder="Your Email" />
                <ErrorMessage name="email" component={ErrorText} />
              </FormField>
              <FormField>
                <IconWrapper><Phone size={20} /></IconWrapper>
                <Input type="tel" name="phone" placeholder="Your Phone Number with Country Code" />
                <ErrorMessage name="phone" component={ErrorText} />
              </FormField>
              <FormField>
                <IconWrapper><MessageSquare size={20} /></IconWrapper>
                <TextArea 
                  as="textarea" 
                  name="message" 
                  placeholder="Your Message"
                  value={values.message}
                  onChange={(e) => setFieldValue('message', e.target.value)}
                  onPaste={(e) => {
                    e.preventDefault();
                    const pastedText = e.clipboardData.getData('text');
                    setFieldValue('message', pastedText);
                  }}
                />
                <ErrorMessage name="message" component={ErrorText} />
              </FormField>
              <SubmitButton type="submit" disabled={isSubmitting}>
                Send Message
              </SubmitButton>
            </StyledForm>
          )}
        </Formik>
        {submitStatus && (
          submitStatus.type === 'success' ? (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {submitStatus.message}
            </SuccessMessage>
          ) : (
            <ErrorMessageStyled
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {submitStatus.message}
            </ErrorMessageStyled>
          )
        )}
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;