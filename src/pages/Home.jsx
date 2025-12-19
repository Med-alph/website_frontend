import React, { useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import { useNavigate } from 'react-router-dom';
import ScrollFloat from '../components/ScrollFloat';
import Button from '../components/Button';
import Spotlight from '../components/Spotlight';
import SpotlightCard from '../components/SpotlightCard';
import { useMediaQuery } from 'react-responsive';
import ShinyText from '../components/ShinyText';
import { usePageTitle } from '../hooks/usePageTitle';

/**
 * Home Page - Medalph Medical Software Platform
 * 
 * SEO & UX Improvements:
 * - Single h1 tag optimized for "Medical software for clinics" / "Healthcare management software"
 * - Clear platform positioning (medical software company, not just documentation)
 * - Content flow: Healthcare Problems → Medalph Platform → Core Capabilities → Benefits → Trust → CTA
 * - Semantic HTML structure (header, main, section)
 * - Standardized CTAs ("Request Demo")
 * - Healthcare trust signals
 */
const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // SEO: Dynamic page title and meta description - Platform-level positioning
  usePageTitle(
    'Medalph - Medical Software for Clinics & Healthcare Providers',
    'Medalph provides medical software and healthcare management solutions for clinics, hospitals, and healthcare teams. Improve clinical workflows and operational efficiency.'
  );

  const handleRequestDemo = () => {
    navigate('/contact');
  };

  return (
    <Box
      component="main"
      sx={{
        bgcolor: '#0f0c29',
        background: `linear-gradient(135deg, #0c1014, #0c1015, #0d1115, #000000)`,
        minHeight: '100vh',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 3, md: 6 },
      }}
    >
      {/* Background Spotlight Effect */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Spotlight />
      </Box>

      {/* Hero Section - Above the fold with clear value proposition */}
      <Box
        component="header"
        ref={containerRef}
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          px: { xs: 2, sm: 4, md: 0 },
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', sm: '720px', md: '1000px' }, mx: 'auto' }}>
          {/* SEO: Single h1 tag optimized for "Medical software for clinics" / "Healthcare management software" */}
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.8rem' },
              fontWeight: 'bold',
              color: '#ffffff',
              lineHeight: 1.2,
              mb: 3,
              px: { xs: 1, sm: 0 },
            }}
          >
            Medical Software for Clinics
          </Typography>

          {/* Clear value proposition - Platform positioning: what Medalph does, who it's for */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              color: '#b18eff',
              fontWeight: 500,
              mb: 2,
              px: { xs: 1, sm: 0 },
            }}
          >
            Healthcare Management Software That Improves Clinical Workflows
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem' },
              color: '#aaa',
              mt: 2,
              maxWidth: { xs: '100%', sm: '800px' },
              mx: 'auto',
              lineHeight: 1.7,
              px: { xs: 1, sm: 0 },
              mb: 4,
            }}
          >
            Medalph provides medical software solutions for clinics, hospitals, and healthcare teams. 
            Our platform improves clinical workflows and operational efficiency, helping healthcare providers 
            deliver better patient care while managing their practice more effectively.
          </Typography>

          {/* Primary CTA - visually dominant */}
          <Box mt={isMobile ? 4 : 5}>
            <Button
              onClick={handleRequestDemo}
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem' },
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 1.8 },
                fontWeight: 600,
              }}
            >
              Request Demo
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Healthcare Problems Section - What challenges do clinics face */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 6, sm: 8 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h2"
            fontWeight="bold"
            sx={{
              color: '#b18eff',
              mb: 3,
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              textAlign: 'center',
            }}
          >
            Healthcare Providers Face Complex Operational Challenges
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '900px',
              mx: 'auto',
              mt: 2,
              color: '#ccc',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7,
              textAlign: 'center',
            }}
          >
            Clinics and hospitals struggle with inefficient workflows, documentation burdens, and disconnected systems. 
            These challenges reduce time available for patient care and create operational friction. 
            Healthcare teams need integrated software solutions that support both clinical and administrative workflows.
          </Typography>
        </Container>
      </Box>

      {/* Medalph Platform Section - What Medalph is and does */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 6, sm: 8 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h2"
            fontWeight="bold"
            sx={{
              color: '#b18eff',
              mb: 3,
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              textAlign: 'center',
            }}
          >
            Medalph: Medical Software Platform for Healthcare Providers
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '900px',
              mx: 'auto',
              mt: 2,
              color: '#ccc',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.7,
              textAlign: 'center',
              mb: 4,
            }}
          >
            Medalph is a medical software company providing healthcare management solutions for clinics, hospitals, and healthcare teams. 
            Our platform includes clinical documentation, patient management, and operational tools designed to improve 
            both clinical workflows and practice efficiency. We build software that supports healthcare providers in delivering quality care.
          </Typography>
        </Container>
      </Box>

      {/* Core Capabilities Section - What the platform includes */}
      <Box
        component="section"
        sx={{
          mt: 6,
          px: { xs: 2, sm: 4, md: 8 },
          py: 8,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography
          component="h2"
          fontWeight="bold"
          sx={{
            color: '#b18eff',
            mb: 6,
            fontSize: { xs: '1.8rem', sm: '2.2rem' },
          }}
        >
          Core Capabilities of Medalph Platform
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <MedicalServicesIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Clinical Documentation & Records',
              desc: 'Streamline clinical documentation with tools designed for healthcare workflows. Manage patient records efficiently.',
            },
            {
              icon: <SpeedIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Patient Management & Workflows',
              desc: 'Integrated patient management tools support clinical workflows. Access patient information and coordinate care effectively.',
            },
            {
              icon: <SecurityIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Healthcare Data Security',
              desc: 'Built with healthcare data security and privacy requirements in mind. Secure access controls and data protection.',
            },
          ].map((card, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <SpotlightCard>
                <Box
                  sx={{
                    color: '#fff',
                    p: { xs: 3, sm: 4 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ mb: 2 }}>{card.icon}</Box>
                  <Typography
                    component="h3"
                    variant="h6"
                    sx={{ mb: 1, fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ccc', lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                    {card.desc}
                  </Typography>
                </Box>
              </SpotlightCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Benefits Section */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 6, sm: 8 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h2"
            fontWeight="bold"
            sx={{
              color: '#b18eff',
              mb: 4,
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              textAlign: 'center',
            }}
          >
            Benefits for Your Clinic
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
            {
              title: 'Improve Clinical Workflows',
              desc: 'Medical software tools designed to streamline clinical processes and reduce administrative burden.',
            },
            {
              title: 'Enhance Operational Efficiency',
              desc: 'Healthcare management features support efficient clinic operations and better resource utilization.',
            },
            {
              title: 'Integrated Healthcare Platform',
              desc: 'Unified platform connects clinical and administrative functions, supporting coordinated care delivery.',
            },
            {
              title: 'Built for Healthcare Teams',
              desc: 'Designed for healthcare providers, with interfaces and workflows that support clinical practice.',
            },
            ].map((benefit, index) => (
              <Grid key={index} item xs={12} sm={6}>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'rgba(177, 142, 255, 0.05)' }}>
                  <Typography
                    component="h3"
                    variant="h6"
                    sx={{ color: '#b18eff', mb: 1, fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.2rem' } }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ccc', lineHeight: 1.6 }}>
                    {benefit.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Trust & Security Section - Healthcare signals */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 6, sm: 8 },
          px: { xs: 2, sm: 4 },
          mt: 4,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h2"
            fontWeight="bold"
            sx={{
              color: '#b18eff',
              mb: 3,
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              textAlign: 'center',
            }}
          >
            Privacy and Security for Healthcare Data
          </Typography>
          <Box
            sx={{
              bgcolor: 'rgba(177, 142, 255, 0.08)',
              borderRadius: 3,
              p: { xs: 3, sm: 4 },
              mt: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#ccc',
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.8,
                textAlign: 'center',
              }}
            >
              Medalph EMR is built with healthcare data security and privacy as foundational principles. 
              Patient information is encrypted, access is controlled, and data storage follows security best practices. 
              We maintain awareness of healthcare regulatory requirements and design our systems accordingly.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box
        component="section"
        sx={{
          mt: 8,
          px: { xs: 2, sm: 4 },
          py: 6,
          background: 'linear-gradient(135deg, #0c1014, #0c1015, #0d1115, #000000)',
          borderRadius: 2,
          maxWidth: 700,
          mx: 'auto',
          color: '#fff',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          sx={{
            color: '#b18eff',
            fontWeight: 'bold',
            mb: 3,
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
          }}
        >
          See How Medalph Can Support Your Healthcare Practice
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#ccc',
            mb: 4,
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            lineHeight: 1.6,
          }}
        >
          Request a demo to learn how Medalph medical software can improve clinical workflows and operational efficiency for your clinic or hospital.
        </Typography>
        <Button
          onClick={handleRequestDemo}
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem' },
            px: { xs: 5, sm: 6 },
            py: { xs: 1.5, sm: 1.8 },
            fontWeight: 600,
          }}
        >
          Request Demo
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
