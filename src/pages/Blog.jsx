import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScrollVelocity from '../components/ScrollVelocity';
import Button from '../components/Button';
import { usePageTitle } from '../hooks/usePageTitle';

/**
 * Blog Page - EMR & Healthcare Content
 * 
 * SEO & UX Improvements:
 * - EMR-focused blog content
 * - Semantic HTML structure
 * - Proper heading hierarchy
 */
const blogPosts = [
  {
    title: 'Improving Clinical Workflows with Medical Software',
    content:
      'Learn how medical software platforms can streamline clinical processes in your clinic or hospital. From workflow optimization to operational efficiency, discover how healthcare management software supports better patient care delivery.',
    link: '/post/improving-clinical-workflows',
  },
  {
    title: 'Choosing Healthcare Management Software for Your Practice',
    content:
      'What to consider when selecting medical software for your clinic or hospital. Key capabilities, integration requirements, and operational considerations that matter most for healthcare providers.',
    link: '/post/choosing-healthcare-software',
  },
  {
    title: 'Enhancing Operational Efficiency in Healthcare Settings',
    content:
      'Explore how integrated medical software platforms can improve clinic and hospital operations. From patient management to administrative workflows, see how healthcare software supports efficient practice management.',
    link: '/post/operational-efficiency',
  },
];

const Blog = () => {
  const navigate = useNavigate();

  // SEO: Dynamic page title and meta description - Platform positioning
  usePageTitle(
    'Healthcare Software Insights | Medalph Blog',
    'Resources for clinics and healthcare providers. Insights, tips, and best practices for medical software and healthcare management.'
  );

  return (
    <Box
      component="main"
      sx={{
        background: `linear-gradient(135deg, #0c1014, #0c1015, #0d1115, #000000)`,
        color: '#fff',
        py: 10,
        px: 2,
        minHeight: '100vh',
      }}
    >
      <Box sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, sm: 4 } }}>
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
              'Healthcare Software ',
              <span key="highlight" style={{ color: '#b18eff', marginRight: '1rem' }}>
                Insights
              </span>,
            ]}
            velocity={90}
            className="custom-scroll-text"
          />
        </Box>

        {/* Subtitle */}
        <Typography
          component="h1"
          variant="h2"
          align="center"
          sx={{
            color: '#b18eff',
            maxWidth: 800,
            mx: 'auto',
            mt: 2,
            mb: 2,
            fontSize: { xs: '1.8rem', sm: '2.2rem' },
            fontWeight: 600,
          }}
        >
          Resources for Healthcare Providers
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: '#ccc',
            maxWidth: 800,
            mx: 'auto',
            mt: 2,
            mb: 8,
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          Insights, tips, and best practices for medical software and healthcare management.
        </Typography>

        {/* Blog Cards */}
        {blogPosts.map((post, index) => (
          <React.Fragment key={index}>
            <Box
              component="article"
              sx={{
                mb: 6,
                p: 3,
                borderRadius: 4,
                backgroundColor: '#121212',
                boxShadow: '0 0 15px rgba(177, 142, 255, 0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(177, 142, 255, 0.15)',
                },
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: '1.6rem',
                  color: '#b18eff',
                }}
              >
                {post.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#ccc',
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  mb: 4,
                }}
              >
                {post.content}
              </Typography>

              <Box textAlign="left">
                <Button onClick={() => navigate(post.link)}>Read More</Button>
              </Box>
            </Box>

            {/* Divider under each card */}
            {index < blogPosts.length - 1 && (
              <Divider
                sx={{
                  mb: 6,
                  borderColor: 'rgba(255,255,255,0.1)',
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
