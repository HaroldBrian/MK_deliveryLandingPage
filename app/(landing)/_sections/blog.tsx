/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export const Blog = () => {
  return (
    <section className="blog">
      <div className="container mx-auto">
        <h2 className="blog__title h2 mb-[50px] text-center xl:text-left">
          Our Recents Posts
        </h2>

        <div className="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]">
          <div className="blog__post max-w-[420px] shadow-lg shadow-slate-200 rounded-[10px] overflow-hidden cursor-pointer group">
            <div className="relative overflow-hidden">
              <Image
                src="/assets/img/blog/img-1.png"
                alt="blog"
                width={420}
                height={300}
                className="group-hover:scale-110 transition-all duration-500"
              />

              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medical
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="mb-4">Jan 2, 2024</div>
              <h4>10 foods to avoid for your heart health</h4>
              <p className="font-light">
                It's normal to feel anxiety, worry and grief any time you're
                diagnosed with a condition that's certainly true...{" "}
                <Link href="/" className="italic underline text-[#4c5354]">
                  Read More
                </Link>
              </p>
            </div>
          </div>
          <div className="blog__post max-w-[420px] shadow-lg shadow-slate-200 rounded-[10px] overflow-hidden cursor-pointer group">
            <div className="relative overflow-hidden">
              <Image
                src="/assets/img/blog/img-2.png"
                alt="blog"
                width={420}
                height={300}
                className="group-hover:scale-110 transition-all duration-500"
              />

              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medical
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="mb-4">Jan 2, 2024</div>
              <h4>10 foods to avoid for your heart health</h4>
              <p className="font-light">
                It's normal to feel anxiety, worry and grief any time you're
                diagnosed with a condition that's certainly true...{" "}
                <Link href="/" className="italic underline text-[#4c5354]">
                  Read More
                </Link>
              </p>
            </div>
          </div>
          <div className="blog__post max-w-[420px] shadow-lg shadow-slate-200 rounded-[10px] overflow-hidden cursor-pointer group">
            <div className="relative overflow-hidden">
              <Image
                src="/assets/img/blog/img-3.png"
                alt="blog"
                width={420}
                height={300}
                className="group-hover:scale-110 transition-all duration-500"
              />

              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medical
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="mb-4">Jan 2, 2024</div>
              <h4>10 foods to avoid for your heart health</h4>
              <p className="font-light">
                It's normal to feel anxiety, worry and grief any time you're
                diagnosed with a condition that's certainly true...{" "}
                <Link href="/" className="italic underline text-[#4c5354]">
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
