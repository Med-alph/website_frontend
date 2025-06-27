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
import CodeIcon from '@mui/icons-material/Code';
import DesignIcon from '@mui/icons-material/DesignServices';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import BarChart from '@mui/icons-material/BarChart';
import { motion } from 'framer-motion';
import ShinyText from '../components/ShinyText';
import ScrollVelocity from '../components/ScrollVelocity';

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: '#b18eff' }} />,
    title: 'Website Development',
    description:
      'Custom-built websites designed to be fast, reliable, and fully responsive across all devices, providing a smooth experience for every user.',
  },
  {
    icon: <DesignIcon sx={{ fontSize: 40, color: '#b18eff' }} />,
    title: 'UI/UX Design',
    description:
      'Clean, modern interfaces focused on ease of use and clear navigation, making sure visitors enjoy interacting with your site.',
  },
  {
    icon: <ShoppingCart sx={{ fontSize: 40, color: '#b18eff' }} />,
    title: 'E-commerce Solutions',
    description:
      'Secure, scalable online stores that simplify selling products and managing orders, built to grow alongside your business.',
  },
  {
    icon: <BarChart sx={{ fontSize: 40, color: '#b18eff' }} />,
    title: 'SEO Optimization',
    description:
      'Effective strategies to improve your website’s search engine ranking, helping more people find your business online.',
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

  return (
    <Box
      sx={{
        backgroundColor: '#0a0a0a',
        py: 10,
        px: 2,
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
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
            'Explore Our ',
            <span style={{ color: '#b18eff', marginRight: '1rem' }}>Services</span>,
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
          variant="h2"
          sx={{
            mb: 8,
            color: 'white',
            fontWeight: 900,
            width: 'fit-content',
            margin: '0 auto',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          }}
        >
        </Typography>
      </motion.div>

      {/* Cards */}
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
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 15, color: '#ccc' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;