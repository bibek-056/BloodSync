import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Samikxya from "../assets/Samikxya.jpg";
import leela from "../assets/leela.jpg";
import Sarovar from "../assets/Sarovar.jpg";
import Bibek from "../assets/Bibek.jpg";

const Project = () => {
  const teamMembers = [
    {
      name: "Bibek Adhikari",
      image: Bibek,
      bio: "Ashma is a final year student of Bachelor in Computer Engineering at the Institute of Engineering, Tribhuvan University; she aspires to be not just a programmer but also a creator, designer, and hopefully a successful artist. Building her confidence, competency, and proficiency along with her team, her soul is fueled with an ambition to contribute to her country and has faith that one day, she shall become someone that is received as a zealous girl with determination to emerge from her world of Kafkaesque.",
    },
    {
      name: "Leela Saud",
      image: leela,
      bio: "Ashma is a final year student of Bachelor in Computer Engineering at the Institute of Engineering, Tribhuvan University; she aspires to be not just a programmer but also a creator, designer, and hopefully a successful artist. Building her confidence, competency, and proficiency along with her team, her soul is fueled with an ambition to contribute to her country and has faith that one day, she shall become someone that is received as a zealous girl with determination to emerge from her world of Kafkaesque.",
    },
    {
      name: "Samikxya Kadka",
      image: Samikxya,
      bio: "Ashma is a final year student of Bachelor in Computer Engineering at the Institute of Engineering, Tribhuvan University; she aspires to be not just a programmer but also a creator, designer, and hopefully a successful artist. Building her confidence, competency, and proficiency along with her team, her soul is fueled with an ambition to contribute to her country and has faith that one day, she shall become someone that is received as a zealous girl with determination to emerge from her world of Kafkaesque.",
    },
    {
      name: "Sarovar Bhandari",
      image: Sarovar,
      bio: "Ashma is a final year student of Bachelor in Computer Engineering at the Institute of Engineering, Tribhuvan University; she aspires to be not just a programmer but also a creator, designer, and hopefully a successful artist. Building her confidence, competency, and proficiency along with her team, her soul is fueled with an ambition to contribute to her country and has faith that one day, she shall become someone that is received as a zealous girl with determination to emerge from her world of Kafkaesque.",
    },
  ];
  return (
    <div className="p-20">
      <div className="m-4">
        <p className="flex gap-2 items-center justify-start leading-4 text-[#3B536D] hover:text-black hover:underline cursor-pointer ">
          <MdOutlineKeyboardBackspace /> PROJECTS (FALL 2023)
        </p>
      </div>
      <p className="text-2xl font-medium leading-6 text-[#3B536D] text-center m-4">
        Fall 2023
      </p>
      <div className="flex flex-col gap-8 items-center justify-evenly w-full h-full border-y-2 border-[#3B536D] p-8 m-2">
        <p className="font-bold text-5xl leading-10 text-[#3B536D]">
          BloodSync
        </p>
        <p className="font-bold text-3xl leading-8 text-[#475769]">
          Live blood donation requests and Inventory Management
        </p>
      </div>
      <div className="p-4 text-[#3B536D] leading-10 tracking-normal text-2xl text-justify">
        BloodSync is an INSPIRE Nepal project aimed to solve a critical problem
        in Nepal: Finding blood when in need. Due to certain diseases and
        accidents, patients or their families struggle to find a donor or
        acceptable blood form hospital inventories. BloodSync is a project that
        will be done in collaboration with Human Development and Community
        Service (HDCS), an NGO in Nepal that works in health, education, child
        protection and community development. In the far-western Nepal, HDCS
        manages and runs a community hospital, where the proposed solutions will
        be implemented for the hospital and for the people.
      </div>
      <div className=" flex flex-col gap-4 m-5 mt-20 text-center">
        <p className="text-5xl leading-10 tracking-wide text-[#3B536D]">TEAM</p>
        <div className=" flex flex-wrap justify-center gap-24">
          {teamMembers.map((oneMember) => (
            <div key={oneMember.name} className="relative w-80 m-6">
              <img
                src={oneMember.image}
                alt="teamMember"
                className="rounded-3xl"
              />
              <div className=" absolute -right-16 -bottom-6 bg-blue-300 flex items-start justify-start h-24 w-72 px-10 py-4">
                <p className=" text-lg leading-6">{oneMember.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-4 m-5 mt-20 text-center">
        <p className="text-5xl leading-10 tracking-wide text-[#3B536D]">
          Who We Are
        </p>
        <div className="flex flex-col gap-5 items-center">
          {teamMembers.map((oneMember) => (
            <div key={oneMember.name} className="flex flex-col gap-2">
              <div className="m-3 p-3 text-center font-bold leading-10 text-3xl text-[#3B536D]">
                {oneMember.name}
              </div>
              <div className="p-4 text-[#3B536D] leading-8 tracking-wide text-2xl text-center">
                {oneMember.bio}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
