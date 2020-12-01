import React from 'react'
import Channel from './Channel'
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar__top'>
          <h5>FOLLOWED CHANNELS</h5>
          <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/sykkuno-profile_image-6ab1e70e07e29e9b-300x300.jpeg' name='sykkuno' followers='1.8M' />
          <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/d106e6cbf2483610-profile_image-300x300.png' name='valkyrae' followers='1.1M' />
          <h5>RECOMMENDED CHANNELS</h5>
          <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/517e697a-6768-4834-a703-c326cc1a74b5-profile_image-300x300.png' name='fusliePhd' followers='556K' />
          <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/bde8aaf5-35d4-4503-9797-842401da900f-profile_image-300x300.png' name='ludwig' followers='918K'/>
          <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/bc69bcad-e9ce-48de-9326-adba3c052385-profile_image-300x300.png' name='itsHafu' followers='1M'/>
          <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/lilypichu-profile_image-9a1ba797a9721716-300x300.png' name='lilypichu'followers='1.7M'/>


          <p className="sidebar__topShowMore">Show More</p>
          </div>
          <div className='sidebar__bottom'>
              <div className='sidebar__bottomContainer'>
                  <i className='fas fa-search'></i>
                  <input type="text"placeholder="Search to Add Friends"/>
              </div>
          </div>
        </div>
    )
}

export default Sidebar;
