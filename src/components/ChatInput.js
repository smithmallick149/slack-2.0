import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { db } from '../firebase';
import { Button } from '@material-ui/core';

function ChatInput({ channelName, channelId, chatRef }, props) {
	const [input, setInput] = useState('');
	const sendMessage = (e) => {
		e.preventDefault();
		console.log('channelId', channelId, props);
		if (!channelId) {
			return false;
		}

		db.collection('rooms').doc(channelId).collection('messages').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: 'Smith Mallick',
			userImage:
				'https://media-exp1.licdn.com/dms/image/C5103AQE6jJ3YTYbjdQ/profile-displayphoto-shrink_200_200/0/1561550813685?e=1620259200&v=beta&t=Uij4MP-0C4lFd2Snnx8RNJBJYQDv2V5OriyVkxIBJcM',
		});

		chatRef?.current?.scrollIntoView({ behavior: 'smooth' });
		setInput('');
	};

	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message #${channelName}`}
				/>
				<Button hidden type="submit" onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 20px;

	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}

	> form > input {
		position: fixed;
		bottom: 30px;
		width: 60%;
		border: 1px solid gray;
		border-radius: 3px;
		padding: 20px;
		outline: none;
	}

	> form > Button {
		display: none !important;
	}
`;
