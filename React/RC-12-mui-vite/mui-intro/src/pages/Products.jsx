import Container from '@mui/material/Container'
import React from 'react'
import Navbar from '../components/Navbar'
import CssBaseline from '@mui/material/CssBaseline'

const Products = () => {
    return (
        <div>
            <Navbar />
            <Container >
                <CssBaseline /> {/* css reset islemi */}
            </Container>
        </div>
    )
}

export default Products