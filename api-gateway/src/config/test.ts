/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * /api/auth:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     summary: Get a resource from Microservice 1
 *     tags:
 *       - Microservice 1
 *     responses:
 *       200:
 *         description: Successful response
 *
 * /api/common:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     summary: Get a resource from Microservice 2
 *     tags:
 *       - Microservice 2
 *     responses:
 *       200:
 *         description: Successful response
 *
 * ...
 */
