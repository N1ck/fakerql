export default () => (
  <div className="wrapper">
    <div className="sk-spinner sk-spinner-pulse" />

    <style jsx>{`
      .wrapper {
        display: flex;
        width: 100%;
        height: 100%;
      }

      .sk-spinner-pulse {
        width: 40px;
        height: 40px;
        margin: 10rem auto;
        background-color: #333;
        border-radius: 100%;
        -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;
        animation: sk-pulseScaleOut 1s infinite ease-in-out;
      }

      @-webkit-keyframes sk-pulseScaleOut {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0;
        }
      }

      @keyframes sk-pulseScaleOut {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0;
        }
      }
    `}</style>
  </div>
);
