import React from 'react';
import Nav from './Nav';
import '../Settings.css';

const Settings = props => {


    return (
        <>
        <div className='settings-container'>
            <h1>Settings</h1>
            <div className='settings-row'>
                
                <form>
                    <div className='top'>
                        <label>
                            Mic Sensitivity
                        </label>
                            <select>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                            </select>
                    </div>
                    <div className='bottom'>
                        <label>
                            Time between switching animals
                        </label>
                            <select>
                                <option value='10'>10 secs</option>
                                <option value='20'>20 secs</option>
                                <option value='30'>30 secs</option>
                                <option value='40'>40 secs</option>
                                <option value='50'>50 secs</option>
                                <option value='60'>60 secs</option>
                                <option value='70'>70 secs</option>
                                <option value='80'>80 secs</option>
                                <option value='90'>90 secs</option>
                                <option value='100'>100 secs</option>
                            </select>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}


export default Settings;