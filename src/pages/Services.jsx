import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { motion } from 'framer-motion';
import ScrollVelocity from '../components/ScrollVelocity';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { usePageTitle } from '../hooks/usePageTitle';

/**
 * Services Page - EMR Features
 * 
 * SEO & UX Improvements:
 * - Focused on EMR features, not web development
 * - Clear headings hierarchy (h1 → h2 → h3)
 * - Semantic HTML structure
 * - Standardized CTA
 */
const features = [
  {
    icon: <DescriptionIcon sx={{ fontSize: 40, color: '#b18eff' }} />,
    title: 'Clinical Documentation',
    description:
      'Document patient visits, diagnoses, and treatment plans efficiently with templates designed for clinical workflows.',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#b18eff' }} />,
    title: 'Efficient Workflows',
    description:
      'Reduce documentation time with streamlined forms and templates. Support clinic operations without extending work hours.',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: '#b18eff' }} />,
    title: 'Patient Record Management',
    description:
      'Maintain complete patient profiles including medical history, prescriptions, lab results, and appointment information in one system.',
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: 40, color: '#b18eff' }} />,
    title: 'Clinical Reporting',
    description:
      'Generate clinical reports and track patient information using reporting tools designed for healthcare providers.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  // SEO: Dynamic page title and meta description
  usePageTitle(
    'EMR Features - Clinical Documentation Software | Medalph EMR',
    'Explore Medalph EMR features: clinical documentation, time-saving workflows, patient management, and clinical reports. Built for clinics and doctors.'
  );

  const handleRequestDemo = () => {
    navigate('/contact');
  };

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: '#0a0a0a',
        py: 10,
        px: 2,
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        minHeight: '100vh',
      }}
    >
      {/* Scroll Velocity Banner */}
      <Box
        sx={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          mb: 6,
        }}
      >
        <ScrollVelocity
          texts={[
            'EMR Features for ',
            <span key="highlight" style={{ color: '#b18eff', marginRight: '1rem' }}>
              Your Clinic
            </span>,
          ]}
          velocity={90}
          className="custom-scroll-text"
        />
      </Box>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          sx={{
            mb: 3,
            color: 'white',
            fontWeight: 900,
            width: 'fit-content',
            margin: '0 auto',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          }}
        >
          EMR Features for Clinical Documentation
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 800,
            mx: 'auto',
            mb: 8,
            color: '#ccc',
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            lineHeight: 1.7,
          }}
        >
          Medalph EMR includes features designed to support efficient clinical documentation 
          and workflow management for clinics and healthcare providers.
        </Typography>
      </motion.div>

      {/* Feature Cards */}
      <Grid container spacing={6} justifyContent="center" alignItems="stretch">
        {features.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card
                component="article"
                sx={{
                  backgroundColor: '#121212',
                  color: '#fff',
                  borderRadius: 4,
                  p: 4,
                  width: '100%',
                  maxWidth: 360,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <CardContent sx={{ px: 0 }}>
                  <Typography component="h3" variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 15, color: '#ccc', lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* CTA Section */}
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography
          component="h2"
          variant="h5"
          sx={{
            color: '#b18eff',
            fontWeight: 600,
            mb: 3,
            fontSize: { xs: '1.3rem', sm: '1.5rem' },
          }}
        >
          Want to See These Features in Action?
        </Typography>
        <Button onClick={handleRequestDemo} sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, px: 5, py: 1.5 }}>
          Request Demo
        </Button>
      </Box>
    </Box>
  );
};

export default Services;
