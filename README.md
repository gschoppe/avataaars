# React component for Avataaars

The core React component for [Avataaars Generator](https://avataaars2.com/) updated by [Greg Schoppe](https://gschoppe.com), originally developed by [Fang-Pen Lin](https://twitter.com/fangpenlin), based on the Sketch library [Avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley). 

<p align="center"><img src='avataaars-example.png?raw=true' style='width: 300px; height: 300px;' /></p>

## Features

 - **NEW** Idle CSS animations
 - **NEW** Extendable color palettes
 - SVG based
 - Light weight 
 - Scalable
 - Easy to use
 - Easy to integrate with custom editor
 - Comes with [official editor](https://avataaars2.com/)


## How To

### Installation

First, you need to install the avataaars component package, here you run

```bash
yarn add @gschoppe/avataaars
```

or

```bash
npm install @gschoppe/avataaars --save
```

if you are using npm.

### Usage

In your React app, import the Avataaar component and put it where you like it to be, for example

```jsx
import React from 'react'
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

### Dynamic Random Avatars

To generate dynamic, visually balanced random avatars, you can use the built-in `generateRandomAvataarProps()` function which automatically applies probabilistic stylistic cohesion rules and prevents backdrop/hair/clothing color conflicts:

```jsx
import React from 'react'
import Avatar, { generateRandomAvataarProps } from '@gschoppe/avataaars'

export default function MyComponent() {
  // Generates complete, cohesive random options
  const randomProps = generateRandomAvataarProps()

  return (
    <Avatar
      style={{ width: '100px', height: '100px' }}
      {...randomProps}
    />
  )
}
```


### Showcase pieces

To showcase individual pieces of the avatar you can use the Piece component, for example:

```jsx
import React from 'react'
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

### Registering Custom Colors, Alpha, and Gradients

You can register custom colors, translucent colors (alpha), and linear or radial gradients into any category palette using the `addPaletteColor()` function. 

> [!NOTE]
> - Custom color/paint names must be a single word, beginning with a capital letter (e.g. `CustomBlue`, `SunsetGradient`).
> - Registering a color/gradient with an existing name will overwrite the entry.

#### 1. Custom Hex or Color String
```javascript
import { addPaletteColor, PALETTES } from '@gschoppe/avataaars'

// Add solid color
addPaletteColor(PALETTES.HAIR, 'Magenta', '#FF00FF')
```

#### 2. Translucent Colors (Alpha)
```javascript
// Add translucent color with opacity
addPaletteColor(PALETTES.BACKDROP, 'TranslucentBlue', 'rgba(59, 130, 246, 0.5)')
```

#### 3. Linear Gradients
```javascript
addPaletteColor(PALETTES.CLOTHES, 'Sunset', {
  type: 'linear',
  attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
  stops: [
    { offset: '0%', color: '#FF5733', opacity: 1 },
    { offset: '100%', color: '#FFC0CB', opacity: 0.5 }
  ]
})
```

#### 4. Radial Gradients
```javascript
addPaletteColor(PALETTES.BACKDROP, 'BlueGlow', {
  type: 'radial',
  attrs: { cx: '50%', cy: '50%', r: '50%' },
  stops: [
    { offset: '0%', color: '#06B6D4', opacity: 1 },
    { offset: '100%', color: '#3B82F6', opacity: 1 }
  ]
})
```

### BETA - Add CSS Idle Animations

<p align="center"><img src='animation-example.gif?raw=true' style='max-width: 80%;height:auto;' /></p>

This is very much a work in progress. So far, Idle animations have only been added
to a few of the various avatar components. To enable these animations, just
import `@gschoppe/avataaars/dist/animations.css` in your component, like so:

```jsx
import React from 'react'
import Avatar from '@gschoppe/avataaars'
import '@gschoppe/avataaars/dist/animations.css'

export default function MyComponent() {
  return( 
    <Avatar
      style={{width: '100px', height: '100px'}}
      backdropType='Circle'
      backdropColor='Blue01'
      topType='LongHairMiaWallace'
      accessoriesType='Blank'
      hairColor='BrownDark'
      facialHairType='Blank'
      clotheType='Hoodie'
      clotheColor='PastelBlue'
      eyeType='EyeRoll'
      eyebrowType='Default'
      mouthType='Serious'
      skinColor='Light'
    />
  );
}
```


### Animating Raw or Embedded SVGs

If you are rendering raw SVGs directly (e.g. from a backend/REST service or custom compiler), you can still enable these beautiful animations:

1. Ensure the root container group of your avatar SVG uses an ID ending in `-Avataaar` (this is the default behavior when rendering with the `animated` option set to `true`).
2. Load the `@gschoppe/avataaars/dist/animations.css` stylesheet in your HTML document to apply the keyframes to your SVGs:

```html
<!-- Load the stylesheet in your HTML head -->
<link rel="stylesheet" href="node_modules/@gschoppe/avataaars/dist/animations.css">
```


### Positional Configuration Hashing

You can serialize any complete avatar configuration into a compact, URL-safe 15-character Base-62 shorthand hash (and decode it back synchronously) using the core library hashing functions:

```jsx
import React from 'react'
import Avatar, { getAvatarHash, getAvatarConfigFromHash } from '@gschoppe/avataaars'

export default function MyComponent() {
  // 1. Generate a stable 15-character shorthand hash
  const hash = getAvatarHash({
    backdropType: 'Diamond',
    backdropColor: 'PastelBlue',
    topType: 'ShortHairShortFlat',
    skinColor: 'Tanned'
  })
  console.log(hash) // E.g., '17z0104193aa523'

  // 2. Decode the shorthand string back into an options config object
  const config = getAvatarConfigFromHash('17z0104193aa523')

  return (
    <Avatar
      style={{ width: '100px', height: '100px' }}
      {...config}
    />
  )
}
```

*Note: Dynamically runtime-registered custom colors or gradients will receive higher indices. If they exist in a future run, they will map correctly; otherwise, they will gracefully fallback to their category defaults.*


## Available Parameters and Options

Here are all the available component properties, option values, and representative SVG icons for each choice.

### 1. Backdrop Configuration (`backdropType` & `backdropColor`)

#### Backdrop Type (`backdropType`)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `Circle` | ![Circle](docs/icons/backdrop/Circle.svg) | `Diamond` | ![Diamond](docs/icons/backdrop/Diamond.svg) | `NoBackdrop` | ![NoBackdrop](docs/icons/backdrop/NoBackdrop.svg) |

#### Backdrop / Hat / Clothing Colors (`backdropColor`, `hatColor`, `clotheColor`)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `Black` | ![Black](docs/icons/colors/Black.svg) | `Blue01` | ![Blue01](docs/icons/colors/Blue01.svg) | `Blue02` | ![Blue02](docs/icons/colors/Blue02.svg) |
| `Blue03` | ![Blue03](docs/icons/colors/Blue03.svg) | `Gray01` | ![Gray01](docs/icons/colors/Gray01.svg) | `Gray02` | ![Gray02](docs/icons/colors/Gray02.svg) |
| `Heather` | ![Heather](docs/icons/colors/Heather.svg) | `PastelBlue` | ![PastelBlue](docs/icons/colors/PastelBlue.svg) | `PastelGreen` | ![PastelGreen](docs/icons/colors/PastelGreen.svg) |
| `PastelOrange` | ![PastelOrange](docs/icons/colors/PastelOrange.svg) | `PastelRed` | ![PastelRed](docs/icons/colors/PastelRed.svg) | `PastelYellow` | ![PastelYellow](docs/icons/colors/PastelYellow.svg) |
| `Pink` | ![Pink](docs/icons/colors/Pink.svg) | `Red` | ![Red](docs/icons/colors/Red.svg) | `White` | ![White](docs/icons/colors/White.svg) |

---

### 2. Hair & Headwear (`topType` & `hairColor`)

#### Top styles (`topType`)
| Value | Icon | Value | Icon |
|---|---|---|---|
| `NoHair` | ![NoHair](docs/icons/top/NoHair.svg) | `Eyepatch` | ![Eyepatch](docs/icons/top/Eyepatch.svg) |
| `Hat` | ![Hat](docs/icons/top/Hat.svg) | `Hijab` | ![Hijab](docs/icons/top/Hijab.svg) |
| `Turban` | ![Turban](docs/icons/top/Turban.svg) | `WinterHat1` | ![WinterHat1](docs/icons/top/WinterHat1.svg) |
| `WinterHat2` | ![WinterHat2](docs/icons/top/WinterHat2.svg) | `WinterHat3` | ![WinterHat3](docs/icons/top/WinterHat3.svg) |
| `WinterHat4` | ![WinterHat4](docs/icons/top/WinterHat4.svg) | `LongHairBigHair` | ![LongHairBigHair](docs/icons/top/LongHairBigHair.svg) |
| `LongHairBob` | ![LongHairBob](docs/icons/top/LongHairBob.svg) | `LongHairBun` | ![LongHairBun](docs/icons/top/LongHairBun.svg) |
| `LongHairCurly` | ![LongHairCurly](docs/icons/top/LongHairCurly.svg) | `LongHairCurvy` | ![LongHairCurvy](docs/icons/top/LongHairCurvy.svg) |
| `LongHairDreads` | ![LongHairDreads](docs/icons/top/LongHairDreads.svg) | `LongHairFrida` | ![LongHairFrida](docs/icons/top/LongHairFrida.svg) |
| `LongHairFro` | ![LongHairFro](docs/icons/top/LongHairFro.svg) | `LongHairFroBand` | ![LongHairFroBand](docs/icons/top/LongHairFroBand.svg) |
| `LongHairMiaWallace` | ![LongHairMiaWallace](docs/icons/top/LongHairMiaWallace.svg) | `LongHairNotTooLong` | ![LongHairNotTooLong](docs/icons/top/LongHairNotTooLong.svg) |
| `LongHairShavedSides` | ![LongHairShavedSides](docs/icons/top/LongHairShavedSides.svg) | `LongHairStraight` | ![LongHairStraight](docs/icons/top/LongHairStraight.svg) |
| `LongHairStraight2` | ![LongHairStraight2](docs/icons/top/LongHairStraight2.svg) | `LongHairStraightStrand` | ![LongHairStraightStrand](docs/icons/top/LongHairStraightStrand.svg) |
| `ShortHairDreads01` | ![ShortHairDreads01](docs/icons/top/ShortHairDreads01.svg) | `ShortHairDreads02` | ![ShortHairDreads02](docs/icons/top/ShortHairDreads02.svg) |
| `ShortHairFrizzle` | ![ShortHairFrizzle](docs/icons/top/ShortHairFrizzle.svg) | `ShortHairShaggy` | ![ShortHairShaggy](docs/icons/top/ShortHairShaggy.svg) |
| `ShortHairShaggyMullet` | ![ShortHairShaggyMullet](docs/icons/top/ShortHairShaggyMullet.svg) | `ShortHairShortCurly` | ![ShortHairShortCurly](docs/icons/top/ShortHairShortCurly.svg) |
| `ShortHairShortFlat` | ![ShortHairShortFlat](docs/icons/top/ShortHairShortFlat.svg) | `ShortHairShortRound` | ![ShortHairShortRound](docs/icons/top/ShortHairShortRound.svg) |
| `ShortHairShortWaved` | ![ShortHairShortWaved](docs/icons/top/ShortHairShortWaved.svg) | `ShortHairSides` | ![ShortHairSides](docs/icons/top/ShortHairSides.svg) |
| `ShortHairTheCaesar` | ![ShortHairTheCaesar](docs/icons/top/ShortHairTheCaesar.svg) | `ShortHairTheCaesarSidePart` | ![ShortHairTheCaesarSidePart](docs/icons/top/ShortHairTheCaesarSidePart.svg) |

#### Hair Colors (`hairColor` & `facialHairColor`)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `Auburn` | ![Auburn](docs/icons/colors/Auburn.svg) | `Black` | ![Black](docs/icons/colors/Black.svg) | `Blonde` | ![Blonde](docs/icons/colors/Blonde.svg) |
| `BlondeGolden` | ![BlondeGolden](docs/icons/colors/BlondeGolden.svg) | `Brown` | ![Brown](docs/icons/colors/Brown.svg) | `BrownDark` | ![BrownDark](docs/icons/colors/BrownDark.svg) |
| `PastelPink` | ![PastelPink](docs/icons/colors/PastelPink.svg) | `Blue` | ![Blue](docs/icons/colors/Blue.svg) | `Platinum` | ![Platinum](docs/icons/colors/Platinum.svg) |
| `Red` | ![Red](docs/icons/colors/Red.svg) | `SilverGray` | ![SilverGray](docs/icons/colors/SilverGray.svg) | | |

---

### 3. Facial Hair (`facialHairType`)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `Blank` | *(None)* | `BeardLight` | ![BeardLight](docs/icons/facialHair/BeardLight.svg) | `BeardMajestic` | ![BeardMajestic](docs/icons/facialHair/BeardMajestic.svg) |
| `BeardMedium` | ![BeardMedium](docs/icons/facialHair/BeardMedium.svg) | `MoustacheFancy` | ![MoustacheFancy](docs/icons/facialHair/MoustacheFancy.svg) | `MoustacheMagnum` | ![MoustacheMagnum](docs/icons/facialHair/MoustacheMagnum.svg) |

---

### 4. Clothing & Fabric Graphic (`clotheType` & `graphicType`)

#### Clothes (`clotheType`)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `BlazerShirt` | ![BlazerShirt](docs/icons/clothe/BlazerShirt.svg) | `BlazerSweater` | ![BlazerSweater](docs/icons/clothe/BlazerSweater.svg) | `CollarSweater` | ![CollarSweater](docs/icons/clothe/CollarSweater.svg) |
| `GraphicShirt` | ![GraphicShirt](docs/icons/clothe/GraphicShirt.svg) | `Hoodie` | ![Hoodie](docs/icons/clothe/Hoodie.svg) | `Overall` | ![Overall](docs/icons/clothe/Overall.svg) |
| `ShirtCrewNeck` | ![ShirtCrewNeck](docs/icons/clothe/ShirtCrewNeck.svg) | `ShirtScoopNeck` | ![ShirtScoopNeck](docs/icons/clothe/ShirtScoopNeck.svg) | `ShirtVNeck` | ![ShirtVNeck](docs/icons/clothe/ShirtVNeck.svg) |

#### Graphic Print (`graphicType` - used with `GraphicShirt` Clothing)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `Bat` | ![Bat](docs/icons/graphics/Bat.svg) | `Cumbia` | ![Cumbia](docs/icons/graphics/Cumbia.svg) | `Deer` | ![Deer](docs/icons/graphics/Deer.svg) |
| `Diamond` | ![Diamond](docs/icons/graphics/Diamond.svg) | `Hola` | ![Hola](docs/icons/graphics/Hola.svg) | `Pizza` | ![Pizza](docs/icons/graphics/Pizza.svg) |
| `Resist` | ![Resist](docs/icons/graphics/Resist.svg) | `Selena` | ![Selena](docs/icons/graphics/Selena.svg) | `Skull` | ![Skull](docs/icons/graphics/Skull.svg) |
| `SkullOutline` | ![SkullOutline](docs/icons/graphics/SkullOutline.svg) | | | | |

---

### 5. Eyewear / Accessories (`accessoriesType`)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `Blank` | *(None)* | `Kurt` | ![Kurt](docs/icons/accessories/Kurt.svg) | `Prescription01` | ![Prescription01](docs/icons/accessories/Prescription01.svg) |
| `Prescription02` | ![Prescription02](docs/icons/accessories/Prescription02.svg) | `Round` | ![Round](docs/icons/accessories/Round.svg) | `Sunglasses` | ![Sunglasses](docs/icons/accessories/Sunglasses.svg) |
| `Wayfarers` | ![Wayfarers](docs/icons/accessories/Wayfarers.svg) | | | | |

---

### 6. Expressions & Face Features (`eyeType`, `eyebrowType`, `mouthType`)

#### Eyes (`eyeType`)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `Close` | ![Close](docs/icons/eyes/Close.svg) | `Cry` | ![Cry](docs/icons/eyes/Cry.svg) | `Default` | ![Default](docs/icons/eyes/Default.svg) |
| `Dizzy` | ![Dizzy](docs/icons/eyes/Dizzy.svg) | `EyeRoll` | ![EyeRoll](docs/icons/eyes/EyeRoll.svg) | `Happy` | ![Happy](docs/icons/eyes/Happy.svg) |
| `Hearts` | ![Hearts](docs/icons/eyes/Hearts.svg) | `Side` | ![Side](docs/icons/eyes/Side.svg) | `Squint` | ![Squint](docs/icons/eyes/Squint.svg) |
| `Surprised` | ![Surprised](docs/icons/eyes/Surprised.svg) | `Wink` | ![Wink](docs/icons/eyes/Wink.svg) | `WinkWacky` | ![WinkWacky](docs/icons/eyes/WinkWacky.svg) |

#### Eyebrows (`eyebrowType`)
| Value | Icon | Value | Icon |
|---|---|---|---|
| `Angry` | ![Angry](docs/icons/eyebrows/Angry.svg) | `AngryNatural` | ![AngryNatural](docs/icons/eyebrows/AngryNatural.svg) |
| `Default` | ![Default](docs/icons/eyebrows/Default.svg) | `DefaultNatural` | ![DefaultNatural](docs/icons/eyebrows/DefaultNatural.svg) |
| `FlatNatural` | ![FlatNatural](docs/icons/eyebrows/FlatNatural.svg) | `FrownNatural` | ![FrownNatural](docs/icons/eyebrows/FrownNatural.svg) |
| `RaisedExcited` | ![RaisedExcited](docs/icons/eyebrows/RaisedExcited.svg) | `RaisedExcitedNatural` | ![RaisedExcitedNatural](docs/icons/eyebrows/RaisedExcitedNatural.svg) |
| `SadConcerned` | ![SadConcerned](docs/icons/eyebrows/SadConcerned.svg) | `SadConcernedNatural` | ![SadConcernedNatural](docs/icons/eyebrows/SadConcernedNatural.svg) |
| `UnibrowNatural` | ![UnibrowNatural](docs/icons/eyebrows/UnibrowNatural.svg) | `UpDown` | ![UpDown](docs/icons/eyebrows/UpDown.svg) |
| `UpDownNatural` | ![UpDownNatural](docs/icons/eyebrows/UpDownNatural.svg) | | |

#### Mouth (`mouthType`)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `Concerned` | ![Concerned](docs/icons/mouth/Concerned.svg) | `Default` | ![Default](docs/icons/mouth/Default.svg) | `Disbelief` | ![Disbelief](docs/icons/mouth/Disbelief.svg) |
| `Eating` | ![Eating](docs/icons/mouth/Eating.svg) | `Grimace` | ![Grimace](docs/icons/mouth/Grimace.svg) | `Sad` | ![Sad](docs/icons/mouth/Sad.svg) |
| `ScreamOpen` | ![ScreamOpen](docs/icons/mouth/ScreamOpen.svg) | `Serious` | ![Serious](docs/icons/mouth/Serious.svg) | `SideChew` | ![SideChew](docs/icons/mouth/SideChew.svg) |
| `SideSmile` | ![SideSmile](docs/icons/mouth/SideSmile.svg) | `Smile` | ![Smile](docs/icons/mouth/Smile.svg) | `Tongue` | ![Tongue](docs/icons/mouth/Tongue.svg) |
| `Twinkle` | ![Twinkle](docs/icons/mouth/Twinkle.svg) | `Vomit` | ![Vomit](docs/icons/mouth/Vomit.svg) | `Whistling` | ![Whistling](docs/icons/mouth/Whistling.svg) |

---

### 7. Skin Tone (`skinColor`)
| Value | Icon | Value | Icon | Value | Icon |
|---|---|---|---|---|---|
| `Pale` | ![Pale](docs/icons/skin/Pale.svg) | `Light` | ![Light](docs/icons/skin/Light.svg) | `Yellow` | ![Yellow](docs/icons/skin/Yellow.svg) |
| `Tanned` | ![Tanned](docs/icons/skin/Tanned.svg) | `Brown` | ![Brown](docs/icons/skin/Brown.svg) | `DarkBrown` | ![DarkBrown](docs/icons/skin/DarkBrown.svg) |
| `Black` | ![Black](docs/icons/skin/Black.svg) | | | | |

---

## Editor & Customization Context

To build your own custom avatar editor (like the sandbox page in the demo folder), use the lower level `Avatar` component wrapped in the `OptionContext`.

For fully working references on dynamic forms, randomizers, and color/gradient palette managers, check out the source code in `demo/src/App.tsx`.

