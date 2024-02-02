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

const NewGoal = () => {
    const { goalId } = useParams();
    const [loading] = useState(false);

    const { showError } = useMessage();

    const handlers = useForm(
        useMemo(
            () => ({
                client: { required: true },
                goal: { required: true },
                category: { required: true },
                department: { required: true },
                setDate: { required: true },
                targetDate: { required: true },
                status: { required: true },
                remark: { required: true },
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
                {goalId ? 'Edit Goal' : 'New Goal'}
            </Typography>
            <Divider variant='fullWidth' />
            {loading ? (
                <Loading message='Please wait, while your credentials are loading...' />
            ) : (
                <Form
                    handlers={handlers}
                    // onSubmit={onSubmit}
                    clientId={goalId ? `/admin/plans/${goalId}` : '/admin/plans/'}
                    method={goalId ? 'patch' : 'post'}
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
                                <Input
                                    name='client'
                                    variant='outlined'
                                    size='small'
                                    sx={{ width: 316 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Department
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
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
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Category
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Select
                                    value={handlers.values.category}
                                    fullWidth
                                    name='category'
                                    onChange={customChangeHandler}
                                    sx={{ width: 316 }}>
                                    <MenuItem value='receptive'>Receptive</MenuItem>
                                    <MenuItem value='expressive'>Expressive</MenuItem>
                                    <MenuItem value='pre-linguistic'>Pre - Linguistic</MenuItem>
                                    <MenuItem value='speech'>Speech</MenuItem>
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
                                    Set Date
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='setDate'
                                    variant='outlined'
                                    type='date'
                                    sx={{ width: 316 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Target Date
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Input
                                    name='targetDate'
                                    variant='outlined'
                                    type='date'
                                    sx={{ width: 316 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Status
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10}>
                                <Select
                                    value={handlers.values.status}
                                    fullWidth
                                    name='status'
                                    onChange={customChangeHandler}
                                    sx={{ width: 316 }}>
                                    <MenuItem value='in-progress'>In Progress</MenuItem>
                                    <MenuItem value='achieved'>Achieved</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Grid container columnSpacing={5} rowSpacing={1} alignItems='center' mb={2}>
                            <Grid item xs={12} lg>
                                <Typography variant='body2' fontWeight={600}>
                                    Remark
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={10} display='flex' spacing={2}>
                                <Input
                                    name='remark'
                                    variant='outlined'
                                    type='time'
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

export default NewGoal;
