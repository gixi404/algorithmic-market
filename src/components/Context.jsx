import { useState, createContext, useContext } from "react";
import exampleImg from "../img/course-img.webp";

const ContextProps = createContext(),
  IS_MOBILE =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
// getProgress =
//   localStorage.getItem("progress") !== undefined
//     ? Number(localStorage.getItem("progress"))
//     : 11.11;

function Context({ children }) {
  const [coursesCart, setCoursesCart] = useState([]),
    [loadContent, setLoadContent] = useState(false),
    [progressValue, setProgressValue] = useState(11.11),
    [courseID, setCourseID] = useState(null),
    [errorVideo, setErrorVideo] = useState(false),
    [allCourses, setAllCourses] = useState([
      {
        isBought: true,
        id: 0,
        description:
          "Aprenderas cosas increíble como a lavar la ropa, bailar con un pancho de manera sencilla y poderosamente evolutiva, vamos milei.",
        name: "Curso Inicial",
        cash: 200,
        img: exampleImg,
      },
      {
        isBought: false,
        id: 1,
        description:
          "Aprenderas cosas increíble como a lavar la ropa, bailar con un pancho de manera sencilla y poderosamente evolutiva, vamos milei.",
        name: "Curso Medio",
        cash: 250,
        img: exampleImg,
      },
      {
        isBought: false,
        id: 2,
        description:
          "Aprenderas cosas increíble como a lavar la ropa, bailar con un pancho de manera sencilla y poderosamente evolutiva, vamos milei.",
        name: "Curso Avanzado",
        cash: 350,
        img: exampleImg,
      },
    ]),
    [myCourses, setMyCourses] = useState([
      {
        //! aquiq - isCompleted: false,
        name: "Curso Inicial",
        price: 200,
        img: exampleImg,
        id: 0,
        classes: [
          {
            name: "1 - Introducción a mercados",
            id: 1,
            URL: "https://iframe.mediadelivery.net/embed/158989/619b4b43-12fe-4b2e-8789-0b3cd493f0b3?autoplay=true&loop=false&muted=false&preload=true",
          },
          {
            name: "2 - PIP, Lot Size, Trading View",
            id: 2,
            URL: "https://youtube.com/embed/vzSQ8b7cRMQ?si=jxjci9-5sBxZkQi_",
          },
          {
            name: "3 - Price Delivery",
            id: 3,
            URL: "https://youtube.com/embed/lgsITUruYFw?si=mNND0nu0Flh4wwWR",
          },
          {
            name: "4 - Book of Price",
            id: 4,
            URL: "https://youtube.com/embed/re_dUQh2Vtg?si=ht_7yGbWKeWw6coo",
          },
          {
            name: "5 - Risk to Reward",
            id: 5,
            URL: "https://youtube.com/embed/Vq2evS44q7s?si=B2q4SGk55wdYMHUv",
          },
          {
            name: "6 - Liquidity",
            id: 6,
            URL: "https://youtube.com/embed/gkVzfv84lU0?si=a7bzzVTY9tOpFBHQ",
          },
          {
            name: "7 - Premium Discount",
            id: 7,
            URL: "https://youtube.com/embed/xb9cSfPOb1c?si=dwOSnNsDYTxHNorc",
          },
          {
            name: "8 - High Impact News",
            id: 8,
            URL: "https://youtube.com/embed/iaJKy1Ic3_I?si=T45V5FN81Zd_WALr",
          },
          {
            name: "9 - Higher Timeframes to Lower",
            id: 9,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=6AuIVHkmzbXm9bOe",
          },
        ],
      },
      {
        name: "Curso Medio",
        price: 200,
        img: exampleImg,
        id: 1,
        classes: [
          {
            name: "1 - Mirtha Legrand desnuda",
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
        img: exampleImg,
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
    return allCourses.find(
      course => Number(course.id) === Number(coursedetails)
    );
  }

  const contextValues = {
    IS_MOBILE,
    coursesCart,
    setCoursesCart,
    loadContent,
    setLoadContent,
    progressValue,
    setProgressValue,
    courseID,
    setCourseID,
    errorVideo,
    setErrorVideo,
    allCourses,
    setAllCourses,
    myCourses,
    setMyCourses,
    removeCart,
    courseSelected,
  };

  return (
    <ContextProps.Provider value={contextValues}>
      {children}
    </ContextProps.Provider>
  );
}

export default Context;

export const useMyContext = () => useContext(ContextProps);
