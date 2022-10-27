import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQS = () => {
    return (
        <div className="container">
      
      <h3>These are Some Frequently Asked Questions</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1 How to Login?</Accordion.Header>
          <Accordion.Body>
          You can login with wither email  & pass word or Google or Git Hub
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. How to Pay the Course Payment ?
          </Accordion.Header>
          <Accordion.Body>
          You can Use Any Mobile Banking MEdium to Pay
          
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. How many courses We can take?
          </Accordion.Header>
          <Accordion.Body>
           As much as you can
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4.What is the best way to get Success?
          </Accordion.Header>
          <Accordion.Body>
        Work Hard 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    );
};

export default FAQS;