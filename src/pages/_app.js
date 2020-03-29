import "./_app.css";

const NextJSApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

NextJSApp.getInitialProps = async ({ Component, router, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return {
    pageProps
  };
};

export default NextJSApp;
