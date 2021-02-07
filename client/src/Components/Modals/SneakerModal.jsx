import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { addSneakertoUser, uploadSneaker } from '../../lib/api';

const sizes = [
  3.5 , 
  4,
  4.5, 
  5 , 
  5.5,
  6, 
  6.5 , 
  7,
  7.5, 
  8 , 
  8.5,
  9, 
  9.5 , 
  10,
  10.5, 
  11 , 
  11.5,
  12, 
  12.5 , 
  13,
  13.5, 
  14 , 
  14.5,
  15, 
  15.5, 
  16, 
  16.5, 
  17
]

function SneakerModal (props) {
    const [ extraInfo, setExtraInfo ] = useState('');
    const [ condition, setCondition ] = useState('');
    const [ size, setSize ] = useState('');
    const [ askingPrice , setAskingPrice ] = useState('');

    const [ newObject, setNewObject ] = useState({});

    // Below is the item coming from props.sneaker
    // brand: "Nike"
    // colorway: "Black/Black-Barely Green-Barely Green"
    // gender: "men"
    // id: "08574d0a-2123-4a3f-a060-c4284da71dbf"
    // media: {imageUrl: "https://images.stockx.com/images/Nike-Air-Foamposi…press&trim=color&q=90&dpr=2&updated_at=1610495746", smallImageUrl: "https://images.stockx.com/images/Nike-Air-Foamposi…press&trim=color&q=90&dpr=2&updated_at=1610495746", thumbUrl: "https://images.stockx.com/images/Nike-Air-Foamposi…press&trim=color&q=90&dpr=2&updated_at=1610495746"}
    // name: "All Star (2021)"
    // releaseDate: "2021-02-11"
    // retailPrice: 230
    // shoe: "Nike Air Foamposite One"
    // styleId: "CV1766-001"
    // title: "Nike Air Foamposite One All-Star 2021"
    // year: 2021

    // Below is a deconstructed object was just an idea, you can add more
    // fields you would like to use in the modal
    const {year, title, shoe, retailPrice, media, colorway, brand, id } = props.sneaker;

    const handleSubmit = async () => {
      for (let key in props.sneaker) {
         newObject[key] = props.sneaker[key]
      }
      newObject.condition = condition; 
      newObject.extraInfo = extraInfo;
      newObject.size = size;
      newObject.askingprice = askingPrice;
      newObject.userID =  props.userid;
      newObject.sellerName = props.username;
      await addSneakertoUser(newObject);
    }

    return (
      <>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>Year: {year}</div>
        <img alt='' src={media ? media.smallImageUrl : null} style={{width: '200px', height:'200px'}}/>
        <br/>
        <input type="number" value={condition} onChange={(event)=>setCondition(event.target.value)} placeholder="input condition /10"/>
        <br/>
        <input type="text" value={extraInfo} onChange={(event)=>setExtraInfo(event.target.value)} placeholder="Extra information e.g. scratches, scuffs, extra condition information"/>
        <input type="number" placeholder="Asking price" onChange={(event)=>setAskingPrice(event.target.value)}/>
        <select name="size" onChange={(event) => setSize(event.target.value)}>
          {sizes.map((item)=> <option value={item}>{item}US</option>)}
        </select>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
        Close
        </Button>
        {/* This link will add the sneaker to the user array in the db
        AND  will add the sneaker to the sneaker document AND
        will link the the sneakerpage passing the id into the url*/}
        <Link to={"/product/"+id}>
            <Button variant="primary" disabled={(condition.length > 0 && extraInfo.length > 0) ? false : true} onClick={handleSubmit}>
             UPLOAD
            </Button>
        </Link>
        </Modal.Footer>
    </Modal>
      </>
    );
}

export default SneakerModal;
