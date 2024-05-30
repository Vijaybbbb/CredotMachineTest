const  cloudinary = require('cloudinary').v2

  // Configuration
  cloudinary.config({ 
       cloud_name: process.env.CLOUD_NAME, 
       api_key:  process.env.API_KEY, 
       api_secret:  process.env.CLOUD_SECRET_KEY // Click 'View Credentials' below to copy your API secret
   });

   module.exports  = {cloudinary}