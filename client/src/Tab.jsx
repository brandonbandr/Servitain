import Dashboard from './dash/dashboard.jsx';
// THIS IS FOR WHICH WINDOW IS BEING DISPLAYED ON THE SCREEN

function Tab ({window}) {

    switch (window) {

        case 1:

            return <Dashboard
            
            ></Dashboard>

        case 2:
            return <></>
        case 3:
            return <></>
    }
};

export default Tab