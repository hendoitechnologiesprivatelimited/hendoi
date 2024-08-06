import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Faq from '../src/pages/Faq';
import Contact from '../src/pages/Contact';
import Policy from '../src/pages/Policy';
import WebsiteDevelopment from '../src/pages/WebsiteDevelopment';
import WebEmailAppHosting from '../src/pages/WebEmailAppHosting';
import DigitalMarketing from '../src/pages/DigitalMarketing';
import MobileAppDevelopment from '../src/pages/MobileAppDevelopment';
import CloudApplicationDevelopment from '../src/pages/CloudApplicationDevelopment';
import SaaSDevelopment from '../src/pages/SaaSDevelopment';
import Blog from '../src/pages/Blog';
import BlogPost from '../src/pages/BlogPost';
import Whatsapp from '../src/components/Whatsapp';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/web-email-app-hosting" element={<WebEmailAppHosting />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/saas-development" element={<SaaSDevelopment />} />
            <Route path="/cloud-application-development" element={<CloudApplicationDevelopment />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Whatsapp/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
