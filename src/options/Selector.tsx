import React, { ReactNode } from 'react'

import Option from './Option'
import { OptionsContext } from './OptionContext'

function getComponentOptionValue(component: React.ComponentClass) {
  const optionValue = (component as any).optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export interface Props {
  option: Option
  children?: ReactNode
  defaultOption: React.ComponentClass | string
}

export default class Selector extends React.Component<Props> {
  static contextType = OptionsContext
  declare context: React.ContextType<typeof OptionsContext>

  componentDidMount() {
    const { option, defaultOption } = this.props
    const defaultValue =
      typeof defaultOption === 'string'
        ? defaultOption
        : getComponentOptionValue(defaultOption)
    if (!this.context) return
    this.context.addStateChangeListener(this.optionContextUpdate)
    this.context.optionEnter(option.key)
    const optionState = this.context.getOptionState(option.key)
    this.updateOptionValues()
    if (optionState) {
      this.context.setDefaultValue(option.key, defaultValue)
    }
  }

  UNSAFE_componentWillUpdate(
    nextProps: Props & { children?: React.ReactNode }
  ) {
    this.updateOptionValues(nextProps)
  }

  componentWillUnmount() {
    if (!this.context) return
    this.context.removeStateChangeListener(this.optionContextUpdate)
    this.context.optionExit(this.props.option.key)
  }

  render() {
    let result: React.ReactNode | null = null
    const { option, children } = this.props
    if (!this.context) return
    const value = this.context.getValue(option.key)!
    React.Children.forEach(children, (child) => {
      if (getComponentOptionValue((child as any).type) === value) {
        result = child
      }
    })
    return result
  }

  private optionContextUpdate = () => {
    this.forceUpdate()
  }

  private updateOptionValues(
    nextProps?: Props & { children?: React.ReactNode }
  ) {
    if (nextProps && this.props.children === nextProps.children) {
      return
    }
    const { option, children } = this.props
    const values = React.Children.map(
      children,
      // TODO: also validate and throw error if we don't see optionValue
      (child) => getComponentOptionValue((child as any).type)
    )
    if (new Set(values).size !== values?.length) {
      throw new Error('Duplicate values')
    }
    if (!this.context) return
    this.context.setOptions(option.key, values)
  }
}
