import { createBrowserRouter } from "react-router-dom";
import { TestPage } from "../src/pages/Test.page";
import { HomePage } from "../src/pages/Home.page";
import { ProductDetailPage } from "../src/pages/ProductDetail.page";
import { RentPage } from "../src/pages/Rent.page";
import { LoginPage } from "../src/pages/login.page";
import { SignupPage } from "../src/pages/Signup.page";
import { AccountPage } from "../src/pages/Account.page";
import { SchoolPage } from "../src/pages/School.page";
import { SchoolCardPage } from "../src/pages/SchoolCard.page";
import { PaymentPage } from "../src/pages/Payment.page";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/rent/:id",
    element: <RentPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup/name",
    element: <SignupPage />,
  },
  {
    path: "/signup/account",
    element: <AccountPage />,
  },
  {
    path: "/signup/school",
    element: <SchoolPage />,
  },
  {
    path: "/signup/schoolcard",
    element: <SchoolCardPage />,
    path: "/payment/:id",
    element: <PaymentPage />,
  },
]);

export { router };
