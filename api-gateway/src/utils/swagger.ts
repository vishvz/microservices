/**
 * @swagger
 * tags:
 *   - name: Common
 *     description: Common service apis
 *   - name: Common/Dashboard
 *     description: Dashboard
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       name: Authorization
 *       type: http
 *       scheme: bearer
 *     RefreshTokenAuth:
 *       name: Refresh-Token
 *       type: apiKey
 *       in: header
 *       scheme: bearer
 *       default: Bearer
 *   schemas:
 *     CommonResponse:
 *       type: object
 *       properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 status:
 *                   type: number
 *                 data:
 *                   type: object
 *                 error:
 *                   type: string
 */
