import React from 'react';
import FlagIcon from '@material-ui/icons/Flag';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { IconButton, Avatar } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Header() {
    return (
        <div className="header">
          <div className="header__left">
            <img src="https://www.elzahrawy.com/wp-content/uploads/2021/01/facebook_logos_PNG19754.png" alt="logo"/>
            <div className="header__search">
              <SearchIcon />
              <input type="text"/>
            </div>
          </div>
          <div className="header__middle">
            <HomeIcon fontSize="larg"/>
            <FlagIcon fontSize="larg"/>
            <SubscriptionsIcon fontSize="larg"/>
            <StorefrontIcon fontSize="larg"/>
            <SupervisedUserCircleIcon fontSize="larg"/>
          </div>
          <div className="header__right">
            <div className="header__user">
              <Avatar/>
              <h4>toka Abdulhamied</h4>
            </div>
            <IconButton >
              <AddIcon /> 
            </IconButton>
            <IconButton >
              <NotificationsActiveIcon /> 
            </IconButton>
            <IconButton >
              <ForumIcon /> 
            </IconButton>
            <IconButton >
              <ExpandMoreIcon /> 
            </IconButton>
          </div>
        </div>
    )
}

export default Header
