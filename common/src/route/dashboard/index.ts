import express from 'express';
import { COMMON_ROUTE } from '../../utils/route.enums';
import bannerSliderRoute from './bannerSlider.route';
import faqRoute from './faq.route';

const dashboardRoute = express.Router();

const routes = [
  { route: bannerSliderRoute, auth: false },
  { route: faqRoute, auth: false },
];

routes.forEach(({ auth, route }) => {
  if (auth) dashboardRoute.use(COMMON_ROUTE.dashboard, route);
  else dashboardRoute.use(COMMON_ROUTE.dashboard, route);
});
export default dashboardRoute;
