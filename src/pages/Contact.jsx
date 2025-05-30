import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to send the form data
      console.log('Form submitted:', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
        Contact Me
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </motion.div>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success">Message sent successfully!</Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
      >
        <Alert severity="error">Error sending message. Please try again.</Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
