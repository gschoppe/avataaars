import React from 'react'
import SvgDictionaryRenderer from './SvgDictionaryRenderer'
import { SVG_DICTIONARY } from './svgDictionary'

export function makeOptionComponent(category: string, name: string) {
  const OptionComp: React.FC<{ uid: string; children?: React.ReactNode }> = (props) => {
    const node = SVG_DICTIONARY[category]?.[name]
    if (!node) {
      throw new Error(`SVG node not found in dictionary for category: ${category}, name: ${name}`)
    }

    return (
      <SvgDictionaryRenderer node={node} uid={props.uid} category={category} optionName={name}>
        {props.children}
      </SvgDictionaryRenderer>
    )
  }

  const anyComp = OptionComp as any
  anyComp.displayName = name
  anyComp.optionValue = name

  return anyComp
}

