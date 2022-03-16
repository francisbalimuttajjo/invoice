import Head from "next/head";
import React from "react";

type Props = {
  title: string;
};
const HeadComponent: React.FC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="invoicing" content="invoicing app" />
    </Head>
  );
};

export default HeadComponent;
