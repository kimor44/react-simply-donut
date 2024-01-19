<p align="center"><img src="https://github.com/kimor44/react-simply-donut/blob/main/src/assets/img/react-simply-donut-logo-transparent.png"></p>

Easily integrate delightful and lightweight donut charts into your React applications with "React Simply Donut." This simple-to-use package provides a hassle-free way to add visually appealing donut charts to your projects.

<p align="center"><img src="https://github.com/kimor44/react-simply-donut/blob/main/src/assets/img/donut-example.png"></p>

## Table of content

- [Table of content](#table-of-content-📓)
- [Why](#why)
- [Demo](#demo-💥)
- [Installation](#installation-🏗)
- [Usage](#usage-✏)
- [API](#api-🔗)
  - [SimplyDonut](#simplydonut)
  - [SimplyPie](#simplypie)
  - [SimplyCircleProgressBar](#simplycircleprogressbar)
  - [SimplyLegend](#simplylegend)
- [License](#license-©)

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![npm](https://img.shields.io/npm/v/react-simply-donut?color=red&cacheSeconds=3600)
![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/react-simply-donut?label=minified%20size&color=yellow)
![npm](https://img.shields.io/npm/dm/react-simply-donut?color=purple&cacheSeconds=3600)

</div>

## Why

I had difficulty integrating a simple donut into an application. Therefore, I created one myself – simple and lightweight – and finally shared it.

## Demo 💥

You can play with the demo [here](https://react-simply-donut-example.vercel.app/)

## Installation 🏗

Install react-simply-donut with npm, run:

```bash
npm i react-simply-donut
```

or if you prefer, you can use yarn:

```bash
yarn add react-simply-donut
```

## Usage ✏

Here is a minimal example of using the package:

```tsx
import React from "react";
import { SimplyDonut } from "react-simply-donut/donuts";
import { SimplyLegend } from "react-simply-donut/legends";

const data = [
  {
    value: 123,
    name: "value1",
  },
  {
    value: 97,
    name: "value2",
  },
  {
    value: 265,
    name: "value3",
  },
];

const DonutAndLegend = () => {
  return (
    <div>
      <div>
        <SimplyDonut data={data} />
      </div>
      <div>
        <h3>Legend title</h3>
        <SimplyLegend data={data} />
      </div>
    </div>
  );
};
```

## API 🔗

#### SimplyDonut

This is the main component of the package

```tsx
export type TDonutData = {
  name: string; // Donut section name
  value: number; // Donut section value
  color?: string; // Donut section color in hexadecimal format
};

export type TSimplyDonut = {
  data: TDonutData[]; // Data given for the entire donut chart
  size?: "sm" | "md" | "lg"; // Size of the donut chart
  inset?: {
    color?: string; // Color of the inner dot in hexadecimal format (default: "#cbd5e1")
    size?: number; // Donut thickness in percentage (between 5 and 45) (default: 12)
  };
};

const SimplyDonut = (props: TSimplyDonut) => {};
```

> 🚨 If the `size` property is not provided, the chart will extend to the boundaries of the parent block. To do this, the parent block must have a defined width and height, otherwise the graphic will not appear or will be completely flat.

#### SimplyPie

> Note that is the same component than SimplyDonut without the `inset` props.

```tsx
export TSimplyPie = Pick<TSimplyDonut, "data" | "size">;

// Pick<TSimplyDonut, "data" | "size"> type is equal to :
{
  data: TDonutData[]; // Data given for the entire pie chart
  size?: "sm" | "md" | "lg"; // Size of the pie chart. If not provided, look at the warning above.
};

const SimplyPie = (props: TSimplyPie) => {};
```

#### SimplyCircleProgressBar

This component displays a circle progress bar with your score

```tsx
export type TSimplyCircleProgressBar = Pick<TSimplyDonut, "size" | "inset"> & {
  progress: number; // Value of the of the progress bar
  color?: string; // Color of the progress bar in hexadecimal format (default: "#FF5733")
  displayScore?: boolean; // Display the score inside the circle (default: true)
  remainingPortionOpacity?: number; // Apply a colored opacity on the remaining percentages (between 0 and 1 - based on the given color - default: 0.5)
};

// Pick<TSimplyDonut, "size" | "inset"> type is equal to :
{
  size?: "sm" | "md" | "lg"; // Size of the pie chart. If not provided, look at the warning above.
  inset?: {
    color?: string; // Color of the inner dot in hexadecimal format (default: "#cbd5e1")
    size?: number; // Donut thickness in percentage (between 5 and 45) (default: 12)
  };
};

const SimplyCircleProgressBar = (props: TSimplyCircleProgressBar) => {};
```

#### SimplyLegend

```tsx
export type TSimplyLegend = {
  data: TDonutData[]; // data given for the entire donut chart (see SimplyDonut for more details)
};

const SimplyLegend = (props: TSimplyLegend) => {};
```

## License ©

[MIT](https://choosealicense.com/licenses/mit/) © [Kimor44](https://github.com/kimor44)
