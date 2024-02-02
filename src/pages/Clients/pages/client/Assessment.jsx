import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { Tab, Tabs } from '../../../../styles/tabs';
import { useState } from 'react';
import Image from '../../../../components/Image';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div role='tabpanel' hidden={value !== index} style={{ height: '90%' }}>
            {value === index && children}
        </div>
    );
}

const assessment = false;

const Assessment = () => {
    const [tabSelected, setTabSelected] = useState(0);
    const handleChange = (event, newValue) => {
        setTabSelected(newValue);
    };
    const navigate = useNavigate();

    return assessment ? (
        <Box p={2}>
            <Typography variant='h6' mb={2}>
                Assessment
            </Typography>

            <Divider variant='fullWidth' sx={{ mb: 2 }} />

            <Box p={2}>
                <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='body2' fontWeight={600}>
                            Client Name
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9} display='flex' spacing={2}>
                        <Typography variant='body2'>Alison Parker</Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='body2' fontWeight={600}>
                            Date of Birth
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9} display='flex' spacing={2}>
                        <Typography variant='body2'>14 - Feb - 2001</Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='body2' fontWeight={600}>
                            Gender
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9} display='flex' spacing={2}>
                        <Typography variant='body2'>Female</Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='body2' fontWeight={600}>
                            Date of Assessment
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <Typography variant='body2'>29 - Jan - 2024</Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='body2' fontWeight={600}>
                            Presenting Complaints
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <Typography variant='body2'>presenting complaints</Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='body2' fontWeight={600}>
                            Behavioural Observation
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <Typography variant='body2'>Behavioural Observation</Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='body2' fontWeight={600}>
                            Test Results
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <Typography variant='body2'>Test Results</Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='body2' fontWeight={600}>
                            Impression
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <Typography variant='body2'>Impression</Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant='body2' fontWeight={600}>
                            Recommendations
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <Typography variant='body2'>Recommendations</Typography>
                    </Grid>
                </Grid>

                <Tabs value={tabSelected} onChange={handleChange} sx={{ mt: 4 }}>
                    <Tab label='History' />
                    <Tab label='Tests' />
                </Tabs>
                <Box flexGrow={1} py={2} mb={3}>
                    <TabPanel value={tabSelected} index={0}>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} sm={3}>
                                <Typography variant='body2' fontWeight={600}>
                                    Parental History
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={9}>
                                <Typography variant='body2'>Parental History</Typography>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} sm={3}>
                                <Typography variant='body2' fontWeight={600}>
                                    Family History
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={9} display='flex' spacing={2}>
                                <Typography variant='body2'>Family History</Typography>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} sm={3}>
                                <Typography variant='body2' fontWeight={600}>
                                    Development History
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={9} display='flex' spacing={2}>
                                <Typography variant='body2'>Development History</Typography>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} sm={3}>
                                <Typography variant='body2' fontWeight={600}>
                                    School History
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={9} display='flex' spacing={2}>
                                <Typography variant='body2'>School History</Typography>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} sm={3}>
                                <Typography variant='body2' fontWeight={600}>
                                    Development History
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={9} display='flex' spacing={2}>
                                <Typography variant='body2'>Development History</Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={tabSelected} index={1}>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} sm={3}>
                                <Typography variant='body2' fontWeight={600}>
                                    Assessment
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={9}>
                                <Typography variant='body2'>BT</Typography>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} sm={3}>
                                <Typography variant='body2' fontWeight={600}>
                                    Slot time
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={9} display='flex' spacing={2}>
                                <Stack
                                    direction='row'
                                    alignItems='center'
                                    justifyContent='space-between'>
                                    <Typography variant='body2' fontWeight={600}>
                                        From:
                                    </Typography>{' '}
                                    <Typography variant='body2'>18:12</Typography>{' '}
                                    <Typography variant='body2' fontWeight={600}>
                                        To:
                                    </Typography>{' '}
                                    <Typography variant='body2'>23:00</Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} sm={3}>
                                <Typography variant='body2' fontWeight={600}>
                                    Discontinued
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={9}>
                                <Typography variant='body2'>True</Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </Box>
            </Box>
        </Box>
    ) : (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='100%'
            px={1}>
            <Image name='assessment.svg' sx={{ maxHeight: '350px' }} />
            <Typography variant='h6' gutterBottom>
                Seal the deal.
            </Typography>
            <Typography variant='body2' color='text.secondary' mb={2}>
                You are not authorized to access this page.
            </Typography>

            <Button variant='contained' color='secondary' onClick={() => navigate('new')}>
                Craete Assessment
            </Button>
        </Box>
    );
};

export default Assessment;
