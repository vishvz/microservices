import express from 'express';
import { BANNER_SLIDER_ROUTE } from '../../utils/route.enums';
import {
  createDashboardBannerCt,
  deleteDashboardBannerCt,
  editDashboardBannerCt,
  getAllDashboardBannerCt,
  inActiveDashboardBannerCt,
} from '../../controller/dashboardBannerSlider.controller';
import schemaValidator from '../../middleware/schemaValidator.middleware';
import { BannerSliderSchemaV } from '../../model/dashboardBannerSlider.model';
import authMw from '../../middleware/auth.middleware';

const bannerSliderRoute = express.Router();

bannerSliderRoute.post(
  BANNER_SLIDER_ROUTE.createBannerSlider,
  schemaValidator(BannerSliderSchemaV),
  createDashboardBannerCt,
);
bannerSliderRoute.put(BANNER_SLIDER_ROUTE.deleteBannerSlider, deleteDashboardBannerCt);
bannerSliderRoute.put(BANNER_SLIDER_ROUTE.editBannerSlider, editDashboardBannerCt);
bannerSliderRoute.put(BANNER_SLIDER_ROUTE.inActiveBannerSlider, inActiveDashboardBannerCt);
bannerSliderRoute.post(BANNER_SLIDER_ROUTE.listAll,  getAllDashboardBannerCt);

export default bannerSliderRoute;

/**
 * @openapi
 * /api/common/dashboard/banner-slider/create:
 *  post:
 *     tags:
 *       - Common/Dashboard
 *     description: Create a banner slider!
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 title:
 *                   type: string
 *                 image:
 *                   type: string
 *     responses:
 *       200:
 *        description: Created record.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/common/dashboard/banner-slider/delete/{id}:
 *  put:
 *     tags:
 *       - Common/Dashboard
 *     description: Delete banner slider
 *     parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: Object ID of the record to delete
 *     responses:
 *       200:
 *        description: Deleted record.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/common/dashboard/banner-slider/edit/{id}:
 *  put:
 *     tags:
 *       - Common/Dashboard
 *     description: Edit banner slider!
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 title:
 *                   type: string
 *                 image:
 *                   type: string
 *     parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: Object ID of the record to delete
 *     responses:
 *       200:
 *        description: Updated record.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/common/dashboard/banner-slider/inactive/{id}:
 *  put:
 *     tags:
 *       - Common/Dashboard
 *     description: Deactivate banner slider!
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 isActive:
 *                   type: boolean
 *                   description: Send true if you want to deactivate
 *     parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: Object ID of the record to delete
 *     responses:
 *       200:
 *        description: Updated record.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/common/dashboard/banner-slider:
 *  post:
 *     tags:
 *       - Common/Dashboard
 *     description: List of banner slider!
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 search:
 *                   type: string
 *                   default: ""
 *                 limitPerPage:
 *                   type: number
 *                   default: 10
 *                 currentPage:
 *                   type: number
 *                   default: 1
 *     responses:
 *       200:
 *        description: List and pagination controls.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 *
 */
