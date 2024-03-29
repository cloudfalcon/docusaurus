import React from "react";
import clsx from "clsx";
import styles from "./Tools.module.css";

const PartnerList = [
  {
    title: "AWS",
    url: "https://aws.amazon.com/",
    Svg: require("../../static/img/logo/aws.svg").default,
  },
  {
    title: "CNCF",
    url: "https://www.cncf.io/",
    Svg: require("../../static/img/logo/cncf-icon.svg").default,
  },
  {
    title: "HashiCorp",
    url: "https://www.hashicorp.com/",
    Svg: require("../../static/img/logo/hashicorp.svg").default,
  },
  {
    title: "Datadog",
    url: "https://www.datadoghq.com/",
    Svg: require("../../static/img/logo/datadog.svg").default,
  },
  {
    title: "Vanta",
    url: "https://www.vanta.com/",
    Svg: require("../../static/img/logo/vanta-black.svg").default,
  },
  {
    title: "Twingate",
    url: "https://www.twingate.com/",
    Svg: require("../../static/img/logo/twingate.svg").default,
  },
];

function Partner({ Svg, title, url }) {
  return (
    <div className={clsx("col col--2")}>
      <div className="text--center">
        <a href={url}>
          <Svg className={styles.ToolSvg} alt={title} />
        </a>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className={styles.tools}>
      <div className="container">
        <div className="row">
          {PartnerList.map((props, idx) => (
            <Partner key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
