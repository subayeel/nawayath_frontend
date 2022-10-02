import styled from "styled-components";

export const NewsletterContainer = styled.div`
  max-width: 1140px;
  margin: 36px auto;
`;

export const NewsletterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Heading = styled.h1`
  color: #1b1a55;
  font-size: 36px;
  font-weight: 800;

  letter-spacing: 1.1px;
  text-align: center;
`;

export const Info = styled.p`
  color: #958da5;
  font-size: 18px;
  margin: 0;
  text-align: center;
`;

export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 14px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: end;
  }
`;

export const TextfieldContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  label::before {
    content: attr(title);
    position: absolute;
    top: 0;
    left: 15px;
    line-height: 40px;
    font-size: 18px;
    color: #777;
    transition: 300ms all;
  }
`;
export const TextField = styled.input.attrs({
  type: "text",
  
})`
  outline: 0;
  height: 56px;
  width: 600px;
  

  line-height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  font-size: 18px;
  color: #222;
  border: 1px solid #ccc;
  border-radius: 3px;
  &:focus {
    outline: 0;
    border-color: blue;
  }
  &:valid + label::before {
    line-height: 20px;
	font-size: 12px;
	top: -10px;
	background: #fff;
	padding: 0 6px;
	left: 9px;
    content: attr(data-title);
  }
  &:focus + label::before {
    line-height: 20px;
	font-size: 12px;
	top: -10px;
	background: #fff;
	padding: 0 6px;
	left: 9px;
    color: blue;
  }

  @media screen and (max-width:768px) {
    width:100%;
  }
`;
export const SignupBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 28px;
  border-radius: 28px;
  outline: none;
  border: none;
  height: 28px;
  width: fit-content;
  color: white;
  background-color: #1b1a5a;
  margin-left:14px;

  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;
