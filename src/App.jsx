// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
// import AlarmIcon from '@mui/icons-material/Alarm';
// import Badge, { badgeClasses } from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

// const CartBadge = styled(Badge)`
//   & .${badgeClasses.badge} {
//     top: -12px;
//     right: -6px;
//   }
// `;
// function App() {
//   return (
//     <>
//       <Button variant="outlined" dhref="#text-buttons" color="success" size="small" startIcon={<DeleteIcon />} >Outlined</Button>
//       <IconButton aria-label="delete">
//         <DeleteIcon />
//       </IconButton>
//       <IconButton color="secondary" aria-label="add an alarm">
//         <AlarmIcon />
//       </IconButton>

//       <IconButton>
//       <ShoppingCartIcon fontSize="small" />
//       <CartBadge badgeContent={12} color="primary" overlap="circular" />
//     </IconButton>
//     </>
//   )
// }

import WeatherApp from "./WeatherApp";

function App() {
  return (
    <>  
      <WeatherApp/>
    </>
  )
}

export default App;
