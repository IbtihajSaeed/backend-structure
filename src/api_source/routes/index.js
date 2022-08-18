
import pingRoute from "./exampleRoute.js";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const routes = [
    {
      path: `${process.env.BASE_API}/ping`,
      route: pingRoute,
    },
]

const registerRoutes = (app) =>
  routes.forEach((route) => {
    app.use(route.path, route.route);
  })

export default registerRoutes;