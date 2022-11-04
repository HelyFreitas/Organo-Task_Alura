import "./styles.css";

interface SelectProps {
  options: string[];
}

export const Select = ({options} : SelectProps) => {
  return (
    <div className="container">
        <label htmlFor="select">Time</label>
      <select className="select" id="select">
        <option>Selecione uma categoria de time</option>
        {options.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
};
