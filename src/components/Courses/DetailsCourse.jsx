import { useParams } from 'react-router-dom';
import PayLayout from './PayLayout';
import { useContext } from 'react';
import { ContextProps } from '../Context';
import styled from 'styled-components'

function detailCourses2 () {
  const {courseSelected} = useContext(ContextProps)
  const { coursedetails } = useParams();
  const { name, cash,  description } = courseSelected(coursedetails)
  return (
    <Container>
    <Details>
        <H2>{name} | Fundamentals</H2>
      <P>Explore the fundamentals of trading in our introductory course.</P>
      <P>Learn to interpret charts, analyze trends, and make informed decisions. Acquire essential skills for trading in financial markets and build a solid foundation for your trading success.</P>
      <Article>
        <Title>Overview:</Title>
        <Description>{description}</Description>
      </Article>
      <CourseMetas>
        <Title>Course Highlights:</Title>
        <List>
          <ListElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <circle cx="14.5" cy="14.5" r="14.5" fill="#FF6700" />
            </svg>
            <p>Primera clase de orientacion sexual.</p>
          </ListElement>
            <Span></Span>
          <ListElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <circle cx="14.5" cy="14.5" r="14.5" fill="#FF6700" />
            </svg>
            <p>Segunda clase de orientacion sexual.</p>
          </ListElement>
            <Span></Span>
          <ListElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <circle cx="14.5" cy="14.5" r="14.5" fill="#FF6700" />
            </svg>
            <p>Tercera clase de orientacion sexual.</p>
          </ListElement>
            <Span></Span>
        </List>
        <Hours><span>🕛</span>Estimated Time: 30hrs</Hours>
      </CourseMetas>
      <Compra>
        <span></span>
        <PayLayout courseSelected={courseSelected(coursedetails)} />
        <p>${cash} USD</p>
      </Compra>
      </Details>
    </Container>
  )
}

export default detailCourses2

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: transparent;
  backdrop-filter: blur(5px);
  z-index: 200;
`;

const Details = styled.section`
  background-color: #ebebeb;
  position: fixed;
  left: 35vw;
  top: 10vh;
  width: 30vw;
  height: 80vh;
  border: 0;
  border-radius: 8px;
  border-bottom: 5px solid  #ff6700;
  border-right: 5px solid  #ff6700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
  width: 26vw;
  height: 7vh;
  margin-bottom: 2vh;
  line-height: 10vh;
  color: #ff6700;
  text-align: start;
`;

const P = styled.p`
  width: 26vw;
  height: max-content;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top:1vh ;
  width: 26vw;
  height: max-content;
`;

const Article = styled.article`
  height: 18vh;
  width: 26vw;
`;

const Title = styled.h3`
  border: 0;
  margin-top: 1vh;
  width: max-content;
  border-bottom: .5vh solid #ff6700;
`;
const CourseMetas = styled.article`
  height: 26vh;
  width: 26vw;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const List = styled.div`
  width: 16vw;
  height: 15vh;
  margin-left: 4vw;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
`;

const ListElement = styled.article`
  width: 16vw;
  height: 2vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p{
    height: 2vh;
    line-height: 2vh;
    width: 16vw;
    font-weight: bold;
    font-size: .7rem;
  }
  svg{
    margin-top:.5vh;
    width: 2vw;
    height: 2vh;
    line-height: 5vh;
  }
`;
const Hours = styled.p`
  color: #797676;
  font-size: .8rem;
  span{
    margin: 0 .5vw;
  }
`;
const Span = styled.span`
width: .3vw;
margin-top: .5vh;
margin-left: .75vw;
height: 1rem;
background: #FF6700;
`;
const Compra = styled.div`
  height: 12vh;
  width: 30vw;
  border: 0;
  border-top: .5vh solid #ff6700;
  display: flex;
  justify-content: center;
  align-items: center;
  :first-child{
    height: 4vh;
    line-height: 4vh;
  }
  p{
    width: 10vw;
    text-align: center;
    font-size: 1.1rem;
    font-weight:bold;
  }
  span{
    width: 10vw;
  }
`;