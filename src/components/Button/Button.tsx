import "./Button.css";

interface ButtonProps {
  selectAll: () => void;
}

const Button = ({ selectAll }: ButtonProps): JSX.Element => {
  return (
    <button onClick={selectAll} className="button button--select">
      Select all
    </button>
  );
};

export default Button;
