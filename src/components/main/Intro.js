import mainSvg from "../../assets/svg/main.svg";

const Intro = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "15vh",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontSize: "1.5rem",
          flexBasis: "50%",
          marginTop: "10rem",
        }}
      >
        I am a front-end web developer with a passion for creating clean and
        elegant single page applications (SPA<small>s</small>).
      </p>
      <img
        style={{
          width: "30rem",
          height: "15rem",
          paddingTop: "5%",
        }}
        src={mainSvg}
        alt="head-svg"
      />
    </div>
  );
};

export default Intro;
