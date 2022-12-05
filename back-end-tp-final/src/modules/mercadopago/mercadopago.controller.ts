import { Body, Controller, Get, Post } from "@nestjs/common";
import { response } from "express";


@Controller('mercado-pago')
export class MercadoPagoController {
    @Post("/create_preference")
    async createPreference(@Body() req) {
         
        let preference = {
            items: [
                {
                    title: req.body.description,
                    unit_price: Number(req.body.price),
                    quantity: Number(req.body.quantity),
                }
            ],
            back_urls: {
                "success": "http://localhost:3000/mercado-pago/feedback",
                "failure": "http://localhost:3000/mercado-pago/feedback",
                "pending": "http://localhost:3000/mercado-pago/feedback"
            },
            auto_return: "approved",
        };
    }

    @Get("/feedback")
    async getFeedback(@Body() req) {
        return response.json({
            Payment: req.query.payment_id,
            Status: req.query.status,
            MerchantOrder: req.query.merchant_order_id
        })
    }

}