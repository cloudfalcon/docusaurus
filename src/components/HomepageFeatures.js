import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Terraform DevSecOps",
    Svg: require("../../static/img/tf02.svg").default,
    description: (
      <>
        <code>Deploy</code> end-to-end architectures that contain all the
        services you need using Terraform
      </>
    ),
  },
  {
    title: "CDK DevSecOps",
    Svg: require("../../static/img/cdk-logo6-1260x476.svg").default,
    description: (
      <>
        <code>Deploy</code> end-to-end architectures that contain all the
        services you need using CDK
      </>
    ),
  },
  {
    title: "CloudFormation DevSecOps",
    Svg: require("../../static/img/cloudformation.svg").default,
    description: (
      <>
        <code>Deploy</code> end-to-end architectures that contain all the
        services you need using CloudFormation
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
