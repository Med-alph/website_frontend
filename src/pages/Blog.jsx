import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';

const blogPosts = [
  {
    title: "Why Every Business Needs a Website in 2025",
    content:
      "A strong online presence is no longer optional. Learn why your business should invest in a well-designed website...",
    link: "#",
  },
  {
    title: "Top UI/UX Trends That Will Dominate",
    content:
      "From neumorphism to dark mode, we explore the hottest design trends in modern user interfaces...",
    link: "#",
  },
  {
    title: "SEO Basics for Your Website",
    content:
      "Learn the fundamental SEO techniques to improve your website’s visibility and ranking on search engines...",
    link: "#",
  },
];

const Blog = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0a0a0a',
        color: '#fff',
        py: 8,
        px: { xs: 3, sm: 8, md: 12 },
        fontFamily: 'Segoe UI, sans-serif',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          borderBottom: '3px solid orange',
          width: 'fit-content',
          margin: '0 auto 32px auto',
          padding: '4px 12px',
        }}
      >
        Our Blog
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          opacity: 0.75,
          maxWidth: 600,
          margin: '0 auto 48px auto',
          fontWeight: 400,
          letterSpacing: '0.02em',
        }}
      >
        Insights, tips, and trends from the world of web development and design.
      </Typography>

      {/* Blog Posts Grid */}
      <Grid container spacing={5} justifyContent="center">
        {blogPosts.map((post, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              sx={{
                backgroundColor: '#121212',
                color: '#fff',
                maxWidth: 360,
                borderRadius: 3,
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                },
              }}
            >
              <CardContent sx={{ px: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {post.title}
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#ccc', mb: 3 }}>
                  {post.content}
                </Typography>
                <Button
                  href={post.link}
                  variant="contained"
                  size="medium"
                  sx={{
                    backgroundColor: 'orange',
                    color: '#0a0a0a',
                    fontWeight: 700,
                    borderRadius: 2,
                    textTransform: 'capitalize',
                    boxShadow: '0 4px 15px rgba(255, 165, 0, 0.4)',
                    '&:hover': {
                      backgroundColor: '#cc8400',
                      boxShadow: '0 6px 20px rgba(255, 165, 0, 0.6)',
                    },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
