import { useState, createContext, useContext } from "react";

const ContextProps = createContext();
export const useMyContext = () => useContext(ContextProps);

function Context({ children }) {
  const [coursesCart, setCoursesCart] = useState([]),
    [errorVideo, setErrorVideo] = useState(false),
    [allCourses, setAllCourses] = useState([
      {
        id: 0,
        name: "Curso Inicial",
        cash: 300,
        description:
          "Comenzarás aprendiendo a leer el mercado de manera precisa y fortalecerás las bases para poder comenzar tu entendimiento de cómo el mercado entrega y maneja el precio.",
        classes: [
          { name: "1 - Introducción a Mercados", id: 0 },
          { name: "2 - PIP, Lot Size, Trading View", id: 1 },
          { name: "3 - Price Delivery", id: 2 },
          { name: "4 - Book of Price", id: 3 },
          { name: "5 - Risk to Reward", id: 4 },
          { name: "6 - Liquidity", id: 5 },
          { name: "7 - Premium & Discount Markets", id: 6 },
          { name: "8 - Implementig News", id: 7 },
          { name: "9 - Higher Timeframes to Lower", id: 8 },
        ],
      },
      {
        id: 1,
        name: "Curso Medio",
        cash: 700,
        description:
          "Tendrás la capacitación para analizar un gráfico y predecir el próximo movimiento de precio con certeza. Conseguirás un mayor entendimiento, sumando experiencia y ejemplos detallados.",
        classes: [
          { name: "1 - Introducción a Mercados", id: 0 },
          { name: "2 - PIP, Lot Size, Trading View", id: 1 },
          { name: "3 - Price Delivery", id: 2 },
          { name: "4 - Book of Price", id: 3 },
          { name: "5 - Risk to Reward", id: 4 },
          { name: "6 - Liquidity", id: 5 },
          { name: "7 - Premium & Discount Markets", id: 6 },
          { name: "8 - Implementig News", id: 7 },
          { name: "9 - Higher Timeframes to Lower", id: 8 },
        ],
      },
      {
        id: 2,
        name: "Curso Avanzado",
        cash: 1000,
        description:
          "Obtendrás herramientas y muy bases sólidas. Nos centraremos en la importancia de ciertos factores que hacen que tu trading sea estable y sostenible con el tiempo.",
        classes: [
          { name: "1 - Introducción a Mercados", id: 0 },
          { name: "2 - PIP, Lot Size, Trading View", id: 1 },
          { name: "3 - Price Delivery", id: 2 },
          { name: "4 - Book of Price", id: 3 },
          { name: "5 - Risk to Reward", id: 4 },
          { name: "6 - Liquidity", id: 5 },
          { name: "7 - Premium & Discount Markets", id: 6 },
          { name: "8 - Implementig News", id: 7 },
          { name: "9 - Higher Timeframes to Lower", id: 8 },
        ],
      },
    ]),
    [myCourses, setMyCourses] = useState(null),
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
