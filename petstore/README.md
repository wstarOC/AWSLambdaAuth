This is a very basic example of how to authorize API using a lambda authorizer.

It includes a single GET method that returns a list of objects if the request token matches the stored token, otherwise Unauthorized is returned.
The lambda authorizer in this example uses a token stored in AWS Secret Manager. 


Further sources and examples:
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html

https://www.serverless.com/framework/docs/providers/aws/events/apigateway/#http-endpoints-with-custom-authorizers

https://github.com/adnanrahic/a-crash-course-on-serverless-auth
