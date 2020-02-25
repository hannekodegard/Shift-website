import { FaAngleDown } from 'react-icons/fa';

export default function TopImage({
  image = '',
  title = '',
  text = '',
  brightness = 0.3,
  height = '100vw',
  maxHeight = 'calc(100vh - 60px)',
  backgroundSize = 'cover',
  backgroundPosition = 'center center',
  hasArrow = true,
  fixedOnMobile = false,
}) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h4>{text}</h4>
      {hasArrow ? (
        <div className="arrow">
          <FaAngleDown size={35} />
        </div>
      ) : null}
      <style jsx>
        {`
          h1,
          h4 {
            z-index: 1;
            margin: 0;
            color: white;
          }
          h1 {
            font-size: 16vw;
          }
          h4 {
            font-size: 5vw;
          }
          @media (min-width: 640px) {
            h1 {
              font-size: 5em;
            }
            h4 {
              font-size: 1.5em;
            }
          }
          .container {
            padding: 1em 16px 3em;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-flow: column nowrap;
            width: 100%;
            height: ${height};
            max-height: ${maxHeight};
            background-image: url(${image});
            background-size: ${backgroundSize};
            background-position: ${backgroundPosition};
            background-attachment: fixed;
            position: relative;
          }
          .container::after {
            content: '';
            backdrop-filter: brightness(${brightness});
            z-index: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .arrow {
            position: absolute;
            z-index: 1;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%, -50%);
            background-attachment: fixed;
          }
          @media (max-width: 640px) {
            .container {
              background-attachment: ${fixedOnMobile ? 'fixed' : 'unset'};
            }
          }
        `}
      </style>
    </div>
  );
}