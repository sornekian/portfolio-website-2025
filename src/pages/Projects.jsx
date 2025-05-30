import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Medical Doctor Website',
      description: 'Standard Website for Medical Doctor',
      image: '/assets/projects/medical-doctor.jpg',
      tech: ['HTML', 'JavaScript', 'CSS'],
      link: 'https://sornekian.github.io/vornekian/'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application that allows teams to organize projects, assign tasks, and track progress in real-time.',
      image: '/taskmanager.jpg',
      tech: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work and skills. Built with modern web technologies and optimized for performance.',
      image: '/portfolio.jpg',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
        My Projects
      </Typography>
      
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Card 
                sx={{ height: '100%' }}
                onClick={() => handleProjectClick(project.link)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {project.tech.map((tech) => (
                      <Typography
                        key={tech}
                        variant="caption"
                        sx={{
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
