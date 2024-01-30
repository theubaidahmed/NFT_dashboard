import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { Box, Divider, Typography } from '@mui/material';

export default function BasicPie() {
    return (
        <Container maxWidth='false'>
            <Box my={3}>
                <Typography variant='h4' fontWeight={500}>
                    Dashboard
                </Typography>
                <Typography variant='body2' color='text.secondary' sx={{ wordSpacing: '2px' }}>
                    A comprehensive snapshot of your practice's pulse.
                </Typography>
                <Divider variant='fullWidth' sx={{ mt: 2, mb: 4 }} />
            </Box>

            <Card sx={{ p: 3 }}>
                <Typography variant='h5' mb={2}>
                    Pending Assessments
                </Typography>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, label: 'BT' },
                                { id: 1, value: 15, label: 'OT' },
                                { id: 2, value: 20, label: 'ST' },
                            ],
                        },
                    ]}
                    width={400}
                    height={200}
                />
            </Card>
        </Container>
    );
}
