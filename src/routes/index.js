import ContactsPage from "../pages/Contacts";
import CreateContactPage from "../pages/Contacts/CreateContact";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const routes = [
  {
    path: "/auth/register",
    component: RegisterPage,
    title: "Register",
    needsAuth: false,
  },
  {
    path: "/auth/login",
    component: LoginPage,
    title: "Login",
    needsAuth: false,
  },
  {
    path: "/contacts/create",
    component: CreateContactPage,
    title: "Create Contact",
    needsAuth: true,
  },
  { path: "/", component: ContactsPage, title: "Contacts", needsAuth: true },
];

export default routes;
