import React from 'react';
import { Container, Typography, Box, Grid, List, ListItem, ListItemText, ListItemIcon, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web application development using modern technologies',
      icon: 'web',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native',
      icon: 'phone',
      tech: ['React Native', 'Expo', 'Firebase'],
    },
    {
      id: 3,
      title: 'Backend Development',
      description: 'Robust backend solutions with RESTful APIs',
      icon: 'code',
      tech: ['Node.js', 'Python', 'Django', 'FastAPI'],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
        Services
      </Typography>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} md={4} key={service.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: 'primary.light',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <Typography variant="h4" component="span">
                    {service.icon}
                  </Typography>
                </Box>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {service.description}
                </Typography>
                <List>
                  {service.tech.map((tech) => (
                    <ListItem key={tech}>
                      <ListItemIcon>
                        <Box sx={{ width: 20, height: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary={tech} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
