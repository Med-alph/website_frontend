import React from 'react';
import { Box, Grid, Card, CardContent,Container, Typography, Button } from '@mui/material';
import heroImg from '../assets/heroImg.jpg';
import aboutImg from '../assets/about.jpg';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      
        <Box
          sx={{
            backgroundColor:'	#002147',
            padding: 6,
            borderRadius: 2,
            maxWidth: '700px',
            textAlign: 'center',
            opacity:'0.9',
            
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom color="white" padding="10px">
            <span style={{borderBottom: '5px solid orange'}}>MedAlph</span>
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color:'white', }}>
            Medalph is a passionate team of designers and developers committed to delivering exceptional websites for businesses and startups. We value innovation, performance, and results.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
                backgroundColor: '#fff',
                color: '#083b7c',
                fontWeight: 'bold',
                padding:'10px',
                marginTop:'10px',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#083b7c',
                  color: '#fff',
                  boxShadow: '0 4px 15px rgba(8, 59, 124, 0.5)',
                  
                  
                  },
                }}
                        onClick={() => navigate('/about')}
                      >
                        Learn More →
                      </Button>

                </Box>
              </Box>








      {/* About Section */}
      <Container sx={{ textAlign: 'center', py: 9 }}>
      <Typography variant="h3" fontWeight="bold" sx={{ color: '#1c6cd3', mb: 2 }}>
        <span style={{ borderBottom: '5px solid orange' }}>ABOUT MEDALPH</span>
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mt: 3 }}>
        Medalph is a passionate team of designers and developers committed to delivering exceptional websites for businesses and startups. 
        We value innovation, performance, and results. Medalph is a passionate team of designers and developers committed to 
        delivering exceptional websites for businesses and startups. 
        We value innovation, performance, and results.
      </Typography>

    </Container>






      {/* Why Choose Us Section */}
<Box sx={{ mt: 7, px: 4, backgroundColor: '#0d1117', minHeight: '50vh', padding: '30px', margin: '50px' }}>
  <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1c6cd3', mb: 7 }}>
  <span style={{borderBottom:'5px solid orange'}}>Why Choose Medalph?</span>
  </Typography>
  <Grid container spacing={6} justifyContent="center">
    {[
      {
        icon: <DesignServicesIcon color="primary" fontSize="large" />,
        title: 'Beautiful UI Design',
        desc: 'We create visually stunning and user-friendly interfaces tailored to your brand identity.',
      },
      {
        icon: <CodeIcon color="primary" fontSize="large" />,
        title: 'Modern Development',
        desc: 'Clean, efficient code using the latest web technologies ensures your site performs flawlessly.',
      },
      {
        icon: <SupportAgentIcon color="primary" fontSize="large" />,
        title: 'Dedicated Support',
        desc: 'Our team is always here to help you with updates, improvements, and new ideas.',
      },
    ].map((card, index) => (
      <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
        <Card
          sx={{
            minHeight: 220,
            boxShadow: 3,
            '&:hover': { boxShadow: 6 },
            p: 2,
            maxWidth: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom:'30px',
            
          }}
        >
          <Box sx={{ mb: 2 }}>{card.icon}</Box>
          <Typography variant="h6" gutterBottom>
            {card.title}
          </Typography>
          <Typography>{card.desc}</Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>









     {/* Blog Section */}
<Box sx={{ mt: 9, px: 4, bgcolor: '#0d1117', padding: '40px', margin: '50px' }}>

  <Typography variant="h4" sx={{ textAlign: 'center', color: '#1c6cd3', mb: 6 }}>
    <span style={{ borderBottom: '5px solid orange' }}>Latest from Our Blog</span>
  </Typography>
  <Grid container spacing={6} justifyContent="center">
    {[
      {
        title: 'Top UI/UX Trends in 2025',
        desc: 'Explore cutting-edge design principles shaping the future of web interfaces this year.',
      },
      {
        title: 'React Performance Optimization',
        desc: 'Learn how to boost your React apps with proven performance best practices and tools.',
      },
      {
        title: 'Building Trust with Website Design',
        desc: 'Discover the design elements that enhance credibility and user engagement on websites.',
      },
    ].map((post, idx) => (
      <Grid item xs={12} sm={8} md={4} key={idx} display="flex" justifyContent="center">
        <Card
          sx={{
            boxShadow: 3,
            '&:hover': { boxShadow: 6 },
            height: '100%', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: 1, // padding inside card
            minWidth: 280,
            maxWidth: 450,
            textAlign: 'left',
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {post.desc}
            </Typography>
          </CardContent>
          <Box sx={{ textAlign: 'right', pt: 2 }}>
            <Button size="small" onClick={() => navigate('/blog')}>
              Read More
            </Button>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>









      {/* Testimonials Section */}
<Box sx={{ mt: 12, px: 4, padding: '30px', bgcolor: '#0d1117', margin: '50px' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', color: '#1c6cd3', mb: 4 }}>
          
                  <span style={{ borderBottom: '5px solid orange' }}> What Our Clients Say</span>

        </Typography>
        {[
          {
            name: 'Sarah Lee',
            img: 'https://randomuser.me/api/portraits/women/44.jpg',
            feedback: 'Medalph built our website from scratch, and the result exceeded expectations. Their team was responsive, creative, and detail-oriented.'
          },
          {
            name: 'David Kumar',
            img: 'https://randomuser.me/api/portraits/men/45.jpg',
            feedback: 'Working with Medalph was a breeze. They understood our brand perfectly and delivered a clean, modern site that our users love.'
          },
          {
            name: 'Laura Cheng',
            img: 'https://randomuser.me/api/portraits/women/65.jpg',
            feedback: 'Their ongoing support is phenomenal. Any time we need updates or changes, the Medalph team is quick, friendly, and reliable.'
          }
        ].map((testimonial, idx) => (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 4, color: 'black', backgroundColor: 'white', padding:'20px', margin:'20px' }}>
            <img
              src={testimonial.img}
              alt={testimonial.name}
              style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '16px' }}
            />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">{testimonial.name}</Typography>
              <Typography variant="body2">{testimonial.feedback}</Typography>
            </Box>
          </Box>
        ))}
      </Box>









      {/* Contact Section */}
      <Box sx={{ mt: 8, borderRadius: 4, p: 4 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', color: '#1e3a8a', mb: 3 }}>
                  <span style={{ borderBottom: '5px solid orange', color:'white' }}>Get in Touch</span>
        </Typography>
        <Grid container spacing={4} justifyContent="center" textAlign="center">
          <Grid item xs={12} sm={6} md={3}>
            <PhoneIcon color="primary" /> <Typography component="span">+91 98765 43210</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EmailIcon color="primary" /> <Typography component="span">support@medalph.com</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InstagramIcon color="primary" /> <Typography component="span">@medalph.studio</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LinkedInIcon color="primary" /> <Typography component="span">linkedin.com/company/medalph</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
   
    );
  };

export default Home;
