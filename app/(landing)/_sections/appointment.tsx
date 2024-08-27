import { RiArrowDownSLine } from "@remixicon/react";
import Fade from "react-reveal/Fade";

export const Appointment = () => {
  return (
    <section className="appointment section">
      <div className="container mx-auto">
        <Fade bottom duration={1500} delay={500} distance="60px">
          <h2 className="appointment__title h2 mb-5 lg:mb-[50px] text-center lg:text-left">
            Rejoignez-nous ou appelez nous :{" "}
            <span className="text-accent-secondary">(+237) 697 438 841</span>
          </h2>
        </Fade>

        <Fade duration={1500} delay={700} distance="60px">
          <form className="appointment__form flex flex-col gap-y-5">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="select relative flex items-center">
                <div className="absolute right-4">
                  <RiArrowDownSLine className="text-[26px] text-primary" />
                </div>

                <select className="appearance-none outline-none h-full w-full bg-transparent px-4">
                  <option>Selectionnez un service</option>
                  <option value="1">Livraison Express</option>
                  <option value="2">Livraison Standard</option>
                  <option value="3">Livraison Internationale</option>
                </select>
              </div>
              <div className="select relative flex items-center">
                <div className="absolute right-4">
                  <RiArrowDownSLine className="text-[26px] text-primary" />
                </div>

                <select className="appearance-none outline-none h-full w-full bg-transparent px-4">
                  <option>Selectionnez un point de relais</option>
                  <option value="1">Yaoundé 1</option>
                  <option value="2">Yaoundé 2</option>
                  <option value="3">Yaoundé 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <input type="text" className="input" placeholder="Noms complet" />
              <input
                type="text"
                className="input"
                placeholder="Numéro de télephone"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <input type="date" className="input" />
              <input type="time" className="input" />
            </div>
            <button className="btn btn-lg btn-accent self-start" type="submit">
              Créez un Compte Gratuitement
            </button>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default Appointment;
