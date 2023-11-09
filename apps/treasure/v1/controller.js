'use strict';

const service = require('./service');


// Controller for find treasure
exports.findTreasure = () => {
    return (req, res) => {
        service.findTreasure(req.body)
            .then(data => {
                res.status(200).json({
                    status: true,
                    message: "Successfully retrieved data",
                    data: data
                });
            })
            .catch(err => {
                res.status(400).json({
                    status: false,
                    message: err.message
                });
            });
    }
};


// Controller for find treasure with money value
exports.findTreasureWithMoneyValue = () => {
    return (req, res) => {
        service.findTreasure(req.body)
            .then(data => {
                res.status(200).json({
                    status: true,
                    message: "Successfully retrieved data",
                    data: data
                });
            })
            .catch(err => {
                res.status(400).json({
                    status: false,
                    message: err.message
                });
            });
    }
};