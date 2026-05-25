import React from 'react'
import type { SvgNode } from './svgDictionary'

// Import subcomponents to inject dynamically at runtime
import FacialHair from './top/facialHair'
import HairColor from './top/HairColor'
import Accessories from './top/accessories'
import BackdropColor from './backdrop/BackdropColor'
import ClotheColor from './clothes/ClotheColor'
import HatColor from './top/HatColor'
import Skin from './Skin'
import Graphics from './clothes/Graphics'
import FacialHairColor from './top/facialHair/FacialHairColor'

export interface Props {
  node: SvgNode
  uid: string
  children?: React.ReactNode
}

export const SvgDictionaryRenderer: React.FC<Props> = (props) => {
  const { node, uid, children } = props

  if (!node) return null

  // Parameterize strings containing {{uid}} recursively in props
  const resolveProps = (rawProps?: Record<string, any>): Record<string, any> => {
    if (!rawProps) return {}
    const resolved: Record<string, any> = {}
    
    // First, copy and parameterize strings
    Object.entries(rawProps).forEach(([key, val]) => {
      if (typeof val === 'string') {
        let processedVal = val.replace(/{{uid}}/g, uid).replace(/{uid}/g, uid)
        
        // Handle backticked string expressions like `url(#${clothingColorMask})`
        if (processedVal.startsWith('`') && processedVal.endsWith('`')) {
          processedVal = processedVal.substring(1, processedVal.length - 1)
          processedVal = processedVal.replace(/\${([^}]+)}/g, '$1')
        }
        
        // Map legacy static mask/filter names to fully qualified dynamic ones
        processedVal = processedVal.replace(/url\(#clothingColorMask\)/gi, `url(#${uid}-Clothing-Color-Mask)`)
        processedVal = processedVal.replace(/url\(#hatColorMask\)/g, `url(#${uid}-Hat-Color-Mask)`)
        processedVal = processedVal.replace(/url\(#facialHairMask\)/g, `url(#${uid}-Facial-Hair-Mask)`)
        processedVal = processedVal.replace(/url\(#hairColorMask\)/g, `url(#${uid}-Hair-Color-Mask)`)
        
        // Also map raw ID references
        processedVal = processedVal.replace(/#clothingColorMask/gi, `#${uid}-Clothing-Color-Mask`)
        processedVal = processedVal.replace(/#hatColorMask/g, `#${uid}-Hat-Color-Mask`)
        processedVal = processedVal.replace(/#facialHairMask/g, `#${uid}-Facial-Hair-Mask`)
        processedVal = processedVal.replace(/#hairColorMask/g, `#${uid}-Hair-Color-Mask`)
        
        resolved[key] = processedVal
      } else {
        resolved[key] = val
      }
    });

    // Remap mask/filter id attributes dynamically to match the color component masks
    if (resolved.id === 'clothingColorMask' || resolved.id === 'ClothingColorMask') {
      resolved.id = `${uid}-Clothing-Color-Mask`
    } else if (resolved.id === 'hatColorMask') {
      resolved.id = `${uid}-Hat-Color-Mask`
    } else if (resolved.id === 'facialHairMask') {
      resolved.id = `${uid}-Facial-Hair-Mask`
    } else if (resolved.id === 'hairColorMask') {
      resolved.id = `${uid}-Hair-Color-Mask`
    }

    // Detect if we have an id that is just "{uid}" or "uid" or "{{uid}}" and a top-level suffix attribute
    let idSuffix = ''
    Object.keys(resolved).forEach((key) => {
      if (key.startsWith('-top-') || key.startsWith('-Hair-')) {
        // This is a parsed suffix token, e.g. "-top-path1"
        idSuffix = key.substring(1) // remove leading "-"
        delete resolved[key] // remove the invalid boolean prop
      }
    })

    if (idSuffix && (resolved.id === '{uid}' || resolved.id === uid || resolved.id === '{{uid}}')) {
      resolved.id = `${uid}-${idSuffix}`
    }
    
    return resolved
  }

  const { type, props: nodeProps, children: nodeChildren } = node
  const resolvedProps = resolveProps(nodeProps)

  // Render subcomponents or standard SVG tags
  switch (type) {
    case '':
    case 'React.Fragment':
      return (
        <React.Fragment>
          {nodeChildren && nodeChildren.map((child, index) => (
            <SvgDictionaryRenderer
              key={index}
              node={child}
              uid={uid}
            >
              {children}
            </SvgDictionaryRenderer>
          ))}
        </React.Fragment>
      )

    case 'Children':
      return <React.Fragment>{children}</React.Fragment>

    case 'FacialHair':
      return <FacialHair uid={uid} />

    case 'HairColor':
      return <HairColor uid={uid} />

    case 'Accessories':
      return <Accessories uid={uid} />

    case 'BackdropColor':
      return <BackdropColor uid={uid} defaultColor={resolvedProps.defaultColor} />

    case 'ClotheColor':
      return <ClotheColor uid={uid} />

    case 'HatColor':
      return <HatColor uid={uid} />

    case 'Skin':
      return <Skin uid={uid} />

    case 'Graphics':
      return <Graphics uid={uid} />

    case 'FacialHairColor':
      return <FacialHairColor uid={uid} />

    case 'text':
      return <React.Fragment>{resolvedProps.text || ''}</React.Fragment>

    default:
      const Tag = type as any
      return (
        <Tag {...resolvedProps}>
          {nodeChildren && nodeChildren.map((child, index) => (
            <SvgDictionaryRenderer
              key={index}
              node={child}
              uid={uid}
            >
              {children}
            </SvgDictionaryRenderer>
          ))}
        </Tag>
      )
  }
}

export default SvgDictionaryRenderer


