import Link from "next/link"
import Image from "next/image"
import {title, price} from './data.js'

export default function List() {
    // server start - npm run dev\
    let 상품 = ['빨간 포션', '파란 포션', '주황 포션'];
    let 가격 = [50, 30, 100];
    가격.map((a, i) => {
        console.log(a, i);
        return 10;
    })
    return (
        <div>
            <CartItem></CartItem>
        </div>
    )
}

function CartItem(){
    return(
        <div className="cart-item">
            <p className="cart-d">상품명</p>
            <p className="cart-d">가격</p>
            <p className="cart-d">개수</p>
        </div>
    )
}