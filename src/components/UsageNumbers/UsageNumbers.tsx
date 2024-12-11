import "./UsageNumber.css";

type UsageNumbersProps = {
  value: number;
  title: string;
};
function UsageNumbers(props: UsageNumbersProps) {
  const { value, title } = props;
  return (
    <div className="usage-numbers">
      <h1>{value}K+</h1>
      <p className="gray-100">{title}</p>
    </div>
  );
}

export default UsageNumbers;
