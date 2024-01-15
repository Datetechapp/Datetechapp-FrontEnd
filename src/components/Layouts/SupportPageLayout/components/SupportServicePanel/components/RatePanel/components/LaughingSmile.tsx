import React from 'react';

export function LaughingSmile({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_8209_61504)">
        <path
          d="M5 20C5 21.9698 5.38799 23.9204 6.14181 25.7403C6.89563 27.5601 8.00052 29.2137 9.3934 30.6066C10.7863 31.9995 12.4399 33.1044 14.2597 33.8582C16.0796 34.612 18.0302 35 20 35C21.9698 35 23.9204 34.612 25.7403 33.8582C27.5601 33.1044 29.2137 31.9995 30.6066 30.6066C31.9995 29.2137 33.1044 27.5601 33.8582 25.7403C34.612 23.9204 35 21.9698 35 20C35 18.0302 34.612 16.0796 33.8582 14.2597C33.1044 12.4399 31.9995 10.7863 30.6066 9.3934C29.2137 8.00052 27.5601 6.89563 25.7403 6.14181C23.9204 5.38799 21.9698 5 20 5C18.0302 5 16.0796 5.38799 14.2597 6.14181C12.4399 6.89563 10.7863 8.00052 9.3934 9.3934C8.00052 10.7863 6.89563 12.4399 6.14181 14.2597C5.38799 16.0796 5 18.0302 5 20Z"
          stroke={isActive ? 'url(#paint0_linear_8209_61621)' : '#5F4F7F'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 15H15.0167"
          stroke={isActive ? 'url(#paint1_linear_8209_61621)' : '#5F4F7F'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25 15H25.0167"
          stroke={isActive ? 'url(#paint2_linear_8209_61621)' : '#5F4F7F'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.334 21.668C13.334 23.4361 14.0364 25.1318 15.2866 26.382C16.5368 27.6323 18.2325 28.3346 20.0007 28.3346C21.7688 28.3346 23.4645 27.6323 24.7147 26.382C25.9649 25.1318 26.6673 23.4361 26.6673 21.668H13.334Z"
          stroke={isActive ? 'url(#paint3_linear_8209_61621)' : '#5F4F7F'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_8209_61621"
          x1="5"
          y1="33.5937"
          x2="36.3585"
          y2="31.4028"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00281618" stop-color="#FFE0AA" />
          <stop offset="0.335691" stop-color="#FFAEA9" />
          <stop offset="0.679605" stop-color="#FFA7F6" />
          <stop offset="0.999293" stop-color="#DD7CFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_8209_61621"
          x1="15.834"
          y1="26.6688"
          x2="23.7156"
          y2="24.0478"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00281618" stop-color="#FFE0AA" />
          <stop offset="0.335691" stop-color="#FFAEA9" />
          <stop offset="0.679605" stop-color="#FFA7F6" />
          <stop offset="0.999293" stop-color="#DD7CFF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_8209_61621"
          x1="14.166"
          y1="18.9336"
          x2="16.7888"
          y2="18.842"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00281618" stop-color="#FFE0AA" />
          <stop offset="0.335691" stop-color="#FFAEA9" />
          <stop offset="0.679605" stop-color="#FFA7F6" />
          <stop offset="0.999293" stop-color="#DD7CFF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_8209_61621"
          x1="23.334"
          y1="18.9336"
          x2="25.9568"
          y2="18.842"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00281618" stop-color="#FFE0AA" />
          <stop offset="0.335691" stop-color="#FFAEA9" />
          <stop offset="0.679605" stop-color="#FFA7F6" />
          <stop offset="0.999293" stop-color="#DD7CFF" />
        </linearGradient>
        <clipPath id="clip0_8209_61504">
          <rect width="40" height="40" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
