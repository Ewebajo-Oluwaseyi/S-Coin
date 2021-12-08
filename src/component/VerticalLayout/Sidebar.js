import React from 'react'
import SidebarContent from './SidebarContent';
import {connect} from 'react-redux'

function Sidebar(props) {

    return (
        <React.Fragment>
           <div className="vertical-menu">
                <data>
                <SidebarContent/>
                </data>
            </div>
        </React.Fragment>
    )
}

const mapStatetoProps = state => {
    return {
        layout: state.Layout
    }
}

export default connect(mapStatetoProps, {})(Sidebar)
