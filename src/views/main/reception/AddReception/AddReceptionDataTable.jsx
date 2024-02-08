import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    CardContent,
    Checkbox,
    Grid,
    IconButton,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
    tableCellClasses,    
} from '@mui/material';
import { styled } from '@mui/material/styles';
import '@mui/lab';
import { visuallyHidden } from '@mui/utils';

// project imports
// import Chip from 'src/ui-component/extended/Chip';
//import AnimateButton from 'src/ui-component/extended/AnimateButton';
import MainCard from 'src/ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'src/store';
import { getCustomers } from 'src/store/slices/customer';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
//import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { data } from './Data';

// table sort
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const getComparator = (order, orderBy) =>
    order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// table header options
const headCells = [
    {
        id: 'name',
        numeric: false,
        label: 'Navn',
        align: 'left'
    },
    {
        id: 'producer',
        numeric: false,
        label: 'Produsent',
        align: 'left'
    },
    {
        id: 'year',
        numeric: true,
        label: 'Ar',
        align: 'left'
    },
    {
        id: 'costPriceEgVat',
        numeric: false,
        label: 'Kostpris eks MVA',
        align: 'left'
    },
    {
        id: 'number',
        numeric: true,
        label: 'Antall',
        align: 'left'
    },
    {
        id: 'total-cost-price',
        numeric: true,
        label: 'SUM kostpris',
        align: 'left'
    }    
];

// styles
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        //backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
        //backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light
    },
    // hide last border
    '&:last-of-type td, &:last-of-type th': {
        border: 0
    }
}));

// ==============================|| TABLE HEADER ||============================== //

function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, selected }) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <StyledTableRow>
                <StyledTableCell padding="checkbox" sx={{ pl: 3 }}>
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts'
                        }}
                    />
                </StyledTableCell>
                {numSelected > 0 && (
                    <StyledTableCell padding="none" colSpan={6}>
                        <EnhancedTableToolbar numSelected={selected.length} />
                    </StyledTableCell>
                )}
                {numSelected <= 0 &&
                    headCells.map((headCell) => (
                        <StyledTableCell
                            key={headCell.id}
                            align={headCell.align}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </StyledTableCell>
                    ))}
                {numSelected <= 0 && (
                    <StyledTableCell sortDirection={false} align="center" sx={{ pr: 3 }}>
                        Action
                    </StyledTableCell>
                )}
            </StyledTableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    selected: PropTypes.array,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};


function EnhancedTableFooter() {
    

    return (
        <TableHead>
            <StyledTableRow>
                    <StyledTableCell sortDirection={false} align="left" sx={{ pr: 3 }}>                        
                    </StyledTableCell>                
                    <StyledTableCell sortDirection={false} align="left" sx={{ pr: 3 }}>
                        Totalt
                    </StyledTableCell>
                    <StyledTableCell sortDirection={false} align="left" sx={{ pr: 3 }}>                        
                    </StyledTableCell> 
                    <StyledTableCell sortDirection={false} align="left" sx={{ pr: 3 }}>                        
                    </StyledTableCell>
                    <StyledTableCell sortDirection={false} align="left" sx={{ pr: 3 }}>                        
                    </StyledTableCell>
                    <StyledTableCell sortDirection={false} align="left" sx={{ pr: 3 }}>
                        45
                    </StyledTableCell>
                    <StyledTableCell sortDirection={false} align="left" sx={{ pr: 3 }}>
                        3563,43
                    </StyledTableCell>  
                    <StyledTableCell sortDirection={false} align="left" sx={{ pr: 3 }}>                        
                    </StyledTableCell>                  
            </StyledTableRow>
        </TableHead>
    );
}






// ==============================|| TABLE HEADER TOOLBAR ||============================== //

const EnhancedTableToolbar = ({ numSelected }) => (
    <Toolbar
        sx={{
            p: 0,
            pl: 1,
            pr: 1,
            ...(numSelected > 0 && {
                color: (theme) => theme.palette.secondary.main
            })
        }}
    >
        {numSelected > 0 ? (
            <Typography color="inherit" variant="h4">
                {numSelected} Selected
            </Typography>
        ) : (
            <Typography variant="h6" id="tableTitle">
                Nutrition
            </Typography>
        )}
        <Box sx={{ flexGrow: 1 }} />
        {numSelected > 0 && (
            <Tooltip title="Delete">
                <IconButton size="large">
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Tooltip>
        )}
    </Toolbar>
);

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

