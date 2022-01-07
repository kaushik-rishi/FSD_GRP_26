import React, {useState, useEffect,useRef} from 'react'
// import './Donate.css'
import { Helmet } from 'react-helmet';
// import { Link } from "react-router-dom";
// import { Form, Image } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import avatarRegister from "../../components/img/avatarRegister"
// import addUs from "../../components/img/new.svg";
// // import wave from "../../components/img/wavev.png";
// import { getUserDetails, updateUserProfile } from "../../actions/userActions";
import HashLoader from "react-spinners/HashLoader";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
	// Button,
  ButtonGroup,
	Input,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
  Text,
  Select,
  Textarea,
  Radio, 
  Stack,
  RadioGroup,
} from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";

const GetDonations = ({history}) => {
    
    return (
        <div className = 'donateApparels'>
          <Helmet>
            <title>Donations Information</title>
          </Helmet>
          <div>
              <div className='dsect'>
                <h1>Reuable products 🔄</h1>
                <p>Here are the products we received from our generous donors recently. We'll be refurbishing them soon after receiving in a span of 7 days and make them available for resale.</p>
              </div>
              <div className='dsect'>
                <h1>Recycle work in progress 🚧</h1>
                <p>Here are the products received from our donors that will be recycled with the help of our team and made available for purchase.</p>
              </div>
              <div className='dsect'>
                <h1>Reproduced Merchandise ♻️</h1>
                <p>Plain database extraction, show images of recycled products (can also add a link to each product later)</p>
              </div>
          </div>
                
        </div>
    )
}

export default GetDonations
