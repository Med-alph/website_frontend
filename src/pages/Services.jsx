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
import TeamImage from '../assets/services.jpg'; // Adjust the path if needed

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 40, color:'orange'}} />,
    title: 'Website Development',
    description:'Custom-built websites designed to be fast, reliable, and fully responsive across all devices, providing a smooth experience for every user.'
  },
  {
    icon: <DesignIcon sx={{ fontSize: 40, color:'orange' }} />,
    title: 'UI/UX Design',
    description:'Clean, modern interfaces focused on ease of use and clear navigation, making sure visitors enjoy interacting with your site.'  
  },
  {
    icon: <ShoppingCart sx={{ fontSize: 40, color:'orange' }} />,
    title: 'E-commerce Solutions',
    description:
      'Secure, scalable online stores that simplify selling products and managing orders, built to grow alongside your business.',
  },
  {
    icon: <BarChart sx={{ fontSize: 40, color:'orange' }} />,
    title: 'SEO Optimization',
    description:
      'Effective strategies to improve your website’s search engine ranking, helping more people find your business online.',
  },
];

const Services = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: '#0a0a0a',
        py: 8,
        px: 2,
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >


      {/* Header */}
      <Typography
        variant="h4"
        sx={{
         mb: 4,
        color: 'white',
        fontWeight: 900,
        borderBottom: '3px solid orange',
        marginBottom: '20px',
        width: 'fit-content',      
        margin: '0 auto',         
        padding: '2px',
        }}
      >
        OUR SERVICES
      </Typography>


      {/* Team Image */}
      <Box
        component="img"
        src={TeamImage}
        alt="Team"
        sx={{
          width: '100%',
          maxWidth: 800,
          mx: 'auto',
          borderRadius: 2,
          mt: 2,
          mb: 6,
          marginTop:'40px'
        }}
      />

      {/* Cards */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {features.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              sx={{
                backgroundColor: '#121212',
                color: '#fff',
                borderRadius: 3,
                p: 3,
                width: '100%',
                maxWidth: 360,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
