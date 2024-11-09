import OrderRepository from './order.repository.js';
export default class OrderController{
    constructor(){
        this.orderRepository = new OrderRepository();
    }

    async placeOrder(req, res, next){
        try {
            const userId = req.userId;
            console.log(userId);
            await this.orderRepository.placeOrder(userId);
            res.status(201).send("Order has been created successfully!");
        } catch (error) {
            // next(error)
            console.log(error);
            return res.status(401).send("Something went wrong");
        }
    }
}