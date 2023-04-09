import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import { popularLoader } from "./components/PopularCard";
import Search from "./pages/Search";
import Category from "./components/Category";
import { categoryLoader } from "./components/CategoryCard";
import Recipe, { detailsLoader } from "./pages/Recipe";
import { AnimatePresence } from "framer-motion";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route
        index
        element={<Home />}
        loader={popularLoader}
      />
      <Route path="search/:search" element={<Search />} />
      <Route path="category/:category"
        element={<Category />}
        loader={categoryLoader}
      />
      <Route path="recipe/:id" element={<Recipe />}
        loader={detailsLoader}
        errorElement={<Error />}
      />
      <Route path="about" element={<About />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="*" element={<Home />} />
    </Route>

  )
)

function App() {
  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  )
}

export default App
