import React from "react";

const Navbar=()=>{
    return(

        < div style={{
            backgroundColor:'#1976d2',
            color:'white',
            padding:'16px',
            display:'flex',
            justifyContent :'space-between',
            alignItems:'center'
        }}>
            <div>Advanced Todo App</div>
            <div>User</div>
        </div>
    );
};

export default Navbar;