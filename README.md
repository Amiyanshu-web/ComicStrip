# Comic Panel

A simple web application that allows users to create and share a 10-panel comic strip. The comic is generated by inputting text into a form, which is then sent to a text-to-image API using a provided API key.
## Technologies
- React + Vite
- Material UI
- Cloudinary
- html2canvas
## Features

- Create a 10-panel comic strip by inputting text into a form.
- Utilize a text-to-image API to generate comic strip images.
- Implement the ability for users to download individual comic panels using the HTML2Canvas library.
- Seamlessly share the URL of individual comic panels using Cloudinary.

## Getting Started

1. Clone the repository:
   ```shell
   git clone https://github.com/Amiyanshu-web/ComicStrip.git
 
2. Install dependencies:
    ```shell
    cd ComicStrip
    npm install
3. Starting the development server:
    ```shell
    npm run dev
## Usage
- Click the "+" icon to open a modal to generate image by providing text.
- Click on generate button to generate and display image on respective card. This may take some time.  
- Download and share the generated 10-panel comic strip.