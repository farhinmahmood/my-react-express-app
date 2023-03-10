import React from "react";
import { connect } from "react-redux";
import {ConnectedTaskList} from './TaskList'

export const Dashboard = ({groups})=>(
    <div>
        <h2>DashBoard</h2>
        {
            // groups.map(groups=>(<div>
            //     {groups.name}
                
            // </div>))
            // Test
            // Test

            groups.map(group=>(
                <ConnectedTaskList key={group.id} id={group.id} name={group.name}/>
            ))
        }
    </div>
);
function mapStateToProps(state){
    return{
        groups:state.groups
    }
}

export const ConnectedDashBoard = connect(mapStateToProps)(Dashboard);