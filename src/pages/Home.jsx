import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Avatar } from '@mui/material';
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
    <Box sx={{ px: 4, py: 6, backgroundImage: 'linear-gradient(135deg, #667eea, #764ba2)' }}>

      <Grid container columns={{ xs: 1, sm: 2, md: 12 }} spacing={4}>
         <Grid xs={12} sm={6} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
            Welcome to Medalph
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 ,color:"white"}}>
            We craft high-quality, modern websites that elevate your brand. From clean UI design to seamless development,
            Medalph is your go-to web studio. Let's build your dream digital experience together.
            We craft high-quality, modern websites that elevate your brand. From clean UI design to seamless development,
            Medalph is your go-to web studio. Let's build your dream digital experience together.We craft high-quality, modern websites that elevate your brand. From clean UI design to seamless development,
            Medalph is your go-to web studio. Let's build your dream digital experience together.
          </Typography>
          <Button variant="contained" color="primary" size="large" onClick={() => navigate('/services')}>
            Explore Our Services
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={heroImg}
            alt="Web development concept"
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          />
        </Grid>
      </Grid>

      {/* About Section */}
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
              About Medalph
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 ,color:"white"}}>
              Medalph is a passionate team of designers and developers committed to delivering exceptional websites for businesses and startups.
              We value innovation, performance, and results.
              Medalph is a passionate team of designers and developers committed to delivering exceptional websites for businesses and startups.
              We value innovation, performance, and results.Medalph is a passionate team of designers and developers committed to delivering exceptional websites for businesses and startups.
              We value innovation, performance, and results.
            </Typography>
            <Button variant="outlined" color="primary" onClick={() => navigate('/about')}>
              Read More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={aboutImg}
              alt="About us"
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
          Why Choose Medalph?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: 200, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
              <CardContent>
                <DesignServicesIcon color="primary" fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Beautiful UI Design
                </Typography>
                <Typography>
                  We create visually stunning and user-friendly interfaces tailored to your brand identity.
                  We create visually stunning and user-friendly interfaces tailored to your brand identity.We create visually stunning and user-friendly interfaces tailored to your brand identity.We create visually stunning and user-friendly interfaces tailored to your brand identity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: 200, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
              <CardContent>
                <CodeIcon color="primary" fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Modern Development
                </Typography>
                <Typography>
                  Clean, efficient code using the latest web technologies ensures your site performs flawlessly.
                  Clean, efficient code using the latest web technologies ensures your site performs flawlessly.Clean, efficient code using the latest web technologies ensures your site performs flawlessly.Clean, efficient code using the latest web technologies ensures your site performs flawlessly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: 200, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
              <CardContent>
                <SupportAgentIcon color="primary" fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Dedicated Support
                </Typography>
                <Typography>
                  Our team is always here to help you with updates, improvements, and new ideas.
                  Our team is always here to help you with updates, improvements, and new ideas.Our team is always here to help you with updates, improvements, and new ideas.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Blog Section */}
   
<Box sx={{ mt: 8 }}>
  <Typography variant="h4" sx={{ textAlign: 'center', color: 'white', mb: 3 }}>
    Latest from Our Blog
  </Typography>
  <Grid container spacing={4}>
    <Grid item xs={12} md={4}>
      <Card sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
        <CardContent>
          <Typography variant="h6">Top UI/UX Trends in 2025</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Explore cutting-edge design principles shaping the future of web interfaces this year.
            Explore cutting-edge design principles shaping the future of web interfaces this year.Explore cutting-edge design principles shaping the future of web interfaces this year.
          </Typography>
          <Button size="small" sx={{ mt: 2 }} onClick={() => navigate('/blog')}>
            Read More
          </Button>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
        <CardContent>
          <Typography variant="h6">React Performance Optimization</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Learn how to boost your React apps with proven performance best practices and tools.
            Learn how to boost your React apps with proven performance best practices and tools.Learn how to boost your React apps with proven performance best practices and tools.
          </Typography>
          <Button size="small" sx={{ mt: 2 }} onClick={() => navigate('/blog')}>
            Read More
          </Button>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
        <CardContent>
          <Typography variant="h6">Building Trust with Website Design</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Discover the design elements that enhance credibility and user engagement on websites.
            Discover the design elements that enhance credibility and user engagement on websites.Discover the design elements that enhance credibility and user engagement on websites.
          </Typography>
          <Button size="small" sx={{ mt: 2 }} onClick={() => navigate('/blog')}>
            Read More
          </Button>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
</Box>


   {/* Testimonials Section */}
<Box sx={{ mt: 8, px: 4 }}>
  <Typography variant="h4" sx={{ textAlign: 'center', color: 'white', mb: 4 }}>
    What Our Clients Say
  </Typography>

  {/* Testimonial 1 */}
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, color:"white" }}>
    <img
      src="https://randomuser.me/api/portraits/women/44.jpg"
      alt="Sarah"
      style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '16px' }}
    />
    <Box>
      <Typography variant="subtitle1" fontWeight="bold">Sarah Lee</Typography>
      <Typography variant="body2">
        Medalph built our website from scratch, and the result exceeded expectations. Their team was responsive, creative, and detail-oriented.
        Medalph built our website from scratch, and the result exceeded expectations. Their team was responsive, creative, and detail-oriented.Medalph built our website from scratch, and the result exceeded expectations. Their team was responsive, creative, and detail-oriented.
      </Typography>
    </Box>
  </Box>

  {/* Testimonial 2 */}
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, color:"white" }}>
    <img
      src="https://randomuser.me/api/portraits/men/45.jpg"
      alt="David"
      style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '16px',color:"white" }}
    />
    <Box>
      <Typography variant="subtitle1" fontWeight="bold">David Kumar</Typography>
      <Typography variant="body2">
        Working with Medalph was a breeze. They understood our brand perfectly and delivered a clean, modern site that our users love.
         Working with Medalph was a breeze. They understood our brand perfectly and delivered a clean, modern site that our users love. Working with Medalph was a breeze. They understood our brand perfectly and delivered a clean, modern site that our users love.
      </Typography>
    </Box>
  </Box>

  {/* Testimonial 3 */}
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4,color:"white" }}>
    <img
      src="https://randomuser.me/api/portraits/women/65.jpg"
      alt="Laura"
      style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '16px' }}
    />
    <Box>
      <Typography variant="subtitle1" fontWeight="bold">Laura Cheng</Typography>
      <Typography variant="body2">
        Their ongoing support is phenomenal. Any time we need updates or changes, the Medalph team is quick, friendly, and reliable.
        Their ongoing support is phenomenal. Any time we need updates or changes, the Medalph team is quick, friendly, and reliable.Their ongoing support is phenomenal. Any time we need updates or changes, the Medalph team is quick, friendly, and reliable.
      </Typography>
    </Box>
  </Box>
</Box>



      {/* Contact Section */}
      <Box sx={{ mt: 8, backgroundColor: '#e3f2fd', borderRadius: 4, p: 4 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', color: '#1e3a8a', mb: 3 }}>
          Get in Touch
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <PhoneIcon color="primary" /> <Typography component="span">+91 98765 43210</Typography>
          </Grid>
          <Grid item>
            <EmailIcon color="primary" /> <Typography component="span">support@medalph.com</Typography>
          </Grid>
          <Grid item>
            <InstagramIcon color="primary" /> <Typography component="span">@medalph.studio</Typography>
          </Grid>
          <Grid item>
            <LinkedInIcon color="primary" /> <Typography component="span">linkedin.com/company/medalph</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;