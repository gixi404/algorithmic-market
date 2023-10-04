import { useState, createContext, useContext } from "react";

const ContextProps = createContext();
export const useMyContext = () => useContext(ContextProps);

function Context({ children }) {
  const [coursesCart, setCoursesCart] = useState([]),
    [loadContent, setLoadContent] = useState(false),
    [errorVideo, setErrorVideo] = useState(false),
    [allCourses, setAllCourses] = useState([
      {
        id: 0,
        isBought: false,
        name: "Curso Inicial",
        cash: 300,
        description:
          "Comenzarás aprendiendo a leer el mercado de manera precisa y fortalecerás las bases para poder comenzar tu entendimiento de cómo el mercado entrega y maneja el precio.",
      },
      {
        id: 1,
        isBought: false,
        name: "Curso Medio",
        cash: 700,
        description:
          "Tendrás la capacitación para analizar un gráfico y predecir el próximo movimiento de precio con certeza. Conseguirás un mayor entendimiento, sumando experiencia y ejemplos detallados.",
      },
      {
        id: 2,
        isBought: false,
        name: "Curso Avanzado",
        cash: 1000,
        description:
          "Obtendrás herramientas y muy bases sólidas. Nos centraremos en la importancia de ciertos factores que hacen que tu trading sea estable y sostenible con el tiempo.",
      },
    ]),
    [myCourses, setMyCourses] = useState([
      {
        name: "Curso Inicial",
        price: 200,
        id: 0,
        classes: [
          {
            name: "1 - Introducción a Mercados",
            id: 0,
            URL: "https://iframe.mediadelivery.net/embed/158989/619b4b43-12fe-4b2e-8789-0b3cd493f0b3?autoplay=false&loop=false&muted=false&preload=false",
          },
          {
            name: "2 - PIP, Lot Size, Trading View",
            id: 1,
            URL: "https://iframe.mediadelivery.net/embed/158989/45b2b3dc-94d6-4938-b2c6-7cf55d6c6b28?autoplay=false&loop=false&muted=false&preload=false",
          },
          {
            name: "3 - Price Delivery",
            id: 2,
            URL: "https://iframe.mediadelivery.net/embed/158989/7a5ba6fe-09b5-4d73-af75-7cd145e11ef7?autoplay=false&loop=false&muted=false&preload=false",
          },
          {
            name: "4 - Book of Price",
            id: 3,
            URL: "https://iframe.mediadelivery.net/embed/158989/15a95c82-2643-4f7c-bbc9-de3d37e8faa9?autoplay=false&loop=false&muted=false&preload=false",
          },
          {
            name: "5 - Risk to Reward",
            id: 4,
            URL: "https://iframe.mediadelivery.net/embed/158989/72d3b8a0-6f27-4b69-b65e-09fdaa7f01bb?autoplay=false&loop=false&muted=false&preload=false",
          },
          {
            name: "6 - Liquidity",
            id: 5,
            URL: "https://iframe.mediadelivery.net/embed/158989/1c6a68aa-a15e-488b-a6f9-c2acf9901aae?autoplay=false&loop=false&muted=false&preload=false",
          },
          {
            name: "7 - Premium & Discount Markets",
            id: 6,
            URL: "https://iframe.mediadelivery.net/embed/158989/1e9982e9-9124-4d88-b792-29de431b9973?autoplay=false&loop=false&muted=false&preload=false",
          },
          {
            name: "8 - Implementig News",
            id: 7,
            URL: "https://iframe.mediadelivery.net/embed/158989/f0fc1c52-f0b7-4f4a-ba98-8a7ecf9afbe8?autoplay=false&loop=false&muted=false&preload=false",
          },
          {
            name: "9 - Higher Timeframes to Lower",
            id: 8,
            URL: "https://iframe.mediadelivery.net/embed/158989/08f064e7-3679-46a0-83f6-602878f7b3b8?autoplay=false&loop=false&muted=false&preload=false",
          },
        ],
      },
      {
        name: "Curso Medio",
        price: 200,
        id: 1,
        classes: [
          {
            name: "1 - Clase prueba 1",
            id: 0,
            URL: "https://youtube.com/embed/d6P7kWUiDMY?si=NU2c4YIPYqX53FOz",
          },
          {
            name: "2 - Clase prueba 2",
            id: 1,
            URL: "https://youtube.com/embed/vzSQ8b7cRMQ?si=XQW-ojJtlZPh2yaJ",
          },
          {
            name: "3 - Clase prueba 3",
            id: 2,
            URL: "https://youtube.com/embed/lgsITUruYFw?si=1HUzl4ICP29HcVNE",
          },
          {
            name: "4 - Clase prueba 4",
            id: 3,
            URL: "https://www.youtube.com/embed/RcLPtGK8_Zo",
          },
          {
            name: "5 - Clase prueba 5",
            id: 4,
            URL: "https://youtube.com/embed/Vq2evS44q7s?si=XODMUFUdHqxp4NKP",
          },
          {
            name: "6 - Clase prueba 6",
            id: 5,
            URL: "https://youtube.com/embed/xb9cSfPOb1c?si=SXXjHnbOAnJLheZP",
          },
          {
            name: "7 - Clase prueba 7",
            id: 6,
            URL: "https://youtube.com/embed/iaJKy1Ic3_I?si=EB4aiRWmpdsaygmq",
          },
          {
            name: "8 - Clase prueba 8",
            id: 7,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=7BJqx284lSFkh3ec",
          },
          {
            name: "9 - Clase prueba 9",
            id: 8,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=7BJqx284lSFkh3ec",
          },
        ],
      },
      {
        name: "Curso Avanzado",
        price: 500,
        id: 2,
        classes: [
          {
            name: "1 - Clase prueba 1",
            id: 0,
            URL: "https://youtube.com/embed/d6P7kWUiDMY?si=NU2c4YIPYqX53FOz",
          },
          {
            name: "2 - Clase prueba 2",
            id: 1,
            URL: "https://youtube.com/embed/vzSQ8b7cRMQ?si=XQW-ojJtlZPh2yaJ",
          },
          {
            name: "3 - Clase prueba 3",
            id: 2,
            URL: "https://youtube.com/embed/lgsITUruYFw?si=1HUzl4ICP29HcVNE",
          },
          {
            name: "4 - Clase prueba 4",
            id: 3,
            URL: "https://youtube.com/embed/re_dUQh2Vtg?si=7kox1UDxwgUDinJ7",
          },
          {
            name: "5 - Clase prueba 5",
            id: 4,
            URL: "https://youtube.com/embed/Vq2evS44q7s?si=XODMUFUdHqxp4NKP",
          },
          {
            name: "6 - Clase prueba 6",
            id: 5,
            URL: "https://youtube.com/embed/xb9cSfPOb1c?si=SXXjHnbOAnJLheZP",
          },
          {
            name: "7 - Clase prueba 7",
            id: 6,
            URL: "https://youtube.com/embed/iaJKy1Ic3_I?si=EB4aiRWmpdsaygmq",
          },
          {
            name: "8 - Clase prueba 8",
            id: 7,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=7BJqx284lSFkh3ec",
          },
          {
            name: "9 - Clase prueba 9",
            id: 8,
            URL: "https://youtube.com/embed/h3DY-SAYhvY?si=7BJqx284lSFkh3ec",
          },
        ],
      },
    ]),
    [protectedRoute, setProtectedRoute] = useState(false);

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
    coursesCart,
    setCoursesCart,
    loadContent,
    setLoadContent,
    errorVideo,
    setErrorVideo,
    allCourses,
    setAllCourses,
    myCourses,
    setMyCourses,
    removeCart,
    courseSelected,
    protectedRoute,
    setProtectedRoute,
  };

  return (
    <ContextProps.Provider value={contextValues}>
      {children}
    </ContextProps.Provider>
  );
}

export default Context;
