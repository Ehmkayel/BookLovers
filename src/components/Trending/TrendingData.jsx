const TrendingBooks = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 14.99,
    details: "A psychological thriller that explores the mystery of a woman's silence after committing a murder.",
    image: "https://res.cloudinary.com/drphumgcb/image/upload/c_fill,w_300,h_450/q_auto,f_auto/v1723850875/patient_yqjrt8.jpg" ,
    rating: 4.7,
    reviews: [
      { user: "Jane Doe", comment: "Absolutely gripping!", rating: 5 },
      { user: "John Smith", comment: "Kept me on the edge of my seat.", rating: 4.5 },
    ],
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 16.99,
    details: "A haunting tale of survival and hope set in the wild marshes of North Carolina.",
    image: "https://res.cloudinary.com/drphumgcb/image/upload/f_auto,q_auto/v1723851331/36809135_h1gikn.jpg",
    rating: 4.8,
    reviews: [
      { user: "Emily Clark", comment: "A beautifully written novel.", rating: 5 },
      { user: "Michael Lee", comment: "Heartbreaking and uplifting at the same time.", rating: 4.7 },
    ],
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 19.99,
    details: "An insightful guide to building good habits and breaking bad ones with proven techniques.",
    image: "https://res.cloudinary.com/drphumgcb/image/upload/f_auto,q_auto/v1723851462/1696425885734_rlc7xh.jpg",
    rating: 4.9,
    reviews: [
      { user: "Sarah Brown", comment: "Life-changing advice.", rating: 5 },
      { user: "David Johnson", comment: "Practical and easy to follow.", rating: 4.8 },
    ],
  },
  {
    id: 4,
    title: "Becoming",
    author: "Michelle Obama",
    price: 18.99,
    details: "A powerful and inspiring memoir by the former First Lady of the United States.",
    image: "https://res.cloudinary.com/drphumgcb/image/upload/f_auto,q_auto/v1723851557/becoming_h3xzjl.jpg",
    rating: 4.9,
    reviews: [
      { user: "Lisa Adams", comment: "Truly inspiring.", rating: 5 },
      { user: "Mark Taylor", comment: "A must read for everyone.", rating: 4.9 },
    ],
  },
];

export default TrendingBooks;
