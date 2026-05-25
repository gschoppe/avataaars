import * as React from 'react';
import Eyepatch from './Eyepatch';
import Hat from './Hat';
import Hijab from './Hijab';
import LongHairBigHair from './LongHairBigHair';
import LongHairBob from './LongHairBob';
import LongHairBun from './LongHairBun';
import LongHairCurly from './LongHairCurly';
import LongHairCurvy from './LongHairCurvy';
import LongHairDreads from './LongHairDreads';
import LongHairFrida from './LongHairFrida';
import LongHairFro from './LongHairFro';
import LongHairFroBand from './LongHairFroBand';
import LongHairMiaWallace from './LongHairMiaWallace';
import LongHairNotTooLong from './LongHairNotTooLong';
import LongHairShavedSides from './LongHairShavedSides';
import LongHairStraight from './LongHairStraight';
import LongHairStraight2 from './LongHairStraight2';
import LongHairStraightStrand from './LongHairStraightStrand';
import NoHair from './NoHair';
import ShortHairDreads01 from './ShortHairDreads01';
import ShortHairDreads02 from './ShortHairDreads02';
import ShortHairFrizzle from './ShortHairFrizzle';
import ShortHairShaggy from './ShortHairShaggy';
import ShortHairShaggyMullet from './ShortHairShaggyMullet';
import ShortHairShortCurly from './ShortHairShortCurly';
import ShortHairShortFlat from './ShortHairShortFlat';
import ShortHairShortRound from './ShortHairShortRound';
import ShortHairShortWaved from './ShortHairShortWaved';
import ShortHairSides from './ShortHairSides';
import ShortHairTheCaesar from './ShortHairTheCaesar';
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart';
import Turban from './Turban';
import WinterHat1 from './WinterHat1';
import WinterHat2 from './WinterHat2';
import WinterHat3 from './WinterHat3';
import WinterHat4 from './WinterHat4';
import { Selector, TopOption } from '../../options';
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
