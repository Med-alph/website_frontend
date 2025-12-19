import React from 'react';
import { Box, Typography } from '@mui/material';
import TeamImage from '../assets/Team.jpg';
import { useNavigate } from 'react-router-dom';
import Spotlight from '../components/Spotlight';
import SpotlightCard from '../components/SpotlightCard';
import Button from '../components/Button';
import ScrollVelocity from '../components/ScrollVelocity';
import { usePageTitle } from '../hooks/usePageTitle';

/**
 * About Page - Medalph EMR Company
 * 
 * SEO & UX Improvements:
 * - EMR-focused company messaging
 * - Clear explanation of who Medalph is and what they do
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Standardized CTA
 * - Image with descriptive alt text
 */
const About = () => {
  const navigate = useNavigate();

  // SEO: Dynamic page title and meta description
  usePageTitle(
    'About Medalph EMR - Building EMR Software for Clinics',
    'Learn about Medalph EMR and our mission to build clinical documentation software that clinics actually want to use. Reducing documentation time for doctors.'
  );

  const handleRequestDemo = () => {
    navigate('/contact');
  };

  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        color: '#fff',
        py: 8,
        px: { xs: 3, md: 6 },
        fontFamily: 'Segoe UI, sans-serif',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0c1014, #0c1015, #0d1115, #000000)',
      }}
    >
      {/* Spotlight background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Spotlight />
      </Box>

      {/* Content Layer */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* ScrollVelocity Heading */}
        <Box
          sx={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            mb: 4,
          }}
        >
          <ScrollVelocity
            texts={[
              'About ',
              <span key="highlight" style={{ color: '#b18eff', marginRight: '1rem' }}>
                Medalph EMR
              </span>,
            ]}
            velocity={90}
            className="custom-scroll-text"
          />
        </Box>

        {/* Subtitle */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component="h1"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              color: '#b18eff',
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
              fontWeight: 600,
              mb: 3,
            }}
          >
            Clinical Documentation Software for Clinics
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              color: '#ccc',
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              lineHeight: 1.7,
            }}
          >
            Medalph develops EMR software designed to address documentation challenges in clinical settings. 
            Our clinical documentation software focuses on efficiency and ease of use for clinics and healthcare providers.
          </Typography>
        </Box>

        {/* Image and Text Side-by-Side */}
        <Box
          component="section"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 4,
            flexWrap: 'wrap',
            maxWidth: 1200,
            mx: 'auto',
          }}
        >
          {/* Image with Spotlight */}
          <SpotlightCard className="spotlight-card-wrapper">
            <Box
              component="img"
              src={TeamImage}
              alt="Medalph EMR team working on clinical documentation software development"
              loading="lazy"
              sx={{
                width: { xs: '100%', md: '100%' },
                height: 400,
                borderRadius: 3,
                objectFit: 'cover',
                flexShrink: 0,
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                display: 'block',
              }}
            />
          </SpotlightCard>

          {/* Text + Button */}
          <Box sx={{ flex: 1, px: 2 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.8rem' },
                color: '#b18eff',
                mb: 2,
                fontWeight: 600,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                color: '#ccc',
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Medalph EMR is developed by a team focused on healthcare workflows. We understand the challenges 
              clinics face with documentation systems and aim to create EMR software that supports efficient clinical operations.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                color: '#ccc',
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Our approach emphasizes efficiency, usability, and security. Features in Medalph EMR are designed 
              to reduce documentation time, minimize workflow friction, and support quality patient care delivery.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                color: '#ccc',
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Medalph EMR is designed to support clinics of various sizes, adapting to different practice needs 
              and workflow requirements.
            </Typography>

            <Box style={{ marginTop: '2.5rem' }}>
              <Button onClick={handleRequestDemo}>Request Demo</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
