export default function SecondSlide() {
  return (
    <section className="h-[100dvh] w-full bg-[#201d18] relative flex flex-col items-center justify-center p-4 md:p-6">
      <div className="flex flex-col gap-2 container max-w-5xl mx-auto p-4 md:p-6 relative">
        <div className="flex gap-4 items-center mb-4 -top-16 absolute">
          <div className="h-14 w-3 md:h-16 bg-[#DF9F28]" />
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-wide mt-2">
            About Us
          </h1>
        </div>
        <div className="flex flex-col gap-6 text-sm md:text-lg xl:text-2xl *:font-light *:text-pretty *:text-justify">
          <p>
            <b>Sepand Tejarat Pasargad Company</b>, with{" "}
            <b>years of experience</b> in booth construction, operates as one of
            the <b>reputable companies</b> in this industry in{" "}
            <b>Iran and abroad</b>. As a subsidiary of a{" "}
            <b>well-known media holding</b>, this company provides{" "}
            <b>professional and high-quality services</b> with the aim of
            enhancing its clients&apos; <b>branding experience</b>.
          </p>
          <p>
            We are capable of designing and executing exhibition booths in
            various countries, including{" "}
            <b>China, Turkey, Dubai, Russia, Vietnam, Poland, India, Germany</b>
            , and more. Our team, consisting of
            <b>experienced designers and executors</b>, is constantly striving
            to deliver projects in the <b>best possible way</b> using the{" "}
            <b>latest techniques and technologies</b>. We believe that{" "}
            <b>every booth should tell a story of the brand</b>, and for this
            reason, we execute each project with{" "}
            <b>precision and attention to detail</b>.
          </p>
          <p>
            <b>Sepand Tejarat Pasargad</b> is a <b>reliable partner</b> for
            companies seeking to create a <b>lasting and impactful identity</b>{" "}
            for their brand.
          </p>
        </div>
        <div className="absolute bottom-0 end-0 size-36 border-b-4 border-e-4 border-[#DF9F28]" />
      </div>
    </section>
  );
}
