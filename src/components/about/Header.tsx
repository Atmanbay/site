import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Header() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-6 items-center">
        <div>
          <img src="/images/me.webp" className="max-w-[125px] rounded-full" />
        </div>
        <div className="flex flex-col justify-between self-stretch">
          <div className="flex flex-col gap-1">
            <div className="text-2xl">Andrew Hachten</div>
            <div className="text-md text-smoky/80">Full-Stack Engineer</div>
            <div className="text-sm text-smoky/60">Brooklyn, NY, USA</div>
          </div>
          <div className="flex flex-row gap-4">
            <IconContext.Provider
              value={{ className: "text-smoky/50", size: "1.3rem" }}
            >
              <a href="https://github.com/Atmanbay" target="_blank">
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/andrewhachten/"
                target="_blank"
              >
                <FiLinkedin />
              </a>
              <a href="https://twitter.com/atmanbay" target="_blank">
                <FiTwitter />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col gap-2">
          <div className="text-lg tracking-wide">About</div>
          <div className="text-smoky/75">
            Hi! I'm Andrew. I'm a software engineer with a passion for creating
            products with a focus on user experience. Although I previously
            worked in the crypto industry from 2021 to 2022, I have since become
            disenchanted with the field and now view myself as a crypto skeptic.
            I'm also an avid baker and have baked for weddings and bake fairs.
          </div>
        </div>
      </div>
    </div>
  );
}
