'use strict';

module.exports.handler = (event, context, callback) => {
    
    var pets_array = [
        {
          id: 1,
          type: "dog",
          price: 24.99
        },
        {
            id: 2,
            type: "cat",
            price: 14.99
        },
        {
            id: 3,
            type: "fish",
            price: 4.99
        }
       ];

    const response = {
        statusCode: 200,
        body: JSON.stringify(pets_array),
      };
    
    callback(null, response);
};