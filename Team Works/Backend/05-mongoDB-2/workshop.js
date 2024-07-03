/* ---------------------------------- */
/*        Backend Workshop -5-        */
/* ---------------------------------- */

//? 1. What is ODM?

// Object Document Mapping
// NoSQL veritablari ile iliskili.
// Veritabani ile app arasinda kopru.
// ORM den farkli olarak document collectionlar var. ORM tablolar, row column.
// ObjectId => foreign key (ORM)
// ODM: CRUD islemleri hizli yapilabilir. Guvensiz (iliskisel olmayan)
// ORM: CRUD islemleri yavas yapilabilir. Guvenli (iliskisel)

//=============================================================================

//? 2. How to connect to MongoDB using Mongoose ?

//* 1. Method: Using async/await (Best Practice)
// Okunabilirlik ve error handling acisindan daha avantajli. Try catch kullanimina izin verir. Ancak ekstra fonksiyon tanimlama gerekliligi doguyor. Kod kalabaligi.
const mongoose = require("mongoose");
main()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB not connected", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/dbname");
  // try {
  //   await mongoose.connect("mongodb://127.0.0.1:27017/dbname");
  //   console.log("DB Connected");
  // } catch (err) {
  //   console.log("DB not connected", err);
  // }
}

//* 2. Method: Using Promises
// Hizli ve az kodla cozum saglanmis oluyor. Ancak error handling ve chaining ten kaynakli okunabilirligin azalmasi acisindan dezavantajli.
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/dbname")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB not connected", err);
  });

//=============================================================================

//? 3. What is a Mongoose model, give a simple example ?
//* UserModel.js
// Mongoose modeli, Mongoose şemasının aslinda bir sarmalayıcısıdır. Bir Mongoose şeması ilgili belgenin özelliklerini, varsayılan değerlerini, veri türlerini, doğrulayıcılarini kapsar. Ayrica CRUD islemleri icin bir arayuz olusturur. Islemleri buradaki icerige gore duzenleriz.

// const mongoose = require("mongoose");

// // Kullanıcı şeması tanımlama
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // Kullanıcı modelini oluşturma
// const User = mongoose.model("User", userSchema);

// // Yeni bir kullanıcı oluşturma ve kaydetme (Normalde req.body ile alip create islemi yapiyoruz)
// const newUser = new User({
//   name: "John Doe",
//   email: "john.doe@example.com",
//   password: "securepassword",
// });

// newUser
//   .save()
//   .then(() => {
//     console.log("New User successfully created!");
//   })
//   .catch((error) => {
//     console.error("Could not create new user ", error);
//   });

//=============================================================================

//? 4- What is the difference between findOne() and find() methods in Mongoose?

// findOne():
// istenilen kosula uygun olarak ilk karsilastigi document i getirir.
// object return eder.
// Eger uygun document yok ise null return eder.

// Find one user by name
User.findOne({ email: "john.doe@example.com" }, (err, user) => {
  if (err) return console.error(err);
  console.log(user);
  // {} / null = true / false
});

// find():
// istenilen kosula uygun olan tum document lari getirir.
// her halukarda array donuyor.
// true durumunda lg return eder.
// false durumunda [] return eder.

// Find all users with age 25
User.find({ age: 25 }, (err, users) => {
  if (err) return console.error(err);
  console.log(users); // [{},{}...] / [] = true
});

//=============================================================================

//? 5- What is middleware in Mongoose and how is it used?

// Pre ve Post Middleware

// (error, doc, next)

// Query Middleware
// Model Middleware
// Aggregate Middleware

customerSchema.pre("aggregate", function () {
  // Her bir pipeline'ın başına bir $match aşaması ekleyerek silinmiş kayıtları hariç tutabiliriz. Bu sekilde belirli alanlari toptan filtreleyebiliriz. Bu yapı, soft delete (yumuşak silme) işlemlerinde kullanışlıdır çünkü isDeleted alanı true olan dökümanlar fiziksel olarak silinmez, sadece sorgu sonuçlarından hariç tutulur.
  //* Ornegin bazi user lar zaman asimindan dolayi deaktive edilmis. Ancak database den silinmemesi gerekiyor. Buna ragmen duzenli olarak deaktive olmus kullanicilarin gozukmemeisini istiyorsak.
  this.pipeline().unshift({ $match: { isDeactivated: { $ne: true } } });
});

// Before aggregate
[
  { _id: 1, name: "Alice", isDeactivated: false },
  { _id: 2, name: "Bob", isDeactivated: true },
  { _id: 3, name: "Charlie", isDeactivated: false },
][
  // After aggregate
  ({ _id: 1, name: "Alice", isDeactivated: false },
  { _id: 3, name: "Charlie", isDeactivated: false })
];

//=============================================================================

//? 6- What is the purpose of the 'populate' method in Mongoose?

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// post many, user one

const userSchema = new Schema({
  name: String,
  email: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const postSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const user = new User({
  name: "John Doe",
  email: "john.doe@example.com",
});

// Bir post middleware ile kullanici save ettikten sonra ayni kullaniciya air bir post olusturuyoruz.
user
  .save()
  .then((savedUser) => {
    const post = new Post({
      title: "My First Post",
      content: "This is the content of my first post.",
      author: savedUser._id,
    });

    // post isleminden sonra da bir post middleware ile olusturulan post un id si, kaydedilmis user belgesindeki posts array ine pushlaniyor.
    return post.save().then((savedPost) => {
      savedUser.posts.push(savedPost._id);
      return savedUser.save();
    });
  })
  .then(() => {
    console.log("Successfully created both user and post!");
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

User.findOne({ email: "john.doe@example.com" })
  .populate("posts")
  .exec((err, user) => {
    if (err) return console.error(err);
    console.log("User and user's posts:", user);
  });

//^ Without Populate
// {
//   "_id": "60d5ec49a1d4a20d8c4d1c1f",
//   "name": "John Doe",
//   "email": "john.doe@example.com",
//   "posts": [
//     "60d5ec49a1d4a20d8c4d1c20", "23d5ec49a1d4a20d8wew213we", "56d5ecqwe2321a20d8c4d1c20"
//   ]
// }

//^ With Populate
// {
//   "_id": "60d5ec49a1d4a20d8c4d1c1f",
//   "name": "John Doe",
//   "email": "john.doe@example.com",
//   "posts": [
//     {
//       "_id": "60d5ec49a1d4a20d8c4d1c20",
//       "title": "My First Post",
//       "content": "This is the content of my first post.",
//       "author": "60d5ec49a1d4a20d8c4d1c1f"
//     }
//     {
//       "_id": "23d5ec49a1d4a20d8wew213we",
//       "title": "My Second Post",
//       "content": "This is the content of my second post.",
//       "author": "60d5ec49a1d4a20d8c4d1c1f"
//     }
//     {
//       "_id": "56d5ecqwe2321a20d8c4d1c20",
//       "title": "My Third Post",
//       "content": "This is the content of my third post.",
//       "author": "60d5ec49a1d4a20d8c4d1c1f"
//     }
//   ]
// }

// ============================================================

//? 7- Mongoose performs ..... operations on MongoDB.?
// Answer:  CRUD
//? 8- The 'required' option in Mongoose schemas specifies whether a field is ...... ?
// Answer: mandatory
//? 9- To update the properties of a document, we can use the ...... or ..... methods ?
// Answer: updateOne() / updateMany() / findByIdandUpdate()
//? 10- To find and delete a document based on a specific condition, we can use the ...... or ..... methods ?
// Answer: findOneandDelete(), deleteOne(), deleteMany()
