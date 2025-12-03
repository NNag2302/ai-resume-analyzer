import type { Route } from "./+types/home";
import Navbar from '~/Components/Navbar';
import { resumes } from '../../constants';
import { callbackify } from 'node:util';
import ResumeCard from '~/Components/ResumeCard';
import {usePuterStore} from "~/lib/puter";
import { useLocation, useNavigate } from 'react-router';
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your Dream Job!" },
  ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect( () => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1> Track your Applications & Resume Ratings </h1>
        <h2> Review your submissions and check AI-powered Feedback </h2>
      </div>


      <div className="flex flex-wrap justify-center gap-10 mt-1">
    {resumes.map((resume) =>(

       <ResumeCard key={resume.id} resume={resume} />
      ))}
     </div>
    </section>
  </main>
}
