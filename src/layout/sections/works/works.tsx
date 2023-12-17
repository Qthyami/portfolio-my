import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/work";
import SocNet from "../../../assets/projects/SocNet.png"
import Counter from "../../../assets/projects/Counter.png"
import {SectionTitle} from "../../../components/SectionTitle";


export const Works = () => {
    const items = ["All", "React", "RTK"];

    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <StyledMenuWorks>
                {items.map((item, index) => (
                    <StyledMenuItem key={index}>{item}</StyledMenuItem>
                ))}
            </StyledMenuWorks>
            <FlexWrapper justify={"space-around"}>
<Work title={"Social Network"} text={"Social Network"} src={SocNet}/>
  <Work title={"Counter App"} text={"Counter"} src={Counter}/>


            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #adf8f8;
`;

const StyledMenuWorks = styled.ul`
  display: flex;
  gap:30px;
  justify-content: center; 
  list-style-type: none; /* Убираем маркеры у списка */
 
`;

const StyledMenuItem = styled.li`
  margin-right: 10px; /* Расстояние между элементами списка */
  text-decoration: underline; /* Подчеркиваем текст элемента */
  cursor: pointer; /* Делаем курсор указателем при наведении */
`;

