# BLOG Project with Mongoose

## MONGOOSE

https://mongoosejs.com/

### What? Why?

![](./mongoose.png)

## BLOG API

### ERD:

```
+-------------------+      +--------------------+
|   BlogCategory    |      |     BlogPost       |
+-------------------+      +--------------------+
| _id (ObjectId)    |<-----| _id (ObjectId)     |
| name (String)     |      | blogCategoryId     |
| createdAt         |      | title (String)     |
| updatedAt         |      | content (String)   |
+-------------------+      | published (Boolean)|
                           | createdAt          |
                           | updatedAt          |
                           +--------------------+

```

![ERD](./erdBlogAPI.png)

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    readme.md
    📦src
         ┣ 📂configs
         ┃     ┗ 📜dbConnection.js
         ┣ 📂controllers
         ┃     ┗ 📜blogController.js
         ┣ 📂middlewares
         ┃     ┗ 📜errorHandler.js
         ┣ 📂models
         ┃     ┗ 📜blogModel.js
         ┗ 📂routes
         ┃     ┗ 📜blogRoute.js
```

```
{
"blogs": [
    {
      "_id": "666c087569dcaf7732bbc896",
      "title": "Blog Title 1",
      "content": "Blog Content 1",
      "published": true,
      "createdAt": "2024-06-14T09:08:05.920Z",
      "updatedAt": "2024-06-14T09:08:05.920Z",
      "__v": 0
    },
    {
      "_id": "666c089869dcaf7732bbc898",
      "title": "Blog Title 2",
      "content": "Blog Content 2",
      "published": true,
      "createdAt": "2024-06-14T09:08:40.539Z",
      "updatedAt": "2024-06-14T09:08:40.539Z",
      "__v": 0
    },
    {
      "_id": "666c089d69dcaf7732bbc89a",
      "title": "Blog Title 3",
      "content": "Blog Content 3",
      "published": true,
      "createdAt": "2024-06-14T09:08:45.112Z",
      "updatedAt": "2024-06-14T09:08:45.112Z",
      "__v": 0
    },
    {
      "_id": "666c08a269dcaf7732bbc89c",
      "title": "Blog Title 4",
      "content": "Blog Content 4",
      "published": true,
      "createdAt": "2024-06-14T09:08:50.821Z",
      "updatedAt": "2024-06-14T09:08:50.821Z",
      "__v": 0
    },
    {
      "_id": "666c08a769dcaf7732bbc89e",
      "title": "Blog Title 5",
      "content": "Blog Content 5",
      "published": true,
      "createdAt": "2024-06-14T09:08:55.370Z",
      "updatedAt": "2024-06-14T09:08:55.370Z",
      "__v": 0
    },
    {
      "_id": "666c08b969dcaf7732bbc8a0",
      "title": "Blog Title 67899",
      "content": "68954",
      "published": true,
      "createdAt": "2024-06-14T09:09:13.751Z",
      "updatedAt": "2024-06-14T09:56:43.287Z",
      "__v": 0
    }
  ]
}
```
