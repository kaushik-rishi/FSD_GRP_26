import './table.css'
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"
import $ from 'jquery'; 

function ReProducts(){
    const createSlider = () => {
        // console.log("Hi")
        if( $('.my-slider').length > 0 ){
            var slider = tns({
                container: '.my-slider',
                items: 2,
                slideBy: 'page',
                autoplay: true,
                autoplayTimeout: 3000
            });
            // slider.play()
        }
        // console.log(slider)
    }
    createSlider()
    return(
        <div className="my-slider" >
            <div>
                <img src="https://source.unsplash.com/collection/993239/600x400" alt="" width="600" height="400" />
                <p>
                Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!
                </p>
            </div>
            <div>
                <img src="https://source.unsplash.com/collection/993239/600x400" alt="" width="600" height="400" />
                <p>
                Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!
                </p>
            </div>
            <div>
                <img src="https://source.unsplash.com/collection/993239/600x400" alt="" width="600" height="400" />
                <p>
                Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!
                </p>
            </div>
            <div>
                <img src="https://source.unsplash.com/collection/993239/600x400" alt="" width="600" height="400" />
                <p>
                Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!
                </p>
            </div>
            <div>
                <img src="https://source.unsplash.com/collection/993239/600x400" alt="" width="600" height="400" />
                <p>
                Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!
                </p>
            </div>
        </div>
    )
}
export default ReProducts