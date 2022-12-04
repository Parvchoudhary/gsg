// Importing files from Material-UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@mui/material';
import './Navbar.css';

import {Link,useNavigate} from "react-router-dom";

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
root: {
	flexGrow: 1,
},
menuButton: {
	marginRight: theme.spacing(2),
},
}));

export default function Navbar() {
const classes = useStyles();

return (
	<div className={classes.root}>
	<AppBar position="static" style={{background:"#fff",marginTop:"-0.5%",width:"102%",height:"5vw",marginLeft:"-1%"}}>
		<Toolbar variant="dense" className='toolBar'>
		<Typography variant="h6" style={{color: "#4D9762" ,fontSize:"1.2rem"}}>
			Investor
		</Typography>
        <Typography variant="h6" style={{color:"#000" , marginLeft:"3%",fontSize:"1.2rem"}}>
			Co-founders
		</Typography>
        <Typography variant="h6" style={{color:"#000" , marginLeft:"3%",fontSize:"1.2rem"}}>
			Notifications
		</Typography>
        <Button
        variant="contained"
        sx={{marginLeft:"3%",marginRight:"2%",background: "#4D9762", 
    }}
        >
            <Link to="/investor/startuplist" style={{color:"#fff",textDecoration: "none",'&hover':{background: "#000"}}}>Explore</Link>
        </Button>
		</Toolbar>
		
	</AppBar>
	</div>
);
}
