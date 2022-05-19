import {React, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import {Link} from 'react-router-dom'

const ResCinema = (props) => {
  const {cartItems, setCartItems} = useState([]);
  const {countCartItems} = props;
  
  const handleClick = (props,countCartItems) => {
    
    console.log(props,countCartItems)
  };

  return (
    <div>

      <Link to={'/cart'}>
        Cart{' '}
        {countCartItems ? (
          <button className="badge">{countCartItems}</button>
        ) : (
          ''
        )}
      </Link>{' '}

        <Card className='c2'>
            <Card.Body>
                Skylite
                &nbsp;&nbsp;

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  //price = {200}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. 320.00 <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" item={"odc full"} className='b1' onClick={() => handleClick("320","1")}>ODC-FULL</Button>
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
                  <Button variant="outline-dark" className='b1' onClick={() => handleClick("220")}>ODC-HALF</Button>
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
                  <Button variant="outline-dark" className='b1' onClick={() => handleClick("820")}>BOX-FULL</Button>
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
                  <Button variant="outline-dark" className='b1' onClick={() => handleClick("500")}>ODC-FULL</Button>
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
                  <Button variant="outline-dark" className='b1' onClick={() => handleClick("400")}>ODC-HALF</Button>
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
                  <Button variant="outline-dark" className='b1' onClick={() => handleClick("885")}>GOLD CLASS-FULL</Button>
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
                  <Button variant="outline-dark" className='b2' onClick={() => handleClick("735")}>GOLD CLASS-HALF</Button>
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
                  <Button variant="outline-dark" className='b2' onClick={() => handleClick("785")}>ODC-FULL</Button>
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
                  <Button variant="outline-dark" className='b2' onClick={() => handleClick("585")}>ODC-HALF</Button>
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
                  <Button variant="outline-dark" className='b2' onClick={() => handleClick("1885")}>BOX-FULL</Button>
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
                  <Button variant="outline-dark" className='b1' onClick={() => handleClick("700")}>ODC-FULL</Button>
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
                  <Button variant="outline-dark" className='b1' onClick={() => handleClick("600")}>ODC-HALF</Button>
                </OverlayTrigger>
              ))}

                <br/>
                
            </Card.Body>
        </Card>
        <br/>      
    </div>
  )
}

export default ResCinema
