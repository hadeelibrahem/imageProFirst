Image Resizing API

This is a small project built with Express and TypeScript for image processing. The idea is simple: the API takes an original image from a folder, resizes it to the dimensions you request, and saves the resized version in a separate folder so it doesn’t have to process the same image again.
-----------------------------------------------------------------------
Features

Clean project structure with source code separated from compiled files.
Dedicated folders for original images, cached thumbnails, and tests.
Supports multiple output formats such as JPG, PNG.
Validates all parameters and returns clear error messages with proper status codes.
Uses caching so repeated requests for the same size are much faster.
Includes automated tests for both the API endpoints and the image processing utility.
Written in TypeScript with linting and formatting tools to keep the code clean.
--------------------------------------------------------------
How it works

Place your original images in the “assets/full” folder (for example: encenadaport.jpg).
Start the server (npm run build, then npm start).
Request an image through the API by giving its name and the size you want.
On the first request, the image is resized and saved in the “assets/thumb” folder.
On later requests, the API serves the saved copy directly for faster results.

How to access the API (working endpoint)

Base URL: http://localhost:3000
Endpoint path: /api/images
Method: GET
Required query parameters:
filename: the base name of an image placed in assets/full (no extension)
width: a positive integer
height: a positive integer


Sample URL that works (returns 200 in a browser)
http://localhost:3000/api/images?filename=encenadaport&width=200&height=200



Notes for the sample

Make sure a file named encenadaport.jpg (or .png/.jpeg) exists in assets/full before trying the sample URL.
On first access, the resized image will be created and cached under assets/thumb with a name like encenadaport_200x200.jpg (or .png/.webp).
Subsequent requests for the same size will return the cached file immediately with HTTP 200.
-----------------------------------------------------------------------
Error handling

If required parameters are missing, the API responds with status 400 and a clear message.
If width or height values are invalid (non-numeric, non-integer, or not positive), it responds with status 400 and explains the issue.
If the image file does not exist in assets/full, it returns status 404 (“Source image not found”).
For any other unexpected problem, it returns status 500 (“Image processing failed”).
-------------------------------------------------------------
Testing

The project includes tests using Jasmine and SuperTest.
API tests verify that valid requests return images and invalid ones return proper errors.
Utility tests check that the image processing function works correctly and throws the right errors.
-------------------------------------------------------------
Common scripts:

npm test: runs the test suite

npm run lint: runs ESLint

npm run format: runs Prettier

npm run build: compiles TypeScript

npm start: starts the server

