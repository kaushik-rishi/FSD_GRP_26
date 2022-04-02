import React, {useState, useEffect,useRef} from 'react'
import './Donate.css'
import { Helmet } from 'react-helmet';
import axios from "axios"
import { Link } from "react-router-dom";
import { Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ReProducts from '../../components/ReProducts';
import { getUserDetails, updateUserProfile } from "../../actions/userActions";
import { listMyOrders } from "../../actions/orderActions";
import { IoIosArrowDown } from "react-icons/all";
import HashLoader from "react-spinners/HashLoader";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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
  // all profile details
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);
  // enabling editting in the form
	const [isEditablename, setisEditablename] = useState(false);
	const [isEditableemail, setisEditableemail] = useState(false);
  // for description in the form
  const [desc, setDesc] = React.useState('')
  // for guidelines
	const [guide, setGuide] = useState("")
	const nameinput = useRef(null);
	const emailinput = useRef(null);
  // checks if submission is valid
  const [formOk, setFormOk] = useState(false);
	const dispatch = useDispatch();
  const [count,setCount] = useState(0)
	const userDetails = useSelector((state) => state.userDetails);
  const[willing, setWilling] = useState(false)
	const { error, user } = userDetails; // required for user in sending request to apis

	const userLogin = useSelector((state) => state.userLogin); // to send user to login page if not logged in

	const { userInfo } = userLogin; // to check if user is logged in as only authenticated ones can donate

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);

	const { success } = userUpdateProfile;
  // const [csrfTk,setCsrfTk] = useState("")
  const clearState = () => {
    setName(user.name)
    setEmail(user.email)
    setDesc("")
  }; // setting initial state with username and email prefilled

  // json for guidelines
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
//   const getCSRFToken = async () => {
//     console.log("Hi")
//     const response = await axios.get('http://localhost:4000/getCSRFToken');
//     console.log(response.data.csrfToken)
//     axios.defaults.headers.post['X-CSRF-TOKEN'] = response.data.csrfToken;
//     return response.data.csrfToken
//  };
	useEffect(() => {
		if (!userInfo) {
      // login if not logged on
			history.push("/login");
		} else {
			if (!user.name) {
				dispatch(getUserDetails("profile"));
        // user must have a name
			} else {
        // prefilling
				setName(user.name);
				setEmail(user.email);
        // console.log(user.name);
        // setCsrfTk(getCSRFToken());
        // console.log("hi");
			}
		}
	}, [dispatch, history, userInfo, user]);
  
  useEffect(() => {
    // exit early when we reach 0
    if (!count) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [count]);

  const submitHandler = function (e) {
		e.preventDefault();
    if(e.target[0].value==="" || e.target[1].value==="" || e.target[4].value==="" || e.target[5].value==="")
    {
      // if empty form is submitted
      setMessage("We kindly request you to fill all the details as it helps us in finding more solutions to recycle donated products.")
      setTimeout(() => {
        setMessage(null)
      }, 5000);
    }
    else
    {
      // sending api request
      axios.post("http://localhost:4000/dnations",{
        name: e.target[0].value,
        email: e.target[1].value,
        dcat: e.target[5].value,
        dtitle: e.target[3].value,
        ddesc: e.target[6].value,
      }).then((res)=>{
         // clean form data on getting response
          setFormOk(true)
          const frm = document.getElementsByName("myForm")[0]
          frm.reset()
          clearState()
          // timer of 6 seconds for redirection so that user can verify its name in the table
          setCount(6)
          setTimeout(() => {
            history.push('/donations')
          }, 6000);
      }).catch((err)=>{
          console.log(err)
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
  const wChange = (e) => {
    setWilling(true)
  }
  const guideChange = (gkey) => {
    const gdata = guideData.find(key => key.gcategory === gkey)
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
                {!willing?(
                  <button className='button4' onClick={() => wChange()}>DONATE TO FASHO.LIVE</button>
                ):(
                  <div className="login-content">
                    <form onSubmit={submitHandler} name="myForm" enctype="multipart/form-data"
                    >
                      {/* <input type="hidden" name="_csrf" value={csrfTk}/> */}

                      <div className="input-div entry">
                        <div className="i">
                          <i className="fas fa-user"></i>
                        </div>
                        <div className="div">
                          <input
                            type="text"
                            required
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

                      <div className="input-div entry">
                        <div className="i">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="div">
                          <input
                            type="text"
                            required
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

                      <div className="input-div entry">
                        <div className="i">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="div">
                          <input
                            type="textarea"
                            required
                            className="inputa"
                            placeholder="Enter pickup address"
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
                            required
                            className="inputa"
                            placeholder="Enter title"
                          />
                        </div>
                      </div>


                      <div className='desCSS'>
                        <p mb='8px'>Product Image(s) 

                        <div className='div'>
                          <input type="file" 
                            id="file" 
                            name="file" 
                            className='imgInput'
                            placeholder="Add your donated product"
                          />
                        </div>
                        </p>
                      </div>
                      
                      <div className='desCSS'>
                        <p mb='8px'>Category 
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
                        </p>
                        <Textarea value={desc} onChange={handleInputChange} placeholder='Enter description' size='lg'/>
                      
                      </div>
                      
                      <input type="submit" className="btna2 bta" 
                      value="Submit" 
                      />
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
                            Thanks for submitting your application. Our team will reach out to your address. We are redirecting you to our donations page in <strong> {count} </strong> seconds.
                          </AlertDescription>
                        </Alert>
                      ):(
                        <h4 className="msg">{message}</h4>
                      )}
                    </form>
                </div>
                )}
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
                <p>{guide}</p>
              </div>
              <div className='dsect'>
                <ReProducts/>
              </div>
          </div>
        </div>
    )
}

export default DonateApparels
