import { Card } from 'antd';
import 'antd/lib/card/style/index.css'
const { Meta } = Card;
const CardPro = () => {
  return (
    <div>
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://cdn.cdnparenting.com/articles/2019/02/09121156/385677673-H.webp" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    </div>
  )
}
export default CardPro