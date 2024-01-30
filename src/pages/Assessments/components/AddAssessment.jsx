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
import React, { useMemo } from 'react';
import { Form, Submit, useForm } from '../../../hooks/useForm';
import { useMessage } from '../../../components/Header';

const AddAssessment = () => {
    const { showError } = useMessage();

    const handlers = useForm(
        useMemo(
            () => ({
                name: { required: true },
                assessment: { required: true },
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
    //             assessment,
    //

    //         } = plan;
    //         setValues({
    //             name,
    //             assessment,
    //
    //         });
    //
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
                    Add Assessment
                </Typography>

                <Form
                    handlers={handlers}
                    // onSubmit={onSubmit}
                    clientId={'/admin/plans/'}
                    method='post'
                    onError={onError}>
                    <Typography variant='body2'>Client name</Typography>

                    <Select
                        value={handlers.values.name}
                        fullWidth
                        name='name'
                        onChange={customChangeHandler}
                        sx={{ mb: 1 }}>
                        <MenuItem value='rehan'>Rehan</MenuItem>
                        <MenuItem value='ajay'>Ajay</MenuItem>
                        <MenuItem value='suhani'>Suhani</MenuItem>
                    </Select>
                    <Typography variant='body2'>Assessment</Typography>

                    <Select
                        value={handlers.values.assessment}
                        fullWidth
                        name='assessment'
                        onChange={customChangeHandler}
                        sx={{ mb: 1 }}>
                        <MenuItem value='bt'>BT</MenuItem>
                        <MenuItem value='ot'>OT</MenuItem>
                        <MenuItem value='st'>ST</MenuItem>
                    </Select>

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
                                        Add Assessment
                                    </Button>
                                )}
                            </Submit>
                        </Box>
                    </Stack>
                </Form>
            </Box>
        </Card>
    );
};

export default AddAssessment;
