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

const Contact = () => {
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

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

    const subject = `New Contact Message from ${name.trim()}`;
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
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ color: '#b18eff' }}
          >
            <ShinyText text="GET IN TOUCH" disabled={false} speed={20} />
          </Typography>

          <Typography variant="body1" mb={4} textAlign="center" sx={{ color: '#ccc' }}>
            Have questions or want to start a project? <br />
            We’d love to hear from you.
          </Typography>

          <Stack spacing={2}>
            <TextField
              placeholder="Your Name"
              variant="outlined"
              fullWidth
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
              placeholder="Your Email"
              variant="outlined"
              fullWidth
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
              placeholder="Your Message"
              variant="outlined"
              fullWidth
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
              Send Message
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
            Building the web with precision & creativity.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
