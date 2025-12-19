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
    title: 'How to Reduce Clinical Documentation Time',
    content:
      'Learn practical strategies for cutting documentation time in your clinic. From template optimization to workflow improvements, discover how modern EMR systems can help doctors spend more time with patients.',
    link: '/post/reduce-documentation-time',
  },
  {
    title: 'Choosing the Right EMR for Your Clinic',
    content:
      'What to look for when selecting an electronic medical records system. Key features, ease of use, and workflow considerations that matter most for clinics and healthcare providers.',
    link: '/post/choosing-emr',
  },
  {
    title: 'Improving Clinic Workflow with EMR Software',
    content:
      'Explore how the right clinical documentation software can streamline your clinic\'s operations. From patient scheduling to record management, see how EMR systems improve efficiency.',
    link: '/post/improving-workflow',
  },
];

const Blog = () => {
  const navigate = useNavigate();

  // SEO: Dynamic page title and meta description
  usePageTitle(
    'EMR Insights & Healthcare Tips | Medalph EMR Blog',
    'Resources for clinics and healthcare providers. Insights, tips, and best practices for clinical documentation and EMR software.'
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
              'EMR Insights & ',
              <span key="highlight" style={{ color: '#b18eff', marginRight: '1rem' }}>
                Healthcare Tips
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
          Resources for Clinics & Healthcare Providers
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
          Insights, tips, and best practices for clinical documentation and EMR software.
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
