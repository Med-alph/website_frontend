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
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMail = () => {
    const subject = `New Contact Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${userEmail}\n\nMessage:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@medalph.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2,
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 4,
            background: '#121212',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ color: '#fff' }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="body1"
            mb={4}
            textAlign="center"
            sx={{ color: '#ccc' }}
          >
            Have questions or want to start a project?
            <br />
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
                  borderRadius: 10,
                  background: '#1e1e1e',
                  color: '#fff',
                },
              }}
              InputLabelProps={{ style: { color: '#ccc' } }}
            />
            <TextField
              placeholder="Your Email"
              variant="outlined"
              fullWidth
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              InputProps={{
                style: {
                  borderRadius: 10,
                  background: '#1e1e1e',
                  color: '#fff',
                },
              }}
              InputLabelProps={{ style: { color: '#ccc' } }}
            />
            <TextField
              placeholder="Your Message"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{
                style: {
                  borderRadius: 10,
                  background: '#1e1e1e',
                  color: '#fff',
                },
              }}
              InputLabelProps={{ style: { color: '#ccc' } }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleSendMail}
              sx={{
                mt: 1,
                borderRadius: 2,
                backgroundColor: 'orange',
                color: '#0a0a0a',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(255, 165, 0, 0.4)',
                '&:hover': {
                  backgroundColor: '#cc8400',
                  boxShadow: '0 6px 20px rgba(255, 165, 0, 0.6)',
                },
              }}
            >
              Send Message
            </Button>
          </Stack>

          <Grid container justifyContent="center" spacing={2} mt={4}>
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ color: 'orange' }} fontSize="small" />
                <Link
                  href="tel:+919876543210"
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 500, color: '#ccc' }}
                >
                  +91 98765 43210
                </Link>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ color: 'orange' }} fontSize="small" />
                <Link
                  href="mailto:contact@medalph.com"
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 500, color: '#ccc' }}
                >
                  contact@medalph.com
                </Link>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1} alignItems="center">
                <LinkedInIcon sx={{ color: 'orange' }} fontSize="small" />
                <Link
                  href="https://linkedin.com/company/medalph"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 500, color: '#ccc' }}
                >
                  linkedin.com/company/medalph
                </Link>
              </Stack>
            </Grid>
          </Grid>

          <Typography variant="body2" mt={6} textAlign="center" sx={{ color: '#999' }}>
            Building the web with passion ❤️
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
