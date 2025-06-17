import logowhite from "../assets/svg/logo-white.svg";

const Logo = () => {
  return (
    <>
      <a>
        <img
          alt="logo"
          decoding="async"
          height={43}
          width={197}
          aria-hidden="true"
          loading="lazy"
          src={logowhite}
        ></img>
      </a>
    </>
  );
};

export default Logo;
