import React, { useState, useEffect, useMemo } from 'react'
import '../../src/animations.css'
import { DEBUG_CONFIGS, CUSTOM_COLORS } from './debugConfigs'

// Import source version
import {
  Avatar as SrcAvatar,
  OptionContext as SrcOptionContext,
  OptionsContext as SrcOptionsContext,
  allOptions as SrcAllOptions,
  addPaletteColor as SrcAddPaletteColor,
  removePaletteColor as SrcRemovePaletteColor,
  PALETTES as SrcPALETTES,
  registeredGradients as SrcRegisteredGradients
} from '../../src/index'

// Import dist version
import {
  Avatar as DistAvatar,
  OptionContext as DistOptionContext,
  OptionsContext as DistOptionsContext,
  allOptions as DistAllOptions,
  addPaletteColor as DistAddPaletteColor,
  removePaletteColor as DistRemovePaletteColor,
  PALETTES as DistPALETTES,
  registeredGradients as DistRegisteredGradients
} from '@gschoppe/avataaars'

const BUILT_IN_COLORS: Record<string, string[]> = {
  BACKDROP: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
  SKIN: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'],
  HAIR: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Blue', 'Platinum', 'Red', 'SilverGray'],
  FACIAL_HAIR: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'Platinum', 'Red', 'SilverGray'],
  CLOTHES: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
  HAT: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White']
}

