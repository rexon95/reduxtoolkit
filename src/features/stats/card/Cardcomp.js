import React from 'react'
import {Card,CardTitle,CardBody,CardSubtitle, Row,Col} from 'reactstrap'

function Cardcomp(props) {
    const data = props.data
    // console.log('data',data)
    const textVal = ['Users','Posts','Comments','Albums','Photos']
    return (
        <Row className="justify-content-center">
          {
              data.map((ele,i)=>{
                  return<React.Fragment key={i}>  
                  <Col md='6' className="mb-4">
                      <Card className='bg-primary'>
                          <CardBody className="text-center">
                                  <CardTitle tag='h4' className="text-white">{textVal[i]}</CardTitle>
                                  <CardSubtitle tag='h6' className="text-white">{ele}</CardSubtitle>
                          </CardBody>
                     </Card>
                  </Col></React.Fragment> 
              })
          }
       </Row>
    )
}

export default Cardcomp
