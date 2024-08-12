import { RiArrowDownSLine } from "@remixicon/react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export const Appointment = () => {
  return (
    <section className="appointment section">
      <div className="container mx-auto">
        <Fade bottom duration={3000} delay={600} distance="60px">
          <h2 className="appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left">
            Book Appointment or call :{" "}
            <span className="text-accent-tertiary">(+123) 456-7890</span>
          </h2>
        </Fade>

        <Zoom duration={2000} delay={600} distance="60px">
          <form className="appointment__form flex flex-col gap-y-5">
            <div className="flex flex-col xl:flex-row gap-5">
              <div className="select relative flex items-center">
                <div className="absolute right-4">
                  <RiArrowDownSLine className="text-[26px] text-primary" />
                </div>

                <select className="appearance-none outline-none h-full w-full bg-transparent px-4">
                  <option>Select department</option>
                  <option value="1">Department 1</option>
                  <option value="2">Department 2</option>
                  <option value="3">Department 3</option>
                </select>
              </div>
              <div className="select relative flex items-center">
                <div className="absolute right-4">
                  <RiArrowDownSLine className="text-[26px] text-primary" />
                </div>

                <select className="appearance-none outline-none h-full w-full bg-transparent px-4">
                  <option>Select doctor</option>
                  <option value="1">Doctor 1</option>
                  <option value="2">Doctor 2</option>
                  <option value="3">Doctor 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-5">
              <input type="text" className="input" placeholder="Full Name" />
              <input type="text" className="input" placeholder="Phone Number" />
            </div>
            <div className="flex flex-col xl:flex-row gap-5">
              <input type="date" className="input" />
              <input type="time" className="input" />
            </div>
            <button className="btn btn-lg btn-accent self-start" type="submit">
              Book an appointment
            </button>
          </form>
        </Zoom>
      </div>
    </section>
  );
};

export default Appointment;
