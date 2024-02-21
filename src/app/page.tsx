import ApplicationForm from "@/components/form.component";
import { Box, Typography, Divider, Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{
        background: '#12111A',
        color: 'white',
        height: '100%',
      }}
      >
        <Container sx={{
          paddingTop: '5rem'
        }}>
          <Typography variant="h5" fontWeight='bold'>
            Content Type
          </Typography>
          <Typography sx={{marginTop: '8px', marginBottom: '2rem' }}>
            Choose a content type that best fits your needs.
          </Typography>
          <Divider sx={{
            background: '#201F27',
            marginBottom: '2rem',
          }} />
          <ApplicationForm />
        </Container>
      </Box>
    </>
  );
}
