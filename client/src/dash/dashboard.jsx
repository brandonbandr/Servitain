import Header from "./header.jsx"
import Events from "./events.jsx"


function Dashboard () {

    return (
        <>
            <div className="container-fluid mh-100 w-100 outline1 p-1 bg-primary">
                
                <Header></Header>
                
                <Events></Events>
            
                
            </div>
        </>
    )
}

export default Dashboard