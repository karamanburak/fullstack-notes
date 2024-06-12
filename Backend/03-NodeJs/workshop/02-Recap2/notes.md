## Sequelize

#### Kurulum

```
npm i sequelize
```

#### Sequelize Tanımlama

```js
const Sequelize = require("sequelize");

//mysql (npm i mysql2)
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    dialect: "mysql", //! farklı sql veritabanları da olabilir.
    host: config.db.host,
  }
); //! sequelize objesini tanımladık.
//* db.sqlite3 (npm i sqlite3)
let sequelize = new Sequelize("sqlite:./db.sqlite3");

const connect = async () => {
  try {
    await sequelize.authenticate(); //? bağlatıyı aktif ettik.
    console.log("sql + sequelize server bağlantısı yapıldı.");
  } catch (error) {
    console.log("bağlantı hatası", error);
  }
};

connect();

module.exports = sequelize;
```

#### Model Oluşturma

- DataTypes için detaylı bakabilirsiniz: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types

```js
const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Category = sequelize.define(
  "category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false, //! eklenme tarihini ekleme dedik
  }
);

//! model bazında sync işlemlerini yapıyoruz
const sync = async () => {
  await Category.sync({ force: true }); // force:true diyerek db de bu tablo varsa öncekini sil yenisi oluştur demiş oluyoruz
  console.log("Category tablosu oluşturuldu");
};

sync();

module.exports = Category;

//* Category.sync() - eğer mevcut değilse tabloyu oluşturur (ve zaten mevcutsa hiçbir şey yapmaz)
//! Category.sync({ force: true }) - db de bu tablo varsa öncekini sil yenisi oluştur demiş oluyoruz.
// Category.sync({ alter: true }) - veritabanındaki tablonun mevcut durumunun ne olduğunu (hangi sütunlara sahip olduğunu, veri türlerinin neler olduğunu vb.) kontrol eder ve ardından modelle eşleşmesi için tabloda gerekli değişiklikleri gerçekleştirir.

//! Tüm Modelleri sync etmek için
// You can use sequelize.sync() to automatically synchronize all models.

// await sequelize.sync({ force: true });
```

#### Querying (Sorgular) (READ)

###### findAll()

- Tablodaki tüm girdileri alacak standart bir SELECT sorgusu oluşturur (örneğin, Where cümleciği gibi bir şey tarafından kısıtlanmadığı sürece).

```js
// Tüm kategorileri sorgulamak için
const categorys = await Category.findAll();

// Belirli fieldları getirmek için
Category.findAll({
  attributes: ["name", "id"],
});
// Belirli fieldları getirmemek için
Category.findAll({
  attributes: { exclude: ["id"] },
});

// Belirli koşula uyan tüm bilgileri sorgulamak için
Post.findAll({
  where: {
    authorId: 2,
  },
});

// Gereksiz bilgilerin gelmesini engellemek için
//! findAll ile yakalama yapınca veri dataValues içerisinde saklanıyor(özellikle where kullandıldığı zaman). Kullanırken ona göre erişim yapmak lazım. Yada raw:true diyerek asıl erişmemiz gerekn veriye direk olarak erişim sağlayabiliriz.

const categorys = await Category.findAll({ raw: true });

// Operator kullanımı
const blogs = await Blog.findAll({
  where: {
    onay: {
      [Op.eq]: true,
    },
  },
  raw: true,
});

const blogs = await Blog.findAll({
  where: {
    [Op.and]: [{ onay: true }, { anasayfa: true }],
  },
  raw: true,
});

// detay için https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
```

###### Modelde olmayan bilgileri döndürebilme. sequelize.fn()

```js
Model.findAll({
  attributes: [
    "foo",
    [sequelize.fn("COUNT", sequelize.col("hats")), "n_hats"],
    "bar",
  ],
});

// Toplama işlevini kullanırken, modelden erişebilmek için ona bir takma ad vermeniz gerekir. Yukarıdaki örnekte example.n_hats ile şapka sayısını alabilirsiniz.

// Bazen yalnızca bir toplama eklemek istiyorsanız modelin tüm niteliklerini listelemek yorucu olabilir:

// Bu, şapka sayısını (her sütunla birlikte) almanın yorucu bir yoludur.
Model.findAll({
  attributes: [
    "id",
    "foo",
    "bar",
    "baz",
    "qux",
    "hats", // We had to list all attributes...
    [sequelize.fn("COUNT", sequelize.col("hats")), "n_hats"], // To add the aggregation...
  ],
});

// Bu daha kısadır ve hataya daha az eğilimlidir çünkü daha sonra modelinize nitelik eklerseniz/kaldırırsanız hala çalışır.
Model.findAll({
  attributes: {
    include: [[sequelize.fn("COUNT", sequelize.col("hats")), "n_hats"]],
  },
});
```

###### findByPk()

- FindByPk yöntemi, sağlanan primarykey(pk) kullanarak tablodan yalnızca tek bir giriş alır.

```js
const project = await Project.findByPk(pk);
```

###### findOne()

- FindOne yöntemi; isteğe bağlı sorgu seçenekleri karşılayan bulduğu ilk girişi alır. Yani eşleşen ilk veriyi döner.

