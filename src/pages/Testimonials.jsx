import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DesignIcon from '@mui/icons-material/DesignServices';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import BarChart from '@mui/icons-material/BarChart';
import TeamImage from '../assets/services.jpg'; // Adjust path if needed

const services = [
  {
    title: '“Medalph built our website in record time with stunning design and flawless performance. Highly recommended!”',
    description: 'Name\nCEO',
  },
  {
    title: '“Their UI/UX work was top-notch. We saw an immediate improvement in user engagement after launch.”',
    description: 'Name\nFounder',
  },
  {
    title: '“From planning to deployment, the Medalph team handled everything professionally. True web experts!”',
    description: 'Name\nManager',
  },
];


const testimonial = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0a0a0a',
        color: '#fff',
        py: 8,
        px: { xs: 3, sm: 8, md: 12 },
        fontFamily: 'Segoe UI, sans-serif',
        textAlign: 'center',
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          borderBottom: '3px solid orange',
          width: 'fit-content',
          margin: '0 auto 32px auto',
          padding: '4px 12px',
        }}
      >
        What our clients say      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          opacity: 0.75,
          maxWidth: 700,
          margin: '0 auto 48px auto',
          fontWeight: 400,
          letterSpacing: '0.02em',
        }}
      >
      </Typography>

      
      

      {/* Services Grid */}
      <Grid container spacing={5} justifyContent="center">
        {services.map((service, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              sx={{
                backgroundColor: '#121212',
                color: '#fff',
                maxWidth: 700,
                borderRadius: 3,
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 3,
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{service.icon}</Box>
              <CardContent sx={{ px: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#ccc', mb: 3 }}>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    backgroundColor: 'orange',
                    color: '#0a0a0a',
                    fontWeight: 700,
                    borderRadius: 2,
                    textTransform: 'capitalize',
                    boxShadow: '0 4px 15px rgba(255, 165, 0, 0.4)',
                    '&:hover': {
                      backgroundColor: '#cc8400',
                      boxShadow: '0 6px 20px rgba(255, 165, 0, 0.6)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default testimonial;
