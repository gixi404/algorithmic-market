import { useState, createContext } from "react";
import basicCourseImg from "../img/basicCourseImg.webp";
import middleCourseImg from "../img/middleCourseImg.webp";
import advancedCourseImg from "../img/advancedCourseImg.webp";

export const ContextProps = createContext();

function Context({ children }) {
  const [coursesCart, setCoursesCart] = useState([]),
    [idCourse, setIdCourse] = useState(""),
    [allCourses, setAllCourses] = useState([
      {
        id: 0,
        description:
          "A trading course is a learning program designed to teach people how to trade the financial markets. Trading courses can cover a wide range of topics, including technical analysis, fundamental analysis, risk management, and trading psychology. ",
        name: "Course Initial",
        cash: 200,
        img: basicCourseImg,
      },
      {
        id: 1,
        description:
          "A trading course is a learning program designed to teach people how to trade the financial markets. Trading courses can cover a wide range of topics, including technical analysis, fundamental analysis, risk management, and trading psychology. ",
        name: "Curso Medium",
        cash: 250,
        img: middleCourseImg,
      },
      {
        id: 2,
        description:
          "A trading course is a learning program designed to teach people how to trade the financial markets. Trading courses can cover a wide range of topics, including technical analysis, fundamental analysis, risk management, and trading psychology. ",
        name: "Curso Advanced",
        cash: 350,
        img: advancedCourseImg,
      },
    ]),
    [myCourses, setMyCourses] = useState([
      {
        name: "Curso Inicial",
        price: 200,
        img: basicCourseImg,
        id: 0,
        classes: [
          {
            name: "1 - Introducción a mercados",
            id: 0,
            URL: "https://www.youtube.com/embed/d6P7kWUiDMY",
          },
          {
            name: "2 - PIP, Lot Size, Trading View",
            id: 1,
            URL: "https://www.youtube.com/embed/vzSQ8b7cRMQ",
          },
          {
            name: "3 - Price Delivery",
            id: 2,
            URL: "https://www.youtube.com/embed/lgsITUruYFw",
          },
          {
            name: "4 - Book of Price",
            id: 3,
            URL: "https://www.youtube.com/embed/re_dUQh2Vtg",
          },
          {
            name: "5 - Risk to Reward",
            id: 4,
            URL: "https://www.youtube.com/embed/Vq2evS44q7s",
          },
          {
            name: "6 - Liquidity",
            id: 5,
            URL: "https://www.youtube.com/embed/gkVzfv84lU0",
          },
          {
            name: "7 - Premium Discount",
            id: 6,
            URL: "https://www.youtube.com/embed/xb9cSfPOb1c",
          },
          {
            name: "8 - High Impact News",
            id: 7,
            URL: "https://www.youtube.com/embed/iaJKy1Ic3_I",
          },
          {
            name: "9 - Higher Timeframes to Lower",
            id: 8,
            URL: "https://www.youtube.com/embed/h3DY-SAYhvY",
          },
        ],
      },
      {
        name: "Curso Medio",
        price: 200,
        img: basicCourseImg,
        id: 1,
        classes: [
          {
            name: "1 - Pijas gratis",
            id: 0,
            URL: "https://drive.google.com/file/d/1fhgsdVoPIj9l7cJ2FeWpkl2ySnk58eXP/view?usp=sharing",
          },
          {
            name: "2 - Pene sanguíneo",
            id: 1,
            URL: "https://www.youtube.com/embed/vzSQ8b7cRMQ",
          },
          {
            name: "3 - Vibora",
            id: 2,
            URL: "https://www.youtube.com/embed/lgsITUruYFw",
          },
          {
            name: "4 - El cuarteto de nos",
            id: 3,
            URL: "https://www.youtube.com/embed/re_dUQh2Vtg",
          },
          {
            name: "5 - Ratata",
            id: 4,
            URL: "https://www.youtube.com/embed/Vq2evS44q7s",
          },
          {
            name: "6 - Laureles",
            id: 5,
            URL: "https://www.youtube.com/embed/gkVzfv84lU0",
          },
          {
            name: "7 - Disconformidad",
            id: 6,
            URL: "https://www.youtube.com/embed/xb9cSfPOb1c",
          },
          {
            name: "8 - Nazaret",
            id: 7,
            URL: "https://www.youtube.com/embed/iaJKy1Ic3_I",
          },
          {
            name: "9 - Hiligths",
            id: 8,
            URL: "https://www.youtube.com/embed/h3DY-SAYhvY",
          },
        ],
      },
      {
        name: "Curso Avanzado",
        price: 500,
        img: basicCourseImg,
        id: 2,
        classes: [
          {
            name: "1 - Y yo debí pasar",
            id: 0,
            URL: "https://www.youtube.com/embed/d6P7kWUiDMY",
          },
          {
            name: "2 - A buscarte",
            id: 1,
            URL: "https://www.youtube.com/embed/vzSQ8b7cRMQ",
          },
          {
            name: "3 - La verdad que me gustaste",
            id: 2,
            URL: "https://www.youtube.com/embed/lgsITUruYFw",
          },
          {
            name: "4 - No quiero molestar",
            id: 3,
            URL: "https://www.youtube.com/embed/re_dUQh2Vtg",
          },
          {
            name: "5 - turututu",
            id: 4,
            URL: "https://www.youtube.com/embed/Vq2evS44q7s",
          },
          {
            name: "6 - Y es que la verdad",
            id: 5,
            URL: "https://www.youtube.com/embed/gkVzfv84lU0",
          },
          {
            name: "7 - no sé",
            id: 6,
            URL: "https://www.youtube.com/embed/xb9cSfPOb1c",
          },
          {
            name: "8 - Lo que va pasar",
            id: 7,
            URL: "https://www.youtube.com/embed/iaJKy1Ic3_I",
          },
          {
            name: "9 - beibe",
            id: 8,
            URL: "https://www.youtube.com/embed/h3DY-SAYhvY",
          },
        ],
      },
    ]);

  function removeCart(product) {
    return setCoursesCart(prevState =>
      prevState.filter(item => item.id !== product.id)
    );
  }

  function courseSelected(coursedetails) {
    return allCourses.find(course => course.id === Number(coursedetails));
  }

  const contextValues = {
    allCourses,
    setAllCourses,
    myCourses,
    setMyCourses,
    courseSelected,
    coursesCart,
    setCoursesCart,
    idCourse,
    setIdCourse,
    removeCart,
  };

  return (
    <ContextProps.Provider value={contextValues}>
      {children}
    </ContextProps.Provider>
  );
}

export default Context;
