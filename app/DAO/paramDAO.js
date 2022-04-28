import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const pogoSchema = new mongoose.Schema({
        cityName: {type : String},
        tempH1: {type : Number},
        tempH2: {type : Number},
        tempH3: {type : Number},
        tempH4: {type : Number},
        tempH5: {type : Number},
        tempH6: {type : Number},
        hum: {type : String},//wilgotnosc
        tem: {type : String},
        pres: {type : String},

        //----bok dane
        //moze max min temp srednia itd
        rain: {type : String},
        dirwind: {type : String}, //kierunek wiatru
        date: {type : String},
        sun: {type : String}, //wschod
        sun1: {type : String},  //,zachod
        airpoll: {type : String}, //jakos powietrza
}, {
    collection: 'meteo'
});
pogoSchema.plugin(uniqueValidator);

const PogoModel = mongoose.model('meteo', pogoSchema);

async function query() {
    const result = await PogoModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function add(object) {
    const result = await PogoModel.create(object);
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    const result = await PogoModel.findById(id);
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function getLast() {
    const result = await PogoModel.findOne().sort({"_id":-1}).limit(1);
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}




export default {
    query: query,
    add: add,
    get: get,
    getLast: getLast,

    model: PogoModel
};
