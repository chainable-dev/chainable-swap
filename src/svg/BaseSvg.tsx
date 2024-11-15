export default function BaseSvg({ className = '' }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM16.5657 8.97257L12.0001 6.33526L7.43457 8.97258V14.2472L12.0001 16.8845L16.5657 14.2472V8.97257ZM12.0001 5L18.0001 8.30554V14.9161L12.0001 18.2217L6.00014 14.9161V8.30554L12.0001 5Z"
        fill="currentColor"
      />
    </svg>
  );
}
