import { SiteContext } from '@/providers/SiteProvider'
import { mapBg, Sites } from '../data/siteData'
import React from 'react'

// You Are Here icon asset (from Figma MCP context)
const youAreHereIcon = '/Icons/Map/You Are Here - Icon.svg'

// Figma position for You Are Here: left 1188px, top 1462px (from MCP context)
const youAreHerePosition = { x: 1188, y: 1462 }

function YouAreHereIcon() {
    return (
        <img
            src={youAreHereIcon}
            alt="You Are Here"
            style={{
                position: 'absolute',
                left: youAreHerePosition.x,
                top: youAreHerePosition.y,
                width: 70,
                height: 226,
                zIndex: 30,
            }}
        />
    )
}

export interface Site {
    site: string // Site name, matches text under centered image
    name: string // Icon type (e.g. 'Historic Homes', 'Church', etc.)
    iconSrc: string
    x: number
    y: number
    address?: string
    walking?: string
    description?: string
}

interface MapDotProps {
    site: Site
    isSelected: boolean
    setHighlightedSite?: (site: string) => void
}

function MapDot({ site, isSelected, setHighlightedSite }: MapDotProps) {
    const color = isSelected ? 'White' : 'Blue'
    const iconSrc = `${site.iconSrc} - ${color}.svg`
    return (
        <button
            onClick={() => setHighlightedSite && setHighlightedSite(site.site)}
            className={`absolute transition-transform duration-200 ${isSelected ? 'scale-125 z-20 drop-shadow-[0_0_8px_#00f]' : ''}`}
            style={{ left: site.x, top: site.y, width: 64, height: 64 }}
            title={site.name}
        >
            <img src={iconSrc} alt={site.name} width={64} height={64} />
        </button>
    )
}

export default function Map() {
    const { highlightedSite, setHighlightedSite } =
        React.useContext(SiteContext)
    return (
        <div
            className="absolute inset-0 mx-auto bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url('${mapBg}')` }}
        >
            {Sites.map((site, i) => (
                <MapDot
                    key={site.site + '-' + i}
                    site={site}
                    isSelected={highlightedSite === site.site}
                    setHighlightedSite={setHighlightedSite}
                />
            ))}
            <YouAreHereIcon />
        </div>
    )
}
