/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  RiArrowUpCircleFill,
  RiFacebookCircleFill,
  RiGoogleFill,
} from "@remixicon/react";

const SignIn: React.FC = () => {
  return (
    <section className="bg-accent-secondary min-h-screen flex items-center justify-center">
      <div className="bg-accent flex rounded-2xl shadow-lg shadow-slate-400 max-w-5xl items-center">
        <div className="md:block hidden p-5 w-2/5">
          <h2 className="w-1/2 text-2xl text-white mb-10">
            Plateforme de livraison de colis
          </h2>
          <Image
            src="/assets/img/testimonials/img.png"
            width={300}
            height={300}
            className="rounded-2xl"
            alt=""
          />
          <Button className="rounded-full flex justify-center items-center hover:bg-secondary bg-white gap-x-2 w-full mt-4 text-secondary hover:text-white font-semibold text-md duration-300">
            <RiArrowUpCircleFill />
            Retouner à l'accueil
          </Button>
        </div>
        <div className="md:w-3/5 px-28 bg-white p-5 rounded-2xl rounded-tl-3xl rounded-bl-3xl">
          <h2 className="font-bold text-2xl mt-8 text-black">
            Créer un compte
          </h2>
          <div className="w-full flex flex-row space-x-4">
            <Button className="border-[1px] bg-white text-black hover:text-white w-full rounded-full mt-5 flex justify-center items-center text-sm">
              <RiGoogleFill className="text-sm mr-2" />
              Login with Google
            </Button>
            <Button className="border-[1px] bg-white text-black hover:text-white w-full rounded-full mt-5 flex justify-center items-center text-sm">
              <RiFacebookCircleFill className="text-sm mr-2" />
              Login with Google
            </Button>
          </div>
          <div className="my-4 grid grid-cols-3 items-center border-gray-300">
            <hr className="border-gray-300" />
            <p className="text-center text-gray-400">OR</p>
            <hr className="border-gray-300" />
          </div>
          <div className="flex flex-col gap-5">
            <Input
              type="name"
              name="name"
              placeholder="Votre nom complet"
              className="border-gray-100 p-5 focus-visible:ring-accent"
            />
            <Input
              type="email"
              name="email"
              placeholder="Votre adresse mail"
              className="border-gray-100 p-5 focus-visible:ring-accent"
            />
            <Input
              type="password"
              name="password"
              placeholder="Votre mot de passe"
              className="border-gray-100 p-5 focus-visible:ring-accent"
            />
            <Button className="bg-accent btn btn-sm mt-4 text-white rounded-full">
              Créer mon compte
            </Button>
          </div>

          <p className="mt-5 text-xs border-b-[1px] border-gray-300 py-2">
            Write all information about you to connect
          </p>
          <div className="mt-4 text-xs text-gray-400 flex justify-between items-center">
            <p>J'ai déjà un compte ?</p>
            <Button className="text-accent rounded-full bg-white border-[1px] border-accent hover:text-white hover:bg-accent ">
              Se connecter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
