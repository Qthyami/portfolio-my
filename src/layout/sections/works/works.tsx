import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/work";
import SocNet from "../../../assets/projects/SocNet.png"
import Counter from "../../../assets/projects/Counter.png"
import {SectionTitle} from "../../../components/SectionTitle";
import {MenuWorks} from "../../../components/menu/MenuWorks";


export const Works = () => {
    const items = ["All", "React", "RTK"];

    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <MenuWorks items={items}/>
            <FlexWrapper align={"center"} justify={"space-around"}>
<Work title={"Social Network"} text={"Social Network"} src={SocNet}/>
  <Work title={"Counter App"} text={"Counter"} src={Counter}/>


            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 50vh;
  margin-bottom: 140px;
  background-color: #adf8f8;
`;




