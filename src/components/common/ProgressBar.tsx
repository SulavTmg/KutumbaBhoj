type ProgressBarProps = {
  value: number;
  max: number;
  from: string;
  to: string;
  base: string;
};

const ProgressBar = ({ value, max, from, to, base }: ProgressBarProps) => {
  const progressStyle = {
    width: `${(value / max) * 100}%`,
    background: `linear-gradient(to right, ${from}, ${to})`,
  };

  return (
    <div
      className="w-full h-[11.29px] rounded-full overflow-hidden relative"
      style={{ backgroundColor: base }}
    >
      <div
        className="h-full rounded-full transition-all duration-200 ease-in-out"
        style={progressStyle}
      ></div>
    </div>
  );
};

export default ProgressBar;
