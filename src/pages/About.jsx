import React from 'react';
import { Box, Typography } from '@mui/material';
import TeamImage from '../assets/Team.jpg'; // Update path if needed
import { useNavigate } from 'react-router-dom';
import Spotlight from '../components/Spotlight';
import SpotlightCard from '../components/SpotlightCard';
import Button from '../components/Button';
import ScrollVelocity from '../components/ScrollVelocity';

const TeamSection = () => {
  const navigate = useNavigate();

  return (
    <Box
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
              'MEET ',
              <span style={{ color: '#b18eff', marginRight: '1rem' }}>THE TEAM OF MEDALPH</span>,
            ]}
            velocity={90}
            className="custom-scroll-text"
          />
        </Box>

        {/* Subtitle */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{
              maxWidth: 800,
              mx: 'auto',
              color: '#b18eff',
              fontSize: 18,
            }}
          >
            Empowering innovation through collaboration and design. We bring passion to every
            project and help brands make meaningful impact.
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
          {/* Image with Spotlight */}
          <SpotlightCard className="spotlight-card-wrapper">
            <Box
              component="img"
              src={TeamImage}
              alt="team"
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
            <Typography sx={{ fontSize: 32, color: '#b18eff', mb: 1 }}>❝</Typography>
            <Typography
              sx={{
                fontStyle: 'italic',
                fontSize: 18,
                color: '#ccc',
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Medalph is a passionate team of web creators who love turning ideas into reality. We
              specialize in building fast, responsive, and beautiful websites tailored to each
              client’s needs. From startups to enterprises, we believe in clean code, modern design,
              and long-lasting digital solutions. Let’s build your next great online presence!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iure ex odit
              quidem, vitae sed nam! Laboriosam iusto consequatur dolore architecto, excepturi eos
              quos beatae. Vitae quo quis cum libero.
            </Typography>

            <Box style={{ marginTop: '2.5rem' }}>
              <Button onClick={() => navigate('/about')}>LEARN MORE</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamSection;