const BACKGROUNDS = [
  // Dark Backgrounds
  { name: 'Dark Indigo', value: 'linear-gradient(45deg, #1e1b4b, #311042)' },
  { name: 'Cosmic Nebula', value: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #581c87 100%)' },
  { name: 'Deep Forest', value: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)' },
  { name: 'Royal Velvet', value: 'linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)' },
  { name: 'Slate Dark', value: '#1e293b' },
  { name: 'Midnight', value: '#090d16' },
  { name: 'Void', value: '#000000' },
  // Light Backgrounds
  { name: 'Warm Sand', value: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' },
  { name: 'Soft Mint', value: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)' },
  { name: 'Sakura Blossom', value: 'linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 100%)' },
  { name: 'Sky Breeze', value: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' },
  { name: 'Studio Gray', value: '#f1f5f9' },
  { name: 'Studio White', value: '#ffffff' }
]

const getColorFamily = (color: string): string => {
  const c = color.toLowerCase();
  if (c.includes('red') || c.includes('auburn')) return 'red';
  if (c.includes('blue')) return 'blue';
  if (c.includes('green')) return 'green';
  if (c.includes('yellow') || c.includes('blonde') || c.includes('platinum')) return 'yellow';
  if (c.includes('pink')) return 'pink';
  if (c.includes('gray') || c.includes('grey') || c.includes('heather') || c.includes('silver')) return 'gray';
  if (c.includes('black')) return 'black';
  if (c.includes('white')) return 'white';
  if (c.includes('orange')) return 'orange';
  if (c.includes('brown')) return 'brown';
  return c;
}

export const App: React.FC = () => {
  const [version, setVersion] = useState<'src' | 'dist'>(() => {
    try {
      const saved = localStorage.getItem('avataaars_version')
      if (saved === 'src' || saved === 'dist') return saved
    } catch (e) { }
    return 'src'
  })

  // Setup options contexts
  const srcContext = useMemo(() => new SrcOptionContext(SrcAllOptions), [])
  const distContext = useMemo(() => new DistOptionContext(DistAllOptions), [])

  // Resolve imports based on selected version
  const isSrc = version === 'src'
  const Avatar = isSrc ? SrcAvatar : DistAvatar
  const OptionsContext = isSrc ? SrcOptionsContext : DistOptionsContext
  const allOptions = isSrc ? SrcAllOptions : DistAllOptions
  const addPaletteColor = isSrc ? SrcAddPaletteColor : DistAddPaletteColor
  const removePaletteColor = isSrc ? SrcRemovePaletteColor : DistRemovePaletteColor
  const PALETTES = isSrc ? SrcPALETTES : DistPALETTES
  const registeredGradients = isSrc ? SrcRegisteredGradients : DistRegisteredGradients
  const activeContext = isSrc ? srcContext : distContext

  // Avatar props state
  const [avatarProps, setAvatarProps] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('avataaars_avatar_props')
      if (saved) return JSON.parse(saved)
    } catch (e) { }
    return {
      backdropType: 'Circle',
      backdropColor: 'Blue01',
      topType: 'LongHairBigHair',
      accessoriesType: 'Blank',
      hairColor: 'BrownDark',
      hatColor: 'Black',
      facialHairType: 'Blank',
      facialHairColor: 'BrownDark',
      clotheType: 'BlazerShirt',
      clotheColor: 'Black',
      graphicType: 'Bat',
      eyeType: 'Default',
      eyebrowType: 'Default',
      mouthType: 'Default',
      skinColor: 'Light'
    }
  })

  // Discovered option states dictionary from active context
  const [optionStates, setOptionStates] = useState<any>(null)
  const [renderTick, setRenderTick] = useState(0)

  // Advanced color & gradient registration states
  const [selectedPalette, setSelectedPalette] = useState('HAIR')
  const [customColorName, setCustomColorName] = useState('')
  const [customColorVal, setCustomColorVal] = useState('#ec4899')
  const [customColorOpacity, setCustomColorOpacity] = useState('1.0')
  const [customPaintType, setCustomPaintType] = useState<'color' | 'gradient'>('color')
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  
  // Advanced custom gradient registration states
  const [gradTypeInput, setGradTypeInput] = useState<'linear' | 'radial'>('linear')
  const [gradStop1Color, setGradStop1Color] = useState('#ff5733')
  const [gradStop1Opacity, setGradStop1Opacity] = useState('1.0')
  const [gradStop2Color, setGradStop2Color] = useState('#ffc0cb')
  const [gradStop2Opacity, setGradStop2Opacity] = useState('1.0')
  
  const [isDebugMode, setIsDebugMode] = useState(() => window.location.search.includes('debug=true'))
  const [expandedConfigId, setExpandedConfigId] = useState<string | null>(null)

  const [displayBg, setDisplayBg] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('avataaars_display_bg')
      if (saved) return saved
    } catch (e) { }
    return 'linear-gradient(45deg, #1e1b4b, #311042)'
  })

  const [enableAnimations, setEnableAnimations] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('avataaars_enable_animations')
      if (saved !== null) return saved === 'true'
    } catch (e) { }
    return true
  })

  // Custom colors & gradients list
  const [customColorsList, setCustomColorsList] = useState<Array<{ palette: string; name: string; color: any }>>(() => {
    let list: any[] = []
    try {
      const savedColors = localStorage.getItem('avataaars_custom_colors')
      if (savedColors) {
        list = JSON.parse(savedColors)
      }
    } catch (e) { }

    // Migrate old registered gradients if they exist
    try {
      const savedGradients = localStorage.getItem('avataaars_registered_gradients')
      if (savedGradients) {
        const grads = JSON.parse(savedGradients)
        grads.forEach((grad: any) => {
          // Check if already in the list
          const exists = list.some((item) => item.name === grad.displayName)
          if (!exists) {
            // Register across all palettes like before
            const palettesToRegister = ['CLOTHES', 'BACKDROP', 'HAIR', 'HAT', 'FACIAL_HAIR']
            palettesToRegister.forEach((pal) => {
              list.push({
                palette: pal,
                name: grad.displayName,
                color: {
                  type: grad.type,
                  attrs: grad.attrs,
                  stops: grad.stops
                }
              })
            })
          }
        })
        localStorage.removeItem('avataaars_registered_gradients')
        localStorage.setItem('avataaars_custom_colors', JSON.stringify(list))
      }
    } catch (e) { }

    return list
  })

  // Sync custom colors & gradients into the active version's palettes
  useEffect(() => {
    // First register the deterministic baseline custom colors
    CUSTOM_COLORS.forEach(({ palette, name, color }) => {
      try {
        addPaletteColor(PALETTES[palette as keyof typeof PALETTES], name, color)
      } catch (err) {
        // Safe to ignore if already registered
      }
    })

    // Register dynamic custom gradient Sunset
    try {
      addPaletteColor(PALETTES.CLOTHES, 'SunsetGradient', {
        type: 'linear',
        attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
        stops: [
          { offset: '0%', color: '#ff5733', opacity: 1 },
          { offset: '100%', color: '#ffc0cb', opacity: 0.5 }
        ]
      })
      addPaletteColor(PALETTES.BACKDROP, 'SunsetGradient')
      addPaletteColor(PALETTES.HAIR, 'SunsetGradient')
      addPaletteColor(PALETTES.HAT, 'SunsetGradient')
      addPaletteColor(PALETTES.FACIAL_HAIR, 'SunsetGradient')
    } catch (err) {
      // ignore
    }

    // Register custom colors/gradients from list
    customColorsList.forEach(({ palette, name, color }) => {
      try {
        addPaletteColor(PALETTES[palette as keyof typeof PALETTES], name, color)
      } catch (err) {
        console.error('Error registering custom item:', err)
      }
    })
    setRenderTick((t) => t + 1)
  }, [version, customColorsList, addPaletteColor])

  // Sync debug mode state to URL query parameter
  useEffect(() => {
    const url = new URL(window.location.href)
    if (isDebugMode) {
      url.searchParams.set('debug', 'true')
    } else {
      url.searchParams.delete('debug')
    }
    window.history.replaceState({}, '', url.toString())
  }, [isDebugMode])

  // Sync states to localStorage
  useEffect(() => {
    localStorage.setItem('avataaars_avatar_props', JSON.stringify(avatarProps))
  }, [avatarProps])

  useEffect(() => {
    localStorage.setItem('avataaars_display_bg', displayBg)
  }, [displayBg])

  useEffect(() => {
    localStorage.setItem('avataaars_enable_animations', String(enableAnimations))
  }, [enableAnimations])

  useEffect(() => {
    localStorage.setItem('avataaars_version', version)
  }, [version])

  // Sync props state to the active OptionContext
  useEffect(() => {
    const data: Record<string, string> = {}
    Object.entries(avatarProps).forEach(([key, val]) => {
      if (val) data[key] = val
    })
    activeContext.setData(data)
  }, [avatarProps, activeContext])

  // Track discovered options from active OptionContext
  useEffect(() => {
    const handleUpdate = () => {
      const state = { ...activeContext.state }
      setOptionStates(state)
    }
    activeContext.addStateChangeListener(handleUpdate)
    handleUpdate()
    return () => {
      activeContext.removeStateChangeListener(handleUpdate)
    }
  }, [activeContext, renderTick])

  // Randomize all options using probabilistic cultural/stylistic cohesion rules
  const handleRandomize = () => {
    if (!optionStates) return
    const newProps: Record<string, string> = {}

    // 1. Randomize Backdrop Type
    const backdropTypes = optionStates.backdropType?.options || []
    if (backdropTypes.length > 0) {
      newProps.backdropType = backdropTypes[Math.floor(Math.random() * backdropTypes.length)]
    }

    // 2. Randomize Top (Hairstyle / Headwear)
    const topTypes = optionStates.topType?.options || []
    if (topTypes.length === 0) return
    const topType = topTypes[Math.floor(Math.random() * topTypes.length)]
    newProps.topType = topType

    const isShortHair = topType.startsWith('ShortHair') || topType === 'NoHair' || topType === 'Eyepatch'
    const isLongHair = topType.startsWith('LongHair')
    const isWinterHat = topType.startsWith('WinterHat')
    const isHat = topType === 'Hat' || isWinterHat
    const isHijab = topType === 'Hijab'

    // 3. Randomize Hair Color (with Pink bias)
    const hairColors = optionStates.hairColor?.options || []
    let hairColor = 'BrownDark'
    if (hairColors.length > 0) {
      const pinkColors = hairColors.filter((c: string) => c.toLowerCase().includes('pink'))
      const nonPinkColors = hairColors.filter((c: string) => !c.toLowerCase().includes('pink'))

      // Rule: Pink is more common with long hair (15%), rare with short/bald styles or facial hair (2%)
      const pinkChance = isLongHair ? 0.15 : 0.02
      if (pinkColors.length > 0 && Math.random() < pinkChance) {
        hairColor = pinkColors[Math.floor(Math.random() * pinkColors.length)]
      } else if (nonPinkColors.length > 0) {
        hairColor = nonPinkColors[Math.floor(Math.random() * nonPinkColors.length)]
      } else {
        hairColor = hairColors[Math.floor(Math.random() * hairColors.length)]
      }
    }
    newProps.hairColor = hairColor

    // 4. Randomize Hat Color (if wearing a hat)
    const hatColors = optionStates.hatColor?.options || []
    let hatColor = 'Black'
    if (isHat && hatColors.length > 0) {
      hatColor = hatColors[Math.floor(Math.random() * hatColors.length)]
      newProps.hatColor = hatColor
    }

    // 5. Randomize Facial Hair (coordinating presence and matching color probabilistically)
    const facialHairTypes = optionStates.facialHairType?.options || []
    if (facialHairTypes.length > 0) {
      let facialHairChance = 0.25
      if (isHijab) {
        facialHairChance = 0.005 // Extremely rare (0.5% chance) but not impossible
      } else if (isShortHair) {
        facialHairChance = 0.40 // ~40% chance of facial hair with short hair
      } else if (isLongHair) {
        facialHairChance = 0.15 // ~15% chance of facial hair with long hair
      }

      // Rule: Pink hair is extremely rare with facial hair
      if (hairColor.toLowerCase().includes('pink')) {
        facialHairChance = 0.03 // 3% chance
      }

      const hasFacialHair = Math.random() < facialHairChance
      const nonBlankFacialHair = facialHairTypes.filter((f: string) => f !== 'Blank')

      if (hasFacialHair && nonBlankFacialHair.length > 0) {
        newProps.facialHairType = nonBlankFacialHair[Math.floor(Math.random() * nonBlankFacialHair.length)]

        // Rule: Highly likely (85% chance) to match facial hair color with head hair color; 15% chance to diverge
        const facialHairColors = optionStates.facialHairColor?.options || []
        const shouldMatchColor = Math.random() < 0.85
        if (shouldMatchColor && facialHairColors.includes(hairColor)) {
          newProps.facialHairColor = hairColor
        } else if (facialHairColors.length > 0) {
          newProps.facialHairColor = facialHairColors[Math.floor(Math.random() * facialHairColors.length)]
        } else {
          newProps.facialHairColor = hairColor
        }
      } else {
        newProps.facialHairType = 'Blank'
        newProps.facialHairColor = 'Blank'
      }
    }

    // 6. Randomize Clothing balanced with headwear style
    const clotheTypes = optionStates.clotheType?.options || []
    if (clotheTypes.length > 0) {
      let restrictedClothes = [...clotheTypes]

      // We apply outfit balancing as a strong bias rather than a hard constraint (e.g., 85% chance to coordinate)
      const shouldCoordinateOutfit = Math.random() < 0.85

      if (shouldCoordinateOutfit) {
        if (isWinterHat) {
          // Coordinate cozy winter outfits with winter hats
          restrictedClothes = clotheTypes.filter((c: string) =>
            c === 'Hoodie' || c === 'CollarSweater' || c === 'BlazerSweater' || c === 'Overall'
          )
        } else if (topType === 'Hat') {
          // Coordinate casual streetwear with baseball caps
          restrictedClothes = clotheTypes.filter((c: string) =>
            c === 'Hoodie' || c === 'GraphicShirt' || c === 'ShirtCrewNeck' || c === 'ShirtVNeck' || c === 'ShirtScoopNeck' || c === 'Overall'
          )
        }
      }

      if (restrictedClothes.length === 0) {
        restrictedClothes = [...clotheTypes]
      }

      newProps.clotheType = restrictedClothes[Math.floor(Math.random() * restrictedClothes.length)]
    }

    // 7. Randomize Clothing Color coordinated with Hat Color
    const clotheColors = optionStates.clotheColor?.options || []
    if (clotheColors.length > 0) {
      // 35% chance to match apparel color to hat color if wearing a hat; 65% chance to diverge
      const shouldMatchHat = isHat && clotheColors.includes(hatColor) && Math.random() < 0.35
      if (shouldMatchHat) {
        newProps.clotheColor = hatColor
      } else {
        newProps.clotheColor = clotheColors[Math.floor(Math.random() * clotheColors.length)]
      }
    }

    // 8. Randomize remaining properties normally
    const otherKeys = ['accessoriesType', 'graphicType', 'eyeType', 'eyebrowType', 'mouthType', 'skinColor']
    otherKeys.forEach((key) => {
      const opts = optionStates[key]?.options || []
      if (opts.length > 0) {
        newProps[key] = opts[Math.floor(Math.random() * opts.length)]
      }
    })

    // 9. Randomize Backdrop Color (strongly avoiding matching character colors)
    const backdropColors = optionStates.backdropColor?.options || []
    if (backdropColors.length > 0) {
      const activeFamilies = new Set<string>()
      
      const addColorFamily = (colorName: string | undefined) => {
        if (colorName && colorName !== 'Blank') {
          activeFamilies.add(getColorFamily(colorName))
        }
      }

      // Clothes color is always visible
      addColorFamily(newProps.clotheColor)

      // Hat color is visible if wearing a hat
      if (isHat) {
        addColorFamily(newProps.hatColor)
      }

      // Hair color is visible if not covered by a hijab, winter hat, or baldness
      const hairIsVisible = !isHijab && !isWinterHat && topType !== 'NoHair' && topType !== 'Eyepatch'
      if (hairIsVisible) {
        addColorFamily(newProps.hairColor)
      }

      // Facial hair is visible if not Blank
      if (newProps.facialHairType && newProps.facialHairType !== 'Blank') {
        addColorFamily(newProps.facialHairColor)
      }

      // Filter backdrop colors to avoid matching any active family
      const safeBackdropColors = backdropColors.filter((color: string) => {
        const family = getColorFamily(color)
        return !activeFamilies.has(family)
      })

      if (safeBackdropColors.length > 0) {
        newProps.backdropColor = safeBackdropColors[Math.floor(Math.random() * safeBackdropColors.length)]
      } else {
        // Fallback to the full list if all colors are excluded
        newProps.backdropColor = backdropColors[Math.floor(Math.random() * backdropColors.length)]
      }
    }

    setAvatarProps(newProps)
  }

  // Map option palette to component prop key
  const getOptionKeyForPalette = (palette: string) => {
    switch (palette) {
      case 'BACKDROP': return 'backdropColor'
      case 'SKIN': return 'skinColor'
      case 'HAIR': return 'hairColor'
      case 'FACIAL_HAIR': return 'facialHairColor'
      case 'CLOTHES': return 'clotheColor'
      case 'HAT': return 'hatColor'
      default: return null
    }
  }

  // Register custom color or gradient paint
  const handleRegisterPaint = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customColorName.trim()) return

    const cleanedName = customColorName.replace(/[^a-zA-Z0-9]/g, '')
    if (!cleanedName) return

    let finalColor: string | any

    if (customPaintType === 'color') {
      const alpha = parseFloat(customColorOpacity)
      if (alpha < 1) {
        // Convert hex to rgba
        const cleanHex = customColorVal.replace('#', '')
        const r = parseInt(cleanHex.substring(0, 2), 16)
        const g = parseInt(cleanHex.substring(2, 4), 16)
        const b = parseInt(cleanHex.substring(4, 6), 16)
        finalColor = `rgba(${r}, ${g}, ${b}, ${alpha})`
      } else {
        finalColor = customColorVal
      }
    } else {
      // Create GradientConfig object
      finalColor = {
        type: gradTypeInput,
        attrs: gradTypeInput === 'linear' 
          ? { x1: '0%', y1: '0%', x2: '100%', y2: '100%' }
          : { cx: '50%', cy: '50%', r: '50%' },
        stops: [
          { offset: '0%', color: gradStop1Color, opacity: parseFloat(gradStop1Opacity) || 1 },
          { offset: '100%', color: gradStop2Color, opacity: parseFloat(gradStop2Opacity) || 1 }
        ]
      }
    }

    const exists = customColorsList.some((item) => item.palette === selectedPalette && item.name === cleanedName)
    if (!exists) {
      const newColor = { palette: selectedPalette, name: cleanedName, color: finalColor }
      const updated = [...customColorsList, newColor]
      setCustomColorsList(updated)
      localStorage.setItem('avataaars_custom_colors', JSON.stringify(updated))
    }

    addPaletteColor(PALETTES[selectedPalette as keyof typeof PALETTES], cleanedName, finalColor)
    setRenderTick((t) => t + 1)

    const propKey = getOptionKeyForPalette(selectedPalette)
    if (propKey) {
      setAvatarProps((prev) => ({
        ...prev,
        [propKey]: cleanedName
      }))
    }

    setCustomColorName('')
  }

  // Find all registered custom colors
  const getRegisteredCustomColors = () => {
    return customColorsList
  }

  // Remove registered custom paint (color or gradient)
  const handleRemoveColor = (palette: string, name: string) => {
    try {
      removePaletteColor(PALETTES[palette as keyof typeof PALETTES], name)
    } catch (err) {
      console.error(err)
    }

    try {
      registeredGradients.delete(name)
    } catch (e) {}

    const updated = customColorsList.filter((item) => !(item.palette === palette && item.name === name))
    setCustomColorsList(updated)
    localStorage.setItem('avataaars_custom_colors', JSON.stringify(updated))
    setRenderTick((t) => t + 1)

    const propKey = getOptionKeyForPalette(palette)
    if (propKey && avatarProps[propKey] === name) {
      const defaultVal = BUILT_IN_COLORS[palette][0]
      setAvatarProps((prev) => ({
        ...prev,
        [propKey]: defaultVal
      }))
    }
  }

  // Copy JSX Code to clipboard
  const handleCopyCode = () => {
    const code = getJsxCode()
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    })
  }

  // Export as vector SVG
  const handleExportSVG = () => {
    const svgEl = document.querySelector('.avatar-wrapper svg') as SVGElement | null
    if (!svgEl) return

    const clonedSvg = svgEl.cloneNode(true) as SVGElement
    clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    clonedSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
    clonedSvg.removeAttribute('data-reactroot')

    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(clonedSvg)
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = `avatar-${Date.now()}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Export as transparent PNG
  const handleExportPNG = () => {
    const svgEl = document.querySelector('.avatar-wrapper svg') as SVGElement | null
    if (!svgEl) return

    const clonedSvg = svgEl.cloneNode(true) as SVGElement
    clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    clonedSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')

    // Reset animations for rendering clean static PNG
    const animationsGroup = clonedSvg.querySelector('[id$="-Avataaar"]')
    if (animationsGroup) {
      (animationsGroup as HTMLElement).style.animation = 'none'
      const animatedChildren = clonedSvg.querySelectorAll('*')
      animatedChildren.forEach((child) => {
        (child as HTMLElement).style.animation = 'none'
        if (child.id && child.id.endsWith('-Avataaar')) {
          child.id = child.id + '-Static'
        }
      })
    }

    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(clonedSvg)
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      // Create high-resolution canvas (double the size for super crisp renders)
      canvas.width = 528
      canvas.height = 560
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        try {
          const pngUrl = canvas.toDataURL('image/png')
          const link = document.createElement('a')
          link.href = pngUrl
          link.download = `avatar-${Date.now()}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } catch (err) {
          console.error('Failed to export canvas to PNG:', err)
        }
      }
      URL.revokeObjectURL(url)
    }
    img.onerror = (err) => {
      console.error('Error loading SVG image for PNG conversion:', err)
      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  // Generate copyable JSX string
  const getJsxCode = () => {
    const propStrings = Object.entries(avatarProps)
      .filter(([_, val]) => val && val !== 'Blank' && val !== 'error')
      .map(([key, val]) => `  ${key}='${val}'`)
      .join('\n')
    const animProp = !enableAnimations ? '\n  animated={false}' : ''
    return `import Avatar from '@gschoppe/avataaars'

<Avatar
  style={{ width: '264px', height: '280px' }}${animProp}
${propStrings}
/>`
  }

  // Control category groupings
  const controlGroups = [
    {
      title: 'Backdrop & Body',
      keys: ['backdropType', 'backdropColor', 'skinColor']
    },
    {
      title: 'Top & Hair',
      keys: ['topType', 'hairColor', 'hatColor', 'accessoriesType']
    },
    {
      title: 'Facial Hair & Eyes',
      keys: ['facialHairType', 'facialHairColor', 'eyeType', 'eyebrowType']
    },
    {
      title: 'Expression & Clothing',
      keys: ['mouthType', 'clotheType', 'clotheColor', 'graphicType']
    }
  ]

  return (
    <div className='app-container'>
      <header className='app-header'>
        <div className='header-title-section'>
          <h1>Avataaars Sandbox</h1>
          <p>
            Customizer for <a href='https://github.com/gschoppe/avataaars' target='_blank' rel='noreferrer'>@gschoppe/avataaars</a>.<br />
            Inspired by <a href='https://getavataaars.com/' target='_blank' rel='noreferrer'>getavataaars.com</a>.<br />
            Avataaars originally created by <a href="https://x.com/pablostanley">Pablo Stanley</a>.
          </p>
        </div>
        <div className='header-controls'>
          <button
            className={`btn-debug ${isDebugMode ? 'active' : ''}`}
            onClick={() => setIsDebugMode(!isDebugMode)}
            style={{ marginRight: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            {isDebugMode ? 'Standard Mode' : 'Baseline Debug Page'}
          </button>
          <div className='version-selector'>
            <button
              className={`version-btn ${version === 'src' ? 'active' : ''}`}
              onClick={() => setVersion('src')}>
              Source (TSX)
            </button>
            <button
              className={`version-btn ${version === 'dist' ? 'active' : ''}`}
              onClick={() => setVersion('dist')}>
              Distribution (Build)
            </button>
          </div>
          <button className='btn-randomize' onClick={handleRandomize}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <circle cx="15.5" cy="15.5" r="1.5" />
              <circle cx="15.5" cy="8.5" r="1.5" />
              <circle cx="8.5" cy="15.5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
            </svg>
            Randomize Avatar
          </button>
        </div>
      </header>

      <main className='workspace-grid'>
        {isDebugMode ? (
          <div className='debug-grid-container'>
            <div className='debug-banner'>
              <div className='debug-banner-text'>
                <h2>Deterministic Baseline Testing Grid</h2>
                <p>
                  Rendering all 32 deterministic baseline configurations side-by-side. 
                  Currently using the <strong>{version === 'src' ? 'Source library (src/)' : 'Distribution library (built dist/)'}</strong>.
                  Toggle "Source" or "Distribution" above to compare. 
                  The programmatic diff script verifies that both produce identical SVG source code.
                </p>
              </div>
              <div className='debug-banner-actions'>
                <button 
                  className='btn-export' 
                  onClick={() => {
                    alert('Use the CLI command "npx tsx src/generate-baselines.ts baselines/[dir]" to programmatically export and diff all 32 baseline SVGs in seconds!')
                  }}>
                  Programmatic Diff Instructions
                </button>
              </div>
            </div>

            <div className='debug-grid'>
              {DEBUG_CONFIGS.map((config) => {
                // Render option context for each individual avatar
                const OptionContextClass = version === 'src' ? SrcOptionContext : DistOptionContext
                const cardOptionContext = new OptionContextClass(allOptions as any)
                const data: Record<string, string> = {}
                allOptions.forEach((option: any) => {
                  const val = (config as any)[option.key]
                  if (val) data[option.key] = val
                })
                cardOptionContext.setData(data)

                const isExpanded = expandedConfigId === config.id

                return (
                  <div className='debug-card' key={config.id}>
                    <div className='debug-card-header'>
                      <span className='debug-card-id'>{config.id}</span>
                      <span className='debug-card-badge' title={config.topType}>{config.topType}</span>
                    </div>
                    <div className='debug-avatar-wrapper'>
                      <OptionsContext.Provider value={cardOptionContext as any}>
                        <Avatar 
                          uid={config.id} 
                          style={{ width: '160px', height: '170px' }} 
                          animated={false} 
                          animationDelay='0s'
                        />
                      </OptionsContext.Provider>
                    </div>
                    <div className='debug-card-actions'>
                      <button 
                        className='btn-debug-action'
                        onClick={() => setExpandedConfigId(isExpanded ? null : config.id)}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="3"/>
                          <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m11.4 0l-.7.7m0 11.4l.7.7m-12.1 0l.7-.7"/>
                        </svg>
                        {isExpanded ? 'Hide Config' : 'Show Config'}
                      </button>
                      <button 
                        className='btn-debug-action'
                        onClick={() => {
                          const svgEl = document.querySelector(`[data-uid="${config.id}"]`) as SVGElement | null
                          if (!svgEl) return
                          const clonedSvg = svgEl.cloneNode(true) as SVGElement
                          clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
                          clonedSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
                          const serializer = new XMLSerializer()
                          const svgString = serializer.serializeToString(clonedSvg)
                          const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
                          const url = URL.createObjectURL(blob)
                          const link = document.createElement('a')
                          link.href = url
                          link.download = `${config.id}-${version}.svg`
                          link.click()
                          URL.revokeObjectURL(url)
                        }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                        </svg>
                        SVG
                      </button>
                    </div>
                    {isExpanded && (
                      <pre className='debug-code-drawer'>
                        {JSON.stringify(config, null, 2)}
                      </pre>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <>
            {/* Left column: Live Preview */}
            <section className='preview-card'>
              <span className='preview-badge'>{version} Mode</span>
              <div className='avatar-wrapper' style={{ background: displayBg }}>
                <OptionsContext.Provider value={activeContext as any}>
                  <Avatar style={{ width: '264px', height: '280px' }} animated={enableAnimations} />
                </OptionsContext.Provider>
              </div>

              {/* Avatar Display Background Picker */}
              <div className='display-bg-picker'>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Preview Background
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px', justifyContent: 'center' }}>
                  {BACKGROUNDS.map((bg) => (
                    <button
                      key={bg.name}
                      type='button'
                      className={`bg-dot ${displayBg === bg.value ? 'active' : ''}`}
                      style={{ background: bg.value }}
                      title={bg.name}
                      onClick={() => setDisplayBg(bg.value)}
                    />
                  ))}
                </div>
              </div>

              {/* Toggle Animations */}
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <label className='switch-label' style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}>
                  <input
                    type='checkbox'
                    checked={enableAnimations}
                    onChange={(e) => setEnableAnimations(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
                  />
                  Show idle animations (BETA)
                </label>
              </div>

              {/* Export Actions */}
              <div style={{ marginTop: '16px', display: 'flex', gap: '12px', justifyContent: 'center', width: '100%' }}>
                <button className='btn-export btn-export-svg' onClick={handleExportSVG} title='Export as vector SVG'>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Export SVG
                </button>
                <button className='btn-export btn-export-png' onClick={handleExportPNG} title='Export as transparent PNG'>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Export PNG
                </button>
              </div>

              <div className='code-panel' style={{ width: '100%' }}>
                <div className='code-header'>
                  <span>JSX Implementation</span>
                  <button className='btn-copy' onClick={handleCopyCode}>
                    {copySuccess ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
                <pre className='code-pre'>
                  <code>{getJsxCode()}</code>
                </pre>
              </div>
            </section>

            {/* Right column: Dynamic Controls */}
            <section className='controls-container'>
              {/* Option groups */}
              {controlGroups.map((group, groupIdx) => (
                <div className='control-card' key={groupIdx}>
                  <h2>{group.title}</h2>
                  <div className='control-grid'>
                    {group.keys.map((key) => {
                      const state = optionStates?.[key]
                      const optionsList = state?.options || []
                      const label = allOptions.find((o) => o.key === key)?.label || key

                      return (
                        <div className='form-group' key={key}>
                          <label htmlFor={key}>{label}</label>
                          <select
                            id={key}
                            className='form-control'
                            value={avatarProps[key] || ''}
                            onChange={(e) => setAvatarProps((prev) => ({
                              ...prev,
                              [key]: e.target.value
                            }))}>
                            {optionsList.map((val: string) => (
                              <option key={val} value={val}>
                                {val}
                              </option>
                            ))}
                          </select>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}

              {/* Collapsible Advanced section */}
              <div className='control-card'>
                <div
                  className='advanced-header'
                  onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}>
                  <h2>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    Advanced Custom Colors
                  </h2>
                  <span className={`advanced-toggle-icon ${isAdvancedOpen ? 'open' : ''}`}>▼</span>
                </div>

                {isAdvancedOpen && (
                  <div className='advanced-content'>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
                      Create and register custom paint servers globally into any palette. Supports flat colors, translucent colors with alpha transparency, or dynamic multi-stop linear/radial gradients.
                    </p>
                    <form className='color-picker-grid' onSubmit={handleRegisterPaint}>
                      <div className='form-group'>
                        <label htmlFor="palette-select">Target Component</label>
                        <select
                          id="palette-select"
                          className='form-control'
                          value={selectedPalette}
                          onChange={(e) => setSelectedPalette(e.target.value)}>
                          {Object.keys(PALETTES).map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>

                      <div className='form-group'>
                        <label htmlFor="paint-type">Paint Type</label>
                        <select
                          id="paint-type"
                          className='form-control'
                          value={customPaintType}
                          onChange={(e) => setCustomPaintType(e.target.value as any)}>
                          <option value="color">Solid / Translucent Color</option>
                          <option value="gradient">Custom Gradient</option>
                        </select>
                      </div>

                      <div className='form-group'>
                        <label htmlFor="color-name">Paint Name (alphanumeric)</label>
                        <input
                          id="color-name"
                          type='text'
                          placeholder='e.g., MagicMint'
                          className='form-control'
                          value={customColorName}
                          onChange={(e) => setCustomColorName(e.target.value)}
                        />
                      </div>

                      {customPaintType === 'color' ? (
                        <>
                          <div className='form-group'>
                            <label>Hex Picker</label>
                            <div className='color-input-wrapper'>
                              <input
                                type='color'
                                className='color-picker-native'
                                value={customColorVal}
                                onChange={(e) => setCustomColorVal(e.target.value)}
                              />
                              <input
                                type='text'
                                className='form-control'
                                style={{ width: '90px' }}
                                value={customColorVal}
                                onChange={(e) => setCustomColorVal(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label htmlFor="color-opacity">Opacity (Alpha)</label>
                            <select
                              id="color-opacity"
                              className='form-control'
                              value={customColorOpacity}
                              onChange={(e) => setCustomColorOpacity(e.target.value)}>
                              <option value="1.0">Opaque (100%)</option>
                              <option value="0.8">80%</option>
                              <option value="0.5">50%</option>
                              <option value="0.2">20%</option>
                              <option value="0.0">Transparent (0%)</option>
                            </select>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className='form-group'>
                            <label htmlFor="grad-type">Gradient Type</label>
                            <select
                              id="grad-type"
                              className='form-control'
                              value={gradTypeInput}
                              onChange={(e) => setGradTypeInput(e.target.value as any)}>
                              <option value="linear">Linear (Diagonal)</option>
                              <option value="radial">Radial (Centered)</option>
                            </select>
                          </div>
                          <div className='form-group'>
                            <label>Color Stop 1</label>
                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                              <input
                                type='color'
                                className='color-picker-native'
                                value={gradStop1Color}
                                onChange={(e) => setGradStop1Color(e.target.value)}
                              />
                              <select
                                className='form-control'
                                style={{ width: '80px', padding: '0 6px' }}
                                value={gradStop1Opacity}
                                onChange={(e) => setGradStop1Opacity(e.target.value)}>
                                <option value="1.0">Opaque</option>
                                <option value="0.8">80%</option>
                                <option value="0.5">50%</option>
                                <option value="0.2">20%</option>
                              </select>
                            </div>
                          </div>
                          <div className='form-group'>
                            <label>Color Stop 2</label>
                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                              <input
                                type='color'
                                className='color-picker-native'
                                value={gradStop2Color}
                                onChange={(e) => setGradStop2Color(e.target.value)}
                              />
                              <select
                                className='form-control'
                                style={{ width: '80px', padding: '0 6px' }}
                                value={gradStop2Opacity}
                                onChange={(e) => setGradStop2Opacity(e.target.value)}>
                                <option value="1.0">Opaque</option>
                                <option value="0.8">80%</option>
                                <option value="0.5">50%</option>
                                <option value="0.2">20%</option>
                              </select>
                            </div>
                          </div>
                        </>
                      )}

                      <div className='form-group' style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <button className='btn-register' type='submit' style={{ width: '100%', height: '38px', margin: 0 }}>
                          Register Paint
                        </button>
                      </div>
                    </form>

                    {/* List of custom registered colors & gradients */}
                    {getRegisteredCustomColors().length > 0 && (
                      <div className='custom-colors-list' style={{ marginTop: '20px' }}>
                        <h3 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-heading)', margin: '16px 0 10px 0' }}>
                          Registered Custom Paints
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {getRegisteredCustomColors().map(({ palette, name, color }) => {
                            let chipBg = 'var(--text-muted)'
                            let isGrad = false
                            if (typeof color === 'string') {
                              chipBg = color
                            } else if (color && typeof color === 'object') {
                              isGrad = true
                              const stop1 = color.stops?.[0]
                              const stop2 = color.stops?.[1]
                              if (stop1 && stop2) {
                                chipBg = color.type === 'linear'
                                  ? `linear-gradient(135deg, ${stop1.color}, ${stop2.color})`
                                  : `radial-gradient(circle, ${stop1.color}, ${stop2.color})`
                              }
                            }
                            return (
                              <div key={`${palette}-${name}`} className='color-chip' style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: chipBg, display: 'inline-block', border: '1px solid rgba(255, 255, 255, 0.2)', flexShrink: 0 }} />
                                <span className='chip-palette'>{palette}</span>
                                <span className='chip-name' style={{ color: isGrad ? 'var(--accent)' : 'var(--text-heading)' }}>{name}</span>
                                <button
                                  type='button'
                                  className='chip-remove'
                                  title='Remove custom paint'
                                  onClick={() => handleRemoveColor(palette, name)}>
                                  ×
                                </button>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* Developers' Documentation Section */}
            <section className='doc-section'>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-heading)', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
                📚 Developers' Integration & REST API Guide
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: '0 0 24px 0', lineHeight: 1.6 }}>
                Integrate the high-performance SVG Path &amp; Node Dictionary Avataaars library into your own React apps, backend render pipelines, or REST applications.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {/* React Integration Card */}
                <div className='control-card' style={{ height: '100%', margin: 0 }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--accent)', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    💻 React Library Integration
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                    Import and render avatars synchronously in React 19 with no layout flickering.
                  </p>
                  <pre className='code-block' style={{ color: '#38bdf8' }}>
{`import Avatar from '@gschoppe/avataaars'
// Import animation styles (optional)
import '@gschoppe/avataaars/dist/animations.css'

const App = () => (
  <Avatar 
    avatarStyle="Transparent"
    topType="LongHairBob"
    hairColor="Red"
    clotheType="Hoodie"
    clotheColor="White"
  />
)`}
                  </pre>
                </div>

                {/* Idle Animations Card */}
                <div className='control-card' style={{ height: '100%', margin: 0 }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--accent)', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    ✨ Idle Animations Setup
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                    Enable beautiful, lifelike idle micro-animations (blinking eyes, nose wiggles, mouth wiggles, and teardrops) in your applications.
                  </p>
                  <h4 style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--text-heading)', margin: '0 0 4px 0' }}>React / Bundler Integration</h4>
                  <pre className='code-block' style={{ color: '#38bdf8', marginBottom: '12px' }}>
{`// 1. Import the animation CSS stylesheet
import '@gschoppe/avataaars/dist/animations.css'

// 2. Render with animated prop (true by default)
const App = () => <Avatar animated={true} />`}
                  </pre>
                  <h4 style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--text-heading)', margin: '0 0 4px 0' }}>Raw / Embedded SVGs</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 8px 0', lineHeight: 1.4 }}>
                    To animate raw SVGs (e.g. from the REST API), ensure the SVG container group uses an ID ending in <code>-Avataaar</code> and load the CSS file in your HTML document:
                  </p>
                  <pre className='code-block' style={{ color: '#34d399' }}>
{`<!-- Load the animations.css stylesheet -->
<link rel="stylesheet" href="node_modules/@gschoppe/avataaars/dist/animations.css">`}
                  </pre>
                </div>

                {/* Dynamic Palettes & Gradients Card */}
                <div className='control-card' style={{ height: '100%', margin: 0 }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--accent)', margin: '0 0 12px 0' }}>
                    🎨 Palettes & Custom Gradients API
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                    Dynamically register custom colors and multi-stop gradients globally.
                  </p>
                  <pre className='code-block' style={{ color: '#38bdf8' }}>
{`import { 
  addPaletteColor, 
  PALETTES 
} from '@gschoppe/avataaars'

// 1. Register a standard flat color
addPaletteColor(PALETTES.HAIR, 'flatEmerald', '#10B981')

// 2. Register a translucent color with an alpha channel
addPaletteColor(PALETTES.BACKDROP, 'semiTransparentBlue', 'rgba(59, 130, 246, 0.4)')

// 3. Register & add a dynamic sunset gradient in a single call!
addPaletteColor(PALETTES.CLOTHES, 'mySunset', {
  type: 'linear',
  attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
  stops: [
    { offset: '0%', color: '#FF5733', opacity: 1 },
    { offset: '100%', color: '#FFC0CB', opacity: 0.5 }
  ]
})`}
                  </pre>
                </div>

                {/* REST API Card */}
                <div className='control-card' style={{ gridColumn: '1 / -1', height: '100%', margin: 0 }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--accent)', margin: '0 0 12px 0' }}>
                    🌐 High-Performance REST API Service
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 14px 0', lineHeight: 1.5 }}>
                    Request dynamically styled avatars in raw vector **SVG**, high-resolution raster **PNG**, or **JSON** wrapper formats.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-heading)', margin: '0 0 6px 0' }}>Endpoint Standard Forms</h4>
                      <ul style={{ fontSize: '12.5px', color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: 1.8, margin: 0 }}>
                        <li><strong>SVG Avatar</strong>: <code>/api/avatar.svg?...</code></li>
                        <li><strong>PNG Avatar</strong>: <code>/api/avatar.png?...</code></li>
                        <li><strong>JSON Payload</strong>: <code>/api/avatar.json?...</code></li>
                        <li><strong>Size parameter (PNG)</strong>: <code>&amp;size=1056</code></li>
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-heading)', margin: '0 0 6px 0' }}>Dynamic Parameter Extenders</h4>
                      <ul style={{ fontSize: '12.5px', color: 'var(--text-muted)', paddingLeft: '20px', lineHeight: 1.8, margin: 0 }}>
                        <li><strong>Hex with Alpha</strong>: <code>&amp;clotheColor=FF573380</code></li>
                        <li><strong>rgba Colors</strong>: <code>&amp;clotheColor=rgba(255,87,51,0.5)</code></li>
                        <li><strong>Custom Gradients</strong>: <code>&amp;clotheColor=gradient:linear:FF5733:FFC0CB</code></li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ marginTop: '16px' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-heading)', margin: '0 0 6px 0' }}>Example API Queries (cURL)</h4>
                    <pre className='code-block' style={{ color: '#34d399' }}>
{`# 1. Fetch high-res PNG with custom size & transparency hex color
curl -o avatar.png "http://localhost:3000/api/avatar.png?clotheType=Hoodie&clotheColor=FF573380&size=1000"

# 2. Fetch raw vector SVG styled with a dynamic linear gradient
curl -o avatar.svg "http://localhost:3000/api/avatar.svg?clotheColor=gradient:linear:FF5733:FFC0CB&backdropColor=gradient:radial:00FFCC:021B1A"`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}

export default App
