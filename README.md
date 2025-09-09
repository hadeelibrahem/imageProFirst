Image Resizing API

This is a small project built with Express and TypeScript for image processing. The idea is simple: the API takes an original image from a folder, resizes it to the dimensions you request, and saves the resized version in a separate folder so it doesn’t have to process the same image again.

Features
Clean project structure with source code separated from compiled files.
Dedicated folders for original images, cached thumbnails, and tests.
Supports multiple output formats such as JPG, PNG, and WEBP.
Validates all parameters and returns clear error messages with proper status codes.
Uses caching so repeated requests for the same size are much faster.
Includes automated tests for both the API endpoints and the image processing utility.
Written in TypeScript with linting and formatting tools to keep the code clean.
----------------------------------------------------------------------------------------------------------------------------------------
How it works
Place your original images in the “full” folder.
Start the server.
Request an image through the API by giving its name and the size you want.
On the first request, the image is resized and saved in the “thumb” folder.
On later requests, the API serves the saved copy directly for faster results.
----------------------------------------------------------------------------------------------------------------------------------
Error handling
The API handles common errors gracefully:
If required parameters are missing, it responds with a clear error.
If width or height values are invalid, it tells you they must be positive numbers.
If the image file does not exist, it returns a not found error.
For any other unexpected problem, it returns a server error.
-------------------------------------------------------------------------------------------------------------------
Testing
The project includes tests using Jasmine and SuperTest.
API tests make sure valid requests return images and invalid ones return proper errors.
Utility tests check that the image processing function works correctly and throws the right errors.

