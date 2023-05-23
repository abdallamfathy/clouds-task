import { BiChevronDown } from "react-icons/bi";

interface NavItems {
  title: string;
  link: string;
}

export const NavLinks = ({
  show
} : any) => {
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
    <>
    {
      show && <div className="flex md:flex-row flex-col items-center xl:gap-14 lg:gap-10 gap-5 max-md:absolute top-8 right-0 max-md:bg-gray-200/100 max-md:text-gray-600 max-md:rounded-md z-50 max-md:p-6 ">
      {NavItems.map((link, index) => (
        <div
        key={index}
        className="flex gap-[1px] items-center hover:text-gray-400">
          <a className="max-md:w-28" href={link.link}>{link.title}</a>
          {index !== 3 && <BiChevronDown className="hidden md:block"/>}
        </div>
      ))}
    </div>
    }
    </>
  );
};
