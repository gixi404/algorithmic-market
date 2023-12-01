import { useState, createContext, useContext } from "react";

const ContextProps = createContext();
export const useMyContext = () => useContext(ContextProps);

function Context({ children }) {
  const
    [coursesCart, setCoursesCart] = useState([]),
    [errorVideo, setErrorVideo] = useState(false),
    //* allCourses está solo para entregar los detalles del curso de manera local.
    [myCourses, setMyCourses] = useState(null),
    [protectedRoute, setProtectedRoute] = useState(false);

  function removeCart(product) {
    return setCoursesCart(prevState =>
      prevState.filter(item => item.id !== product.id)
    );
  }

  function courseSelected(coursedetails) {
    return myCourses.find(
      course => Number(course.id) === Number(coursedetails)
    );
  }

  const contextValues = {
    coursesCart,
    setCoursesCart,
    errorVideo,
    setErrorVideo,
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
