import Link from "next/link"

export default function List() {
    // server start - npm run dev
    let name = 'Ahn'
    let age = '23'
    return (
        <div>
            <div>
                <ul className="list">
                    <li className="item">
                        <div><img src="app/list/image.png"></img></div>
                        <div>
                            <h3 className="item_title">아이템 1</h3>
                            <h5 className="item_price">3,000원</h5>
                        </div>
                    </li>
                    <li className="item">
                        <div>
                            <h3 className="item_title">아이템 2</h3>
                            <h5 className="item_price">6,000원</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
