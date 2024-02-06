import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Button, Table, Modal, Form,Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import {listerContacts, addContactAction,deleteContactAction,editContactAction} from './actions/contact.actions'
import { useDispatch, useSelector } from "react-redux";

function App() {
   const dispatch = useDispatch();
   const contacts = useSelector(state => state.contact.contacts.contactList)
  useEffect(()=>{

   dispatch(listerContacts())

  },[])
  const [ id, setId ] = useState('');
  const [ nom, setNom ] = useState('');
  const [ numero, setNumero ] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edit, setEdit] = useState(false);

  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = ( id ) =>{
    contacts.forEach( c =>{
      if(c._id == id){
        setId(c._id)
        setNom(c.nom)
        setNumero(c.numero)
        //console.log(id);
      }
    })
    //console.log(id);


    setEdit(true);
  } 

  const addContact= async () => {
    console.log(nom);
    console.log(numero);

    const data = {
      nom,
      numero
    }
    await dispatch(addContactAction(data))
    await dispatch(listerContacts())
    //close Model
    handleClose()
    //reset lel form
    setNom('')
    setNumero('')
  }
  const editContact= async () => {
 
    const data = {
      nom,
      numero
    }
   await dispatch(editContactAction(id,data))
    await dispatch(listerContacts())
    //close Model
    handleCloseEdit()
    //reset lel form
    setNom('')
    setNumero('')
    setId('')
    
  }
  const deleteContact = async (id) => {
  //console.log(id);
  await dispatch (deleteContactAction(id))
  await dispatch(listerContacts())
  }

  return (
    <div className="App">
      {/* navbar*/}

      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Contact App</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="p-4">
        <Button variant="primary" onClick={handleShow}>
          Ajouter
        </Button>
        <h2>Liste des contacts</h2>
        {
          contacts && contacts.length > 0 ? 
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Numero</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((contact,index)=> 
               <tr key={index}>
              <td>{index+1}</td>
              <td>{ contact.nom}</td>
              <td>{contact.numero}</td>
              <td>
                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => handleShowEdit(contact._id)}
                >
                  Modifier
                </Button>
                <Button variant="danger" onClick={ () => deleteContact(contact._id) }>Supprimer</Button>
              </td>
            </tr>)
            }
           
       
           
          
          </tbody>
        </Table>
        : <Alert  variant='info'>
       Aucun contact trouvé...
        
        
      </Alert>
       
        }
       
      </div>

      {/*POPUP ADD*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                value={nom}
                onChange={ (e)=>{setNom(e.target.value)} }
                placeholder="Enter le nom pour cette contact"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" value={numero} onChange={(e)=>{setNumero(e.target.value)}} placeholder="Entrer contact" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addContact}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/*POPUP EDIT*/}
      <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                value={nom}
                onChange={ (e)=>{setNom(e.target.value)} }
                placeholder="Enter le nom pour cette contact"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text"  value={numero} onChange={(e)=>{setNumero(e.target.value)}} placeholder="Entrer contact" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={editContact} >Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
