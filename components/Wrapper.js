import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> 
        </Box>*/}
        {props.children}
      </Modal>
    </div>
  );
}




// import styled from 'styled-components'
// // import ScrollLock from 'react-scrolllock'
// import { motion } from 'framer-motion'

// const StyledBackdrop = styled(motion.div)`
//     position: fixed;
//     top: 0;
//     left: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100vh;
//     z-index: 999;
//     background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
// `

// const animation = {
//     hidden: { opacity: 0 },
//     visible: { 
//         opacity: 1,
//         transition: { duration: .3 }
//     }
// }

// export default function Backdrop({ setIsOpen, children }) {
//     return (
//         // <ScrollLock>
//             <StyledBackdrop
//                 variants={animation}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 onClick={() => setIsOpen(false)}
//             >
//                 {children}
//             </StyledBackdrop>
//         // </ScrollLock>
//     )
// }