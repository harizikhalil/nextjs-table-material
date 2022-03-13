import React,{useState} from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@material-ui/core/Avatar';

//import CardHeader from '@mui/material/CardHeader';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
//import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
function createData(name: string, email: string, phone: string, joined: string,active:boolean,status:string) {
    return {name, email, phone, joined,active,status};
}
const rows = [
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'Apr 12,201888',true,"Buisnis sedeveloper"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'Apr 12,2018',true,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'janvier 2019',false,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'janvier 2019',false,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'Apr 12,201888',true,"Buisnisse developer"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'Apr 12,2018',true,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'janvier 2019',false,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'janvier 2019',false,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'Apr 12,201888',true,"Buisnisse developer"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'Apr 12,2018',true,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'janvier 2019',false,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'janvier 2019',false,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'Apr 12,201888',true,"Buisnisse developer"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'Apr 12,2018',true,"director"),
    createData('Frozen yoghurt', 'john@gmail.com', '12545668845214', 'janvier 2019',false,"director"),

];
const Colomuns =[
  {ColumnName:"NAME"},
  {ColumnName:"EMAIL"},
  {ColumnName:"Phone"},
  {ColumnName:"Joined"},
  {ColumnName:"Active"},
  {ColumnName:"statuts"},
  {ColumnName:"edit"},
  {ColumnName:"Delete"},

]
const table = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    console.log("rows",rows.length)
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  /*const handlechange =(e)=>{
      console.log(e.target.checked)
  }*/
    return (
      
      
      <Paper style={{width:"80%",margin:"70px 0 0 140px",backgroundColor:"#f5e9dc",border:"1px solid #f5e9dc"}}>
        <TableContainer sx={{ maxHeight: 440 }}>
                   
                    <Table  stickyHeader aria-label="sticky table" >
                        <TableHead >
                            <TableRow >

                              {
                                Colomuns.map((colum,index)=>{
                                  return <TableCell key={index} style={{backgroundColor:"#dacbb8"}}>{colum.ColumnName}</TableCell>
                                })
                              }
                                
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => (
                                <TableRow key={index} >

                                        <TableCell   style={{padding:"8px"}}>
                                        
                                       
                                     <div style={{display:"flex",alignItems:"center"}}>
                                     <Avatar
                                  alt="Remy Sharp"
                               src="/static/images/avatar/1.jpg"
                              
                                   />
                                      <p style={{marginLeft:"8px",whiteSpace: "nowrap"}}>{row.name}</p>    
                                          </div> 
                               
                                      
                                        </TableCell>
                                        <TableCell  style={{padding:"8px"}}>
                                            <p >{row.email}</p>
                                        
                                        </TableCell>
                                        <TableCell  style={{padding:"8px"}}>
                                        {row.phone}
                                        </TableCell >
                                        <TableCell  style={{padding:"8px"}}>
                                        <p style={{whiteSpace: "nowrap"}}> {row.joined}</p>
                                        </TableCell>
                                        <TableCell  style={{padding:"8px"}}>
                                        
                                      <Switch checked={row.active}  color="success"/>
                                        </TableCell>
                                        <TableCell  style={{padding:"8px"}}>
                                       {row.status}
                                        </TableCell>
                                        <TableCell>
                                        <EditIcon/>
                                        </TableCell>
                                        <TableCell>
                                       <CloseIcon/>
                                        </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                
                    </Table>
             
                
           
                </TableContainer>
                 <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{backgroundColor:"#f5e9dc"}}
        />
      </Paper>
      
    );
}

export default table