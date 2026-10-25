import Nav from 'react-bootstrap/Nav';
import './Index.css';


const Navbar = ({ setPage, setModal }) => {



    return (

        <>
            <Nav justify id='nav' className='bg-info position-fixed display-4 border-top border-danger'>

                <Nav.Item>
                    <Nav.Link onClick={() => {

                        setPage(1)
                    }} >
                        Dashboard
                    </Nav.Link>
                </Nav.Item> 

                <Nav.Item>
                    <Nav.Link onClick={() => {

                        setModal()
                    }} >
                        Add Events
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={() => {

                        setPage(3)
                    }} >
                        Account
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        
        </>
    )
}

export default Navbar