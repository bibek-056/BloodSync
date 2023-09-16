import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import Samiksha from '../assets/Samiksha.jpg';
import Leela from '../assets/Leela.jpg';
import Sarovar from '../assets/Sarovar.jpg';
import Bibek from '../assets/Bibek.jpg';

const Project = () => {
  const teamMembers = [
    {
      name: 'Bibek Adhikari',
      image: Bibek,
      bio: 'Bibek is a recent graduate of Pashchimanchal Campus, Institute of Engineering, Tribhuvan University, specializing in Electronics, Communication, and Information Engineering. He possesses coding experience in frontend web development and a strong desire to explore emerging technologies. Bibek has a keen interest in data science and analytics, as well as a knack for designing IoT-based devices. In his leisure time, he contemplates reading books but often opts for watching movies due to a lack of motivation for extended reading sessions.',
    },
    {
      name: 'Leela Saud',
      image: Leela,
      bio: 'Leela is a final year student of Bachelor in Computer Science and Information Technology (B.SC.CSIT) studying in Padmakanya Multiple Campus affiliated to Tribhuvan University. Besides programming, she is also passionate about data analytics, keen-observation and in-depth-research. During her leisure hours, she finds solace in spontaneous writing, letting her thoughts flow freely without constraints. She is also an outdoor enthusiast who often goes hiking and exploring new natural places.',
    },
    {
      name: 'Samiksha Khadka',
      image: Samiksha,
      bio: 'Samiksha Khadka hails from the rural region of Okhaldhunga. She is currently a third-year undergraduate student, majoring in Computer Science at Padma Kanya Multiple Campus. Apart from her proficiency in communication, she excels at listening, therfore you will often find her with the earphones on, enjoying music. Beyond her love for technology, Samiksha holds a deep fascination for policy-making. She is known for infusing Nepali jargon into her casual conversations, adding a unique and local flavor to her interactions.',
    },
    {
      name: 'Sarovar Bhandari',
      image: Sarovar,
      bio: 'Sarovar is a 3rd year computer science undergrad student studying in Tribhuvan university. Sarovar aspires to create software that is genuinely helpful for everyone. When he is not coding or watching football, you will find him playing a game of chess or exploring nature.',
    },
  ];
  return (
    <div className=" p-5 md:p-20">
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
        <div className=" flex flex-wrap justify-center gap-20">
          {teamMembers.map((oneMember) => (
            <div key={oneMember.name} className="relative w-80 m-6">
              <img
                src={oneMember.image}
                alt="teamMember"
                className="rounded-3xl"
              />
              <div className=" absolute  -right-10 md:-right-16 -bottom-6 bg-blue-300 flex items-start justify-start h-12 md:h-24 md:w-72 px-10 py-4">
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
