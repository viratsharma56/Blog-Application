import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { Link } from "react-router-dom";

const mystyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    }
})

const Categories = () => {
    const style = mystyle();
    return (
        <>
        <Link to="/createpost" style={{textDecoration: 'none', color: 'inherit'}}><Button variant="contained" className={style.create} style={{margin: 20, background: '#6495ED', color: '#fff', width: '86%'}}>Create Blog</Button></Link>
        <Table className={style.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Categories</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Life</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Music</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Style</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Sport</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tech</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </>
    )
}

export default Categories
