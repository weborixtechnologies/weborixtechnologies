const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      title: "Dashboard Design",
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      title: "Brand Identity",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      title: "Website Design",
    },
    {
      src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
      title: "Creative Posters",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      title: "Marketing Design",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

          {/* LEFT CONTENT */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[38px]
              p-8
              flex flex-col justify-between
              aspect-[4/4]
              group
              border border-white/10
              bg-[#0F0F10]
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            "
          >

            {/* PREMIUM GRADIENT BG */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-[#1A1A1D]
                via-[#111113]
                to-[#0B0B0C]
              "
            />

            {/* GOLD GLOW */}
            <div
              className="
                absolute
                -top-24
                -right-24
                w-72
                h-72
                rounded-full
                bg-[#E7D25F]/10
                blur-3xl
                group-hover:scale-110
                transition duration-700
              "
            />

            {/* PURPLE GLOW */}
            <div
              className="
                absolute
                -bottom-20
                -left-20
                w-64
                h-64
                rounded-full
                bg-[#7c3aed]/10
                blur-3xl
                group-hover:scale-110
                transition duration-700
              "
            />

            {/* NOISE OVERLAY */}
            <div
              className="
                absolute inset-0
                opacity-[0.03]
                mix-blend-overlay
                bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
              "
            />

            {/* TOP BORDER LIGHT */}
            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
            />

            {/* CONTENT */}
            <div className="relative z-10">

              {/* TAG */}
              <span
                className="
                  inline-flex items-center gap-2
                  px-4 py-1.5
                  rounded-full
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  text-[#E7D25F]
                  text-xs
                  font-semibold
                  tracking-[0.18em]
                  uppercase
                  mb-6
                  transition-all duration-300
                  group-hover:bg-[#E7D25F]
                  group-hover:text-black
                "
              >
                OUR GRAPHICS WORK
              </span>

              {/* HEADING */}
              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  leading-[0.95]
                  tracking-[-2px]
                  text-white
                "
              >
                 Design That

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#E7D25F]
                    via-[#F8E889]
                    to-[#C8A93E]
                  "
                >
                Connects
                </span>
              </h2>

              {/* DESC */}
              <p
                className="
                  mt-5
                  text-white/55
                  text-base
                  leading-relaxed
                  max-w-[90%]
                "
              >
                Designed to make brands stand out online with bold visuals.
              </p>
            </div>

            {/* BOTTOM SECTION */}
            <div className="relative z-10 flex items-center justify-between">

              {/* LINE */}
              <div className="flex items-center gap-3">

                <span className="w-10 h-[2px] bg-[#E7D25F]" />

                <span className="text-xs tracking-[0.25em] uppercase text-white/40">
                  Browse Designs
                </span>
              </div>

              {/* ARROW BUTTON */}
              <a
               href="/portfolio"
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  text-white
                  text-xl
                  flex items-center justify-center
                  transition-all duration-300
                  hover:bg-[#E7D25F]
                  hover:text-black
                  hover:rotate-45
                "
              >
                ↗
                </a>
            </div>

            {/* OUTER BORDER */}
            <div className="absolute inset-0 rounded-[38px] border border-white/5 pointer-events-none" />
          </div>

          {/* MOBILE: 2nd & 3rd CARD SAME ROW */}
          <div className="grid grid-cols-2 gap-5 md:contents">
            {galleryImages.slice(1, 3).map((item, index) => (
              <div
                key={index}
                className="
                  relative overflow-hidden
                  rounded-[38px]
                  aspect-[4/4]
                  group
                  cursor-pointer
                "
              >

                <img
                  src={item.src}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    transition duration-700
                    md:group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                  "
                />

                {/* CONTENT */}
                <div className="absolute bottom-5 left-5 right-5">

                  <h3
                    className="
                      mt-4
                      text-white
                      text-lg md:text-2xl
                      font-bold
                      opacity-100
                      md:opacity-0
                      md:translate-y-4
                      md:group-hover:opacity-100
                      md:group-hover:translate-y-0
                      transition-all duration-500
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

          {/* BIG LEFT CARD */}
          <div
            className="
              md:col-span-2
              md:row-span-2
              rounded-[42px]
              overflow-hidden
              relative
              group
              cursor-pointer
              aspect-[1/1]
            "
          >
            <img
              src={galleryImages[0].src}
              alt=""
              className="
                w-full h-full object-cover
                transition duration-700
                md:group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">

              <h3 className="mt-5 text-white text-3xl md:text-5xl font-bold leading-tight">
                {galleryImages[0].title}
              </h3>
            </div>
          </div>

          {/* MOBILE: 5th & 6th CARD SAME ROW */}
          <div className="grid grid-cols-2 gap-5 md:contents">

            {/* SMALL CARD 1 */}
            <div
              className="
                rounded-[42px]
                overflow-hidden
                relative
                group
                cursor-pointer
                aspect-[1/1]
              "
            >
              <img
                src={galleryImages[3].src}
                alt=""
                className="
                  w-full h-full object-cover
                  transition duration-700
                  md:group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/25 md:group-hover:bg-black/50 transition duration-500" />

              <div className="absolute bottom-5 left-5 right-5">

                <h3
                  className="
                    mt-4
                    text-white
                    text-lg md:text-2xl
                    font-bold
                    opacity-100
                    md:opacity-0
                    md:translate-y-4
                    md:group-hover:opacity-100
                    md:group-hover:translate-y-0
                    transition-all duration-500
                  "
                >
                  Posters
                </h3>
              </div>
            </div>

            {/* SMALL CARD 2 */}
            <div
              className="
                rounded-[42px]
                overflow-hidden
                relative
                group
                cursor-pointer
                aspect-[1/1]
              "
            >
              <img
                src={galleryImages[4].src}
                alt=""
                className="
                  w-full h-full object-cover
                  transition duration-700
                  md:group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/25 md:group-hover:bg-black/50 transition duration-500" />

              <div className="absolute bottom-5 left-5 right-5">

                <h3
                  className="
                    mt-4
                    text-white
                    text-lg md:text-2xl
                    font-bold
                    opacity-100
                    md:opacity-0
                    md:translate-y-4
                    md:group-hover:opacity-100
                    md:group-hover:translate-y-0
                    transition-all duration-500
                  "
                >
                  Campaigns
                </h3>
              </div>
            </div>
          </div>

          {/* LAST CARD */}
          <div
            className="
              md:col-span-2
              rounded-[42px]
              overflow-hidden
              relative
              aspect-[2/1]
              group
              cursor-pointer
              bg-[#171717]
              border border-white/5
            "
          >

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] via-[#1A1A1A] to-[#101010]" />

            {/* SOFT GLOW */}
            <div className="absolute -left-20 bottom-0 w-72 h-72 bg-[#E7D25F]/10 blur-3xl rounded-full" />

            {/* CIRCLE STROKE */}
            <div
              className="
                absolute
                right-20 md:right-40
                top-1/2
                -translate-y-1/2
                w-40 md:w-52
                h-40 md:h-52
                rounded-full
                border border-dashed border-white/10
              "
            />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10">

              {/* TOP */}
              <div className="flex items-center gap-4">

                <span className="w-12 h-[2px] bg-[#E7D25F]" />

                <span className="text-xs md:text-sm tracking-[0.22em] uppercase text-white/40">
                  Creative Studio
                </span>
              </div>

              {/* BOTTOM */}
              <div className="max-w-[80%]">

                <h2
                  className="
                    text-[34px] sm:text-[44px] md:text-[76px]
                    font-black
                    leading-[0.9]
                    tracking-[-2px] md:tracking-[-3px]
                    text-white
                  "
                >
                  Turning Vision
                  <span className="block text-[#E7D25F]">
                    Into Results
                  </span>
                </h2>
              </div>
            </div>

            {/* BORDER */}
            <div className="absolute inset-0 rounded-[42px] border border-white/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;