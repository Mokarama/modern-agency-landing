import heroVideo from "../../assets/video/hero.mp4";
import heroCard from "../../assets/images/hero-card.jpg";

const Hero = () => {
  return (
    <section className="p-3 md:p-5">
      <div className="relative h-[85vh] rounded-2xl md:rounded-3xl overflow-hidden">
        
        {/* Background Video */}
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Title */}
        <div className="absolute top-48 md:bottom-16 left-5 md:left-10">

          {/* Floka */}
          <h1 className="text-[48px] md:text-[180px] lg:text-[250px] font-semibold text-white leading-none">
            Floka
          </h1>

          {/* Studio */}
          <h2 className=" text-[40px] md:text-[70px] lg:text-[96px] text-[#FFFFFF4D] ml-14 md:ml-96 -mt-2 md:mt-0">
            Studio
          </h2>

        </div>

        {/* Bottom Card + Text */}
        <div className="absolute bottom-4 md:bottom-10 left-3 right-3 md:right-20 md:left-auto space-y-4">

          {/* Card */}
          <div className="bg-white rounded-2xl flex items-center gap-4 p-[10px] w-full md:w-[400px]">

            {/* Image */}
            <div className="w-[100px] h-[100px] md:w-[160px] md:h-[120px] rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={heroCard}
                alt="person"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="flex flex-col justify-between h-full">

              {/* Top Text */}
              <div>
                <p className="text-[12px] md:text-[14px] text-[#999999] uppercase tracking-wide">
                  Head of Idea
                </p>

                <p className="text-[16px] md:text-[20px] font-semibold text-[#0A0A0A] mt-1">
                  Almond D. Nelsi
                </p>
              </div>

              {/* Bottom Action */}
              <div className="flex items-center gap-3 mt-[12px] md:mt-[20px]">

                <div className="w-7 h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-180 cursor-pointer">
                  <span className="text-white text-sm">+</span>
                </div>

                <span className="text-[12px] md:text-[14px] font-medium text-[#0A0A0A] tracking-wide">
                  LET’S TALK
                </span>

              </div>

            </div>

          </div>

          {/* Text */}
          <div className="max-w-full md:max-w-[420px]">

            <p className="text-[14px] md:text-[18px] font-semibold text-white leading-snug">
              No cookie-cutter websites. No fluff.
            </p>

            <p className="text-[14px] md:text-[18px] text-[#FFFFFF80] mt-2 leading-relaxed">
              Just real tools and smart strategies to grow your business and
              elevate your brand.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;