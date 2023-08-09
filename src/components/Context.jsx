import { useState, createContext } from "react";
import basicCourseImg from "../img/basicCourseImg.webp";
import middleCourseImg from "../img/middleCourseImg.webp";
import advancedCourseImg from "../img/advancedCourseImg.webp";

export const ContextProps = createContext();

function Context({ children }) {
  const [allCourses, setAllCourses] = useState([
    {
      name: "Curso Inicial",
      price: 200,
      img: basicCourseImg,
      id: 1,
      classes: [
        "https://www.youtube.com/watch?v=7s1RjItUBqU&list=PLL0TiOXBeDagsYUYFO9WMwDtuDuoGZVB9",
        "https://www.youtube.com/watch?v=WdGxzGpVNvA&list=PLL0TiOXBeDagsYUYFO9WMwDtuDuoGZVB9&index=2&pp=iAQB",
        "https://www.youtube.com/watch?v=dLkwOYDu0xY&list=PLL0TiOXBeDagsYUYFO9WMwDtuDuoGZVB9&index=3&pp=iAQB",
        "https://www.youtube.com/watch?v=cLRKFGlOtM0&list=PLL0TiOXBeDagsYUYFO9WMwDtuDuoGZVB9&index=4&pp=iAQB",
        "https://www.youtube.com/watch?v=QBnz6sya3Cs&list=PLL0TiOXBeDagsYUYFO9WMwDtuDuoGZVB9&index=5&pp=iAQB",
      ],
    },
    {
      name: "Curso Medio",
      price: 250,
      img: middleCourseImg,
      id: 2,
      classes: [
        "https://www.youtube.com/watch?v=G2FCfQj-9ig&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS&index=1&pp=iAQB",
        "https://www.youtube.com/watch?v=9ojhJsXNWCI&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS&index=2&pp=iAQB",
        "https://www.youtube.com/watch?v=yppT6GPZMyo&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS&index=3&pp=iAQB",
        "https://www.youtube.com/watch?v=u4I9PqhqCo8&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS&index=4&pp=iAQB",
        "https://www.youtube.com/watch?v=VY448UWAQ_0&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS&index=5&pp=iAQB",
      ],
    },
    {
      name: "Curso Avanzado",
      price: 350,
      img: advancedCourseImg,
      id: 3,
      classes: [
        "https://www.youtube.com/watch?v=OEmvB3pz4Gw&list=PL7tUbHOY3O6hMEoLHclI0tt1IGY4voAvu&index=1&pp=iAQB",
        "https://www.youtube.com/watch?v=5y-JmrtjvbU&list=PL7tUbHOY3O6hMEoLHclI0tt1IGY4voAvu&index=2&pp=iAQB",
        "https://www.youtube.com/watch?v=8izUD1mdyFc&list=PL7tUbHOY3O6hMEoLHclI0tt1IGY4voAvu&index=3&pp=iAQB",
        "https://www.youtube.com/watch?v=kU_L2X9MhpQ&list=PL7tUbHOY3O6hMEoLHclI0tt1IGY4voAvu&index=4&pp=iAQB",
        "https://www.youtube.com/watch?v=NO5maAC3enw&list=PL7tUbHOY3O6hMEoLHclI0tt1IGY4voAvu&index=5&pp=iAQB",
      ],
    },
  ]);

  const [myCourses, setMyCourses] = useState([
    {
      name: "Curso Inicial",
      price: 200,
      img: basicCourseImg,
      id: "initialCourse",
      classes: [
        {
          name: "Clase número 1",
          id: 0,
          URL: "https://player.vimeo.com/external/451108090.sd.mp4?s=be43f670061443ffa8c6d96bcfe5f885b989a2e8&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 2",
          id: 1,
          URL: "https://player.vimeo.com/external/451108713.sd.mp4?s=949f31b35a0b6d12b4480c2a1ba71a1b249e91a5&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 3",
          id: 2,
          URL: "https://player.vimeo.com/external/568582611.sd.mp4?s=0767de924426aef1ea713c202c595d259576ae07&profile_id=164&oauth2_token_id=57447761",
        },
      ],
    },
    {
      name: "Curso Avanzado",
      price: 350,
      img: advancedCourseImg,
      id: 3,
      classes: [
        {
          name: "Clase número 1",
          id: 0,
          URL: "https://player.vimeo.com/external/468451144.sd.mp4?s=1a225f021e1bb831f8973685579845d84fb2521c&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 2",
          id: 1,
          URL: "https://player.vimeo.com/external/584755638.sd.mp4?s=80aed001e5b45d9f760d196d10f14f6793fa046d&profile_id=164&oauth2_token_id=57447761",
        },

        {
          name: "Clase número 3",
          id: 2,
          URL: "https://player.vimeo.com/external/535200449.sd.mp4?s=9e665fae0edddd4abd7bb8fdc8df6381fc14aa71&profile_id=164&oauth2_token_id=57447761",
        },
      ],
    },
  ]);

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
