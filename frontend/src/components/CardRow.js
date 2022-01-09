import Card2 from "./Card2";
// import imgs from './img/denimOld.png'
// import img1 from './img/brokenLuggage.jpg'
// import img2 from './img/femaleApparelOld.jpg'
// import img3 from './img/oldShoes.jpg'
// import img4 from './img/oldWatch.png'
// import img5 from './img/sherwani.png'
import './cardsass.scss'
import { render } from "react-dom";
// import React from "react";
import { Component } from "react";
class CardRow extends Component{
    constructor(props){
        super(props)
        this.state = {
            txArr : [
                [
                        {
                            ckey: "1",
                            cimg: "denimOld.png",
                            ctitle: "Old Jeans getting Cleaned",
                            cdesc: "These jeans get the cleanest bath after a long time."
                        },
                        {
                            ckey: "2",
                            cimg: "brokenLuggage.jpg",
                            ctitle: "Pummelled luggage Revives",
                            cdesc: "Our team brings back the life of a badly crushed luggage."
                        },
                        {
                            ckey: "3",
                            cimg: "femaleApparelOld.jpg",
                            ctitle: "Damaged apparel makeover",
                            cdesc: "Old and worn apparel gets a stunning new look."
                        }
                ],
                [
                        {
                            ckey: "4",
                            cimg: "oldShoes.jpg",
                            ctitle: "Shoes into a Transition",
                            cdesc: "Almost torn off shoes get new strengths to begin another journey."
                        },
                        {
                            ckey: "5",
                            cimg: "oldWatch.png",
                            ctitle: "Old is Gold",
                            cdesc: "Get ready to witness the change of fortunes of this Antic Watch."
                        },
                        {
                            ckey: "6",
                            cimg: "sherwani.png",
                            ctitle: "Sherwani revamped",
                            cdesc: "Sherwani gets a royal treatment to showcase its glory another time"
                        }
                ]
            ]
        }
    }
    // txArr.map((details, index) => {
    //     console.log(details.cimg)
    //     render(
    //         <div className="wrapper">
    //             <Card2
    //                 img={`../img/${details.cimg}`}
    //                 title={details.ctitle}
    //                 description={details.cdesc}
    //             />
    //         </div>
    //     )
    // })
    render(){
        return(
            <>
                <br/>
                <div className="wrapper">
                    {this.props.txArr[0].map((fd,i) => (
                            <Card2
                                key={fd.ckey}
                                img={`../img/${fd.cimg}`}
                                title={fd.ctitle}
                                description={fd.cdesc}
                            />
                    ))}
                </div>
                <br/>
                <div className="wrapper">
                    {this.props.txArr[1].map((fd,i) => (
                        <Card2
                            key={fd.ckey}
                            img={`../img/${fd.cimg}`}
                            title={fd.ctitle}
                            description={fd.cdesc}
                        />
                    ))}
                    {/* <Card2
                        img={img3}
                        title=""
                        description=""
                    />

                    <Card2
                        img={img4}
                        title=""
                        description=""
                    />

                    <Card2
                        img={img5}
                        title=""
                        description=""
                    /> */}
                </div>
                <br/>
            </>
        )
    }
}
export default CardRow