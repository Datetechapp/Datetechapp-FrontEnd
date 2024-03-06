import style from './LikeButton.module.css';

const LikeButton = () => {
  return (
    <button
      className={style.containerIcons}
      // onClick={onClick}
    >
      <svg
        className={`${style.heartIcon} ${style.matchingButtons}`}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#1F1D2B" />
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="19.5"
          stroke="url(#paint0_linear_9553_13091)"
        />
        <path
          d="M29.4114 17.6473C29.4114 15.0483 27.2167 12.9414 24.5095 12.9414C22.4853 12.9414 20.7477 14.1192 19.9997 15.7999C19.2516 14.1192 17.514 12.9414 15.4899 12.9414C12.7826 12.9414 10.5879 15.0483 10.5879 17.6473C10.5879 25.1982 19.9997 30.1963 19.9997 30.1963C19.9997 30.1963 29.4114 25.1982 29.4114 17.6473Z"
          stroke="url(#paint1_linear_9553_13091)"
          stroke-width="1.76471"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9553_13091"
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9747FF" />
            <stop offset="1" stop-color="#DE77C7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9553_13091"
            x1="19.9997"
            y1="12.9414"
            x2="19.9997"
            y2="30.1963"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9747FF" />
            <stop offset="1" stop-color="#DE77C7" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default LikeButton;
