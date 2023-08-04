import { useState, createContext } from "react";
import basicCourseImg from "../img/basicCourseImg.webp";
import middleCourseImg from "../img/middleCourseImg.webp";
import advancedCourseImg from "../img/advancedCourseImg.webp";

export const ContextProps = createContext();

function Context({ children }) {
  const [allCourses, setAllCourses] = useState([
    { name: "Curso Inicial", price: 200, img: basicCourseImg, id: 1 },
    { name: "Curso Medio", price: 250, img: middleCourseImg, id: 2 },
    { name: "Curso Avanzado", price: 350, img: advancedCourseImg, id: 3 },
  ]);
  const [myCourses, setMyCourses] = useState([]);

  const contextValues = {
    allCourses,
    setAllCourses,
    myCourses,
    setMyCourses,
  };

  return (
    <ContextProps.Provider value={contextValues}>
      {children}
    </ContextProps.Provider>
  );
}

export default Context;
