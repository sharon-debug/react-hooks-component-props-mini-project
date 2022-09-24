import logo from "../assets/logo.svg";

const blogData = {
  name: "Overreacted",
  image: logo,
  about: "Personal Blog by Sharon",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "September 20, 2022",
      preview: "Setting up the building blocks of my site",
      minutes: 10,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "September 15, 2022",
      preview: "Passing props is never passé",
      minutes: 25,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 50,
    },
  ],
};

export default blogData;