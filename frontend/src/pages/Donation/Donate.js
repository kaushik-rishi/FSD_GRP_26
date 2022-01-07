import React, {useState, useEffect,useRef} from 'react'
import './Donate.css'
import { Helmet } from 'react-helmet';
import axios from "axios"
import { Link } from "react-router-dom";
import { Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import avatarRegister from "../../components/img/avatarRegister"
// import addUs from "../../components/img/new.svg";
// import wave from "../../components/img/wavev.png";
import { getUserDetails, updateUserProfile } from "../../actions/userActions";
import { listMyOrders } from "../../actions/orderActions";
import { IoIosArrowDown } from "react-icons/all";
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

const DonateApparels = ({history}) => {
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);
	const [isEditablename, setisEditablename] = useState(false);
	const [isEditableemail, setisEditableemail] = useState(false);
  const [value, setValue] = React.useState('')
  const [desc, setDesc] = React.useState('')
	const [guide, setGuide] = useState("")
	const nameinput = useRef(null);
	const emailinput = useRef(null);
  const [formOk, setFormOk] = useState(false);
	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userDetails);

	const { error, user } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);

	const { userInfo } = userLogin;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);

	const { success } = userUpdateProfile;

  const clearState = () => {
    setName(user.name)
    setEmail(user.email)
    setValue("")
    setDesc("")
  };
  const guideData = [
    {
      gcategory: 'apparel',
      gmessage:'Apparel should be clean.'
    },
    {
      gcategory: 'footwear',
      gmessage:'Footwear should be clean.'
    },
    {
      gcategory: 'sportswear',
      gmessage:'Sportswear should be clean.'
    },
    {
      gcategory: 'trad',
      gmessage:'Traditional should be dry cleaned.'
    },
    {
      gcategory: 'waj',
      gmessage:'Watches should be working. Jewellery bill required.'
    },
    {
      gcategory: 'formal',
      gmessage:'Formal should be clean.'
    },
    {
      gcategory: 'acc',
      gmessage:'Accessories should be clean.'
    },
    {
      gcategory: 'luggage',
      gmessage:'Luggage carrier should be strong.'
    },
    {
      gcategory: 'cosmetics',
      gmessage:'Cosmetics should be at most 75% used.'
    },
    {
      gcategory: 'cat',
      gmessage:'Textile should be dry cleaned.'
    }
  ]
	useEffect(() => {
		if (!userInfo) {
			history.push("/login");
		} else {
			if (!user.name) {
				dispatch(getUserDetails("profile"));
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [dispatch, history, userInfo, user]);
  
  const submitHandler = function (e) {
		e.preventDefault();
		// if (password !== confirmPassword) {
		// 	setMessage("Password do not match");
		// } else {
		// 	dispatch(updateUserProfile({ id: user._id, name, email, password }));
		// }
    if(e.target[0].value==="" || e.target[1].value==="" || e.target[3].value==="" || value==="")
      setMessage("We kindly request you to fill all the details as it helps us in finding more solutions to recycle donated products.")
    else
    {
      // console.log(e.target[0].value)
      // console.log(e.target[1].value)
      // console.log(e.target[2].value)
      // console.log(e.target[3].value)
      // console.log(e.target[4].value)
      // console.log(e.target[5].value)
      // console.log(value)
      axios.post("http://localhost:4000/dnations",{
        name: e.target[0].value,
        email: e.target[1].value,
        dcat: e.target[4].value,
        dtitle: e.target[3].value,
        ddesc: e.target[5].value,
        dstatus: value
      }).then((res)=>{
          // console.log("logged in")
          // history.push("/contact");
          // history.push('/home') 
          setFormOk(true)
          const frm = document.getElementsByName("myForm")[0]
          frm.reset()
          clearState()
          setTimeout(() => {
            history.push('/donations')
          }, 6000);
      }).catch((err)=>{
          console.log(err)
          // store.dispatch({type:"loginFail"})
      })
    }
	};
	const inputs = document.querySelectorAll(".inputa");

	function addcl() {
		let parent = this.parentNode.parentNode;
		parent.classList.add("focus");
	}

	function remcl() {
		let parent = this.parentNode.parentNode;
		if (this.value == "") {
			parent.classList.remove("focus");
		}
	}

	const nameinputfocus = () => {
		setisEditablename(!isEditablename);
		if (isEditablename) {
			nameinput.current.focus();
		} else {
		}
	};

	inputs.forEach((inputa) => {
		inputa.addEventListener("focus", addcl);
		inputa.addEventListener("blur", remcl);
	});
  
  const handleInputChange = (e) => {
    const inputDesc = e.target.value
    setDesc(inputDesc)
  }
  const radioChange = (val) => {
    // console.log(val)
    setValue(val)
    // console.log(value)
  }
  const guideChange = (gkey) => {
    const gdata = guideData.find(key => key.gcategory === gkey)
    // console.log(gdata)
    setGuide(gdata.gmessage)
  }
    return (
        <div className = 'donateApparels'>
          <Helmet>
            <title>Donate Us</title>
          </Helmet>
          <div>
              <div className='dsect'>
                <h1>Why donate us? 🤔</h1>
                <p> Recycling is a great way to help conserve resources and natural materials used in fashion products. These products are made from valuable resources and materials including cloth, rubber, leather and metals, all of which require energy to procure and manufacture. Donating or recycling consumer products conserves our natural resources and avoids air and water pollution.</p>
                
                <h2>Did you know?</h2>
                <ul className='du'>
                    <li>The global cotton industry produces 25 million tonnes per year at a vast land, chemical and water cost. </li>
                    <li>Fashion contributes approximately 8% to global emissions and is expected to rise by 45% come 2030.</li>
                </ul>
              </div>
              <div className='dsect'>
                <h1>Donate us ❤️</h1>
                <p>We at Fasho.Live work to reduce the Climate Change by making accessible a plethora of Reusable Fashion Products donated by our kind-hearted Environmentalists 🌎 and RRR ♻️ Enthusiasts. Support our virtuous efforts by making a donation because every donation to us makes an impact in reducing the Climate Change.</p>
                  <div className="login-content">
                    <form onSubmit={submitHandler} name="myForm"
                    >
                      {/* <Image src={avatarRegister} /> */}

                      <div className="input-div entry">
                        <div className="i">
                          <i className="fas fa-user"></i>
                        </div>
                        <div className="div">
                          <input
                            type="text"
                            name='name'
                            value={name}
                            readOnly={isEditablename}
                            ref={nameinput}
                            className="inputa"
                            placeholder="Enter name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* <AiOutlineEdit
                        size="26"
                        className="edit"
                        onClick={nameinputfocus}
                      /> */}

                      <div className="input-div entry">
                        <div className="i">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="div">
                          <input
                            type="text"
                            name='email'
                            value={email}
                            readOnly={isEditableemail}
                            ref={emailinput}
                            className="inputa"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* <AiOutlineEdit
                        size="26"
                        className="edit"
                        onClick={() => {
                          setisEditableemail(!isEditableemail);
                          emailinput.current.focus();
                        }}
                      /> */}

                      <div className="input-div entry">
                        <div className="i">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="div">
                          <input
                            type="textarea"
                            // value={}
                            required
                            className="inputa"
                            placeholder="Enter pickup address"
                            // onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="input-div entry">
                        <div className="i">
                          <i className="fas fa-pen"></i>
                        </div>
                        <div className="div">
                          <input
                            type="text"
                            // value={}
                            required
                            className="inputa"
                            placeholder="Enter title"
                            // onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      {/* <div className="input-div entry">
                        <div className="i">
                          <i className="fas fa-info-circle"></i>
                        </div>
                        <div className="div">
                          <input
                            type="textarea"
                            // value={}
                            required
                            className="inputa"
                            placeholder="Enter description"
                            // onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div> */}
                       <div className='desCSS'>
                        <p mb='8px'>Category 
                        {/* {desc} */}
                        </p>
                        <Select placeholder='Select option'>
                          <option value='apparel'>Apparel</option>
                          <option value='footwear'>Footwear</option>
                          <option value='sportswear'>Sportswear</option>
                          <option value='trad'>Traditional</option>
                          <option value='waj'>Watches and Jewellery</option>
                          <option value='formal'>Formal</option>
                          <option value='acc'>Accessories</option>
                          <option value='luggage'>Luggage</option>
                          <option value='cosmetics'>Cosmetics</option>
                          <option value='cat'>Costumes and Textiles</option>
                        </Select>
                      </div>
                      <div className='desCSS'>
                        <p mb='8px'>Description 
                        {/* {desc} */}
                        </p>
                        <Textarea value={desc} onChange={handleInputChange} placeholder='Enter description' size='lg'/>
                      
                      </div>
                      {/* <div className="input-div entry">
                        <div className="i">
                          <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                          <input
                            type="password"
                            value={password}
                            required
                            className="inputa"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div> */}
                      
                      <div className='status'>
                        <p>Status</p>
                        <RadioGroup onChange={(value) => radioChange(value)} value={value}>
                          <Stack direction='row' className='reachEnd'>
                            <Radio value='isReusable'>Can be reused</Radio>
                            <Radio value='needsProc'>Can be processed</Radio>
                          </Stack>
                        </RadioGroup>
                      </div>
                      {/* <div className="input-div passconf">
                        <div className="i">
                          <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                          <input
                            type="password"
                            value={confirmPassword}
                            className="inputa"
                            placeholder="Confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div> */}
                      {/* {message && <h4 className="Message">{message}</h4>} */}
                      <input type="submit" className="btna2 bta" 
                      value="Submit" 
                      />
                      {/* {message && <h4 className="Message">{message}</h4>} */}
                      {formOk?(
                        <Alert
                          status='success'
                          variant='subtle'
                          flexDirection='column'
                          alignItems='center'
                          justifyContent='center'
                          textAlign='center'
                          height='200px'
                        >
                          <AlertIcon boxSize='40px' mr={0} />
                          <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Donation request submitted successfully!
                          </AlertTitle>
                          <AlertDescription maxWidth='sm'>
                            Thanks for submitting your application. Our team will reach out to your address. We are redirecting you to our donations page.
                          </AlertDescription>
                        </Alert>
                      ):(
                        // <Alert status='error'>
                        //   <AlertIcon />
                        //   There was an error processing your request
                        // </Alert>
                        <h4 className="Message">{message}</h4>
                      )}
                  </form>
                </div>
              </div>
              <div className='dsect'>
                <h1>Guidelines ✍️</h1>
                <div>
                  <button className='button4' onClick={(gkey) => guideChange('apparel')}>Apparel</button>
                  <button className='button4' onClick={(gkey) => guideChange('footwear')}>Footwear</button>
                  <button className='button4' onClick={(gkey) => guideChange('sportswear')}>Sportswear</button>
                  <button className='button4' onClick={(gkey) => guideChange('trad')}>Traditional</button>
                  <button className='button4' onClick={(gkey) => guideChange('waj')}>Watches and Jewellery</button>
                </div>
                <div>
                  <button className='button4' onClick={(gkey) => guideChange('formal')}>Formal</button>
                  <button className='button4' onClick={(gkey) => guideChange('acc')}>Accessories</button>
                  <button className='button4' onClick={(gkey) => guideChange('luggage')}>Luggage</button>
                  <button className='button4' onClick={(gkey) => guideChange('cosmetics')}>Cosmetics</button>
                  <button className='button4' onClick={(gkey) => guideChange('cat')}>Costumes and Textiles</button>
                </div>
                {/* <div>
                  <a className='button4'>Formal</a>
                  <a className='button4'>Accessories</a>
                  <a className='button4'>Luggage</a>
                  <a className='button4'>Cosmetics</a>
                  <a className='button4'>Costumes and Textiles</a>
                </div> */}
                <p>{guide}</p>
                {/* <p>Take data from the database and show the results only when a box is clicked</p> */}
              </div>
              <div className='dsect'>
                <h1>Reproduced Merchandise ♻️</h1>
                <p>Plain database extraction, show images of recycled products (can also add a link to each product later)</p>
              </div>
          </div>
        </div>
    )
}

export default DonateApparels
