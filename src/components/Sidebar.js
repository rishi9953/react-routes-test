import React from 'react';
import './Dashboard.css';
import { SidebarData } from './SidebarData';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
            {
                SidebarData.map((val, key) => {
                    return(
                        <li 
                        key={key} 
                        className="row"
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link}}>
                            {""}
                            <div id="icon">
                                {val.icon}
                            </div>{""}
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}






// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import Header from './Header';

// const drawerWidth = 240;

// export default function Sidebar() {
//   return (
//     <Box sx={{ display: 'flex'}}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
//       >
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           zIndex: -100,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {['Dashboard', 'Tables', 'Notifications'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['Profile', 'Sign In', 'settings'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//     </Box>
//   );
// }





// import 'react-bootstrap-drawer/lib/style.css';
// import React, { useState } from 'react';
// import {
//     Col,
//     Collapse,
//     Container,
//     Row,
// } from 'react-bootstrap';
// import { Drawer } from 'react-bootstrap-drawer';

// const Sidebar = (props) => {
//     const [open, setOpen] = useState(false);

//     const handleToggle = () => setOpen(!open);

//     return (
//         <Drawer { ...props }>
//             <Drawer.Toggle onClick={ handleToggle } />

//             <Collapse in={ open }>
//                 <Drawer.Overflow>
//                     <Drawer.ToC>
//                         <Drawer.Header href="/">Application</Drawer.Header>

//                         <Drawer.Nav>
//                             <Drawer.Item href="/settings">Settings</Drawer.Item>
//                         </Drawer.Nav>
//                     </Drawer.ToC>
//                 </Drawer.Overflow>
//             </Collapse>
//         </Drawer>
//     );
// };

// export default Sidebar;




// import React from "react";
// import {Nav} from "react-bootstrap";
// import { withRouter } from "react-router";
// import '../components/Dashboard.css';

// const Sidebar = props => {
   

//     return (
//         <>
    
//             <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
//             activeKey="/home"
//             onSelect={selectedKey => alert(`selected ${selectedKey}`)}
//             >
//                 <div className="sidebar-sticky"></div>
//             <Nav.Item>
//                 <Nav.Link href="/home">Active</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="link-1">Link</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="link-2">Link</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="disabled" disabled>
//                 Disabled
//                 </Nav.Link>
//             </Nav.Item>
//             </Nav>
          
//         </>
//         );
//   };
//   export default Sidebar