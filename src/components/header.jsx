import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Arvind");
  const [menulinks, setMenulinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Projects",
      link: "/projects",
      id: 3,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 5,
    },
  ]);
  const [actionButton, setActionButton] = useState({
    title: "Hire Me",
    link: "/hire-me",
  });
  return (
    <>
      <div className="main h-20 flex justify-between items-center px-14 bg-gray-100">
        <div className="header">
          <h1 className="space-2xl font-bold"> {brandName} </h1>
        </div>
        <div className="space-x-4">
          {menulinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-500">
              {link.title}
            </a>
          ))}
          {/* <a href="/home" className="hover:text-orange-500">
            Home
          </a>
          <a href="/about" className="hover:text-orange-500">
            About
          </a>
          <a href="/project" className="hover:text-orange-500">
            Project
          </a>
          <a href="/skills" className="hover:text-orange-500">
            Skills
          </a>
          <a href="/contact" className="hover:text-orange-500">
            Contact
          </a> */}
        </div>
        <div className="button">
          <a
            href="actionButton.link"
            className="bg-green-600 rounded-full text-white px-4 hover:bg-orange-500 hover:text-black shadow-lg text-1xl font-bold"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
