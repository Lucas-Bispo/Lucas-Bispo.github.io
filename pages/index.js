import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//garmer motin
import { motion } from "framer-motion";

//variantes
import { fadeIn } from "../variants";


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Transformando Ideias <br /> Em <span className="text-accent">Realidade Digital</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            "A criatividade é a inteligência se divertindo." - Albert Einstein
          </p>
        </div>
      </div>
      <div>Imagem</div> {/* Placeholder para a imagem */}
    </div>
  );
}
export default Home;
