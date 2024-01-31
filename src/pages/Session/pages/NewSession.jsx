import { MenuItem, Select, TextField, Stack, Divider } from '@mui/material';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Form, Submit, useForm } from '../../../hooks/useForm';
import { Input } from '../../../hooks/useForm/inputs/index';
import { useMessage } from '../../../components/Header';
import Loading from '../../../components/Loading';
import { useParams } from 'react-router-dom';

const Goals = [
    'Comprehension of lexical items',
    'Comprehension of two step commands',
    'Naming-Expressive Vocabulary',
    'Improve imitation of two sounds.',
    'Improve pragmatic skills',
    'Improve the comprehension of three step commands',
    'Improve spontaneous speech',
    'Improve Comprehension of Simple “Wh” Questions.',
    'Improve Comprehension of 2-3 step commands.',
    'Follow simple directions using early propositions.',
    'Improve imitation of 2-3-word utterances.',
    'Answer simple “Wh” questions.',
    'Test Goal',
    'Goal1',
];

const NewSession = () => {
    const { sessionId } = useParams();
    const [loading] = useState(false);
    const { showError } = useMessage();

    const handlers = useForm(
        useMemo(
            () => ({
                client: { required: true },
                goal: { required: true },
                activity: { required: true },
                department: { required: true },
                session_start_time: { required: true },
                session_end_time: { required: true },
                score: { required: true },
                observation: { required: true },
            }),
            []
        ),
        { Input: TextField }
    );

    // const setValues = handlers.setValues;

    // const fetchPlan = useCallback(async () => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get(`/admin/plans/${id}`);
    //         const plan = response.data.plan;
    //         const {
    //             name,
    //             email,
    //             branch,
    //             phone,
    //             fatherName,
    //             motherName,
    //             address,
    //             gender,
    //             alternatePhone,

    //         } = plan;
    //         setValues({
    //             name,
    //             email,
    //             branch,
    //             fatherName,
    //             motherName,
    //             alternatePhone,
    //             address,
    //             gender,
    //         });
    //         setFeatureList(phone);
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         setLoading(false);
    //     }
    // }, [id, setValues]);

    const customChangeHandler = e => {
        const { name, value } = e.target;
        handlers.setValues({ [name]: value });
    };

    // const onSubmit = res => {
    //     const { message, success } = res.data;

    //     if (success) {
    //         handleClose();
    //         setSelectedPlan({});
    //         showSuccess(
    //             clientId ? 'Plan Updated Successfully' : 'Plan Added Successfully'
    //         );
    //         return refresh();
    //     }

    //     showError(message);
    // };

    function onError(err) {
        const { message } = err.response.data;

        showError(message);
    }

    // useEffect(() => {
    //     if (id) {
    //         console.log(id);
    //         fetchPlan();
    //     }
    // }, [id, fetchPlan]);

    return (
        <Box
            bgcolor='background.paper'
            height='calc(100vh - 76px)'
            overflow='auto'
            display='flex'
            flexDirection='column'
            p={0}>
            <Typography variant='h5' fontWeight={600} color='primary' p={2}>
                {sessionId ? 'Edit Session' : 'New Session'}
            </Typography>
            <Divider variant='fullWidth' />
            {loading ? (
                <Loading message='Please wait, while your credentials are loading...' />
            ) : (
                <Form
                    handlers={handlers}
                    // onSubmit={onSubmit}
                    clientId={sessionId ? `/admin/plans/${sessionId}` : '/admin/plans/'}
                    method={sessionId ? 'patch' : 'post'}
                    onError={onError}
                    style={{ flexGrow: 1, position: 'relative' }}>
                    <Box p={2} display='flex' flexDirection='column' mb={4} overflow='auto'>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Client
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Select
                                    value={handlers.values.client}
                                    fullWidth
                                    name='client'
                                    onChange={customChangeHandler}
                                    sx={{ width: 316 }}>
                                    <MenuItem value='rehan'>Rehan</MenuItem>
                                    <MenuItem value='ajay'>Ajay</MenuItem>
                                    <MenuItem value='suhani'>Suhani</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Goal
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Select
                                    value={handlers.values.goal}
                                    fullWidth
                                    name='goal'
                                    onChange={customChangeHandler}
                                    sx={{ width: 316 }}>
                                    {Goals.map(goal => (
                                        <MenuItem value={goal}>{goal}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Activity
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Select
                                    value={handlers.values.activity}
                                    fullWidth
                                    name='activity'
                                    onChange={customChangeHandler}
                                    sx={{ width: 316 }}>
                                    <MenuItem value='The child would be shown various picture cards.'>
                                        The child would be shown various picture cards.
                                    </MenuItem>

                                    <MenuItem value='The child would be made to follow simple two step commands.'>
                                        The child would be made to follow simple two step commands.
                                    </MenuItem>

                                    <MenuItem value='The child would be shown various picture cards and be instructed to name.'>
                                        The child would be shown various picture cards and be
                                        instructed to name.
                                    </MenuItem>

                                    <MenuItem value='Test Activity #1'>Test Activity #1</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Department
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Select
                                    value={handlers.values.department}
                                    fullWidth
                                    name='department'
                                    onChange={customChangeHandler}
                                    sx={{ width: 316 }}>
                                    <MenuItem value='bt'>BT</MenuItem>
                                    <MenuItem value='ot'>OT</MenuItem>
                                    <MenuItem value='st'>ST</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography variant='h5' fontWeight={600} gutterBottom>
                                Session
                            </Typography>
                            <Box mb={1}>
                                <Button variant='contained' color='secondary' sx={{ mr: 1 }}>
                                    Start Session
                                </Button>
                                <Button
                                    sx={{
                                        bgcolor: 'background.default',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                    }}>
                                    End Session
                                </Button>
                            </Box>
                        </Stack>
                        <Divider variant='fullWidth' sx={{ mb: 2 }} />
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Start
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Input
                                    name='session_start_time'
                                    variant='outlined'
                                    type='time'
                                    size='small'
                                    sx={{ width: 316 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    End
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Input
                                    name='session_end_time'
                                    variant='outlined'
                                    type='time'
                                    size='small'
                                    sx={{ width: 316 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Score
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='score'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: { xs: '100%', sm: '90%', lg: '316px' } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Observation
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Input
                                    name='observation'
                                    variant='outlined'
                                    placeholder='Primary'
                                    size='small'
                                    sx={{ width: 316 }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Stack
                        direction='row'
                        p={2}
                        spacing={2}
                        sx={{
                            boxShadow: '0 -4px 5px -3px rgba(0,0,0,.1);',
                            backgroundColor: 'background.paper',
                            zIndex: 1100,
                            position: 'fixed',
                            bottom: 0,
                            width: {
                                xs: '100%',
                                xm: `calc(100% - 280px)`,
                            },
                        }}>
                        <Submit>
                            {loader => (
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    type='submit'
                                    disabled={Boolean(loader)}
                                    sx={{
                                        textTransform: 'capitalize',
                                    }}
                                    endIcon={loader}>
                                    Save
                                </Button>
                            )}
                        </Submit>
                        <Button
                            sx={{
                                bgcolor: 'background.default',
                                border: '1px solid',
                                borderColor: 'divider',
                            }}>
                            Cancel
                        </Button>
                    </Stack>
                </Form>
            )}
        </Box>
    );
};

export default NewSession;
