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
 * Home Page - Medalph EMR
 * 
 * SEO & UX Improvements:
 * - Single h1 tag optimized for "EMR for clinics" / "Clinical documentation software"
 * - Clear value proposition within 5 seconds
 * - Content flow: Problem → Solution → How it works → Benefits → Trust → CTA
 * - Semantic HTML structure (header, main, section)
 * - Standardized CTAs ("Request Demo")
 * - Healthcare trust signals
 */
const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // SEO: Dynamic page title and meta description
  usePageTitle(
    'Medalph EMR - Clinical Documentation Software for Clinics & Doctors',
    'Medalph EMR simplifies clinical documentation for clinics and doctors. Reduce documentation time, streamline workflows, and focus on patient care with our intuitive electronic medical records system.'
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
          {/* SEO: Single h1 tag optimized for "Clinical documentation software for clinics" */}
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
            Clinical Documentation Software for Clinics
          </Typography>

          {/* Clear value proposition - explains what, who, and pain point */}
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
            Reduce Documentation Time, Focus on Patient Care
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
            Medalph EMR is electronic medical records software designed for clinics and doctors. 
            Our system streamlines clinical documentation, reduces data entry time, and eliminates workflow friction 
            so you can spend more time with patients and less time on paperwork.
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

      {/* Problem Section - What pain does it solve */}
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
            Documentation Time Takes Away from Patient Care
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
            Many clinics face inefficient EMR systems that require excessive documentation time. 
            This reduces time available for patient care and creates workflow friction. 
            Medalph EMR addresses these challenges with streamlined clinical documentation.
          </Typography>
        </Container>
      </Box>

      {/* Solution Section - What Medalph is */}
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
            Electronic Medical Records Designed for Clinics
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
            Medalph EMR is clinical documentation software built for clinics and doctors. 
            The system manages patient records, streamlines documentation workflows, and reduces administrative time 
            so healthcare providers can focus on delivering quality patient care.
          </Typography>
        </Container>
      </Box>

      {/* How It Works Section */}
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
          How Medalph EMR Works
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <MedicalServicesIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Efficient Clinical Documentation',
              desc: 'Document patient visits quickly with forms designed for clinical workflows. Reduce documentation time significantly.',
            },
            {
              icon: <SpeedIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Integrated Patient Records',
              desc: 'Access patient history, prescriptions, and clinical notes in one system. Eliminate redundant data entry.',
            },
            {
              icon: <SecurityIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Secure Data Management',
              desc: 'Patient records are protected with access controls. Designed with healthcare data security requirements in mind.',
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
              title: 'Reduce Documentation Time',
              desc: 'Streamlined workflows reduce time spent on clinical documentation, allowing more time for patient care.',
            },
            {
              title: 'Improve Clinic Efficiency',
              desc: 'Faster documentation processes help clinics manage patient flow more effectively.',
            },
            {
              title: 'Centralized Patient Records',
              desc: 'All patient information accessible in one system, supporting better care coordination among clinic staff.',
            },
            {
              title: 'Intuitive Interface',
              desc: 'Designed for ease of use, requiring minimal training for doctors and clinic staff.',
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
          See How Medalph EMR Works for Your Clinic
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
          Request a demo to see how Medalph EMR can reduce documentation time and improve your clinic's workflow.
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
