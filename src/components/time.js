import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function BasicCard() {
  const [unassigned_problem,setunassigned_problem]=React.useState(15)
  const[open_problems,setopen_problems]=React.useState(2);
  const[unacknowledged,setunacknowledged]=React.useState(11);
  const[open_known_errors,setopen_known_errors]=React.useState(25);
    return (
    <div className="jos">
      <div className="card">
    <Card  sx={{ width:300,height:200,marginTop:"12px",background:"red",marginLeft:"25px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:"bold"}} color="text.secondary" gutterBottom>
          Open Problems
        </Typography>
         <Typography variant="h1" component="div" style={{textAlign:"center",fontSize:"40"}}>
          
          {open_problems}
          
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </div>
    <div className="card1">
    <Card    sx={{ width:300,height:200,display:"grid",background:"green",marginTop:"12px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:"bold"}} color="text.secondary" gutterBottom>
          Unassigned Problems
        </Typography>
        <Typography variant="h1" component="div">
          {unassigned_problem}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>
    <div className="card2">
    <Card sx={{ width:300,height:200,display:"grid",background:"orange",marginTop:"12px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:"bold",Padding:0}} color="text.secondary" gutterBottom>
         Unacknowledged Problems
        </Typography>
        <Typography variant="h1" component="div">
          {unacknowledged}
        </Typography>
      </CardContent>
      <CardActions>
      
      </CardActions>
    </Card>
    </div>
    <div className="card3">
    <Card sx={{ width:300,height:200,marginTop:"12px",background:"blue",display:"flex",hover:"true"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:"bold"}} color="text.secondary" gutterBottom>
          Open Known Errors
        </Typography>
        <div className="me">
        <Typography variant="h1" style={{position:"center"}}component="div">
          {open_known_errors}
        </Typography>
        </div>

       
      </CardContent>
      <CardActions>
  
      </CardActions>
    </Card>
    </div> 
    </div>
  );
}