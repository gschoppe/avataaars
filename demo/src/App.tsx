import React, { useState, useEffect, useMemo } from 'react'
import '../../src/animations.css'

// Import source version
import {
  Avatar as SrcAvatar,
  OptionContext as SrcOptionContext,
  OptionsContext as SrcOptionsContext,
  allOptions as SrcAllOptions,
  addPaletteColor as SrcAddPaletteColor,
  removePaletteColor as SrcRemovePaletteColor,
  PALETTES as SrcPALETTES
} from '../../src/index'

// Import dist version
import {
  Avatar as DistAvatar,
  OptionContext as DistOptionContext,
  OptionsContext as DistOptionsContext,
  allOptions as DistAllOptions,
  addPaletteColor as DistAddPaletteColor,
  removePaletteColor as DistRemovePaletteColor,
  PALETTES as DistPALETTES
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

  // Advanced color registration states
  const [selectedPalette, setSelectedPalette] = useState('HAIR')
  const [customColorName, setCustomColorName] = useState('')
  const [customColorVal, setCustomColorVal] = useState('#ec4899')
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

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

  // Custom colors list
  const [customColorsList, setCustomColorsList] = useState<Array<{ palette: string; name: string; color: string }>>(() => {
    try {
      const saved = localStorage.getItem('avataaars_custom_colors')
      if (saved) return JSON.parse(saved)
    } catch (e) { }
    return []
  })

  // Sync custom colors into the active version's palettes
  useEffect(() => {
    customColorsList.forEach(({ palette, name, color }) => {
      try {
        addPaletteColor(PALETTES[palette as keyof typeof PALETTES], name, color)
      } catch (err) {
        console.error('Error registering custom color:', err)
      }
    })
    setRenderTick((t) => t + 1)
  }, [version, customColorsList, addPaletteColor])

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

    // 1. Randomize Backdrop
    const backdropTypes = optionStates.backdropType?.options || []
    if (backdropTypes.length > 0) {
      newProps.backdropType = backdropTypes[Math.floor(Math.random() * backdropTypes.length)]
    }
    const backdropColors = optionStates.backdropColor?.options || []
    if (backdropColors.length > 0) {
      newProps.backdropColor = backdropColors[Math.floor(Math.random() * backdropColors.length)]
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

  // Register custom color
  const handleRegisterColor = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customColorName.trim() || !customColorVal.trim()) return

    const cleanedName = customColorName.replace(/[^a-zA-Z0-9]/g, '')
    if (!cleanedName) return

    const exists = customColorsList.some((item) => item.palette === selectedPalette && item.name === cleanedName)
    if (!exists) {
      const newColor = { palette: selectedPalette, name: cleanedName, color: customColorVal }
      const updated = [...customColorsList, newColor]
      setCustomColorsList(updated)
      localStorage.setItem('avataaars_custom_colors', JSON.stringify(updated))
    }

    addPaletteColor(PALETTES[selectedPalette as keyof typeof PALETTES], cleanedName, customColorVal)
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

  // Remove registered custom color
  const handleRemoveColor = (palette: string, name: string) => {
    try {
      removePaletteColor(PALETTES[palette as keyof typeof PALETTES], name)
    } catch (err) {
      console.error(err)
    }

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
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                  Register custom HEX colors dynamically into any palette. Registered colors will instantly populate in the options menus above!
                </p>
                <form className='color-picker-grid' onSubmit={handleRegisterColor}>
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
                    <label htmlFor="color-name">Color Name (alphanumeric)</label>
                    <input
                      id="color-name"
                      type='text'
                      placeholder='e.g., MintMagic'
                      className='form-control'
                      value={customColorName}
                      onChange={(e) => setCustomColorName(e.target.value)}
                    />
                  </div>
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
                      <button className='btn-register' type='submit'>Register</button>
                    </div>
                  </div>
                </form>

                {/* List of custom registered colors */}
                {getRegisteredCustomColors().length > 0 && (
                  <div className='custom-colors-list'>
                    <h3 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-heading)', margin: '16px 0 10px 0' }}>
                      Registered Custom Colors
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {getRegisteredCustomColors().map(({ palette, name, color }) => (
                        <div key={`${palette}-${name}`} className='color-chip' style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color, display: 'inline-block', border: '1px solid rgba(255, 255, 255, 0.2)', flexShrink: 0 }} />
                          <span className='chip-palette'>{palette}</span>
                          <span className='chip-name'>{name}</span>
                          <button
                            type='button'
                            className='chip-remove'
                            title='Remove custom color'
                            onClick={() => handleRemoveColor(palette, name)}>
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
