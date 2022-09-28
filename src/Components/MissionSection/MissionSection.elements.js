import styled from "styled-components";

export const MissionSectionContainer = styled.div`
width: 100%;
background-color: #f6f6f6;
`

export const MissionSectionWrapper = styled.div`
padding: 24px 0;

`

export const HeadingContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
display: flex;
align-items: center;
`
export const Line = styled.hr`
height: 1px;
width: 100%;
background-color: black;
`

export const Heading = styled.h1`
color: #1B1A55;
font-size: 28px;
font-weight: 800;
margin: 0 14px;
letter-spacing: 0.1px;
text-align: center;
`

export const CollageContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
display: block;
`
export const CollageWrapper = styled.div`
display: flex;
flex-wrap: wrap;

margin-top: 24px;
@media screen and (max-width:768px){
   
}

`

export const Column = styled.div`
max-width: 32%;
flex: 32%;
padding: 0 4px;

@media screen and (max-width:768px){
    max-width: 66%;
    flex: 66%;
}
@media screen and (max-width:500px){
    max-width: 100%;
    flex: 100%;
}
`
export const Img1 = styled.img`
margin-top: 4px;
width: 100%;

object-fit: cover;
vertical-align: middle;
overflow: hidden;
:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s ease-out;
}
`
export const Img2 = styled.img`
margin-top: 4px;
width: 100%;

vertical-align: middle;
object-fit: cover;
:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s ease-out;
}
`
export const Img3 = styled.img`
margin-top: 4px;
width: 100%;
vertical-align: middle;

object-fit: cover;
:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s ease-out;
}
`