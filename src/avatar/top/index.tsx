import * as React from 'react'

import Eyepatch from './Eyepatch'
import Hat from './Hat'
import Hijab from './Hijab'
import LongHairBigHair from './LongHairBigHair'
import LongHairBob from './LongHairBob'
import LongHairBun from './LongHairBun'
import LongHairCurly from './LongHairCurly'
import LongHairCurvy from './LongHairCurvy'
import LongHairDreads from './LongHairDreads'
import LongHairFrida from './LongHairFrida'
import LongHairFro from './LongHairFro'
import LongHairFroBand from './LongHairFroBand'
import LongHairMiaWallace from './LongHairMiaWallace'
import LongHairNotTooLong from './LongHairNotTooLong'
import LongHairShavedSides from './LongHairShavedSides'
import LongHairStraight from './LongHairStraight'
import LongHairStraight2 from './LongHairStraight2'
import LongHairStraightStrand from './LongHairStraightStrand'
import NoHair from './NoHair'
import ShortHairDreads01 from './ShortHairDreads01'
import ShortHairDreads02 from './ShortHairDreads02'
import ShortHairFrizzle from './ShortHairFrizzle'
import ShortHairShaggy from './ShortHairShaggy'
import ShortHairShaggyMullet from './ShortHairShaggyMullet'
import ShortHairShortCurly from './ShortHairShortCurly'
import ShortHairShortFlat from './ShortHairShortFlat'
import ShortHairShortRound from './ShortHairShortRound'
import ShortHairShortWaved from './ShortHairShortWaved'
import ShortHairSides from './ShortHairSides'
import ShortHairTheCaesar from './ShortHairTheCaesar'
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart'
import Turban from './Turban'
import WinterHat1 from './WinterHat1'
import WinterHat2 from './WinterHat2'
import WinterHat3 from './WinterHat3'
import WinterHat4 from './WinterHat4'
import { Selector, TopOption } from '../../options'

export interface Props {
  uid: string
  children?: React.ReactNode
}

export default class Top extends React.Component<Props> {
  render () {
    return (
      <Selector defaultOption={LongHairStraight} option={TopOption}>
        <NoHair uid={this.props.uid}>{this.props.children}</NoHair>
        <Eyepatch uid={this.props.uid}>{this.props.children}</Eyepatch>
        <Hat uid={this.props.uid}>{this.props.children}</Hat>
        <Hijab uid={this.props.uid}>{this.props.children}</Hijab>
        <Turban uid={this.props.uid}>{this.props.children}</Turban>
        <WinterHat1 uid={this.props.uid}>{this.props.children}</WinterHat1>
        <WinterHat2 uid={this.props.uid}>{this.props.children}</WinterHat2>
        <WinterHat3 uid={this.props.uid}>{this.props.children}</WinterHat3>
        <WinterHat4 uid={this.props.uid}>{this.props.children}</WinterHat4>
        <LongHairBigHair uid={this.props.uid}>{this.props.children}</LongHairBigHair>
        <LongHairBob uid={this.props.uid}>{this.props.children}</LongHairBob>
        <LongHairBun uid={this.props.uid}>{this.props.children}</LongHairBun>
        <LongHairCurly uid={this.props.uid}>{this.props.children}</LongHairCurly>
        <LongHairCurvy uid={this.props.uid}>{this.props.children}</LongHairCurvy>
        <LongHairDreads uid={this.props.uid}>{this.props.children}</LongHairDreads>
        <LongHairFrida uid={this.props.uid}>{this.props.children}</LongHairFrida>
        <LongHairFro uid={this.props.uid}>{this.props.children}</LongHairFro>
        <LongHairFroBand uid={this.props.uid}>{this.props.children}</LongHairFroBand>
        <LongHairNotTooLong uid={this.props.uid}>{this.props.children}</LongHairNotTooLong>
        <LongHairShavedSides uid={this.props.uid}>{this.props.children}</LongHairShavedSides>
        <LongHairMiaWallace uid={this.props.uid}>{this.props.children}</LongHairMiaWallace>
        <LongHairStraight uid={this.props.uid}>{this.props.children}</LongHairStraight>
        <LongHairStraight2 uid={this.props.uid}>{this.props.children}</LongHairStraight2>
        <LongHairStraightStrand uid={this.props.uid}>{this.props.children}</LongHairStraightStrand>
        <ShortHairDreads01 uid={this.props.uid}>{this.props.children}</ShortHairDreads01>
        <ShortHairDreads02 uid={this.props.uid}>{this.props.children}</ShortHairDreads02>
        <ShortHairFrizzle uid={this.props.uid}>{this.props.children}</ShortHairFrizzle>
        <ShortHairShaggy uid={this.props.uid}>{this.props.children}</ShortHairShaggy>
        <ShortHairShaggyMullet uid={this.props.uid}>{this.props.children}</ShortHairShaggyMullet>
        <ShortHairShortCurly uid={this.props.uid}>{this.props.children}</ShortHairShortCurly>
        <ShortHairShortFlat uid={this.props.uid}>{this.props.children}</ShortHairShortFlat>
        <ShortHairShortRound uid={this.props.uid}>{this.props.children}</ShortHairShortRound>
        <ShortHairShortWaved uid={this.props.uid}>{this.props.children}</ShortHairShortWaved>
        <ShortHairSides uid={this.props.uid}>{this.props.children}</ShortHairSides>
        <ShortHairTheCaesar uid={this.props.uid}>{this.props.children}</ShortHairTheCaesar>
        <ShortHairTheCaesarSidePart uid={this.props.uid}>{this.props.children}</ShortHairTheCaesarSidePart>
      </Selector>
    )
  }
}
