import business from '../business/business.container';
import applicationException from "../service/applicationException";
const mongoose = require("mongoose");

const paramEndpoint = (router) => {
    router.get('/api/pogodovo', async (request, response, next) => {
        try {
            let result = await business.getParamManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/pogodovo', async (request, response, next) => {
            try {
                let result = await business.getParamManager().add(request.body);
                response.status(200).send(result);
            } catch (error) {
                applicationException.errorHandler(error, response);
            }
    });

 router.get('/api/pogodovo/:id', async (request, response, next) => {
            try {
                let result = await business.getParamManager().get(request.params.id);
                response.status(200).send(result);
            } catch (error) {
                applicationException.errorHandler(error, response);
            }
    });

router.get('/api/get/last', async (request, response, next) => {
            try {
                let result = await business.getParamManager().getLast();
                response.status(200).send(result);
            } catch (error) {
                applicationException.errorHandler(error, response);
            }
    });





};
export default paramEndpoint;
