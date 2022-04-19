import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Quentin Tarantino",
    image: "https://i.pinimg.com/originals/91/cd/92/91cd921450f6f2e4aff79367e82ba96b.png",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Martin Scorsese",
    image: "https://i.pinimg.com/originals/e9/52/05/e95205142e4ae35c0787fa7f513ddf40.jpg",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "David Fincher",
    image: "https://i.pinimg.com/originals/d8/97/1b/d8971b320ceeb67b20b62938d75bcbea.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "Christopher Nolan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8KrPYmUxZVFZMIut0qBBaM7MHoEa1Tv6WDXN4uDvsn39POpAvyo9QS9PfL65L9VGq_s&usqp=CAU",
    description: "Christopher Nolan"
  },
];
