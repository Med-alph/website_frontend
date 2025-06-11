import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import TeamImage from '../assets/Team.jpg'; // Update path if needed
import { useNavigate } from 'react-router-dom';

const TeamSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: '#0a0a0a',
        py: 8,
        px: { xs: 3, md: 6 },
        fontFamily: 'Segoe UI, sans-serif',
        color: '#fff',
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 900, pb: 2 }}>
          <Box
            component="span"
            sx={{
              color: 'white',
              borderBottom: '3px solid orange',
              px: 1,
            }}
          >
            MEET THE TEAM OF MEDALPH
          </Box>
        </Typography>
        <Typography
          sx={{
            maxWidth: 800,
            mx: 'auto',
            color: '#ccc',
            fontSize: 18,
          }}
        >
          Empowering innovation through collaboration and design. We bring passion to every project and help brands make meaningful impact.
        </Typography>
      </Box>

      {/* Image and Text Side-by-Side */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 4,
          flexWrap: 'wrap',
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={TeamImage}
          alt="team"
          sx={{
            width: { xs: '100%', md: '50%' },
            height: 400,
            borderRadius: 3,
            objectFit: 'cover',
            flexShrink: 0,
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        />

        {/* Text + Button */}
        <Box sx={{ flex: 1, px: 2 }}>
          <Typography sx={{ fontSize: 32, color: 'orange', mb: 1 }}>❝</Typography>
          <Typography
            sx={{
              fontStyle: 'italic',
              fontSize: 18,
              color: '#ccc',
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            Medalph is a passionate team of web creators who love turning ideas into reality. We specialize in building fast, responsive, and beautiful websites tailored to each client’s needs.
            From startups to enterprises, we believe in clean code, modern design, and long-lasting digital solutions. Let’s build your next great online presence!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iure ex odit quidem, vitae sed nam! Laboriosam iusto consequatur dolore architecto, excepturi eos quos beatae. Vitae quo quis cum libero.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: 'orange',
              color: '#0a0a0a',
              fontWeight: 'bold',
              padding: '12px 24px',
              mt: 2,
              fontSize: 16,
              textTransform: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#0a0a0a',
                boxShadow: '0 4px 15px rgba(255, 165, 0, 0.4)',
              },
            }}
            onClick={() => navigate('/about')}
          >
            Know More →
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamSection;
