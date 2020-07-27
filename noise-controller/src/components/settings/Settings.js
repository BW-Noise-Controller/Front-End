import React from 'react';
import AccountSettings from "./AccountSettings.js";

import {  Tab,  } from 'semantic-ui-react';
import GameSettings from './GameSettings.js';

const panes = [
    { menuItem: 'Account Settings', render: () => <AccountSettings/> },
    { menuItem: 'Game Settings', render: () => <GameSettings/> },
  ]

const Settings = props => {


    return (
        <Tab panes={panes}>
        
        </Tab>
    );
}


export default Settings;