import {
    Checkbox,
    FormControlLabel,
    MenuItem,
    Select,
    TextField,
    Stack,
    Card,
} from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
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

const SetGoal = props => {
    const { goalId } = props;
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
                    {goalId ? 'Edit Goal' : 'Set Goal'}
                </Typography>
                {loading ? (
                    <Loading message='Please wait, while your Plan is loading...' />
                ) : (
                    <Form
                        handlers={handlers}
                        // onSubmit={onSubmit}
                        clientId={goalId ? `/admin/plans/${goalId}` : '/admin/plans/'}
                        method={goalId ? 'patch' : 'post'}
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
                        <Typography variant='body2'>Category</Typography>

                        <Select
                            value={handlers.values.category}
                            fullWidth
                            name='category'
                            onChange={customChangeHandler}
                            sx={{ mb: 1 }}>
                            <MenuItem value='receptive'>Receptive</MenuItem>
                            <MenuItem value='expressive'>Expressive</MenuItem>
                            <MenuItem value='pre-linguistic'>Pre - Linguistic</MenuItem>
                            <MenuItem value='speech'>Speech</MenuItem>
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

                        <Typography variant='body2'>Set Date</Typography>
                        <Input name='setDate' variant='outlined' fullWidth type='date' />

                        <Typography variant='body2'>Target Date</Typography>
                        <Input name='targetDate' variant='outlined' fullWidth type='date' />

                        <Typography variant='body2'>Status</Typography>
                        <Select
                            value={handlers.values.status}
                            fullWidth
                            name='status'
                            onChange={customChangeHandler}
                            sx={{ mb: 1 }}>
                            <MenuItem value='in-progress'>In Progress</MenuItem>
                            <MenuItem value='achieved'>Achieved</MenuItem>
                        </Select>

                        <Typography variant='body2'>Remark</Typography>

                        <Input name='remark' variant='outlined' fullWidth />

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
                                            {goalId ? 'Edit Goal' : 'Set Goal'}
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

export default SetGoal;
