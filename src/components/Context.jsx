import { useState, createContext } from "react";
import basicCourseImg from "../img/basicCourseImg.webp";
import middleCourseImg from "../img/middleCourseImg.webp";
import advancedCourseImg from "../img/advancedCourseImg.webp";

export const ContextProps = createContext();

function Context({ children }) {
  const [coursesCart, setCoursesCart] = useState([]),
    [idCourse, setIdCourse] = useState(""),
    [loadContent, setLoadContent] = useState(false),
    [progressValue, setProgressValue] = useState(11.11),
    [courseID, setCourseID] = useState(null),
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
            URL: "https://youtube.com/embed/d6P7kWUiDMY?si=bvSeghwBu2yYX06E",
          },
          {
            name: "2 - PIP, Lot Size, Trading View",
            id: 1,
            URL: "https://youtube.com/embed/vzSQ8b7cRMQ?si=d0-pyyHSzrDANT8W",
          },
          {
            name: "3 - Price Delivery",
            id: 2,
            URL: "https://youtube.com/embed/lgsITUruYFw?si=nG8Dj0qUWqQEekJL",
          },
          {
            name: "4 - Book of Price",
            id: 3,
            URL: "https://youtube.com/embed/re_dUQh2Vtg?si=8CRB0u2w5i1HPofk",
          },
          {
            name: "5 - Risk to Reward",
            id: 4,
            URL: "https://youtube.com/embed/Vq2evS44q7s?si=ZylOoebXm4k4SY_X",
          },
          {
            name: "6 - Liquidity",
            id: 5,
            URL: "https://youtube.com/embed/gkVzfv84lU0?si=BepibTJI85jkssd7",
          },
          {
            name: "7 - Premium Discount",
            id: 6,
            URL: "https://youtube.com/embed/xb9cSfPOb1c?si=Tm8jaIK1ao_riATK",
          },
          {
            name: "8 - High Impact News",
            id: 7,
            URL: "https://youtube.com/embed/iaJKy1Ic3_I?si=ev8pRfnk3q7pGaRl",
          },
          {
            name: "9 - Higher Timeframes to Lower",
            id: 8,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=LklVlWi4jHzW-p1g",
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
            URL: "https://youtube.com/embed/d6P7kWUiDMY?si=NU2c4YIPYqX53FOz",
          },
          {
            name: "2 - Pene sanguíneo",
            id: 1,
            URL: "https://youtube.com/embed/vzSQ8b7cRMQ?si=XQW-ojJtlZPh2yaJ",
          },
          {
            name: "3 - Vibora",
            id: 2,
            URL: "https://youtube.com/embed/lgsITUruYFw?si=1HUzl4ICP29HcVNE",
          },
          {
            name: "4 - El cuarteto de nos",
            id: 3,
            URL: "https://youtube.com/embed/re_dUQh2Vtg?si=7kox1UDxwgUDinJ7",
          },
          {
            name: "5 - Ratata",
            id: 4,
            URL: "https://youtube.com/embed/Vq2evS44q7s?si=XODMUFUdHqxp4NKP",
          },
          {
            name: "6 - Laureles",
            id: 5,
            URL: "https://youtube.com/embed/xb9cSfPOb1c?si=SXXjHnbOAnJLheZP",
          },
          {
            name: "7 - Disconformidad",
            id: 6,
            URL: "https://youtube.com/embed/iaJKy1Ic3_I?si=EB4aiRWmpdsaygmq",
          },
          {
            name: "8 - Nazaret",
            id: 7,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=7BJqx284lSFkh3ec",
          },
          {
            name: "9 - Hiligths",
            id: 8,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=7BJqx284lSFkh3ec",
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
            URL: "https://youtube.com/embed/d6P7kWUiDMY?si=NU2c4YIPYqX53FOz",
          },
          {
            name: "2 - A buscarte",
            id: 1,
            URL: "https://youtube.com/embed/vzSQ8b7cRMQ?si=XQW-ojJtlZPh2yaJ",
          },
          {
            name: "3 - La verdad que me gustaste",
            id: 2,
            URL: "https://youtube.com/embed/lgsITUruYFw?si=1HUzl4ICP29HcVNE",
          },
          {
            name: "4 - No quiero molestar",
            id: 3,
            URL: "https://youtube.com/embed/re_dUQh2Vtg?si=7kox1UDxwgUDinJ7",
          },
          {
            name: "5 - turututu",
            id: 4,
            URL: "https://youtube.com/embed/Vq2evS44q7s?si=XODMUFUdHqxp4NKP",
          },
          {
            name: "6 - Y es que la verdad",
            id: 5,
            URL: "https://youtube.com/embed/xb9cSfPOb1c?si=SXXjHnbOAnJLheZP",
          },
          {
            name: "7 - no sé",
            id: 6,
            URL: "https://youtube.com/embed/iaJKy1Ic3_I?si=EB4aiRWmpdsaygmq",
          },
          {
            name: "8 - Lo que va pasar",
            id: 7,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=7BJqx284lSFkh3ec",
          },
          {
            name: "9 - beibe",
            id: 8,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=7BJqx284lSFkh3ec",
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

  function idToName(id) {
    id = Number(id);
    switch (id) {
      case 0:
        return "Curso Inicial";
      case 1:
        return "Curso Medio";
      case 2:
        return "Curso Avanzado";
      default:
        return "Inicia tu curso...";
    }
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
    progressValue,
    courseID,
    setCourseID,
    setProgressValue,
    setIdCourse,
    removeCart,
    loadContent,
    setLoadContent,
    idToName,
  };

  return (
    <ContextProps.Provider value={contextValues}>
      {children}
    </ContextProps.Provider>
  );
}

export default Context;
