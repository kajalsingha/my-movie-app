import React from "react";

import { Form, Button, Card, Alert } from "react-bootstrap"
import { Container } from "react-bootstrap";


const Login =(props) => {

const {email,setEmail, password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}= props;


    return(
<section className="login">


     <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
   >
<div >
<div className="App">
    {hasAccount ? (
        <>    
        <p className="Head">Login Page </p>
        </>
          ) : (
        <>        
        <p className="Head">Registration Page </p>
        
         </>
         )
    }
     </div>


 <Card> <Card.Body>
       
         
           <Form>
           
           Email :
       < input type= "text" placeholder='email' autoFocus  value={email}
       onChange={(e)=>setEmail
           (e.target.value) } required />
           <p className="errorMsg">{emailError}</p>
           
           Pass :

<input type = "password" placeholder='password' autoFocus value={password} 
onChange={(e)=>setPassword
    (e.target.value) } required />
    <p className="errorMsg">{passwordError}</p>
   


    </Form>
    <div className="btnContainer" >
    {hasAccount ? (
        <>    
        <button  className='button' onClick={handleLogin}>Login</button>
        </>
          ) : (
        <>        
        <button  className='button' onClick={handleSignup} >Sign up</button>
      
         </>
         )
    }
     </div>
     </Card.Body></Card>
   
     <div>
     {hasAccount ? (
        <>    
        <p className="App-text">Don't have an account? <span className="span" onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
        </>
          ) : (
        <>        
 
        <p className="App-text">Already have an account ?  <span className="span" onClick={() =>setHasAccount(!hasAccount) } >  Log in</span></p>
        
         </>
         )
    }
     </div>
    
      </div>
      </Container>
</section>
    )
    
}

export default Login;