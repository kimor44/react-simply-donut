# React-simply-donut

<p align="center"><img src="https://github.com/kimor44/react-simply-donut/blob/main/src/assets/img/react-simply-donut-logo-transparent.png"></p>

Easily integrate delightful and lightweight donut charts into your React applications with "React Simply Donut." This simple-to-use package provides a hassle-free way to add visually appealing donut charts to your projects.

<p align="center"><img src="https://github.com/kimor44/react-simply-donut/blob/main/src/assets/img/donut-example.png"></p>

<div style="text-align: center;">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

</div>

## Why

I had difficulty integrating a simple donut into an application. Therefore, I created one myself – simple and lightweight – and finally shared it.

## Installation 🏗

Install react-simply-donut with npm, run:

```bash
npm install --save react-simply-donut
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

## License ©

[MIT](https://choosealicense.com/licenses/mit/) © [Kimor44](https://github.com/kimor44)
