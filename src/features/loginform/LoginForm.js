import React,{useState} from 'react'
import { Row,Col,FormGroup, Label, Input, Button } from 'reactstrap'

export default function LoginForm(props) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleCreds = (e) =>{
         if(e.target.name === 'email'){
             setEmail(e.target.value)
          
         }
         else if(e.target.name === 'pass'){
             setPassword(e.target.value)
         }
        //  console.log(email,password)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(email === 'rex@gmail.com' && password === '123456'){
            alert('successfully logged in!')
            localStorage.setItem('token','fdqwfdqfqydfg')
             props.history.push('/dashboard/stats')
        }else{
            alert('invalid Login!')
        }
    }
    return (
        <Row className="mt-5 offset-4">
             <Col md='6' className="card">
                     <h1 className="card-title text-center text-warning mt-4">User Login</h1>
                    <form onSubmit={handleSubmit} className='card-body bg-white'>
                            <FormGroup className="mb-3">
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                type="email"
                                value={email}
                                name="email"
                                id="exampleEmail"
                                placeholder="Enter email"
                                onChange={handleCreds}
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label for="examplePassword">Password</Label>
                                <Input
                                name='pass'
                                value={password}
                                type="password"
                                id="examplePassword"
                                placeholder="Enter password"
                                onChange={handleCreds}
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                    <Button className="btn btn-success">Login</Button>
                            </FormGroup>
                    </form>
            </Col>
        </Row>
    )
}
