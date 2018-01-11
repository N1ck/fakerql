class Banner extends React.Component {
  state = {
    hidden: true
  };

  componentDidMount() {
    this.setState({
      // hidden: localStorage.getItem('bannerHidden') || true
      hidden: false
    });
  }

  render() {
    const { hidden } = this.state;

    if (hidden) return null;

    return (
      <div>
        <h1>FakerQL</h1>

        <p>Hosted faker GraphQL endpoint for frontend developers.</p>

        <style jsx>{`
          div {
            background-color: #272a32;
            padding: 3rem 1.5rem;
          }

          h1 {
            color: #ea0e72;
            font-size: 3rem;
            font-weight: 400;
            margin: 0 0 1.5rem;
          }

          p {
            color: rgba(255, 255, 255, 0.85);
            font-size: 1.5rem;
            margin: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Banner;
