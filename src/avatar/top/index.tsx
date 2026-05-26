import * as React from 'react'
import { Selector, TopOption } from '../../options'
import { makeOptionComponent } from '../makeOptionComponent'

const Eyepatch = makeOptionComponent('TOP', 'Eyepatch')
const Hat = makeOptionComponent('TOP', 'Hat')
const Hijab = makeOptionComponent('TOP', 'Hijab')
const LongHairBigHair = makeOptionComponent('TOP', 'LongHairBigHair')
const LongHairBob = makeOptionComponent('TOP', 'LongHairBob')
const LongHairBun = makeOptionComponent('TOP', 'LongHairBun')
const LongHairCurly = makeOptionComponent('TOP', 'LongHairCurly')
const LongHairCurvy = makeOptionComponent('TOP', 'LongHairCurvy')
const LongHairDreads = makeOptionComponent('TOP', 'LongHairDreads')
const LongHairFrida = makeOptionComponent('TOP', 'LongHairFrida')
const LongHairFro = makeOptionComponent('TOP', 'LongHairFro')
const LongHairFroBand = makeOptionComponent('TOP', 'LongHairFroBand')
const LongHairMiaWallace = makeOptionComponent('TOP', 'LongHairMiaWallace')
const LongHairNotTooLong = makeOptionComponent('TOP', 'LongHairNotTooLong')
const LongHairShavedSides = makeOptionComponent('TOP', 'LongHairShavedSides')
const LongHairStraight = makeOptionComponent('TOP', 'LongHairStraight')
const LongHairStraight2 = makeOptionComponent('TOP', 'LongHairStraight2')
const LongHairStraightStrand = makeOptionComponent('TOP', 'LongHairStraightStrand')
const NoHair = makeOptionComponent('TOP', 'NoHair')
const ShortHairDreads01 = makeOptionComponent('TOP', 'ShortHairDreads01')
const ShortHairDreads02 = makeOptionComponent('TOP', 'ShortHairDreads02')
const ShortHairFrizzle = makeOptionComponent('TOP', 'ShortHairFrizzle')
const ShortHairShaggy = makeOptionComponent('TOP', 'ShortHairShaggy')
const ShortHairShaggyMullet = makeOptionComponent('TOP', 'ShortHairShaggyMullet')
const ShortHairShortCurly = makeOptionComponent('TOP', 'ShortHairShortCurly')
const ShortHairShortFlat = makeOptionComponent('TOP', 'ShortHairShortFlat')
const ShortHairShortRound = makeOptionComponent('TOP', 'ShortHairShortRound')
const ShortHairShortWaved = makeOptionComponent('TOP', 'ShortHairShortWaved')
const ShortHairSides = makeOptionComponent('TOP', 'ShortHairSides')
const ShortHairTheCaesar = makeOptionComponent('TOP', 'ShortHairTheCaesar')
const ShortHairTheCaesarSidePart = makeOptionComponent('TOP', 'ShortHairTheCaesarSidePart')
const Turban = makeOptionComponent('TOP', 'Turban')
const WinterHat1 = makeOptionComponent('TOP', 'WinterHat1')
const WinterHat2 = makeOptionComponent('TOP', 'WinterHat2')
const WinterHat3 = makeOptionComponent('TOP', 'WinterHat3')
const WinterHat4 = makeOptionComponent('TOP', 'WinterHat4')

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

