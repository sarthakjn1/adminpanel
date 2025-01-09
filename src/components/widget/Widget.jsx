import { ShoppingCartOutlined } from "@mui/icons-material";
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {

    let data;

    const amount = 100;

    switch(type){
        case "user":
            data = {
                title:"USERS",
                isMoney: false,
                link: "See all users",
                icon : <PersonOutlinedIcon className="icon" style={{color:"crimson",
                    backgroundColor: "#FFCCCB"
                }}/>
            }
            break;
        default:
            break;
            case "order":
                data = {
                    title:"ORDERS",
                    isMoney: false,
                    link: "View all orders",
                    icon : <ShoppingCartOutlinedIcon className="icon"
                    style={{color:"#ffa700",
                        backgroundColor: "#FFFFED"
                    }}
                    />
                }
                break;
            case "earning":
                data = {
                    title:"EARNINGS",
                    isMoney: true,
                    link: "View net earnings",
                    icon : <MonetizationOnOutlinedIcon className="icon" 
                    style={{color:"green",
                        backgroundColor: "#90EE90"
                    }}/>
                }
                break;
            case "balance":
                data = {
                    title:"BALANCE",
                    isMoney: true,
                    link: "View details",
                    icon : <AccountBalanceWalletOutlinedIcon className="icon" 
                    style={{color:"purple",
                        backgroundColor: "#CBC3E3"
                    }}/>
                }
                break;
        
    }

    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;