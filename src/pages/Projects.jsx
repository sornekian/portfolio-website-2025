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
      title: 'Blackjack Game',
      description: 'A Unique Blackjack Game',
      image: '/assets/projects/blackjack.jpg',
      tech: ['HTML', 'JavaScript', 'CSS'],
      link: 'https://sornekian.github.io/Blackjack-Game/'
    },
    {
      id: 3,
      title: 'Community Test Lab Mobile App',
      description: 'Standardized COVID-19 test results',
      image: '/assets/projects/covidapp.jpg',
      tech: ['React Native CLI', 'Tailwind', 'Typescript'],
      link: 'https://www.youtube.com/watch?v=MCWB_YQBbic&ab_channel=StephanRamalho'
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
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2"
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 2
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                  }}>
                    {project.tech.map((tech) => (
                      <Typography
                        key={tech}
                        variant="caption"
                        sx={{
                          bgcolor: 'primary.light',
                          color: 'black',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          textAlign: 'center'
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
