import React, {useState} from 'react';
import {Nav, NavLink, NavItem, TabContent, TabPane, Label, InputGroup, InputGroupAddon, Input, Button} from 'reactstrap'
import classnames from 'classnames';

const Buysell = () =>{
    const [state, setState] = useState({
        activeTab: '1'
    });
    const toggleTab = (tab) => {
        if (state.activeTab !== tab) {
            setState({
                activeTab: tab
            });
        }
    }
    return (
        <div>
            <h2 className="text-primary card-title mb-4">Buy/Sell</h2>
            <div>
                <p className="text-muted mb-2"><i className="mdi mdi-wallet mr-1"></i> Wallet Balance</p>
                <h5>$9,128.00</h5>
            </div>
            <div className="mt-4">
                <Nav pills className="bg-light rounded" role="tablist" style={{"cursor": "pointer"}}>
                    <NavItem style={{"width": "50%"}}>
                        <NavLink style={{"display": "flex", "justifyContent": "center"}} className={classnames({ active: state.activeTab === '1' })} onClick={() => { toggleTab('1'); }} >
                            Buy
                        </NavLink>
                    </NavItem>
                    <NavItem style={{"width": "50%"}}>
                        <NavLink style={{"display": "flex", "justifyContent": "center"}} className={classnames({ active: state.activeTab === '2' })} onClick={() => { toggleTab('2'); }} >
                            Sell
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={state.activeTab} className="mt-4">
                    <TabPane tabId="1" id="buy-tab">
                        <div>
                            <div>
                                <Label>Add Amount :</Label>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <Label className="input-group-text">Amount</Label>
                                    </InputGroupAddon>
                                    <select className="custom-select" style={{maxWidth: "90px"}}>
                                        <option value="1" defaultValue>BTC</option>
                                        <option value="2">ETH</option>
                                        <option value="3">LTC</option>
                                        </select>
                                    <Input type="text" className="form-control"/>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <Label className="input-group-text">Price</Label>
                                    </InputGroupAddon>
                                    <Input type="text" className="form-control"/>
                                    <InputGroupAddon addonType="append">
                                        <Label className="input-group-text">$</Label>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>  
                            <div className="text-center">
                                <Button type="button" color="success" className="w-md">Buy Coin</Button>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="2" id="sell-tab">
                        <div>    
                            <div>
                                <Label>Add Amount :</Label>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <Label className="input-group-text">Amount</Label>
                                    </InputGroupAddon>
                                    <select className="custom-select" style={{maxWidth: "90px"}}>
                                        <option value="1" defaultValue>BTC</option>
                                        <option value="2">ETH</option>
                                        <option value="3">LTC</option>
                                    </select>
                                    <Input type="text" className="form-control"/>
                                </InputGroup>    
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <Label className="input-group-text">Price</Label>
                                    </InputGroupAddon>
                                    <Input type="text" className="form-control"/>
                                    <InputGroupAddon addonType="append">
                                        <Label className="input-group-text">$</Label>
                                    </InputGroupAddon>
                                </InputGroup>
                             </div>  
                            <div className="text-center">
                                <Button type="button" color="danger" className="w-md">Sell Coin</Button>
                            </div>
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default Buysell
