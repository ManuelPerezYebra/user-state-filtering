import styled from 'styled-components';
const StyledHeader = styled.div`
	width: 50%;
	margin: 0 auto;
	text-align: center;
`;
const StyledFilterDiv = styled.div`
	display: flex;
	width: 50%;
	margin: 0 auto;
	justify-content: space-around;
	align-items: center;
	input {
		height: fit-content;
	}
`;

export { StyledFilterDiv, StyledHeader };
