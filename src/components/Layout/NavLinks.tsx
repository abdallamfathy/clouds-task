import { BiChevronDown } from "react-icons/bi";

interface NavItems {
  title: string;
  link: string;
}

export const NavLinks = () => {
  const NavItems: NavItems[] = [
    {
      title: "HomePage",
      link: "#",
    },
    {
      title: "Recipe Page",
      link: "#",
    },
    {
      title: "Pages",
      link: "#",
    },
    {
      title: "Buy",
      link: "#",
    },
  ];
  return (
    <div className="flex items-center xl:gap-14 lg:gap-10 gap-5">
      {NavItems.map((link, index) => (
        <div
          key={index}
          className="flex gap-[1px] items-center hover:text-gray-400">
          <a href={link.link}>{link.title}</a>
          {index !== 3 && <BiChevronDown />}
        </div>
      ))}
    </div>
  );
};
