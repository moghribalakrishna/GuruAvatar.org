import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
console.log
const strapi = new Strapi(apiUrl);

export default strapi;