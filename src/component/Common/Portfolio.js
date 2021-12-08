import React, {useState} from 'react'
import {Table} from 'reactstrap';

const Porfolio = () => {
    const [state, ] = useState({
        assets : [
            { icon : "mdi mdi-bitcoin", color : "warning", coin: "Bitcoin", title : "BTC", coinPrice: "BTC 0,01284736", price: "$613,729"},
            { icon : "mdi mdi-ethereum", color : "primary", coin: "Ethereum", title : "ETH", coinPrice: "ETH 0,01283721", price: "$43,152" },
            { icon : "mdi mdi-litecoin", color : "info", coin: "Litecoin", title : "LTC", coinPrice: "LTC 9,02384729", price: "$281,124" }
        ]
    })
    return (
        <div>
           <h4 className="text-primary card-title mb-4">Portfolio</h4>
           <div className="table-responsive">
                <Table className="table-nowrap table-centered mb-0">
                    <tbody>
                        {state.assets.map((asset, key) =>
                            <tr key={key}>
                                <th scope="row">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-xs mr-3">
                                            <span className={"rounded-circle bg-soft-" + asset.color + " text-" + asset.color + " h2"}>
                                                <i className={asset.icon}></i>
                                            </span>
                                        </div>
                                        <div className="flex-column">
                                            <h3 className="font-size-14 mb-1">{asset.coin}</h3>
                                            <p className="text-muted">{asset.title}</p>
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    <h3 className="font-size-14 mb-1">{asset.coinPrice}</h3>
                                    <p className="text-muted">${asset.price}</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div> 
        </div>
    )
}

export default Porfolio
