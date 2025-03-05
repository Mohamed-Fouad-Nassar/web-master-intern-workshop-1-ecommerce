import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, BrowserRouter } from "react-router";

import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import SuspenseFallback from "./components/SuspenseFallback";

const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ProfileLayout = lazy(() => import("./layouts/ProfileLayout"));

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Orders = lazy(() => import("./pages/Orders"));
const Thanks = lazy(() => import("./pages/Thanks"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Product = lazy(() => import("./pages/Product"));
const Profile = lazy(() => import("./pages/Profile"));
const Products = lazy(() => import("./pages/Products"));
const Register = lazy(() => import("./pages/Register"));

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" />
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
          </Route>

          <Route
            path="cart"
            element={
              <SuspenseFallback>
                <Cart />
              </SuspenseFallback>
            }
          />
          <Route
            path="thanks"
            element={
              <SuspenseFallback>
                <Thanks />
              </SuspenseFallback>
            }
          />
        </Route>

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="profile"
            element={
              <SuspenseFallback>
                <Profile />
              </SuspenseFallback>
            }
          />
          <Route
            path="orders"
            element={
              <SuspenseFallback>
                <Orders />
              </SuspenseFallback>
            }
          />
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
