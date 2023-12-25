import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TableAdmin from "../tableAdmin/TableAdmin";
import AddUser from "../addUserPage/AddUser";
import PosterUsers from "../posterUsers/PosterUsers";
import NnotificationPage from "../notificationPage/NnotificationPage";
import './BottomNav.css'


type Props = {};

const BottomNav = ({inpValue}:any) => {
  const [value, setValue] = React.useState("users");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="bottomnav_div">
      {/* {value && value == "users" ? (
        <TableAdmin />
      ) : value == "adduser" ? (
        <AddUser />
      ) : value == "posts" ? (
        <PosterUsers />
      ) : (
        <NnotificationPage />
      )} */}

      {value === "users" && <TableAdmin  inpValue={inpValue}/>}
      {value === "adduser" && <AddUser />}
      {value === "posts" && <PosterUsers />}
      {value === "notification" && <NnotificationPage />}
      <BottomNavigation
        // sx={{ color:"orange" }}
        value={value}
        onChange={handleChange}
        className="displayver"
      >
        <BottomNavigationAction
          label="Users"
          value="users"
            icon={<RestoreIcon />}
          
        />
        <BottomNavigationAction
          label="Add"
          value="adduser"
            icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Posts"
          value="posts"
            icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Notification"
          value="notification"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
