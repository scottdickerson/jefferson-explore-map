import React, { useMemo } from 'react'

export interface SiteContextValue {
    highlightedSite: string | null
    setHighlightedSite: (site: string | null) => void
    isPopupOpen: boolean
    setPopupOpen: (open: boolean) => void
}
export const SiteContext = React.createContext<SiteContextValue>({
    highlightedSite: null,
    setHighlightedSite: () => {},
    isPopupOpen: false,
    setPopupOpen: () => {},
})

export const SiteProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [highlightedSite, setHighlightedSite] = React.useState<string | null>(
        null
    )
    const [isPopupOpen, setPopupOpen] = React.useState(false)

    const value = useMemo(
        () => ({
            highlightedSite,
            setHighlightedSite,
            isPopupOpen,
            setPopupOpen,
        }),
        [isPopupOpen, highlightedSite]
    )

    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export const useSiteContext = () => React.useContext(SiteContext)
