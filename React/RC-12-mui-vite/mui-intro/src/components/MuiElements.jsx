import React from 'react'
// import {Container} from '@mui/material'; // performans acisindan problemli yazim acisindan daha kolay
import Container from '@mui/material/Container'; // performans acisindan verimli 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const MuiElements = () => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                "& .MuiTypography-body1": {
                    fontSize: "2rem"
                }
            }}>
            <Typography variant="h3" component="h1" align='center' color="secondary.dark" m={5}>
                Mui Elements
            </Typography>
            <Typography variant="h3" component="h1" align='center' color="error.light" mt={5}>
                Mui Elements
            </Typography>
            <Typography variant="body1" align='justify' mt={5} sx={{ bgcolor: "red", border: "3px solid blue", color: "white", fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minima, a et perferendis nulla error iste eum deleniti distinctio aspernatur quaerat illum, praesentium, rerum officia.
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={3}
                my={4}
            // sx={{
            //     display:"flex",
            //     justifyContent:"center",
            //     alignItems:"center",
            //     gap:3
            // }}
            >
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Box>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="center"
            >
                <Button variant='outlined' color='success'>Outlined</Button>
                <Button variant='contained' color='error'>Outlined</Button>
                <Button variant='outlined' size='large'>Outlined</Button>

            </Stack>
        </Container>
    )
}

export default MuiElements