```js
const project = await Project.findOne({ where: { title: "My Title" } });
```

###### findOrCreate()

- FindOrCreate yöntemi, sorgu seçeneklerini karşılayan bir giriş bulamadığı sürece tabloda bir giriş yaratacaktır. Her iki durumda da, bir örnek (bulunan örnek veya oluşturulan örnek) ve bu örneğin yaratılıp yaratılmadığını veya zaten var olduğunu gösteren bir boole değeri döndürür.

- Girişi bulmak için Where seçeneği dikkate alınır ve hiçbir şey bulunamaması durumunda neyin oluşturulması gerektiğini tanımlamak için defaults seçeneği kullanılır. Varsayılanlar her sütun için değer içermiyorsa Sequelize, (varsa) Where içerisinde verilen değerleri alır.

- Kullanıcı adı ve işi olan User modeline sahip boş bir veritabanımız olduğunu varsayalım.

```js
const [user, created] = await User.findOrCreate({
  where: { username: "sdepold" },
  defaults: {
    job: "Technical Lead JavaScript",
  },
});
console.log(user.username); // 'sdepold'
console.log(user.job); // This may or may not be 'Technical Lead JavaScript'
console.log(created); // The boolean indicating whether this instance was just created
if (created) {
  console.log(user.job); // This will certainly be 'Technical Lead JavaScript'
}
```

#### Create

- Model.create() yöntemi, Model.build() ile kaydedilmemiş bir örnek oluşturmak ve örneği instance.save() ile kaydetmek için kullanılan bir kısayoldur.

- Create yönteminde hangi niteliklerin ayarlanabileceğini tanımlamak da mümkündür. Bir kullanıcı tarafından doldurulabilecek bir formu temel alan veritabanı girişleri oluşturduğunuzda bu özellikle yararlı olabilir. Bunu kullanmak, örneğin, Kullanıcı modelini yalnızca bir kullanıcı adı ayarlayacak, ancak yönetici bayrağını (ör. isAdmin) ayarlamayacak şekilde kısıtlamanıza olanak tanır:

```js
// await db.execute(
//   "INSERT INTO blog(baslik, altbaslik, aciklama, resim, anasayfa, onay, categoryid) VALUES (?,?,?,?,?,?,?)",
//   [baslik, altbaslik, aciklama, resim, anasayfa, onay, kategori]
// );
//! klasik sql yerine aşağıdaki gibi sequelize yöntemiyle yapıyoruz.

// 1.yol
const c1 = Category.build({
  name: "Web Geliştirme",
});

await c1.save();

// 2.yol ve güncel yol
const c2 = Category.create({
  name: "Mobil Geliştirme",
}); //? create() metoduyla yaptığımızda save() metoduna gerek kalmıyor.

// toplu create etme için
await Category.bulkCreate([
  {
    name: "Eğitim",
  },
  {
    name: "Seyahat",
  },
  {
    name: "Programlama",
  },
]); //! bulkCreate() toplu create işlemi için kullanılan method
console.log("Kategori eklendi");
```

#### Update

- Güncelleme sorguları da tıpkı yukarıda gösterilen okuma sorguları gibi Where seçeneğini kabul eder.

- Farklı yollar aşağda sergilenmiştir:

```js
//! 1.yol
const blog = await Blog.findByPk(blogId);
blog.baslik = baslik;
blog.altbaslik = altbaslik;
blog.aciklama = aciklama;
blog.resim = resim;
blog.anasayfa = anasayfa;
blog.onay = onay;
blog.categoryid = kategoriid;
await blog.save();

//? 2.yol
const blog = await Blog.findByPk(blogId);
blog.set({
  baslik,
  altbaslik,
  aciklama,
  resim,
  anasayfa,
  onay,
  categoryid: kategoriid,
});

await blog.save();
//Buradaki save() fonksiyonunun, yalnızca önceki set çağrısındaki değişiklikleri değil, çağırıldığı yerdeki yapılan diğer değişiklikleri de sürdüreceğini unutmayın. Belirli bir alan kümesini güncellemek istiyorsanız update() kullanabilirsiniz:

//! 3.yol ve temiz olan yol
await Blog.update(
  {
    baslik,
    altbaslik,
    aciklama,
    resim,
    anasayfa,
    onay,
    categoryid: kategoriid,
  },
  { where: { blogId } } //& farklı alanlara göre de güncelleme yapmak için kullanılabilir.
// );
```

#### Delete

- Bir veriyi destroy'u çağırarak silebilirsiniz:

```js
//! 1.yol
const category = await Category.findByPk(categoryid);
await category.destroy();

//? 2.yol
await Category.destroy({ where: { categoryid: categoryid } });
```

#### Extra

- count()

```js
const count = await Category.count(); // veri sayısını döner
```

- reload(): Reload'ı çağırarak veritabanından bir örneği yeniden yükleyebilirsiniz:

```js
const jane = await User.create({ name: "Jane" });
console.log(jane.name); // "Jane"
jane.name = "Ada";
// the name is still "Jane" in the database
await jane.reload();
console.log(jane.name); // "Jane"
```
