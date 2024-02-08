import React from 'react';

// material-ui
import {
    Grid,
    TextField,
    Button,
    Autocomplete,
    Checkbox,
    Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MuiTypography from '@mui/material/Typography';

// project imports
import MainCard from 'src/ui-component/cards/MainCard';
import InputLabel from 'src/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'src/store/constant';

const options = ['Hvitvin', 'Hvitvin=>Frankrike', 'Hvitvin=>Frankrike=>Alsace', 'Hvitvin=>Frankrike=>Bordeaux', 'Hvitvin=>Frankrike=>Borgund'];
const years = ["2017", "2018", "2019", "2020", "2021"];


// ==============================|| Columns Layouts ||============================== //
function AddProducts() {
    const theme = useTheme();
    const [value, setValue] = React.useState(options[0]);
    const [yearValue, setYearValue] = React.useState(years[0])
    const [inputValue, setInputValue] = React.useState('');
    const [yearInputValue, setYearInputValue] = React.useState('');

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Legg til brukere">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <InputLabel required>Navn</InputLabel>
                            <TextField required fullWidth placeholder="Enter Navn" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Ar</InputLabel>
                            <Autocomplete
                                value={yearValue}
                                onChange={(event, newValue) => newValue && setYearValue(newValue)}
                                inputValue={yearInputValue}
                                onInputChange={(event, newInputValue) => {
                                    setYearInputValue(newInputValue);
                                }}
                                id="controllable-states-demo"
                                options={years}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <InputLabel>Strekkode</InputLabel>
                            <TextField fullWidth placeholder="Enter Strekkode" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>I slag</InputLabel>
                            <Checkbox defaultChecked color="primary" />
                        </Grid>


                        <Grid item xs={12} lg={6}>
                            <InputLabel>Produsent</InputLabel>
                            <TextField fullWidth placeholder="Enter Produsent" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel required>Kategori</InputLabel>
                            <Autocomplete
                                value={value}
                                onChange={(event, newValue) => newValue && setValue(newValue)}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                id="controllable-states-demo"
                                options={options}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <InputLabel>Leverander</InputLabel>
                            <Autocomplete
                                value={value}
                                onChange={(event, newValue) => newValue && setValue(newValue)}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                id="controllable-states-demo"
                                options={options}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid> 
                    </Grid>


                    <Grid container alignItems="center" spacing={3} mt={2} mb={3}>
                        <Grid container spacing={2} item xs={12} md={6}>
                            <Grid item xs={12} lg={3}>
                                <InputLabel>Kostpris eks MVA</InputLabel>
                                <TextField
                                    type="number"
                                    fullWidth
                                    id="customerPhone"
                                    name="customerPhone"
                                    // value={formik.values.customerPhone}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.customerPhone && Boolean(formik.errors.customerPhone)}
                                    // helperText={formik.touched.customerPhone && formik.errors.customerPhone}
                                    // onChange={formik.handleChange}
                                    placeholder="417.20"
                                />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <InputLabel>Paslag til for handler %</InputLabel>
                                <TextField
                                    type="number"
                                    fullWidth
                                    id="customerPhone"
                                    name="customerPhone"
                                    // value={formik.values.customerPhone}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.customerPhone && Boolean(formik.errors.customerPhone)}
                                    // helperText={formik.touched.customerPhone && formik.errors.customerPhone}
                                    // onChange={formik.handleChange}
                                    placeholder="417.20"
                                />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <InputLabel>Utsalgpris eks MVA</InputLabel>
                                <TextField
                                    type="number"
                                    fullWidth
                                    id="customerPhone"
                                    name="customerPhone"
                                    // value={formik.values.customerPhone}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.customerPhone && Boolean(formik.errors.customerPhone)}
                                    // helperText={formik.touched.customerPhone && formik.errors.customerPhone}
                                    // onChange={formik.handleChange}
                                    placeholder="417.20"
                                />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <InputLabel>Utsalgpris inkl MVA</InputLabel>
                                <TextField
                                    type="number"
                                    fullWidth
                                    id="customerPhone"
                                    name="customerPhone"
                                    // value={formik.values.customerPhone}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.customerPhone && Boolean(formik.errors.customerPhone)}
                                    // helperText={formik.touched.customerPhone && formik.errors.customerPhone}
                                    // onChange={formik.handleChange}
                                    placeholder="417.20"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>



                        <Grid container spacing={2} item xs={12} md={6}>
                            <Grid item xs={12} lg={4}>
                                <InputLabel>Lagersaldo</InputLabel>
                                <TextField
                                    type="number"
                                    fullWidth
                                    id="customerPhone"
                                    name="customerPhone"
                                    // value={formik.values.customerPhone}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.customerPhone && Boolean(formik.errors.customerPhone)}
                                    // helperText={formik.touched.customerPhone && formik.errors.customerPhone}
                                    // onChange={formik.handleChange}
                                    placeholder="417.20"
                                />
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <InputLabel>Minimum Lagersaldo</InputLabel>
                                <TextField
                                    type="number"
                                    fullWidth
                                    id="customerPhone"
                                    name="customerPhone"
                                    // value={formik.values.customerPhone}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.customerPhone && Boolean(formik.errors.customerPhone)}
                                    // helperText={formik.touched.customerPhone && formik.errors.customerPhone}
                                    // onChange={formik.handleChange}
                                    placeholder="417.20"
                                />
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <InputLabel>Maksimum Lagersaldo</InputLabel>
                                <TextField
                                    type="number"
                                    fullWidth
                                    id="customerPhone"
                                    name="customerPhone"
                                    // value={formik.values.customerPhone}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.customerPhone && Boolean(formik.errors.customerPhone)}
                                    // helperText={formik.touched.customerPhone && formik.errors.customerPhone}
                                    // onChange={formik.handleChange}
                                    placeholder="417.20"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <MuiTypography variant="caption" display="block" gutterBottom>
                                Opprettet av: Marius
                            </MuiTypography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <MuiTypography variant="caption" display="block" gutterBottom>
                                Opprettet: 21.05.2020 13:45
                            </MuiTypography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <MuiTypography variant="caption" display="block" gutterBottom>
                                Oppdatert av: Marius
                            </MuiTypography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <MuiTypography variant="caption" display="block" gutterBottom>
                                Oppdatert av: MariusEndret: 19.06.2021 21:28
                            </MuiTypography>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <Grid container alignItems="center" justifyContent="flex-start" spacing={2}>
                                <Grid item>
                                    <Button variant="contained" color="secondary">
                                        Lagre
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="error">Tilbake</Button>
                                </Grid>
                                <Grid item>
                                    <Button sx={{
                                        background: theme.palette.warning.dark,
                                        '&:hover': { background: theme.palette.warning.main },
                                        
                                    }}
                                        variant="contained" color="error">Dupliser produkt</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default AddProducts;
