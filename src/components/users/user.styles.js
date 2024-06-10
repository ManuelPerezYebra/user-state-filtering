import styled from 'styled-components';

const StyledUser = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	width: 50%;
	margin: 10px auto;
	border-radius: 20px;
	box-shadow: 0px 0px 20px -7px rgba(0, 0, 0, 0.68);
	align-items: center;
`;
const Profile = styled.div`
	img {
		border-radius: 50%;
		width: 70px;
		height: 70px;
	}
	display: flex;
	align-items: center;
	gap: 20px;
`;
const Status = styled.span`
	color: ${({ $active }) => ($active ? 'green' : 'red')};
`;

export { StyledUser, Profile, Status };
