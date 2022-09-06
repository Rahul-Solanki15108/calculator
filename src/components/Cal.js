import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { loadButtons, loadAllClear, loadBackSpace, loadAnswer } from '../store/actions/CalActions';
import ManageForm from './Calculator/FormComponents/ManageForm';
import { useDispatch, useSelector } from 'react-redux';

export default function Cal() {
    const dispatch = useDispatch();
    const calcObj = useSelector(state => state.calc);
    return (
        <>
            <Container maxWidth="sm" sx={{ marginTop: 10 }}>
                <Box sx={{ height: '80vh' }} >
                    <Grid container justifyContent="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <ManageForm initialValues={calcObj} />
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons('*')) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                *
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons('x2')) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                x2
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons('.')) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                .
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons('-')) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                -
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons(7)) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                7
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons(8)) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                8
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button sx={{ width: '100%', height: 50, fontSize: 20 }}
                                onClick={() => { dispatch(loadButtons(9)) }}>
                                9
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons('/')) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                /
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                sx={{ width: '100%', height: 50, fontSize: 20 }}
                                onClick={() => { dispatch(loadButtons(4)) }}>
                                4
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons(5)) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                5
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons(6)) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                6
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons('%')) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                %
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons(1)) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                1
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons(2)) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                2
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons(3)) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                3
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons('+')) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                +
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadAllClear()) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                AC
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadBackSpace()) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                C
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadButtons(0)) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                0
                            </Button>
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 1 }}>
                            <Button
                                onClick={() => { dispatch(loadAnswer()) }}
                                sx={{ width: '100%', height: 50, fontSize: 20 }}>
                                =
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
