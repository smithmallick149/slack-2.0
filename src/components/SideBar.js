import { FiberManualRecord } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SidebarOptions from './SidebarOptions';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const SideBar = () => {
	const [channels, loading, error] = useCollection(db.collection('rooms'));
	const [user] = useAuthState(auth);

	console.log('channels', channels);
	const [showChannel, setShowChannel] = useState(false);
	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>SMITH SLACK </h2>
					<h3>
						{user?.displayName}
						<FiberManualRecordIcon />
					</h3>
				</SidebarInfo>
				<CreateIcon />
			</SidebarHeader>
			<SidebarOptions Icon={InsertCommentIcon} title="Threads" />
			<SidebarOptions Icon={InboxIcon} title="Mentions & reactions" />
			<SidebarOptions Icon={DraftsIcon} title="Saved items" />
			<SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
			<SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
			<SidebarOptions Icon={AppsIcon} title="Apps" />
			<SidebarOptions Icon={FileCopyIcon} title="File browser" />
			<SidebarOptions Icon={ExpandLessIcon} title="show less" />
			<hr />
			<SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
			{channels?.docs.map((doc) => (
				<SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
			))}
			<hr />
			<SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" />
			<SidebarFooter>
				<SidebarOptions Icon={ExitToAppIcon} title="Logout" logoutToMain />
			</SidebarFooter>
		</SidebarContainer>
	);
};

export default SideBar;

const SidebarContainer = styled.div`
	color: white;
	background-color: var(--slack-color);
	flex: 0.3;
	border-top: 1px solid #49274b;
	max-width: 260px;
	margin-top: 60px;

	> hr {
		margin-top: 10px;
		margin-bottom: 10px;
		border: 1px solid #49274b;
	}
`;

const SidebarHeader = styled.div`
	padding: 13px;
	display: flex;
	border-bottom: 1px solid #49274b;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: white;
		border-radius: 999px;
	}
`;
const SidebarFooter = styled.div`
	/* position: fixed;
	align-items: flex-end; */
	position: fixed;
	/* height: 50px; */
	/* background-color: red; */
	bottom: 0px;
	left: 0px;
	right: 0px;
	margin-bottom: 0px;
`;

const SidebarInfo = styled.div`
	flex: 1;

	> h2 {
		font-size: 15px;
		font-weight: 900;
		margin-bottom: 5px;
		text-align: left;
	}

	> h3 {
		display: flex;
		font-size: 13px;
		font-weight: 400;
		align-items: center;
	}

	> h3 > .MuiSvgIcon-root {
		font-size: 14px;
		margin-top: 1px;
		margin-right: 2px;
		color: green;
	}
`;
