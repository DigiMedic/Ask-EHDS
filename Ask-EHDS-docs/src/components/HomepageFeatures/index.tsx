import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Snadný přístup k datům',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        EHDS umožňuje občanům snadný a bezpečný přístup k jejich zdravotním datům
        v elektronické podobě napříč celou Evropskou unií.
      </>
    ),
  },
  {
    title: 'Zlepšení zdravotní péče',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Díky EHDS mohou poskytovatelé zdravotní péče přistupovat k komplexním
        informacím o pacientech, což vede k přesnější diagnostice a efektivnější léčbě.
      </>
    ),
  },
  {
    title: 'Podpora výzkumu a inovací',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        EHDS poskytuje výzkumníkům a inovátorům přístup k rozsáhlým anonymizovaným
        zdravotním datům, což urychluje lékařský výzkum a vývoj nových léčebných postupů.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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