import { useState, createContext } from "react";
import basicCourseImg from "../img/basicCourseImg.webp";
import middleCourseImg from "../img/middleCourseImg.webp";
import advancedCourseImg from "../img/advancedCourseImg.webp";

export const ContextProps = createContext();

function Context({ children }) {
  const [allCourses, setAllCourses] = useState([
    {
      id: 0,
      description:
        "Un curso de trading es un programa de aprendizaje diseñado para enseñar a las personas cómo operar en los mercados financieros. Los cursos de trading pueden cubrir una amplia gama de temas, incluyendo análisis técnico, análisis fundamental, gestión de riesgos y psicología del trading.",
      name: "Curso Inicial",
      price: 200,
      img: basicCourseImg,
    },
    {
      id: 1,
      description:
        "Un curso de trading es un programa de aprendizaje diseñado para enseñar a las personas cómo operar en los mercados financieros. Los cursos de trading pueden cubrir una amplia gama de temas, incluyendo análisis técnico, análisis fundamental, gestión de riesgos y psicología del trading.",
      name: "Curso Medio",
      price: 250,
      img: middleCourseImg,
    },
    {
      id: 2,
      description:
        "Los cursos de trading pueden ser una excelente manera de aprender sobre los mercados financieros y cómo operar de manera rentable. Sin embargo, es importante elegir un curso de trading que sea ofrecido por una fuente confiable y que sea adecuado para tu nivel de experiencia.",
      name: "Curso Avanzado",
      price: 350,
      img: advancedCourseImg,
    },
  ]);

  const [myCourses, setMyCourses] = useState([
    {
      name: "Curso Inicial - Escolar",
      price: 200,
      img: basicCourseImg,
      id: 0 + " initialCourse",
      classes: [
        {
          name: "Clase número 1 - Inicial",
          id: 0,
          URL: "https://player.vimeo.com/external/451108090.sd.mp4?s=be43f670061443ffa8c6d96bcfe5f885b989a2e8&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 2 - Inicial",
          id: 1,
          URL: "https://player.vimeo.com/external/451108713.sd.mp4?s=949f31b35a0b6d12b4480c2a1ba71a1b249e91a5&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 3 - Inicial",
          id: 2,
          URL: "https://player.vimeo.com/external/568582611.sd.mp4?s=0767de924426aef1ea713c202c595d259576ae07&profile_id=164&oauth2_token_id=57447761",
        },
      ],
    },
    {
      name: "Curso Medio - Animales",
      price: 350,
      img: middleCourseImg,
      id: 1 + " middleCourse",
      classes: [
        {
          name: "Clase número 1 - Medio",
          id: 0,
          URL: "https://player.vimeo.com/external/468451144.sd.mp4?s=1a225f021e1bb831f8973685579845d84fb2521c&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 2 - Medio",
          id: 1,
          URL: "https://player.vimeo.com/external/584755638.sd.mp4?s=80aed001e5b45d9f760d196d10f14f6793fa046d&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 3 - Medio",
          id: 2,
          URL: "https://player.vimeo.com/external/535200449.sd.mp4?s=9e665fae0edddd4abd7bb8fdc8df6381fc14aa71&profile_id=164&oauth2_token_id=57447761",
        },
      ],
    },
    {
      name: "Curso Avanzado - Trading",
      price: 350,
      img: advancedCourseImg,

      id: 2 + " advancedCourse",
      classes: [
        {
          name: "Clase número 1 - Avanzado",
          id: 0,
          URL: "https://player.vimeo.com/external/311319079.sd.mp4?s=1104ffd451e8c0ed695e21a5fcaea20bc16bc69c&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 2 - Avanzado",
          id: 1,
          URL: "https://player.vimeo.com/external/539049879.sd.mp4?s=d764d5179f94ee66e86f31a9a4808d5abca97e4c&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 3 - Avanzado",
          id: 2,
          URL: "https://player.vimeo.com/external/473216752.sd.mp4?s=44c9e58521bd9fb5046d71011ee3059717ab9a05&profile_id=164&oauth2_token_id=57447761",
        },
      ],
    },
  ]);

  const courseSelected = coursedetails =>
    allCourses.find(course => course.id === Number(coursedetails));

  const contextValues = {
    allCourses,
    setAllCourses,
    myCourses,
    setMyCourses,
    courseSelected,
  };

  return (
    <ContextProps.Provider value={contextValues}>
      {children}
    </ContextProps.Provider>
  );
}

export default Context;
