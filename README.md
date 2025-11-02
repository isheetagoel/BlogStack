# BlogStack 📝

A NoSQL-powered blog platform that demonstrates MongoDB’s flexible document-oriented design** for building scalable content applications.

Users can create, update, and browse blogs stored efficiently as documents inside MongoDB.

---

## 🎯 Focus of the Project
This project showcases how MongoDB supports:
- Dynamic schemas for evolving blog structures
- Embedded documents for comments and metadata
- Fast querying and indexing for real-time performance

---

## 🚀 Key Features
- Full CRUD operations on blog posts
- Category & tag-based filtering using MongoDB queries
- Embedded comment structure inside each blog document
- Designed for easy scalability & schema evolution

---

## 🛠️ Tech Stack

### 🔹 Backend
| Component | Purpose |
|----------|---------|
| Node.js + Express.js | REST API development |
| MongoDB | NoSQL data storage |
| Mongoose | Schema validation + ODM |

### 🔹 Frontend
| Component | Purpose |
|----------|---------|
| React.js | UI rendering |
| Axios | Handles API calls |
| React Router | Client-side navigation |

---

## 🧱 MongoDB Data Model

### 📌 Example Blog Document
```js
{
  _id: ObjectId("..."),
  title: "The Rise of AI",
  content: "Artificial Intelligence is transforming the world...",
  category: "Technology",
  tags: ["AI", "Trends"],
  author: "Isheeta Goel",
  createdAt: ISODate(),
  updatedAt: ISODate(),
  comments: [
    {
      name: "John",
      text: "Amazing article!",
      createdAt: ISODate()
    }
  ]
}
