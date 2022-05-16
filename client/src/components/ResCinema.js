import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const ResCinema = () => {
  return (
    <div>
        <Card className='c2'>
            <Card.Body>
                Skylite
                &nbsp;&nbsp;

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 320.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>ODC-FULL</Button>
                </OverlayTrigger>
              ))}

              {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 220.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>ODC-HALF</Button>
                </OverlayTrigger>
              ))}

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 820.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>BOX-FULL</Button>
                </OverlayTrigger>
              ))}

                <br/>
                <hr/>
                Liberty
                &nbsp;&nbsp;

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 500.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>ODC-FULL</Button>
                </OverlayTrigger>
              ))}

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 400.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>ODC-HALF</Button>
                </OverlayTrigger>
              ))}

                <br/>
                <hr/>
                Savoy
                &nbsp;&nbsp;
                
                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 885.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>GOLD CLASS-FULL</Button>
                </OverlayTrigger>
              ))}

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 735.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b2'>GOLD CLASS-HALF</Button>
                </OverlayTrigger>
              ))}

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 785.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b2'>ODC-FULL</Button>
                </OverlayTrigger>
              ))}

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 585.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b2'>ODC-HALF</Button>
                </OverlayTrigger>
              ))}

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 1885.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b2'>BOX-FULL</Button>
                </OverlayTrigger>
              ))}
                
                <br/>
                <hr/>
                Scope
                &nbsp;&nbsp;

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 700.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>ODC-FULL</Button>
                </OverlayTrigger>
              ))}

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 600.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>ODC-HALF</Button>
                </OverlayTrigger>
              ))}

                <br/>
                <hr/>
            </Card.Body>
        </Card>      
    </div>
  )
}

export default ResCinema
