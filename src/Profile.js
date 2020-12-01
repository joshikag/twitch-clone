import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__topLeft'>
            <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/sykkuno-profile_image-6ab1e70e07e29e9b-300x300.jpeg'/>
                 <div className='profile__topLeftDetails'>
                    <h1>Sykkuno</h1>
                    <h3>1.8M followers</h3>
                </div>
            </div>
            <div className='profile__topRight'>
                <i className='fas fa-heart graybg'></i>
                <i className='fas fa-bell graybg'></i>
                <i className='fas fa-ellipsis-v'></i>
            </div>
            <div className='profile__menu'>
                <h2 className='active'>Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i class='fas fa-arrow-up'></i></h2>
                <h2>Chat</h2>

            </div>
            <div className='profile__recent'>
                <h2>Recent Broadcasts</h2>
                <div className='profile__recentItems'>
                    <RecentItem 
                    url={'https://youtu.be/8T9CNn_yn-k'}
                    title={'the FASTEST & CLEANEST impostor duo'}/>
                    <RecentItem 
                    url={'https://youtu.be/vUW6UQvE2PU'}
                    title={'He protected me even though I am the Impostor...'}/>
                    <RecentItem 
                    url={'https://youtu.be/8RTHO3iiDoQ'}
                    title={'James Charles thought we were innocent but...'}/>
                    
                </div>
                <div className='profile__categories'>
                    <h2>Sykkuno's recently streamed catgories</h2>
                    <img src='https://static-cdn.jtvnw.net/ttv-boxart/Among%20Us-138x184.jpg'/>
                    <h3>Among Us</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
