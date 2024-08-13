/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";

export const Blog = () => {
  return (
    <section className="blog">
      <div className="container mx-auto">
        <Fade bottom duration={2000} delay={600} distance="60px">
          <h2 className="blog__title h2 mb-[50px] text-center lg:text-left">
            Pourquoi Choisir Notre Plateforme ?
          </h2>
        </Fade>

        <div className="flex flex-col lg:flex-row gap-y-6 space-x-2 lg:gap-y-0 items-center lg:justify-between mb-[50px]">
          <Fade bottom duration={2000} delay={900} distance="100px">
            <div className="blog__post max-w-[300px] shadow-lg shadow-slate-200 rounded-[10px] overflow-hidden cursor-pointer group">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/img/blog/img-1.png"
                  alt="blog"
                  width={420}
                  height={300}
                  className="group-hover:scale-110 transition-all duration-500"
                />

                <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                  Rapide
                </div>
              </div>
              <div className="px-5 py-6">
                <h4>Livraison le jour même</h4>
                <p className="font-light">
                  Nous assurons que votre colis arrive le jour même dans les
                  grandes villes ou ailleur.{" "}
                  <Link href="/" className="italic underline text-[#4c5354]">
                    Lire plus
                  </Link>
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={2000} delay={1200} distance="100px">
            <div className="blog__post max-w-[300px] shadow-lg shadow-slate-200 rounded-[10px] overflow-hidden cursor-pointer group">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/img/blog/img-2.png"
                  alt="blog"
                  width={420}
                  height={300}
                  className="group-hover:scale-110 transition-all duration-500"
                />

                <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                  Fiable
                </div>
              </div>
              <div className="px-5 py-6">
                <h4>Suivi en temps réel</h4>
                <p className="font-light">
                  Suivez chaque étape de la livraison de votre colis grâce à
                  notre interface intuitive.{" "}
                  <Link href="/" className="italic underline text-[#4c5354]">
                    Lire plus
                  </Link>
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={2000} delay={1500} distance="100px">
            <div className="blog__post max-w-[300px] shadow-lg shadow-slate-200 rounded-[10px] overflow-hidden cursor-pointer group">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/img/blog/img-3.png"
                  alt="blog"
                  width={420}
                  height={300}
                  className="group-hover:scale-110 transition-all duration-500"
                />

                <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                  Sécurisé
                </div>
              </div>
              <div className="px-5 py-6">
                <h4>Service client 24/7</h4>
                <p className="font-light">
                  Notre équipe est disponible à toute heure pour répondre à vos
                  questions.{" "}
                  <Link href="/" className="italic underline text-[#4c5354]">
                    Lire plus
                  </Link>
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Blog;
