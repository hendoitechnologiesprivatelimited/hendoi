import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Linkedin, PinIcon } from 'lucide-react';

const FooterWrapper = styled.footer`
  background-color: #f0f4f8;
  color: #2c5282;
  padding: 40px 5%;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ServiceSection = styled(FooterSection)`
  @media (min-width: 769px) {
    align-items: center;
  }
`;

const FooterHeading = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #2c5282;
  align-self: flex-start;
`;

const ServiceHeading = styled(FooterHeading)`
  @media (min-width: 769px) {
    align-self: center;
  }
`;

const FooterText = styled.p`
  text-align: justify;
  margin: 0;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;

  @media (min-width: 769px) {
    text-align: center;
  }
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
  text-align: left;
`;

const FooterLink = styled.a`
  color: #2c5282;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;

  &:hover {
    color: #4299e1;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  align-self: flex-start;
`;

const SocialIcon = styled.a`
  color: #2c5282;
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #4299e1;
  }
`;

const WhatsAppButton = styled.a`
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #128C7E;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #cbd5e0;
  color: #4a5568;
`;

const Footer = () => {
  const whatsappMessage = encodeURIComponent("Hello HENDOI. We visited your website. We would like to know more details. Reply.");

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterHeading>About Us</FooterHeading>
          <FooterText>
            Hendoi Technologies is a leading provider of web development, mobile app, digital marketing, SaaS development, and hosting services based in Chennai, India.
          </FooterText>
        </FooterSection>

        <ServiceSection>
          <ServiceHeading>Services</ServiceHeading>
          <FooterList>
            <FooterListItem><FooterLink href="/website-development">Website Development</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/cloud-application-development">Cloud Application Development</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/mobile-app-development">Mobile App Development</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/saas-development">SaaS Development</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/digital-marketing">Digital Marketing</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Web-email-app-hosting">Web/App/Email Hosting</FooterLink></FooterListItem>
          </FooterList>
        </ServiceSection>

        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <ContactInfo>
            <FooterText>
              Hendoi Technologies (P) Ltd,<br />
              Dr.BRP 1st Street, West Mambalam,<br />
              (Above PERIN Supermarket),<br />
              Chennai City, TN, India - 600033
            </FooterText>
            <FooterLink href="mailto:support@hendoi.com">support@hendoi.com</FooterLink>
            <WhatsAppButton href={`https://wa.me/919677261485?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </WhatsAppButton>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Follow Us</FooterHeading>
          <SocialIcons>
            <SocialIcon href="https://www.facebook.com/hendoitechnologies" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/hendoitechnologies" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/90401017/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </SocialIcon>
            <SocialIcon href="https://www.pinterest.com/hendoitechnologies" target="_blank" rel="noopener noreferrer">
              <PinIcon size={24} />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Hendoi Technologies. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;