import './table.css'
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

function ReProducts(){
    const createSlider = () => {
        var slider = tns({
            "container": "#customize",
            "items": 3,
            "controlsContainer": "#customize-controls",
            "navContainer": "#customize-thumbnails",
            "navAsThumbnails": true,
            "autoplay": true,
            "autoplayTimeout": 1000,
            "autoplayButton": "#customize-toggle",
            "swipeAngle": false,
            "speed": 400
        });
    }
    return(
        <div className="my-slider">
            <div className="tns-item" id="customize-item0" aria-hidden="true" tabIndex="-1">
                <img src="https://source.unsplash.com/collection/993239/600x400" alt="" width="600" height="400" />
                <p>
                Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!
                </p>
            </div>
            <div className="tns-item" id="customize-item1" aria-hidden="true" tabIndex="-1">
                <img src="https://source.unsplash.com/collection/993239/600x400" alt="" width="600" height="400" />
                <p>
                Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!
                </p>
            </div>
            <div className="tns-item" id="customize-item2" aria-hidden="true" tabIndex="-1">
                <img src="https://source.unsplash.com/collection/993239/600x400" alt="" width="600" height="400" />
                <p>
                Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!
                </p>
            </div>
            {/* <div>
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
            </div> */}
        </div>
    )
}
export default ReProducts