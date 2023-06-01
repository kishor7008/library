import React from 'react'
import { Link } from 'react-router-dom'
// import Login from './Login'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Login } from './Login';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Heading() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <header>
                <div class="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div class="full">
                                    <div class="center-desk">
                                        <div class="logo"> <a href="index.html"><img src="images/logo.png" alt="#" /></a> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div class="menu-area">
                                    <div class="limit-box">
                                        <nav class="main-menu">
                                            <ul class="menu-area-main">
                                                <li class="active"> <Link to='/'>Home</Link> </li>
                                                <li> <Link to="/aboutus">About us</Link> </li>
                                                <li><Link to="/books">Our Books</Link></li>
                                                <li><Link to="/library">library</Link></li>
                                                <li><Link to='/contactus'>Contact us</Link></li>
                                                <li onClick={handleOpen} style={{color :"white", fontWeight:"500"}}> LOGIN</li>
                                                <li><Link to='/'>Register</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login Modal */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Login/>
                </Modal>
            </header>
        </>
    )
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// export const Login = () => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

//     return (
//         <div>
//             <Button onClick={handleOpen}>Open modal</Button>
            // <Modal
            //     open={open}
            //     onClose={handleClose}
            //     aria-labelledby="modal-modal-title"
            //     aria-describedby="modal-modal-description"
            // >
            //     <Box sx={style}>
            //         <Typography id="modal-modal-title" variant="h6" component="h2">
            //             Text in a modal
            //         </Typography>
            //         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            //         </Typography>
            //     </Box>
            // </Modal>
//         </div>
//     );
// }

