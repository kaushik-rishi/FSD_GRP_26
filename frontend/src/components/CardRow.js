import Card2 from "./Card2";
import './cardsass.scss'
function CardRow(){
    return(
        <div className="wrapper">
            <Card2
                img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                title="The Everyday Salad"
                description="Take your boring salads up a knotch. This recipe is perfect for lunch
                and only contains 5 ingredients!"
            />

            <Card2
                img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                title="Simple Risotto"
                description="Fear Risotto no more! This simple recipe is perfect for family dinners."
            />

            <Card2
                img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                title="Baked Cod with Vegetables"
                description="Baked Cod with Vegetables. 30 minute meal!"
            />
        </div>
    )
}
export default CardRow