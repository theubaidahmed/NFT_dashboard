import {
    Checkbox,
    FormControlLabel,
    MenuItem,
    Select,
    TextField,
    Stack,
    Card,
} from '@mui/material';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Form, Submit, useForm } from '../../../hooks/useForm';
import { Input } from '../../../hooks/useForm/inputs/index';
import { useMessage } from '../../../components/Header';
import Loading from '../../../components/Loading';

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

const CreateSession = props => {
    const { sessionId } = props;
    const [loading] = useState(false);

    const { showError } = useMessage();

    const handlers = useForm(
        useMemo(
            () => ({
                client: { required: true },
                goal: { required: true },
                activity: { required: true },
                department: { required: true },
                startTime: { required: true },
                endTime: { required: true },
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
        <Card
            sx={{
                boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
                borderRadius: '10px',
                overflowY: 'auto',
                maxHeight: '80vh',
                maxWidth: '600px',
                width: '100%',
                mx: 2,
                '::-webkit-scrollbar': { display: 'none' },
                p: 2,
            }}>
            <Box
                sx={{
                    p: 3,
                    color: 'text.secondary',
                    fontWeight: 500,
                    letterSpacing: '1.2px',
                    fontSize: '14px',
                }}>
                <Typography variant='h5' fontWeight={600} color='primary' mb={2}>
                    {sessionId ? 'Edit Session' : 'Create Session'}
                </Typography>
                {loading ? (
                    <Loading message='Please wait, while your Plan is loading...' />
                ) : (
                    <Form
                        handlers={handlers}
                        // onSubmit={onSubmit}
                        clientId={sessionId ? `/admin/plans/${sessionId}` : '/admin/plans/'}
                        method={sessionId ? 'patch' : 'post'}
                        onError={onError}>
                        <Typography variant='body2'>Client</Typography>

                        <Select
                            value={handlers.values.client}
                            fullWidth
                            name='client'
                            onChange={customChangeHandler}
                            sx={{ mb: 1 }}>
                            <MenuItem value='rehan'>Rehan</MenuItem>
                            <MenuItem value='ajay'>Ajay</MenuItem>
                            <MenuItem value='suhani'>Suhani</MenuItem>
                        </Select>
                        <Typography variant='body2'>Goal</Typography>

                        <Select
                            value={handlers.values.goal}
                            fullWidth
                            name='goal'
                            onChange={customChangeHandler}
                            sx={{ mb: 1 }}>
                            {Goals.map(goal => (
                                <MenuItem value={goal}>{goal}</MenuItem>
                            ))}
                        </Select>
                        <Typography variant='body2'>Activity</Typography>

                        <Select
                            value={handlers.values.activity}
                            fullWidth
                            name='activity'
                            onChange={customChangeHandler}
                            sx={{ mb: 1 }}>
                            <MenuItem value='The child would be shown various picture cards.'>
                                The child would be shown various picture cards.
                            </MenuItem>

                            <MenuItem value='The child would be made to follow simple two step commands.'>
                                The child would be made to follow simple two step commands.
                            </MenuItem>

                            <MenuItem value='The child would be shown various picture cards and be instructed to name.'>
                                The child would be shown various picture cards and be instructed to
                                name.
                            </MenuItem>

                            <MenuItem value='Test Activity #1'>Test Activity #1</MenuItem>
                        </Select>
                        <Typography variant='body2'>Department</Typography>

                        <Select
                            value={handlers.values.department}
                            fullWidth
                            name='department'
                            onChange={customChangeHandler}
                            sx={{ mb: 1 }}>
                            <MenuItem value='bt'>BT</MenuItem>
                            <MenuItem value='ot'>OT</MenuItem>
                            <MenuItem value='st'>ST</MenuItem>
                        </Select>
                        <Grid container columnSpacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='body2'>Start Time</Typography>
                                <Input name='startTime' variant='outlined' fullWidth type='time' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='body2'>End Time</Typography>
                                <Input name='endTime' variant='outlined' fullWidth type='time' />
                            </Grid>
                        </Grid>

                        <Typography variant='body2'>Score</Typography>

                        <Input name='score' variant='outlined' fullWidth type='number' />

                        <Typography variant='body2'>Observation</Typography>

                        <Input name='observation' variant='outlined' fullWidth />

                        <Stack
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center'
                            mt={2}>
                            <FormControlLabel
                                control={<Checkbox defaultChecked size='small' />}
                                componentsProps={{ typography: { variant: 'caption' } }}
                                label='I have read and agree to the Privacy Notice'
                            />

                            <Box textAlign='center'>
                                <Submit>
                                    {loader => (
                                        <Button
                                            variant='contained'
                                            type='submit'
                                            disabled={Boolean(loader)}
                                            sx={{
                                                fontWeight: '500',
                                                textTransform: 'capitalize',
                                                borderRadius: '8px',
                                                padding: '12px 28px',
                                            }}
                                            endIcon={loader}>
                                            {sessionId ? 'Edit Session' : 'Create Session'}
                                        </Button>
                                    )}
                                </Submit>
                            </Box>
                        </Stack>
                    </Form>
                )}
            </Box>
        </Card>
    );
};

export default CreateSession;
