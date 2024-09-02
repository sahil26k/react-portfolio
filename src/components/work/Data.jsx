import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work7 from "../../assets/work7.jpg"
import Work4 from "../../assets/work4.jpg"
import Work9 from "../../assets/work9.jpg"
import Work8 from "../../assets/work8.jpg"
export const projectsData = [
    {
      id: 1,
      image: Work1,
      title: "SwiftShop",
      desc:"An e-commerce website using react and css",
      category: "frontend", 
      live:"https://swiftshop-six.vercel.app/",
      git:"https://github.com/sahil26k/react-e-commerce",
    },
    {
      id: 2,
      image: Work2,
      title: "IMDb clone",
      desc: "Clone of movie site IMDb .com using themoviedb api",
      category: "backend",
      live:"https://imdb-clone-phi-one.vercel.app/",
      git:"https://github.com/sahil26k/IMDb-clone"
      
    },
    {
      id: 3,
      image: Work7,
      title: "E2E ChatApp",
      desc: "An end to end encryption multiuser chatapp",
      category: "backend",
      
    },
    {
      id: 4,
      image: Work8,
      title: "Social Media Dashboard",
      desc: "A social Media Dashboard which is used to post and track posts on instagram and facebook",
      category: "backend",
    },
    {
      id: 5,
      image: Work9,
      title: "PhoneBook",
      desc:"A phonebook to store all your contact info, add edit and delete them",
      category: "backend",
      live:"https://contact-management-black.vercel.app/",
      git:"https://github.com/sahil26k/contact-management"
    },
    {
    id: 6,
    image: Work4,
    title: "Number guess game",
    category: "frontend",
    live:"https://number-guess-game-gray.vercel.app/",
    git:"https://github.com/sahil26k/number-guess-game",
  },
  ];

  export const projectsNav =[
    {
        name: "all"
    },
    {
        name: "frontend"
    },
    {
        name: "backend"
    }
  ]