import React, { useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import ScrollFloat from '../components/ScrollFloat';
import Button from '../components/Button';
import Spotlight from '../components/Spotlight';
import FlipWords from '../components/FlipWords';
import ChromaGrid from '../components/ChromaGrid';
import SpotlightCard from '../components/SpotlightCard';
import { useMediaQuery } from 'react-responsive';
import ScrollVelocity from '../components/ScrollVelocity';
import ShinyText from '../components/ShinyText';

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const velocity = 100;

  return (
    <Box
      sx={{
        bgcolor: '#0f0c29',
        background: `linear-gradient(135deg, #0c1014, #0c1015, #0d1115, #000000)`,
        minHeight: '100vh',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 3, md: 6 }, // added horizontal padding for mobile & tablets
      }}
    >
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Spotlight />
      </Box>

      <Box
        ref={containerRef}
        sx={{
          minHeight: '110vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          px: { xs: 2, sm: 4, md: 0 }, // padding adjustments to avoid edge cutoff on small screens
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', sm: '720px', md: '1000px' }, mx: 'auto' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', sm: '3rem', md: '4.5rem' },
              fontWeight: 'bold',
              color: '#b0b0b0',
              lineHeight: 1.2,
              wordBreak: 'break-word',
              whiteSpace: 'normal',
              mb: 2,
              px: { xs: 1, sm: 0 }, // slight horizontal padding on mobile for better spacing
            }}
            component="div"
          >
            MedAlph –{' '}
            <FlipWords
              words={['Power Precision', 'Advance Efficiency', 'Elevate Care']}
              duration={2000}
              textStyle={{ color: '#b18eff' }}
            />
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem' },
              color: '#aaa',
              mt: 3,
              maxWidth: { xs: '100%', sm: '800px' },
              mx: 'auto',
              lineHeight: 1.6,
              px: { xs: 1, sm: 0 },
            }}
          >
            A creative agency for forward-thinking brands. We build fast, modern websites with lasting impressions.
          </Typography>

          <Box mt={isMobile ? 4 : 6}>
            <Button
              onClick={() => navigate('/about')}
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                px: { xs: 3, sm: 5 }, // bigger tap area on mobile
                py: { xs: 1.2, sm: 1.5 },
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Box>
      </Box>

      <Container
        sx={{
          textAlign: 'center',
          py: { xs: 6, sm: 9 },
          maxWidth: { xs: '100%', sm: 'md', md: 'lg' },
        }}
      >
        <Typography
          fontWeight="bold"
          component="div"
          sx={{ color: '#b18eff', mb: 2, fontSize: { xs: '1.8rem', sm: '2rem' } }}
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            About Medalph
          </ScrollFloat>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: { xs: '100%', sm: '900px' },
            mx: 'auto',
            mt: 3,
            color: '#b18eff',
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.3rem' },
            px: { xs: 1, sm: 0 },
          }}
        >
          Medalph is a passionate team of designers and developers committed to delivering exceptional websites for
          businesses and startups. We value innovation, performance, and results.
        </Typography>
      </Container>

      {/* Spotlight Cards */}
      <Box
        sx={{
          mt: 10,
          px: { xs: 2, sm: 4, md: 8 },
          py: 8,
          textAlign: 'center',
        }}
      >
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
              'Why Choose ',
              <span key="highlight" style={{ color: '#b18eff', marginRight: '2rem' }}>
                MedAlph?
              </span>,
            ]}
            velocity={velocity}
            className="custom-scroll-text"
          />
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <DesignServicesIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Beautiful UI Design',
              desc: 'Visually stunning and user-friendly interfaces tailored to your brand.',
            },
            {
              icon: <CodeIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Modern Development',
              desc: 'Clean, efficient code using the latest tech for flawless performance.',
            },
            {
              icon: <SupportAgentIcon sx={{ fontSize: { xs: 36, sm: 48 }, color: '#b18eff' }} />,
              title: 'Dedicated Support',
              desc: 'Our team is here for updates, improvements, and ongoing assistance.',
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
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
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

      {/* Team Section */}
      <Box sx={{ mt: 7, px: { xs: 2, sm: 6 }, py: 4 }}>
        <Typography
          fontWeight="bold"
          component="div"
          sx={{
            color: '#b18eff',
            mb: 6,
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
            textAlign: 'center',
          }}
        >
          <ShinyText text="WHAT OUR CLIENTS SAY!" disabled={false} speed={30} className="custom-class" />
        </Typography>
        <ChromaGrid columns={isMobile ? 1 : 3} rows={isMobile ? 3 : 2} radius={250} />
      </Box>

      {/* Contact Section */}
      {/* Compact Get in Touch Section */}
<Box
  sx={{
    mt: 8,
    px: { xs: 2, sm: 4 },
    py: 5,
    background: 'linear-gradient(135deg, #0c1014, #0c1015, #0d1115, #000000)',
    borderRadius: 2,
    maxWidth: 700,
    mx: 'auto',
    color: '#fff',
  }}
>
  <Typography
    variant="h5"
    align="center"
    sx={{
      color: '#b18eff',
      fontWeight: 'bold',
      mb: 4,
      fontSize: { xs: '1.5rem', sm: '1.75rem' },
      textTransform: 'uppercase',
      letterSpacing: 1,
    }}
  >
    <ShinyText text="Get in Touch" disabled={false} speed={4.5} />
  </Typography>

  <Grid
    container
    spacing={3}
    justifyContent="center"
    alignItems="center"
  >
    {[
      {
        icon: <PhoneIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: '#b18eff' }} />,
        label: '+91 98765 43210',
        href: 'tel:+919876543210',
      },
      {
        icon: <EmailIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: '#b18eff' }} />,
        label: 'support@medalph.com',
        href: 'mailto:support@medalph.com',
      },
      {
        icon: <LinkedInIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: '#b18eff' }} />,
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/medalph',
        external: true,
      },
    ].map(({ icon, label, href, external }, index) => (
      <Grid
        key={index}
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ textAlign: 'center' }}
      >
        <Box
          component="a"
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          sx={{
            display: 'inline-flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1, sm: 1.5 },
            textDecoration: 'none',
            color: 'inherit',
            px: 2,
            py: 1.5,
            borderRadius: 1.5,
            transition: 'background-color 0.2s ease, color 0.2s ease',
            '&:hover, &:focus-visible': {
              bgcolor: 'rgba(177, 142, 255, 0.15)',
              color: '#b18eff',
              outline: 'none',
            },
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              bgcolor: 'rgba(177, 142, 255, 0.1)',
              borderRadius: '50%',
              width: { xs: 48, sm: 40 },
              height: { xs: 48, sm: 40 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#b18eff',
              flexShrink: 0,
            }}
          >
            {icon}
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '0.9rem' },
              wordBreak: 'break-word',
              mt: { xs: 0.5, sm: 0 },
            }}
          >
            {label}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>

</Box>
  );
};

export default Home;
