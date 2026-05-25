import React, { useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

import Option from './Option'
import { OptionsContext } from './OptionContext'

function getComponentOptionValue(component: React.ComponentClass<any>) {
  const optionValue = (component as any).optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export interface Props {
  option: Option
  children?: ReactNode
  defaultOption: any
}

export const Selector: React.FC<Props> = (props) => {
  const { option, children, defaultOption } = props
  const context = useContext(OptionsContext)

  // Force update trigger in hooks
  const [, setTick] = useState(0)
  const forceUpdate = useCallback(() => setTick((tick) => tick + 1), [])

  // Register state change listener and enter option
  useEffect(() => {
    if (!context) return

    const defaultValue =
      typeof defaultOption === 'string'
        ? defaultOption
        : getComponentOptionValue(defaultOption)

    context.addStateChangeListener(forceUpdate)
    context.optionEnter(option.key)

    const optionState = context.getOptionState(option.key)
    if (optionState) {
      context.setDefaultValue(option.key, defaultValue)
    }

    // Clean up
    return () => {
      context.removeStateChangeListener(forceUpdate)
      context.optionExit(option.key)
    }
  }, [context, option.key, defaultOption, forceUpdate])

  // Derive and serialize option values to avoid infinite loops from children reference updates
  const serializedValues = React.Children.map(
    children,
    (child) => getComponentOptionValue((child as any).type)
  )?.join(',') || ''

  // Sync child values on mount/update
  useEffect(() => {
    if (!context) return

    const values = serializedValues ? serializedValues.split(',') : []
    if (new Set(values).size !== values.length) {
      throw new Error('Duplicate values')
    }

    context.setOptions(option.key, values)
  }, [context, option.key, serializedValues])

  if (!context) return null

  const value = context.getValue(option.key)
  let result: React.ReactNode = null
  React.Children.forEach(children, (child) => {
    if (getComponentOptionValue((child as any).type) === value) {
      result = child
    }
  })

  return result
}

export default Selector
