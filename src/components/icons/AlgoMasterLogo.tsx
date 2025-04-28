
const AlgoMasterLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 0L40 20L30 30L20 20L10 30L0 20L20 0Z"
        fill="#00A3FF"
      />
      <path
        d="M20 40L10 30L20 20L30 30L20 40Z"
        fill="#00FFAA"
      />
    </svg>
  );
};

export default AlgoMasterLogo;
