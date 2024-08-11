import {
  AccordionDataType,
  CardProps,
  ExplorePagesType,
  TestimonyCardProps,
} from "./types";
import { AcademicCapIcon, FlagIcon } from "@heroicons/react/24/solid";
import { FaCrown } from "react-icons/fa";
import FacemaskIcon from "@/components/icons/facemask-icon";
import WheelIcon from "@/components/icons/wheel-icon";
import SocialIcon from "@/components/icons/social-icon";
import DavidKIcon from "@/assets/davidK.svg";
import EmilyLIcon from "@/assets/emilyL.svg";
import JenniferBIcon from "@/assets/jenniferB.svg";
import JohnB from "@/assets/JohnB.svg";
import DonaldW from "@/assets/DonaldW.svg";
export const AccordionData: AccordionDataType[] = [
  {
    id: 1,
    title: "What are the school hours at Little Learners Academy?",
    body: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: 2,
    title: "Is there a uniform policy for students?",
    body: "Yes, Little Learners Academy has a uniform policy. Students are required to wear the school uniform consisting of a polo shirt with the school logo and khaki pants or skirts. Uniforms help create a sense of community and reduce distractions in the classroom.",
  },
  {
    id: 3,
    title: "What extracurricular activities are available for students?",
    body: "We offer a variety of extracurricular activities including art, music, dance, sports, and STEM clubs. These activities are designed to complement our academic program and provide students with opportunities to explore their interests and develop new skills.",
  },
  {
    id: 4,
    title: "What are the school's safety and security measures?",
    body: "The safety and security of our students are a top priority. Our campus is equipped with surveillance cameras, secure entry points, and all staff members are trained in emergency response procedures. We conduct regular safety drills and have a strict visitor management policy in place.",
  },
  {
    id: 5,
    title: "How do you handle food allergies and dietary restrictions?",
    body: "We take food allergies and dietary restrictions very seriously. Parents are required to inform the school of any allergies or restrictions, and we work closely with our food service provider to ensure that all meals and snacks are safe for all students. We also have a no-nut policy on campus.",
  },
  {
    id: 6,
    title: "What is the teacher-to-student ratio at Little Learners Academy?",
    body: "The teacher-to-student ratio at Little Learners Academy is 1:10 for younger students and 1:15 for older students. This allows our teachers to provide personalized attention and support to each student, ensuring that all children receive the guidance they need to succeed.",
  },
  {
    id: 7,
    title: "How do you handle discipline and behavior management?",
    body: "Our approach to discipline focuses on positive behavior reinforcement and teaching students to take responsibility for their actions. We use a combination of restorative practices, clear expectations, and consistent consequences to create a respectful and supportive learning environment.",
  },
  {
    id: 8,
    title: "How do I apply for admission to Little Learners Academy?",
    body: "To apply for admission, you can visit our website and fill out the online application form. Once your application is received, our admissions team will contact you to schedule a tour and interview. We also require a copy of your child's most recent report card and any relevant medical records.",
  },
];

export const BenefitsCardsData: CardProps[] = [
  {
    id: 1,
    icon: AcademicCapIcon,
    title: "Holistic Learning Approach",
    text: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    id: 2,
    icon: FaCrown,
    title: "Experienced Educators",
    text: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    id: 3,
    icon: FacemaskIcon,
    title: "Nurturing Environment",
    text: "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    id: 4,
    icon: FlagIcon,
    title: "Play-Based Learning",
    text: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    id: 5,
    icon: WheelIcon,
    title: "Individualized Attention",
    text: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    id: 6,
    icon: SocialIcon,
    title: "Parent Involvement",
    text: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

export const TestimonyCardsData: TestimonyCardProps[] = [
  {
    id: 1,
    icon: <JenniferBIcon />,
    name: "Jennifer B",
    stars: 5,
    text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    id: 2,
    icon: <DavidKIcon />,
    name: "David K",
    stars: 5,

    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    id: 3,
    icon: <EmilyLIcon />,
    stars: 5,
    name: "Emily L",
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    id: 4,
    icon: <DonaldW />,
    name: "Donald W",
    stars: 5,
    text: "Little Learners Academy has exceeded our expectations. The personalized attention and creative activities have helped my daughter develop in so many ways.",
  },
  {
    id: 5,
    icon: <JohnB />,
    name: "John B",
    stars: 5,
    text: "The warm and welcoming atmosphere at Little Learners Academy has made a significant difference in my son's early education. I couldn't be happier.",
  },
];

export const VisitPagesData: ExplorePagesType[] = [
  {
    id: 1,
    title: "About Us",
    body: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    id: 2,
    title: "Academics",
    body: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },
  {
    id: 3,
    title: "Student Life",
    body: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    id: 4,
    title: "Admissions",
    body: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
  },
];
