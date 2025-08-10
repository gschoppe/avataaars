# React component for Avataaars

The core React component for [Avataaars Generator](https://getavataaars.com/) updated by [Greg Schoppe](https://gschoppe.com), originally developed by [Fang-Pen Lin](https://twitter.com/fangpenlin), based on the Sketch library [Avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley). 

<p align="center"><img src='avataaars-example.png?raw=true' style='width: 300px; height: 300px;' /></p>

## Features

 - SVG based
 - Light weight 
 - Scalable
 - Easy to use
 - Easy to integrate with custom editor
 - Comes with [official editor](https://getavataaars.com/) *

 \* Note: the official editor is still running on the 4 year old version 2.0.0
 and doesn't support backdropType, backdropColor, or several bugfixes in this version.


## Usage

First, you need to install the avataaars component package, here you run

```
yarn add @gschoppe/avataaars
```

or

```
npm install @gschoppe/avataaars --save
```

if you are using npm. Then, in your React app, import the Avataaar component and put it where you like it to be, for example

```jsx
import * as React from 'react'
import Avatar from '@gschoppe/avataaars'

export default function MyComponent() {
  return( 
    <Avatar
      style={{width: '100px', height: '100px'}}
      backdropType='Circle'
      backdropColor='Blue01'
      topType='LongHairMiaWallace'
      accessoriesType='Prescription02'
      hairColor='BrownDark'
      facialHairType='Blank'
      clotheType='Hoodie'
      clotheColor='PastelBlue'
      eyeType='Happy'
      eyebrowType='Default'
      mouthType='Smile'
      skinColor='Light'
    />
  );
}
```

To showcase individual pieces of the avatar you can use the Piece component, for example:

```jsx
import * as React from 'react'
import {Piece} from 'avataaars';

export default function MyComponent() {
  return(
    <>
      <Piece pieceType="mouth" pieceSize="100" mouthType="Eating"/>
      <Piece pieceType="eyes" pieceSize="100" eyeType="Dizzy"/>
      <Piece pieceType="eyebrows" pieceSize="100" eyebrowType="RaisedExcited"/>
      <Piece pieceType="accessories" pieceSize="100" accessoriesType="Round"/>
      <Piece pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red"/>
      <Piece pieceType="facialHair" pieceSize="100" facialHairType="BeardMajestic"/>
      <Piece pieceType="clothe" pieceSize="100" clotheType="Hoodie" clotheColor="Red"/>
      <Piece pieceType="graphics" pieceSize="100" graphicType="Skull" />
      <Piece pieceType="skin" pieceSize="100" skinColor="Brown" />
    </>
  );
}
```

To explore avatar options and generate the React code, please use [Avataaars Generator](https://getavataaars.com/)

## Collect options

To build your own avatar editor, you may want to use lower level `Avatar` component along with `OptionContext`. For more details usage, please reference to source code of [avataaars-generator](https://github.com/fangpenlin/avataaars-geneator), see how it uses `OptionContext` to collection available options.