// ==============================|| CUSTOMER LIST ||============================== //
// autocomplete options

// const products = [
//     {
//         name: "Annie de Vos",
//         email: "icboz@gmail.com",
//         location: "1025 Mumej Parkway, Ecjalo, St. Helena - 71462",
//         orders: 5093,
//         date: "10.07.2023",
//         status: 1
//     },
//     {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         location: "123 Main Street, Cityville, USA - 12345",
//         orders: 567,
//         date: "15.08.2023",
//         status: 2
//     }
// ];


const AddReceptionDataTable = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    // const [data, setData] = React.useState([]);
    // React.useEffect(() => {
    //     setData(products);
    // }, []);

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [search, setSearch] = React.useState('');
    const [rows, setRows] = React.useState([]);
    const { customers } = useSelector((state) => state.customer);
    React.useEffect(() => {
        dispatch(getCustomers());
    }, [dispatch]);
    React.useEffect(() => {
        setRows(data);
    }, [data]);


    const handleSearch = (event) => {
        const newString = event?.target.value;
        setSearch(newString || '');

        if (newString) {
            const newRows = rows.filter((row) => {
                let matches = true;

                const properties = ['name', 'email', 'location', 'orders'];
                let containsQuery = false;

                properties.forEach((property) => {
                    if (row[property].toString().toLowerCase().includes(newString.toString().toLowerCase())) {
                        containsQuery = true;
                    }
                });

                if (!containsQuery) {
                    matches = false;
                }
                return matches;
            });
            setRows(newRows);
        } else {
            setRows(customers);
        }
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            if (selected.length > 0) {
                setSelected([]);
            } else {
                const newSelectedId = rows.map((n) => n.name);
                setSelected(newSelectedId);
            }
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event?.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <MainCard title="" content={false}>        
            <CardContent>                 
                <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }}
                            onChange={handleSearch}
                            placeholder="Søk:"
                            value={search}
                            size="small"
                        />
                    </Grid>                    
                    {/* <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>                       
                        <Tooltip title="Copy">
                            <IconButton size="large">
                                <FileCopyIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Print">
                            <IconButton size="large">
                                <PrintIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Filter">
                            <IconButton size="large">
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Add">
                            <Button variant="contained" startIcon={<AddIcon />} size='small'>
                                legge til
                            </Button>
                        </Tooltip>                                               
                    </Grid> */}
                </Grid>
            </CardContent>

            {/* table */}
            <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                    <EnhancedTableHead
                        theme={theme}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        selected={selected}
                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                /** Make sure no display bugs if row isn't an OrderData object */
                                if (typeof row === 'number') return null;
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <StyledTableRow
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={index}
                                        selected={isItemSelected}
                                    >
                                        <StyledTableCell padding="checkbox" sx={{ pl: 3 }} onClick={(event) => handleClick(event, row.name)}>
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId
                                                }}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.name}</StyledTableCell>
                                        <StyledTableCell align="left">{row.producer}</StyledTableCell>
                                        <StyledTableCell align="left">{row.year}</StyledTableCell>
                                        <StyledTableCell align="left">{row.costPriceEgVat}</StyledTableCell>
                                        <StyledTableCell align="left">{row.number}</StyledTableCell>                                        
                                        <StyledTableCell align="left">{row.totalCostPrice}</StyledTableCell>                                       
                                        

                                        {/* <TableCell align="center">
                                            {row.status === 1 && <Chip label="Complete" size="small" chipcolor="success" />}
                                            {row.status === 2 && <Chip label="Processing" size="small" chipcolor="orange" />}
                                            {row.status === 3 && <Chip label="Confirm" size="small" chipcolor="primary" />}
                                        </TableCell> */}
                                        <StyledTableCell align="center" sx={{ pr: 3 }}>
                                            <IconButton color="primary" size="large" aria-label="view">
                                                <VisibilityTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                                            </IconButton>
                                            <IconButton color="secondary" size="large" aria-label="edit">
                                                <EditTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                                            </IconButton>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <StyledTableRow
                                style={{
                                    height: 53 * emptyRows
                                }}
                            >
                                <StyledTableCell colSpan={6} />
                            </StyledTableRow>
                        )}
                    </TableBody>
                    <EnhancedTableFooter
                        
                    />
                </Table>
            </TableContainer>

            {/* table pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </MainCard>
    );
};

export default AddReceptionDataTable;
