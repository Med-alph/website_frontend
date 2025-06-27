import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScrollVelocity from '../components/ScrollVelocity';
import ShinyText from '../components/ShinyText';
import Button from '../components/Button'; // Custom styled button

const blogPosts = [
  {
    title: 'Why Every Business Needs a Website in 2025',
    content:
      'A strong online presence is no longer optional. Learn why your business should invest in a well-designed website...',
    link: '/post/why-website-2025',
  },
  {
    title: 'Top UI/UX Trends That Will Dominate',
    content:
      'From neumorphism to dark mode, we explore the hottest design trends in modern user interfaces...',
    link: '/post/uiux-trends',
  },
  {
    title: 'SEO Basics for Your Website',
    content:
      'Learn the fundamental SEO techniques to improve your website’s visibility and ranking on search engines...',
    link: '/post/seo-basics',
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <Box
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
              'Explore ',
              <span style={{ color: '#b18eff', marginRight: '1rem' }}>Our Blogs</span>,
            ]}
            velocity={90}
            className="custom-scroll-text"
          />
        </Box>

        {/* Subtitle */}
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
          Insights, tips, and trends from the world of web development and design.
        </Typography>

        {/* Blog Cards */}
        {blogPosts.map((post, index) => (
          <React.Fragment key={index}>
            <Box
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
            <Divider
              sx={{
                mb: 6,
                borderColor: 'rgba(255,255,255,0.1)',
              }}
            />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
