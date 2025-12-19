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
          {/* SEO: Single h1 tag optimized for EMR keywords */}
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
            EMR for Clinics That Saves Time
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
            Clinical Documentation Software Built for Doctors
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
            Medalph EMR reduces documentation time and workflow friction so you can focus on patient care. 
            Built specifically for clinics and doctors who need fast, intuitive clinical documentation.
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
            Tired of Spending Hours on Documentation?
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
            Most clinics struggle with slow, clunky EMR systems that add hours to each day. 
            Doctors spend more time typing than treating patients. Medalph EMR is designed to change that.
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
            What is Medalph EMR?
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
            Medalph is an electronic medical records system built specifically for clinics and doctors. 
            Our clinical documentation software streamlines patient records, reduces data entry time, 
            and eliminates workflow friction so you can see more patients and spend less time on paperwork.
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
              title: 'Fast Patient Documentation',
              desc: 'Quick-entry forms designed by clinicians, for clinicians. Document visits in minutes, not hours.',
            },
            {
              icon: <SpeedIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Streamlined Workflows',
              desc: 'Eliminate redundant data entry. Our EMR integrates patient history, prescriptions, and notes in one place.',
            },
            {
              icon: <SecurityIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Secure & Compliant',
              desc: 'Built with healthcare data security in mind. Your patient records are protected and accessible only to authorized staff.',
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
                desc: 'Spend less time on paperwork and more time with patients. Our intuitive interface cuts documentation time significantly.',
              },
              {
                title: 'Improve Patient Flow',
                desc: 'Faster documentation means shorter wait times and more patients seen per day.',
              },
              {
                title: 'Better Care Coordination',
                desc: 'All patient information in one place. Share records securely with your team for better care decisions.',
              },
              {
                title: 'Easy to Learn',
                desc: 'No extensive training required. Our EMR is designed to be intuitive for doctors and clinic staff.',
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
            Built for Healthcare Security & Privacy
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
              Medalph EMR is designed with healthcare data security as a priority. We understand the sensitive nature 
              of patient information and have built our system with privacy-first principles. Your clinic's data is 
              encrypted, access-controlled, and stored securely. While we don't claim specific certifications, we are 
              committed to maintaining the highest standards of data protection and regulatory awareness for healthcare environments.
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
          Ready to Streamline Your Clinic's Documentation?
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
          See how Medalph EMR can reduce documentation time and improve your clinic's workflow. 
          Request a demo to get started.
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
