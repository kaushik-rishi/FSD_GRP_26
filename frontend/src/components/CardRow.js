import Card2 from "./Card2";
import imgs from './img/denimOld.png'
import img1 from './img/brokenLuggage.jpg'
import img2 from './img/femaleApparelOld.jpg'
import img3 from './img/oldShoes.jpg'
import img4 from './img/oldWatch.png'
import img5 from './img/sherwani.png'
import './cardsass.scss'
function CardRow(props){
    return(
        <>
            <br/>
            <div className="wrapper">
                <Card2
                    img={imgs}
                    title="Old Jeans getting Cleaned"
                    description="These jeans get the cleanest bath after a long time."
                />

                <Card2
                    img={img1}
                    title="Pummeled luggage Revives"
                    description="Our team brings back the life of a badly crushed luggage."
                />

                <Card2
                    img={img2}
                    title="Damaged apparel makeover"
                    description="Old and worn apparel gets a stunning new look."
                />
            </div>
            <br/>
            <div className="wrapper">
                <Card2
                    img={img3}
                    title="Shoes into a Transition"
                    description="Almost torn off shoes get new strengths to begin another journey."
                />

                <Card2
                    img={img4}
                    title="Old is Gold"
                    description="Get ready to witness the change of fortunes of this Antic Watch."
                />

                <Card2
                    img={img5}
                    title="Sherwani revamped"
                    description="Sherwani gets a royal treatment to showcase its glory another time"
                />
            </div>
            <br/>
        </>
    )
}
export default CardRow