const Wave = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <svg
          className="cs-wave desktop"
          fill="none"
          viewBox="0 0 1920 136"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1920 136V0C1803.21 45.3334 1445.52 136 951 136C456.485 136 111.116 45.3334 0 0V136H951H1920Z"
            fill="var(--maskBG)"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Wave;
