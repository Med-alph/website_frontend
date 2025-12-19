import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  Stack,
  Link,
  Paper,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import Spotlight from '../components/Spotlight';
import ShinyText from '../components/ShinyText';
import { usePageTitle } from '../hooks/usePageTitle';

/**
 * Contact Page - Request Demo for Medalph EMR
 * 
 * SEO & UX Improvements:
 * - EMR-focused messaging
 * - Clear CTA for demo requests
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - Accessible form labels
 */
const Contact = () => {
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  // SEO: Dynamic page title and meta description
  usePageTitle(
    'Request Demo - Medalph EMR | Contact Us',
    'Request a demo of Medalph EMR clinical documentation software. See how we can streamline your clinic\'s documentation workflow and reduce documentation time.'
  );

  const validateEmail = (email) => {
    // Basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSendMail = () => {
    if (!name.trim() || !userEmail.trim() || !message.trim()) {
      alert('Please fill in all fields before sending.');
      return;
    }

    if (!validateEmail(userEmail.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    const subject = `Medalph EMR Demo Request from ${name.trim()}`;
    const body = `Name: ${name.trim()}\nEmail: ${userEmail.trim()}\n\nMessage:\n${message.trim()}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@medalph.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');

    // Clear form after opening mail
    setName('');
    setUserEmail('');
    setMessage('');
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0c1014, #0c1015, #0d1115, #000000)',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 10,
        px: 2,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      {/* Spotlight Background */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Spotlight />
      </Box>

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper
          component="section"
          elevation={10}
          sx={{
            p: 5,
            borderRadius: 4,
            background: '#121212',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 25px rgba(177, 142, 255, 0.08)',
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ color: '#b18eff' }}
          >
            <ShinyText text="Request a Demo" disabled={false} speed={20} />
          </Typography>

          <Typography variant="body1" mb={4} textAlign="center" sx={{ color: '#ccc' }}>
            See how Medalph EMR can streamline your clinic's documentation workflow. 
            <br />
            Schedule a demo to get started.
          </Typography>

          <Stack component="form" spacing={2} onSubmit={(e) => { e.preventDefault(); handleSendMail(); }}>
            <TextField
              label="Your Name"
              placeholder="Dr. John Smith"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                style: {
                  borderRadius: 12,
                  background: '#1e1e1e',
                  color: '#fff',
                },
              }}
              InputLabelProps={{ style: { color: '#ccc' } }}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused': {
                  boxShadow: '0 0 8px 2px #b18eff',
                },
              }}
            />
            <TextField
              label="Clinic Email"
              placeholder="contact@yourclinic.com"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              InputProps={{
                style: {
                  borderRadius: 12,
                  background: '#1e1e1e',
                  color: '#fff',
                },
              }}
              InputLabelProps={{ style: { color: '#ccc' } }}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused': {
                  boxShadow: '0 0 8px 2px #b18eff',
                },
              }}
            />
            <TextField
              label="Message"
              placeholder="Tell us about your clinic and what you'd like to see in the demo..."
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{
                style: {
                  borderRadius: 12,
                  background: '#1e1e1e',
                  color: '#fff',
                },
              }}
              InputLabelProps={{ style: { color: '#ccc' } }}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused': {
                  boxShadow: '0 0 8px 2px #b18eff',
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleSendMail}
              sx={{
                mt: 1,
                borderRadius: 2,
                backgroundColor: '#b18eff',
                color: '#0a0a0a',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(177, 142, 255, 0.4)',
                '&:hover': {
                  backgroundColor: '#a06bff',
                  boxShadow: '0 6px 20px rgba(177, 142, 255, 0.6)',
                },
              }}
              type="button"
            >
              Request Demo
            </Button>
          </Stack>

          <Grid container justifyContent="center" spacing={2} mt={4}>
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ color: '#b18eff' }} fontSize="small" />
                <Link
                  href="tel:+919876543210"
                  underline="hover"
                  sx={{ fontWeight: 500, color: '#ccc' }}
                >
                  +91 98765 43210
                </Link>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ color: '#b18eff' }} fontSize="small" />
                <Link
                  href="mailto:contact@medalph.com"
                  underline="hover"
                  sx={{ fontWeight: 500, color: '#ccc' }}
                >
                  contact@medalph.com
                </Link>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <LinkedInIcon sx={{ color: '#b18eff' }} fontSize="small" />
                <Link
                  href="https://linkedin.com/company/medalph"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ fontWeight: 500, color: '#ccc' }}
                >
                  linkedin.com/company/medalph
                </Link>
              </Stack>
            </Grid>
          </Grid>

          <Typography
            variant="body2"
            mt={6}
            textAlign="center"
            sx={{ color: '#666', fontStyle: 'italic' }}
          >
            Building EMR software that clinics actually want to use.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
