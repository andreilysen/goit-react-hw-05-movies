import "./Button.scss";

const Button = ({ handleClick }) => {
  console.log("handleClick", handleClick);
  return (
    <button className="button" onClick={handleClick}>
      Load more
    </button>
  );
};

export default Button;
