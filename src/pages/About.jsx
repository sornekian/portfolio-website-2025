import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      color: 'text.primary',
      pt: 8,
      pb: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="md" sx={{ textAlign: 'center', mx: 'auto', maxWidth: '800px' }}>
        <Box sx={{ m: 4 }}>
          <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
            About Me
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', mx: 'auto', maxWidth: '800px' }}>
                <Box sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2
                }}>
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      bgcolor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    {/* Placeholder for profile picture */}
                    <Typography variant="h4">👨‍💻</Typography>
                  </Box>
                  <Typography variant="h5">Sarven Ornekian</Typography>
                  <Typography variant="subtitle1">Full Stack Developer</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', mx: 'auto', maxWidth: '800px' }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 3,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Professional Journey
                    </Typography>
                    <Typography variant="body1">
                      I'm a full-stack software engineer with a unique journey from psychology to technology. After earning my B.S. in Psychology from California State University, Northridge, I transitioned into software engineering through General Assembly's immersive program. This shift reflects my passion for problem-solving and creating meaningful user experiences.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                      Current Role
                    </Typography>
                    <Typography variant="body1">
                      Currently, I serve as a freelance Software Engineer, where I contribute to innovative projects in AI, cybersecurity, and big data. My technical expertise spans frontend development with React, backend development using Node.js and Express, and mobile app development with React Native. I also have experience in operations and management, having previously worked as an Operations Specialist at Saro Lifestyle, where I implemented systems to enhance efficiency and inventory management.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                      Personal Interests
                    </Typography>
                    <Typography variant="body1">
                      Outside of work, I enjoy building computers and playing tennis—both of which sharpen my problem-solving skills, attention to detail, and strategic thinking. Building computers deepens my understanding of hardware-software integration, while tennis enhances my focus, agility, and ability to adapt quickly—qualities I bring into my software engineering practice.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                      Technical Skills
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">GitHub</Typography>
                        <Typography variant="body1">TypeScript</Typography>
                        <Typography variant="body1">React Native</Typography>
                        <Typography variant="body1">Express.js</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body1">React.js</Typography>
                        <Typography variant="body1">MongoDB</Typography>
                        <Typography variant="body1">HTML</Typography>
                        <Typography variant="body1">CSS3</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body1">Docker</Typography>
                        <Typography variant="body1">Tailwind CSS</Typography>
                        <Typography variant="body1">HTML5</Typography>
                        <Typography variant="body1">JavaScript</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body1">Django</Typography>
                        <Typography variant="body1">Python (Programming Language)</Typography>
                        <Typography variant="body1">Node.js</Typography>
                        <Typography variant="body1">Cascading Style Sheets (CSS)</Typography>
                      </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom>
                      Operations & Management Skills
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">Operations Management</Typography>
                        <Typography variant="body1">Project Management</Typography>
                        <Typography variant="body1">Inventory Analysis</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body1">Account Management</Typography>
                        <Typography variant="body1">E-Commerce</Typography>
                        <Typography variant="body1">Inventory System</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body1">Inventory Management</Typography>
                        <Typography variant="body1">Sales</Typography>
                        <Typography variant="body1">Accounts Receivable (AR)</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body1">Accounts Payable</Typography>
                        <Typography variant="body1">Shipping & Receiving</Typography>
                        <Typography variant="body1">Microsoft Excel</Typography>
                      </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom>
                      Soft Skills
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={12}>
                        <Typography variant="body1">Intercultural Communication</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">Cross-cultural Communication Skills</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">Creative Problem Solving</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">Customer Service</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1">Armenian (Language)</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
