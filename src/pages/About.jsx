import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
        About Me
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {/* Placeholder for profile picture */}
                  <Typography variant="h4">👨‍💻</Typography>
                </Box>
                <Typography variant="h5">Sarven Ornekian</Typography>
                <Typography variant="subtitle1">Full Stack Developer</Typography>
              </Paper>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1">
                I am a passionate full stack developer with expertise in building scalable and maintainable applications.
                With experience in both frontend and backend development, I deliver high-quality solutions that meet
                business needs while maintaining code quality and performance.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                My technical skills include:
              </Typography>
              <ul>
                <li>Frontend Frameworks: React, Next.js, Angular</li>
                <li>Backend Technologies: Node.js, Python, Java</li>
                <li>Databases: MongoDB, PostgreSQL, MySQL</li>
                <li>Cloud Platforms: AWS, Azure, Google Cloud</li>
              </ul>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
