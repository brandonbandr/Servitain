import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Tab from './Tab.jsx'
import Modal from './modals/modal.jsx'
import { EventContext } from './context.jsx';



function App() {


  const [window, setWindow] = useState(1);
  const [modal, setModal] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect( () => {

    getEvents();
  }, [])

  const getEvents = async () => {

    try {

      const response = await fetch('http://127.0.0.1:8000/events/get_events/');
      const data = await response.json()
      setEvents(data)

    } catch (err) {

      console.log(err)
    }
  }

  return (
    <>

      <EventContext.Provider value={ { events, getEvents } }>

        <Modal active = {modal} setModal = { () =>  {setModal()}} ></Modal>
        <Tab
        window = {window}
        ></Tab>
      </EventContext.Provider>
      
      {/* THIS IS THE NAVIGATION TO SWITCH BETWEEN PAGES */}
      <Navbar 
      // SENDING STATE ADJUSTMENT AS A PROP
      setPage = {(page) => {
        setWindow(page)
      }}

      setModal = {() => { modal ? setModal(false) : setModal(true) }}
      
      data-bs-theme = 'light'
      >

      </Navbar>
    </>

  )
}

export default App
