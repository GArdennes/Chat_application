
Steps done in walkthrough:
$ cd chat_app/
$ mkdir frontend
$ mkdir backend
$ cd frontend
$ npm create vite@latest .
$ > React > Javascript
$ npm install
$ npm run dev
$ CTRL + C
$ cd ../
$ npm init -y
$ vi package.json
$ npm install express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken
$ vi backend/server.js
$ npm install nodemon --save-dev
$ touch .env
$ mkdir backend/routes/
$ vi backend/routes/auth.routes.js
$ mkdir backend/controllers/
$ vi backend/controllers/auth.controller.js
---------------------------------------------POSTMAN APP
Create a new workspace: CHAT APP
Create a new collection: AUTH, MESSAGES
AUTH: Create a new request token
---------------------------------------------MONGODB.COM
Sign up with MongoDB
Create a new project: Chat App
Copy username/password
Create user
Update .env with MONGO_DB_URL
---------------------------------------------
mkdir backend/db/
vi backend/db/connectToMongoDB.js
mkdir backend/models/
vi backend/models/user.model.js



