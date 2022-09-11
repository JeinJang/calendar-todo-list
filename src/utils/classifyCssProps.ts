import * as Styles from 'styled-system';

const cssProperties = Object.values(Styles).map(
  (prop: any) => {
    if (prop.propNames) {
      return prop.propNames;
    }
  }
).reduce((acc: any, val) => {
  if (val) {
    return acc.concat(val);
  }
  return acc;
}, []).concat(
  // Styles에 없는 css 목록
  'boxSizing',
  'userSelect',
  'transform',
  'transition',
);

export default function classifyCssProps(props: any) {
  const filteredKeys = Object.keys(props).filter(
    prop => cssProperties.includes(prop)
  );
  const otherKeys = Object.keys(props).filter(
    prop => !cssProperties.includes(prop)
  );
  const cssProps = filteredKeys.length ?
    filteredKeys.reduce((acc, key) => 
      Object.assign(acc, { [key]: props[key] })
    , {}) : {};
  const normalProps = otherKeys.length ?
    otherKeys.reduce((acc, key) => 
      Object.assign(acc, { [key]: props[key] })
    , {}) : {};

  return {
    cssProps,
    normalProps,
  };
};