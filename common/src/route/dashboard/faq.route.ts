import express from 'express';
import { FAQ_ROUTE } from '../../utils/route.enums';
import {
  createFaqCt,
  deleteFaqCt,
  editFaqCt,
  getAllFaqCt,
  inActiveFaqCt,
} from '../../controller/faq.controller';
import schemaValidator from '../../middleware/schemaValidator.middleware';
import { FaqSchemaV } from '../../model/faq.model';
import authMw from '../../middleware/auth.middleware';

const faqRoute = express.Router();

faqRoute.post(FAQ_ROUTE.createFaq, schemaValidator(FaqSchemaV), createFaqCt);
faqRoute.put(FAQ_ROUTE.deleteFaq, deleteFaqCt);
faqRoute.put(FAQ_ROUTE.editFaq, editFaqCt);
faqRoute.put(FAQ_ROUTE.inActiveFaq, inActiveFaqCt);
faqRoute.post(FAQ_ROUTE.listAll, authMw, getAllFaqCt);

export default faqRoute;

/**
 * @openapi
 * /api/common/dashboard/faq/create:
 *  post:
 *     tags:
 *       - Common/Dashboard
 *     description: Create a FAQ!
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 question:
 *                   type: string
 *                 answer:
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
 * /api/common/dashboard/faq/delete/{id}:
 *  put:
 *     tags:
 *       - Common/Dashboard
 *     description: Delete an FAQ
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
 * /api/common/dashboard/faq/edit/{id}:
 *  put:
 *     tags:
 *       - Common/Dashboard
 *     description: Edit FAQ!
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 question:
 *                   type: string
 *                 answer:
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
 * /api/common/dashboard/faq/inactive/{id}:
 *  put:
 *     tags:
 *       - Common/Dashboard
 *     description: Deactivate FAQ!
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
 * /api/common/dashboard/faq:
 *  post:
 *     tags:
 *       - Common/Dashboard
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     description: List of FAQs!
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
