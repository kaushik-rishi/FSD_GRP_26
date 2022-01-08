import { Table } from 'antd';
import 'antd/lib/table/style/index.css'
import 'antd/lib/pagination/style/index.css'
import 'antd/lib/tooltip/style/index.css'
import moment from 'moment'
import { format } from 'date-fns'
// import 'antd/lib/table/style/css'
const PaginatedTable2 = ({productRows}) => {
    const refCMap = {
        "apparel":"Apparel",
        "footwear":"Footwear",
        "sportswear":"Sportswear",
        "cat":"Costumes & Textile",
        "trad":"Traditional",
        "formal":"Formal",
        "acc":"Accessories",
        "cosmetics":"Cosmetics",
        "luggage":"Luggage",
        "waj":"Watches & Jewellery",
    }
    // const realStatus = {
    //     "isReusable":,
    // }
    const columns = [
        {
            title: 'Timestamp',
            dataIndex: 'date',
            sorter: (a,b) => moment(a.date).unix() - moment(b.date).unix(),
            render: text => format(new Date(text), 'dd/MM/yyyy, HH:mm:ss')
        },
        {
            title: 'Title',
            dataIndex: 'title',
            // render: text => <a href='https://www.google.com'>{text}</a>,        
        },
        {
            title: 'Description',
            dataIndex: 'desc',
        },
        {
            title: 'Category',
            dataIndex: 'cat',
            render: text => refCMap[text]
        },
        {
            title: 'Status',
            dataIndex: 'stats',
            render: text => text==="isReusable"?"Reusable":"Needs Processing"
        },
        {
            title: 'Donor',
            dataIndex: 'name',
            render: text => text[0].toUpperCase() + text.slice(1)
        },
    ];
    const data2 = productRows
    // console.log(data2)
    const data = [
        {
            key: '1',
            date: '2022-01-07T18:44:15.840Z',
            name: 'Atharva',
            email: 'atharva01.903@gmail.com',
            cat: 'acc',
            title: 'My quirky watch',
            desc: "This watch costed me 2500 bucks. But guess what, I got to know these kind of watches aren't permitted in exams. Hence, I have no option than donating.",
            stats: 'isReusable'
        },
        {
            key: '2', 
            date: '2022-01-06T18:45:15.840Z',
            name: 'ravi',
            email: 'test@xyz.com',
            cat: 'trad',
            title: 'my used footwear',
            desc: 'i bought this item in 2019. i don not wish to throw it hence donating',
            stats: 'isReusable'
        },
        {
            key: '3',
            date: '2022-01-08T15:44:15.840Z',
            name: 'Atharva',
            email: 'atharva01.903@gmail.com',
            cat: 'sportswear',
            title: 'My old sportswear',
            desc: "I bought this super fit jacket in 2021. It was looking good initially. But then I stopped wearing it and now I don't fit inside. Happy if someone wishes to use it.",
            stats: 'isReusable'
        },
        {
            key: '4', 
            date: '2022-01-07T12:44:13.840Z',
            name: 'varshith',
            email: 'test@xyz.com',
            cat: 'waj',
            title: 'my used watch',
            desc: 'i bought this item in 2019. i don not wish to throw it hence donating',
            stats: 'needsProc'
        }        
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }
    
    // {console.log(data)}
    return( <Table columns={columns} dataSource={data2} onChange={onChange} scroll={{y: 370 }} />)
}
export default PaginatedTable2