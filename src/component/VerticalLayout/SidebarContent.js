import React from 'react';
import { Link } from 'react-router-dom'

function SidebarContent() {
    return (
        <React.Fragment>
            <div id="sidebar-menu">
                <ul className="metismenu list-unstyled">
                    <li className="menu-title">Menu</li>
                    <li>
                        <Link to="/#" className="waves-effect waves-ripple">
                        <i className="fas fa-home mx-2"></i>
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="waves-effect waves-ripple">
                        <i className="fas fa-wallet mx-2"></i>
                        <span>Wallet</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="waves-effect waves-ripple">
                        <i className="fas fa-chart-bar mx-2"></i>
                        <span>Statistics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="waves-effect waves-ripple">
                        <i className="fas fa-dollar-sign mx-2"></i>
                        <span>Transactions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="waves-effect waves-ripple">
                        <i className="fas fa-exchange-alt mx-2"></i>
                        <span>Exchange</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="waves-effect waves-ripple">
                        <i className="far fa-newspaper mx-2"></i>
                        <span>News</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default SidebarContent
