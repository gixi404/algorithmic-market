import { useParams } from 'react-router-dom';
import PayLayout from './PayLayout';
import { useContext } from 'react';
import { ContextProps } from '../Context';
import styled from 'styled-components'

function detailCourses () {
  const { courseSelected } = useContext( ContextProps )
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
            <p>Primera clase de orientacion.</p>
          </ListElement>
            <Span></Span>
          <ListElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <circle cx="14.5" cy="14.5" r="14.5" fill="#FF6700" />
            </svg>
            <p>Segunda clase de orientacion.</p>
          </ListElement>
            <Span></Span>
          <ListElement>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <circle cx="14.5" cy="14.5" r="14.5" fill="#FF6700" />
            </svg>
            <p>Tercera clase de orientacion.</p>
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

export default detailCourses

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
  left: 17.5vw;
  top: 5vh;
  width: 65vw;
  height: 90vh;
  border: 0;
  border-radius: 8px;
  border-bottom: .9vh solid  #ff6700;
  border-right: .9vh solid  #ff6700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
  width: 52vw;
  height: 7vh;
  word-wrap: break-word;
  line-height: 7vh;
  color: #ff6700;
  text-align: start;
`;

const Article = styled.article`
  height: 20vh;
  width: 52vw;
`;

const P = styled.p`
  width: 52vw;
  font-family: "Poppins", monospace;
  font-size: .85rem;
  text-transform: capitalize;
  height: max-content;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top:1vh ;
  width: 52vw;
  font-family: "Poppins", monospace;
  font-size: .8rem;
  text-transform: capitalize;
  height: max-content;
`;

const Title = styled.h3`
  border: 0;
  font-family: "Poppins", monospace;
  margin-top: 1vh;
  width: max-content;
  border-bottom: .5vh solid #ff6700;
`;

const CourseMetas = styled.article`
  height: 35vh;
  width: 52vw;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const List = styled.div`
  width: 40vw;
  height: 20vh;
  margin-left: 11vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ListElement = styled.article`
  width: 35vw;
  height: 3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  p{
    font-family: "Poppins", monospace;
    height: 3vh;
    line-height: 3vh;
    width: 32vw;
    font-weight: bold;
    font-size: .7rem;
  }
  svg{
    margin-top:.5vh;
    width: 2vw;
    height: 3vh;
    line-height: 3vh;
  }
`;

const Span = styled.span`
  width: .5vw;
  margin-top: .2rem;
  margin-left: .65rem;
  height: 1rem;
  background: #FF6700;
  
`;

const Hours = styled.p`
  color: #797676;
  font-size: .8rem;
  font-family: "Poppins", monospace;
  span{
    margin: 0 .5vw;
  }
`;

const Compra = styled.div`
  height: 15vh;
  width: 65vw;
  border: 0;
  border-top: .9vh solid #ff6700;
  display: flex;
  justify-content: center;
  align-items: center;
  :first-child{
    height: 5vh;
    width: 20vw;
    line-height: 5vh;
  }
  p{
    width: 20vw;
    text-align: center;
    font-size: 1.1rem;
    font-weight:bold;
  }
  span{
    width: 20vw;
  }
`;