import Link from "next/link"
import Image from "next/image"

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
            <div>
                <ul className="list">
                    {
                        상품.map((a, i) => {
                            return(
                            <li className="item" key={i}>
                                <div><img className="item-image" src={'/image'+i+'.png'} alt="포션"/></div>
                                <div className="item-d">
                                    <h3 className="item-title">{a}</h3>
                                    <h5 className="item-price">{가격[i]} 메소</h5>
                                    </div>
                                <div className="item-get"><h3>구매</h3></div>
                    </li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
