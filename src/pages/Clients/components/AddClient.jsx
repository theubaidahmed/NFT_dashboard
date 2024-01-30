import {
    Checkbox,
    FormControlLabel,
    MenuItem,
    Select,
    TextField,
    Stack,
    Card,
    Divider,
} from '@mui/material';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Form, Submit, useForm } from '../../../hooks/useForm';
import { Input } from '../../../hooks/useForm/inputs/index';
import { useMessage } from '../../../components/Header';
import Loading from '../../../components/Loading';

const AddClient = props => {
    const { clientId } = props;
    const [loading] = useState(false);

    const { showError } = useMessage();

    const handlers = useForm(
        useMemo(
            () => ({
                name: { required: true },
                email: { required: true },
                branch: { required: true },
                fatherName: { required: true },
                motherName: { required: true },
                address: { required: true },
                gender: { required: true },
                phone: { required: true },

                alternatePhone: '',
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
                    {clientId ? 'Edit Client' : 'Add Client'}
                </Typography>
                {loading ? (
                    <Loading message='Please wait, while your Plan is loading...' />
                ) : (
                    <Form
                        handlers={handlers}
                        // onSubmit={onSubmit}
                        clientId={clientId ? `/admin/plans/${clientId}` : '/admin/plans/'}
                        method={clientId ? 'patch' : 'post'}
                        onError={onError}>
                        <Typography variant='subtitle2' fontWeight='bold' gutterBottom>
                            Demographics*
                        </Typography>
                        <Grid container columnSpacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='body2'>Name</Typography>
                                <Input name='name' variant='outlined' fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='body2'>Gender</Typography>

                                <Select
                                    value={handlers.values.gender}
                                    fullWidth
                                    name='gender'
                                    onChange={customChangeHandler}>
                                    <MenuItem value='male'>Male</MenuItem>
                                    <MenuItem value='female'>Female</MenuItem>
                                    <MenuItem value='other'>Other</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Stack direction='row'>
                            <Typography variant='subtitle2' fontWeight='bold' gutterBottom>
                                Address*
                            </Typography>
                            <Divider variant='fullWidth' flexItem orientation='horizontal' />
                        </Stack>
                        <Grid container columnSpacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='body2'>Phone</Typography>
                                <Input name='phone' variant='outlined' fullWidth type='number' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='body2'>Alternate Phone</Typography>
                                <Input
                                    name='alternatePhone'
                                    variant='outlined'
                                    fullWidth
                                    type='number'
                                />
                            </Grid>
                        </Grid>

                        <Typography variant='body2'>Email</Typography>

                        <Input name='email' variant='outlined' fullWidth />

                        <Grid container columnSpacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='body2'>Father Name</Typography>
                                <Input name='fatherName' variant='outlined' fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant='body2'>Mother Name</Typography>
                                <Input name='motherName' variant='outlined' fullWidth />
                            </Grid>
                        </Grid>

                        <Typography variant='body2'>Branch</Typography>

                        <Input name='branch' variant='outlined' fullWidth />

                        <Typography variant='body2'>Address</Typography>

                        <Input name='address' variant='outlined' fullWidth />

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
                                            {clientId ? 'Edit Client' : 'Add Client'}
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

export default AddClient;
