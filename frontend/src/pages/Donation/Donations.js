import React, {useState, useEffect,useRef} from 'react'
// import './Donate.css'
import { Helmet } from 'react-helmet';
import PaginatedTable from '../../components/PaginatedTable';
import PaginatedTable2 from '../../components/PaginatedTable2';
import CardPro from '../../components/Cards'
import CardRow from '../../components/CardRow';
import { Col, Row } from 'antd';
import axios from "axios"
import ReProducts from '../../components/ReProducts';
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
    const [donateProds, setDonateProds] = useState([])
    // const [loading, setLoading] = useState(false);
    // const populateData = function(props){
    //   setDonateProds(props)
    // }
    useEffect(() => {
      // GET request using axios inside useEffect React hook
      axios.get('http://localhost:4000/dnations')
          .then(response => setDonateProds(response.data));

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    // const componentDidMount = async function(){
    //     await axios.get("http://localhost:4000/dnations").then((res)=>{
    //         console.log(res.data)
    //         populateData(res.data)
    //         console.log(donateProds)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    //     // try {
    //     //     const response = await axios.get("http://localhost:4000/dnations") //using data destructuring to get data from the promise object
    //     //     // console.log(response)
    //     //     return response.data
    //     // }
    //     // catch (error) {
    //     //     console.log(error);
    //     // }
    // }
    return (
        <div className = 'donateApparels'>
          <Helmet>
            <title>Donation Information Desk</title>
          </Helmet>
          <div>
              <div className='dsect'>
                <h1>Reuable products 🔄</h1>
                <p>Here is the list of products we are going to acquire from our generous donors. We'll be refurbishing the products on receiving them in a week's duration and make them available for resale after clearing all the technicalities.</p>
                {/* <PaginatedTable/> */}
                <br />
                {/* {showData()} */}
                <PaginatedTable2 productRows={donateProds}/>
              </div>
              <div className='dsect'>
                <h1>Recycle work in progress 🚧</h1>
                <p>Here are the products received from our donors that will be recycled with the help of our team and made available for purchase.</p>
                {/* <CardPro/> */}
                <br/>
                <CardRow />
                {/* <br/>
                <CardRow /> */}
                {/* <div class="row">
                  <div class="column">
                    <CardPro/>
                  </div>
                  <div class="column">
                    <CardPro/>  
                  </div>
                  <div class="column">
                    <CardPro/>
                  </div>
                </div> */}
              </div>
              <div className='dsect'>
                <h1>Reproduced Merchandise ♻️</h1>
                <p>Plain database extraction, show images of recycled products (can also add a link to each product later)</p>
                {/* <ReProducts/> */}
              </div>
          </div>
                
        </div>
    )
}

export default GetDonations
