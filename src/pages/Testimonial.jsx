"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollVelocity from "../components/ScrollVelocity";

const testimonials = [
  {
    name: "John Doe",
    designation: "CEO",
    quote:
      "Medalph built our website in record time with stunning design and flawless performance. Highly recommended!",
    image: "images/test1.jpg",
  },
  {
    name: "Jane Smith",
    designation: "Founder",
    quote:
      "Their UI/UX work was top-notch. We saw an immediate improvement in user engagement after launch.",
    image: "/images/test2.jpg",
  },
  {
    name: "Alice Johnson",
    designation: "Manager",
    quote:
      "From planning to deployment, the Medalph team handled everything professionally. True web experts!",
    image: "/images/test3.jpeg",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        color: "#fff",
        pt: 6,
        pb: 10,
        px: { xs: 2, sm: 4, md: 8 },
        fontFamily: "Segoe UI, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ScrollVelocity Heading */}
      <Box
        sx={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          mb: { xs: 5, md: 10 }, // reduced margin bottom on small screens
        }}
      >
        <ScrollVelocity
          texts={[
            "What ",
            <span style={{ color: "#b18eff", marginRight: "1rem" }}>
              Our Clients Say
            </span>,
          ]}
          velocity={90}
          className="custom-scroll-text"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
          maxWidth: 900,
          mx: "auto",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 400,
            height: { xs: 220, sm: 280, md: 350 },
            borderRadius: "16px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={testimonials[active].image}
              src={testimonials[active].image}
              alt={testimonials[active].name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </AnimatePresence>
        </Box>

        {/* Text & Controls */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: 500 },
            px: { xs: 1, md: 0 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 1, color: "#b18eff", fontSize: { xs: "1.1rem", md: "1.25rem" } }}
              >
                {testimonials[active].name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ mb: 3, color: "#aaa", fontSize: { xs: "0.85rem", md: "1rem" } }}
              >
                {testimonials[active].designation}
              </Typography>
              <Typography sx={{ color: "#ccc", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.5 }}>
                {testimonials[active].quote}
              </Typography>
            </motion.div>
          </AnimatePresence>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
              flexWrap: "wrap",
              px: { xs: 4, md: 0 },
            }}
          >
            <IconButton
              onClick={handlePrev}
              aria-label="Previous testimonial"
              sx={{
                backgroundColor: "#1c1b3a",
                color: "#b18eff",
                "&:hover": { backgroundColor: "#2c2a50" },
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
              }}
            >
              <IconArrowLeft />
            </IconButton>
            <IconButton
              onClick={handleNext}
              aria-label="Next testimonial"
              sx={{
                backgroundColor: "#1c1b3a",
                color: "#b18eff",
                "&:hover": { backgroundColor: "#2c2a50" },
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
              }}
            >
              <IconArrowRight />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
