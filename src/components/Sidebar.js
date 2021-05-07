import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import  { useCollection } from 'react-firebase-hooks/firestore'
import { db,auth } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
    
    const [channels, loading, error] = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth);
    return (
      <SidebarContainer>
      <SidebarHeader>
          <SidebarInfo>
          <h2>ChandanRoom</h2>
          <h3>
          <FiberManualRecordIcon />
          {user?.displayName}
          </h3>
          </SidebarInfo>
          <CreateIcon />
          </SidebarHeader>

       
           <SidebarOption Icon={ExpandMoreIcon} title="Groups" />
           <hr/>
           <SidebarOption Icon={AddIcon} addChannelOption
           title="Create groups" />
           {channels?.docs.map((doc) => (
               <SidebarOption
               key={doc.id}
               id={doc.id}
               title={doc.data().name}
               />
           ))}
      </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
color:white;
flex:0.3;
background-color: var(--slack-color);
max-width:260px;
margin-top:60px;
>hr{
    border:1px solid #49274b;
}
`;

const SidebarHeader = styled.div`
display:flex;
border-bottom:1px solid #49274b;
padding:13px;
>.MuiSvgIcon-root{
padding:8px;
color:#49274b;
font-size:18px;
background-color:white;
border-radius:999px;
}
`;

const SidebarInfo = styled.div`
  flex:1;
  >h2{
      margin-right:75px;
      font-size:15px;
      font-weight:900;
      margin-bottom:5px;
}
> h3{
    display:flex;
    font-size:13px;
    font-weight:400;
    align-items:center;
}
>h3 > .MuiSvgIcon-root{
    font-size:14px;
    margin-top:1px;
    margin-right:2px;
    color:green;
}
`;