import { Sites } from '@/data/siteData'
import React from 'react'

export interface SiteContextValue {
    highlightedSite: string | null
    setHighlightedSite: (site: string | null) => void
}
export const SiteContext = React.createContext<SiteContextValue>({
    highlightedSite: Sites[0].site,
    setHighlightedSite: () => {},
})

export const SiteProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [highlightedSite, setHighlightedSite] = React.useState<string | null>(
        Sites[0].site
    )

    return (
        <SiteContext.Provider value={{ highlightedSite, setHighlightedSite }}>
            {children}
        </SiteContext.Provider>
    )
}

export const useSiteContext = () => React.useContext(SiteContext)
