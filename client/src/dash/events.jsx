import { useContext } from "react";
import { EventContext }from "../context";

function Events () {

    const items = useContext(EventContext)

    items.events.map( (event) => {

        console.log(event.date)
    } )
   
    return (

        <>

            {items.events.map( (event) => 
                <div key={event.id} className="py-3 event-container center">

                <div className="row p-1 event bg-info rounded rounded-5 bg-opacity-50 border border-2 border-info">
    
                    <div className="col-5 p-3  d-flex flex-column align-items-center justify-content-evenly">
    
                        <h1 className="display-6">{event.title}</h1>
    
                        <h5 className="fs-5">{event.date}</h5>
    
                        <h3 className="fs-3">{event.address}</h3>        
    
                        {/* <div className="outline1 img-frame w-75 h-75"> */}
    
                        {/* </div> */}
    
                    </div>
    
                    <div className="col-7 p-3 outline1">
    
                        <p className="fs-2 pb-3 outline1">Joinable</p>
    
                        <p className="fs-4">Description:<br></br>{event.description}</p>
    
                    </div>
                </div>
                </div>
            )}

            
        </>
            
       

       
    )
}

export default Events