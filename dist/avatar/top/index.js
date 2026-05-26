import * as React from 'react';
import { Selector, TopOption } from '../../options';
import { makeOptionComponent } from '../makeOptionComponent';
const Eyepatch = makeOptionComponent('TOP', 'Eyepatch');
const Hat = makeOptionComponent('TOP', 'Hat');
const Hijab = makeOptionComponent('TOP', 'Hijab');
const LongHairBigHair = makeOptionComponent('TOP', 'LongHairBigHair');
const LongHairBob = makeOptionComponent('TOP', 'LongHairBob');
const LongHairBun = makeOptionComponent('TOP', 'LongHairBun');
const LongHairCurly = makeOptionComponent('TOP', 'LongHairCurly');
const LongHairCurvy = makeOptionComponent('TOP', 'LongHairCurvy');
const LongHairDreads = makeOptionComponent('TOP', 'LongHairDreads');
const LongHairFrida = makeOptionComponent('TOP', 'LongHairFrida');
const LongHairFro = makeOptionComponent('TOP', 'LongHairFro');
const LongHairFroBand = makeOptionComponent('TOP', 'LongHairFroBand');
const LongHairMiaWallace = makeOptionComponent('TOP', 'LongHairMiaWallace');
const LongHairNotTooLong = makeOptionComponent('TOP', 'LongHairNotTooLong');
const LongHairShavedSides = makeOptionComponent('TOP', 'LongHairShavedSides');
const LongHairStraight = makeOptionComponent('TOP', 'LongHairStraight');
const LongHairStraight2 = makeOptionComponent('TOP', 'LongHairStraight2');
const LongHairStraightStrand = makeOptionComponent('TOP', 'LongHairStraightStrand');
const NoHair = makeOptionComponent('TOP', 'NoHair');
const ShortHairDreads01 = makeOptionComponent('TOP', 'ShortHairDreads01');
const ShortHairDreads02 = makeOptionComponent('TOP', 'ShortHairDreads02');
const ShortHairFrizzle = makeOptionComponent('TOP', 'ShortHairFrizzle');
const ShortHairShaggy = makeOptionComponent('TOP', 'ShortHairShaggy');
const ShortHairShaggyMullet = makeOptionComponent('TOP', 'ShortHairShaggyMullet');
const ShortHairShortCurly = makeOptionComponent('TOP', 'ShortHairShortCurly');
const ShortHairShortFlat = makeOptionComponent('TOP', 'ShortHairShortFlat');
const ShortHairShortRound = makeOptionComponent('TOP', 'ShortHairShortRound');
const ShortHairShortWaved = makeOptionComponent('TOP', 'ShortHairShortWaved');
const ShortHairSides = makeOptionComponent('TOP', 'ShortHairSides');
const ShortHairTheCaesar = makeOptionComponent('TOP', 'ShortHairTheCaesar');
const ShortHairTheCaesarSidePart = makeOptionComponent('TOP', 'ShortHairTheCaesarSidePart');
const Turban = makeOptionComponent('TOP', 'Turban');
const WinterHat1 = makeOptionComponent('TOP', 'WinterHat1');
const WinterHat2 = makeOptionComponent('TOP', 'WinterHat2');
const WinterHat3 = makeOptionComponent('TOP', 'WinterHat3');
const WinterHat4 = makeOptionComponent('TOP', 'WinterHat4');
export default class Top extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: LongHairStraight, option: TopOption },
            React.createElement(NoHair, { uid: this.props.uid }, this.props.children),
            React.createElement(Eyepatch, { uid: this.props.uid }, this.props.children),
            React.createElement(Hat, { uid: this.props.uid }, this.props.children),
            React.createElement(Hijab, { uid: this.props.uid }, this.props.children),
            React.createElement(Turban, { uid: this.props.uid }, this.props.children),
            React.createElement(WinterHat1, { uid: this.props.uid }, this.props.children),
            React.createElement(WinterHat2, { uid: this.props.uid }, this.props.children),
            React.createElement(WinterHat3, { uid: this.props.uid }, this.props.children),
            React.createElement(WinterHat4, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairBigHair, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairBob, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairBun, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairCurly, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairCurvy, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairDreads, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairFrida, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairFro, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairFroBand, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairNotTooLong, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairShavedSides, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairMiaWallace, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairStraight, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairStraight2, { uid: this.props.uid }, this.props.children),
            React.createElement(LongHairStraightStrand, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairDreads01, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairDreads02, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairFrizzle, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairShaggy, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairShaggyMullet, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairShortCurly, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairShortFlat, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairShortRound, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairShortWaved, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairSides, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairTheCaesar, { uid: this.props.uid }, this.props.children),
            React.createElement(ShortHairTheCaesarSidePart, { uid: this.props.uid }, this.props.children)));
    }
}
