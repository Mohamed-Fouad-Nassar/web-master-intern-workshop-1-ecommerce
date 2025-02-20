import { lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router";

import SuspenseFallback from "./components/SuspenseFallback";

const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));

import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const Products = lazy(() => import("./pages/Products"));

const SignIn = lazy(() => import("./pages/SignIn"));
const Register = lazy(() => import("./pages/Register"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Routes */}
        <Route
          element={
            <SuspenseFallback>
              <MainLayout />
            </SuspenseFallback>
          }
        >
          <Route
            index
            element={
              <SuspenseFallback>
                <Home />
              </SuspenseFallback>
            }
          />
          <Route path="products">
            <Route
              index
              element={
                <SuspenseFallback>
                  <Products />
                </SuspenseFallback>
              }
            />
            <Route
              path=":id"
              element={
                <SuspenseFallback>
                  <Product />
                </SuspenseFallback>
              }
            />
            <Route
              path="cart"
              element={
                <SuspenseFallback>
                  <Cart />
                </SuspenseFallback>
              }
            />
          </Route>
        </Route>

        {/* Auth Routes */}
        <Route
          element={
            <SuspenseFallback>
              <AuthLayout />
            </SuspenseFallback>
          }
        >
          <Route
            path="signin"
            element={
              <SuspenseFallback>
                <SignIn />
              </SuspenseFallback>
            }
          />
          <Route
            path="register"
            element={
              <SuspenseFallback>
                <Register />
              </SuspenseFallback>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
