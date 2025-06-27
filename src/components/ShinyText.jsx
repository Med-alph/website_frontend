import '../styles/ShinyText.css';

const ShinyText = ({ text, disabled = false, className = '' }) => {
  return (
    <span className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}>
      {text}
    </span>
  );
};

export default ShinyText;
  