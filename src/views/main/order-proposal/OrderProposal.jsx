// //import * as React from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';

// const rows = [
//   {
//     id: 1,
//     username: '@MUI',
//     age: 38,
//     desk: 'D-546',
//   },
//   {
//     id: 2,
//     username: '@MUI-X',
//     age: 25,
//     desk: 'D-042',
//   },
// ];

// export default function OrderProposal() {
//   return (
//     <div style={{ height: 250, width: '500%' }}>
//       <DataGrid
//         columns={[
//           { field: 'username', hideable: false },
//           { field: 'age' },
//           { field: 'desk' },
//         ]}
//         rows={rows}
//         slots={{
//           toolbar: GridToolbar,
//         }}
//       />
//     </div>
//   );
// }


// import PropTypes from 'prop-types';
import * as React from 'react';
import { CSVExport } from './TableExports';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Stack, Divider, CardContent,InputLabel, Select, MenuItem, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MainCard from 'src/ui-component/cards/MainCard';
import { gridSpacing } from 'src/store/constant';




// table columns
const columns = [
    {
        field: 'itemNo', headerName: 'Varenr', width: 200,
        headerAlign: 'left',
    },
    {
        field: 'name', headerName: 'Navn', width: 350,
        headerAlign: 'left',
    },
    {
        field: 'minStock', headerName: 'Min. lager', width: 140,
        headerAlign: 'left',
    },
    {
        field: 'maxStock', headerName: 'Max. lager', width: 140,
        headerAlign: 'left',
    },
    {
        field: 'inStock', headerName: 'På lager', width: 140,
        headerAlign: 'left',editable: true,
    },
    {
        field: 'reserves', headerName: 'Reservert', width: 140,
        headerAlign: 'left',
    },
    {
        field: 'available', headerName: 'Tilgjengelig', width: 155,
        headerAlign: 'left',
    },
    {
        field: 'paVei', headerName: 'På vei ai', width: 140,
        headerAlign: 'left',
    },
    {
        field: 'unknown1', headerName: 'unknown-1', width: 150,
        headerAlign: 'left',
    },
    {
        field: 'unknown2', editable: true, type: "singleSelect", headerName: 'unknown-2', valueOptions: ["United Kingdom", "Spain", "Brazil"], width: 150,
        headerAlign: 'left',
    }
];

// table data
const rows = [
    {   id:1, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },
    {   id:2, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:3, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:4, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:5, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:6, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:7, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:8, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:9, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:10, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:11, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:12, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:13, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:14, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },{   id:15, 
        itemNo: 12222222222, 
        name: "Streektkoder tesdt diverse genser hdhhdhhs jhsjjsjxsaihs hadusauiwdaschsa bsaduhusacusaucsac",
        minStock: 0, 
        maxStock: 0, 
        inStock: 35,
        reserves: 0,
        available: 0,
        paVei: 0,
        unknown1: 0,
        unknown2: 0
    },
    
];

// ==============================|| TABLE - BASIC DATA GRID ||============================== //
export default function OrderProposal() {
    const theme = useTheme();
    const [selectedValue, setSelectedValue] = React.useState([]);
    const handlerClick = (data) => {
        setSelectedValue(data);
    };

    const NewValue = selectedValue.length > 0 ? selectedValue : rows;

    return (
        <Grid item xs={12} sx={{overflow: "hidden" }}>
            <MainCard
                content={false}
                title="Bestillingsforslag"
                secondary={
                    <Stack direction="row" spacing={2} alignItems="center">
                        <CSVExport data={NewValue} filename="data-grid-table.csv" header={columns} />
                    </Stack>
                }
                sx={{overflow: "hidden" }}
            >
                <CardContent>
                <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} lg={12/5}>
                            <Stack>
                                <InputLabel>Produsent</InputLabel>
                                <Select
                                    id="orderStatus"
                                    name="orderStatus" 
                                    size='small'                                       
                                >
                                    <MenuItem value="pending">Produsent</MenuItem>
                                    <MenuItem value="refund">Produsent</MenuItem>
                                    <MenuItem value="paid">Produsent</MenuItem>
                                </Select>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={12/5}>
                            <Stack>
                                <InputLabel>Leverandør</InputLabel>
                                <Select
                                    id="orderStatus"
                                    name="orderStatus" 
                                    size='small'                                       
                                >
                                    <MenuItem value="pending">Leverandør</MenuItem>
                                    <MenuItem value="refund">Leverandør</MenuItem>
                                    <MenuItem value="paid">Leverandør</MenuItem>
                                </Select>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={12/5}>
                            <Stack>
                                <InputLabel>Kategori</InputLabel>
                                <Select
                                    id="orderStatus"
                                    name="orderStatus"
                                    size='small'                                        
                                >
                                    <MenuItem value="pending">Kategori</MenuItem>
                                    <MenuItem value="refund">Kategori</MenuItem>
                                    <MenuItem value="paid">Kategori</MenuItem>
                                </Select>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={12/5}>
                            <Stack>
                                <InputLabel>Argang</InputLabel>
                                <Select
                                    id="orderStatus"
                                    name="orderStatus" 
                                    size='small'                                       
                                >
                                    <MenuItem value="pending">Argang</MenuItem>
                                    <MenuItem value="refund">Argang</MenuItem>
                                    <MenuItem value="paid">Argang</MenuItem>
                                </Select>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={12/5}>
                            <Stack>                         
                                
                                <Button  sx={{ mt: 2.5}}variant="contained" color="secondary">
                                    Søk
                                </Button>
                            </Stack>
                        </Grid>
                        
                        
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                </Grid>
                
                
            </CardContent>
                {/* table data grid */}
                <Box
                    sx={{   
                        p: 2,                     
                        width: '100%',  
                        overflow: "hidden"                     
                    }}
                >
                    <DataGrid   
                        getRowHeight={() => 'auto'}                  
                        rows={rows}
                        columns={columns}
                        onSelectionModelChange={(newSelectionModel) => {
                            const selectedIDs = new Set(newSelectionModel);
                            const selectedRowData = rows.filter((row) => selectedIDs.has(row.id));
                            handlerClick(selectedRowData);
                        }}
                        pageSize={5}
                        //rowsPerPageOptions={[5, 10, 15]}
                        initialState={{
                            ...rows,
                            pagination: { paginationModel: { pageSize: 5 } },
                          }}
                        pageSizeOptions={[5, 10, 25]}
                        checkboxSelection
                        disableDensitySelector={true}
                        sx={{
                            
                            "& .MuiDataGrid-cell": {
                                border: "1px solid lightgray",
                                borderRight: 0,
                                borderTop: 0,                        
                                
                            },
                            '& .MuiDataGrid-columnHeader': {
                                backgroundColor: theme.palette.action.hover,
                                border: "1px solid lightgray"
                            },
                            overflow: "hidden"
                            
                        }}
                        slots={{ toolbar: GridToolbar }}
                        
                    />
                </Box>
            </MainCard>
        </Grid>

    );
}

