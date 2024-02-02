import { Box, Button, Divider, Typography } from '@mui/material';

import Image from '../../../../components/Image';
import { useNavigate } from 'react-router-dom';

const report = false;

const Reports = () => {
    const navigate = useNavigate();

    return report ? (
        <Box p={2}>
            <Typography variant='h6' mb={2}>
                Goals
            </Typography>

            <Divider variant='fullWidth' sx={{ mb: 2 }} />
        </Box>
    ) : (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='100%'>
            <Image name='goals.svg' sx={{ height: '350px' }} />
            <Typography variant='h6' gutterBottom>
                Seal the deal.
            </Typography>
            <Typography variant='body2' color='text.secondary' mb={2}>
                You are not authorized to access this page.
            </Typography>

            <Button variant='contained' color='secondary' onClick={() => navigate('new')}>
                Craete Goal
            </Button>
        </Box>
    );
};

export default Reports;
