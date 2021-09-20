import React,{useState} from 'react';
import { Modal, Button } from "react-bootstrap";

function Pop(){
    
        const [show, setshow] = useState(false);
         const handleClose = () => setshow(false);
          const handleShow = () => setshow(true);
         return (
         <div>
         <Button className="nextButton" onClick={handleShow}>
             Open Modal
          </Button>
        
        <Modal show={show} onHide={handleClose} centered>
           <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
           </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
           <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
          </Button>
            <Button variant="primary" onClick={handleClose}>
             Edit
            </Button>
          </Modal.Footer>
         </Modal>
         </div>
        
    )
}
export default Pop