const PrimaryButton = ({ text, extraStyles }) => {
  return (
    <button
      type="submit"
      className={`btn-primary bg-primary text-on-background hover:bg-primary-dark  ${extraStyles}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
