import './styles.css'
import { useRef, useContext } from 'react'
import { EventContext } from '../context';

function Modal ( {active, setModal} ) {

    const title = useRef(null)
    const description = useRef(null)
    const address = useRef(null)
    const date = useRef(null)

    const items = useContext(EventContext)

    if (active === true) {
        return (

            <div id='mask' className="h-100 w-100 position-fixed">

                <div id="modal" className= "position-relative bg-secondary rounded-3 center flex-column justify-content-evenly">
                {/* THIS IS FOR THE ACTUAL MODAL INSIDE */}
                    <button id='closer' className="btn btn-close position-absolute p-2 submit"
                    onClick={ () => setModal() }></button>

                    <h1 className='text-info fw-semibold display-3 px-2 py-2 rounded-1'>Register New Event</h1>

                    <div className="bg-primary border rounded-3 container w-50 h-75 form-group d-flex flex-column justify-content-evenly align-items-center">
                        
                        <div className="hstack w-100">

                            <div className="col-6">
                                <label htmlFor='Title' className="form-label">Title</label>
                                <input
                                    type="text"
                                    name="Title"
                                    id='Title'
                                    className="form-control"
                                    placeholder="Enter Title"
                                    aria-describedby="helpId"
                                    ref={title}
                                />
                            </div>

                            <div className="col-6">
                                <label htmlFor='Date' className="form-label">Date</label>
                                <input
                                    type="date"
                                    name="Date"
                                    id='Date'
                                    className="form-control"
                                    placeholder="Enter Date"
                                    aria-describedby="helpId"
                                    ref={date}
                                />    
                            </div>

                        </div>

                            
                            <div className="w-100">
                                <label htmlFor='Address' className="form-label">Address</label>
                                <input
                                    type="test"
                                    name="Address"
                                    id='Address'
                                    className="form-control"
                                    placeholder="Enter Address"
                                    aria-describedby="helpId"
                                    autoComplete='True'
                                    ref={address}
                                />

                            </div>
                            
                            <div className="w-100 h-50 px-1">
                                <label htmlFor='Description' className="form-label">Description</label>
                                <textarea
                                    type="textbox"
                                    name="Description"
                                    id='Description'
                                    className="form-control text-wrap h-75"
                                    placeholder="Enter Description"
                                    aria-describedby="helpId"
                                    ref={description}
                                />
                            </div>
                            

                            
                            
                            <button id='submitEvent' className="submit btn bg-info text-white " onClick={ async () => {
                                console.log('Aqui')
                                // const info = ;

                                try {
                                    const response = await fetch('http://127.0.0.1:8000/events/create_event/', {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            "title": title.current.value,
                                            "date": date.current.value,
                                            "address": address.current.value,
                                            "description": description.current.value
                                        }),
                                        
                                    });
                                    const data = await response.json()

                                    items.getEvents()

                                    console.log(data)
                                } catch (err) {
                                    console.log(err)
                                    };
                            }}
                            ><span className='fs-4'>Submit</span></button>

                    </div>   
                </div>
            </div>  
        )
    }

    else {

        return (<></>)
    }
}

export default Modal

// {"title": "thingy", "date": "2006-11-20", "address": "123 Sesame St", "description": "tehehaha"}