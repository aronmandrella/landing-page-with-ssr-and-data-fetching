import React from "react";

interface IHugeQuoteIconProps {
  className?: string;
}

/*
  In a big project that has a lot of custom svg, instead of this I would do one of these:
  - store all svg data in shared json, and create a wrapper component that would use "dangerouslySetInnerHTML"
  - configure webpack so that Next would import svg as components not as images (by default next does some additional stuff)
  - using svg in img tag could be a solution too, although theme styles can't be applied to svg inside <img/>
*/
export const HugeQuoteIcon: React.VFC<IHugeQuoteIconProps> = React.memo((props) => {
  const { className } = props;

  return (
    <svg
      className={className}
      width="48px"
      height="40px"
      viewBox="0 0 48 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          className="fill-primary"
          transform="translate(-172.000000, -892.000000)"
          fillRule="nonzero"
        >
          <g transform="translate(0.000000, 760.000000)">
            <g transform="translate(172.000000, 128.000000)">
              <g transform="translate(0.000000, 4.000000)">
                <path
                  d="M0,9.23076923 C0,15.0769231 4.15384615,18.6153846 9.23076923,18.6153846 C10.7692308,18.6153846 11.8461538,18.1538462 12.3076923,17.8461538 C12.1538462,24.4615385 7.53846154,31.2307692 0.769230769,32.7692308 L0.769230769,40 C9.38461538,38.7692308 21.2307692,31.2307692 21.2307692,13.0769231 C21.2307692,4.30769231 16,0 10,0 C4.30769231,0 0,4.15384615 0,9.23076923 Z M26.3076923,9.23076923 C26.3076923,15.0769231 30.4615385,18.6153846 35.5384615,18.6153846 C37.0769231,18.6153846 38.1538462,18.1538462 38.6153846,17.8461538 C38.4615385,24.4615385 33.8461538,31.2307692 27.0769231,32.7692308 L27.0769231,40 C35.6923077,38.7692308 47.5384615,31.2307692 47.5384615,13.0769231 C47.5384615,4.30769231 42.3076923,0 36.3076923,0 C30.6153846,0 26.3076923,4.15384615 26.3076923,9.23076923 Z"
                  id="Shape"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
});
