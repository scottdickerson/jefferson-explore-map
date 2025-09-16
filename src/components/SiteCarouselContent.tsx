import { Sites } from '@/data/siteData'
import { CarouselContent, CarouselItem, useCarousel } from './ui/carousel'
import { useEffect, useRef, useState } from 'react'
import { useSiteContext } from '@/providers/SiteProvider'

export const SiteCarouselContent = () => {
    const { api } = useCarousel()
    const { setPopupOpen, highlightedSite, setHighlightedSite } =
        useSiteContext()

    const [slidesInView, setSlidesInView] = useState<number[]>()
    // Have to track this in a ref because we need to subscribe before a useEffect can run
    const subscribedToAPI = useRef(false)
    const [isDragging, setIsDragging] = useState(false)
    api?.on('pointerDown', () => setIsDragging(true))
    api?.on('pointerUp', () => setIsDragging(false))

    useEffect(() => {
        if (isDragging) return
        api?.scrollTo(
            Sites.findIndex((site) => site.site === highlightedSite),
            true
        )
    }, [highlightedSite, isDragging])

    if (!subscribedToAPI.current) {
        api?.on('slidesInView', (event) => {
            subscribedToAPI.current = true
            let slidesInView = event.slidesInView()
            // Keep five visible slides in carousel order even when looping (e.g. [0,1,2,23,24])
            if (slidesInView.length === 5) {
                // If the range suggests a wrap (large gap from first to last), rotate at the largest gap
                if (
                    slidesInView[slidesInView.length - 1] - slidesInView[0] >
                    5
                ) {
                    let maxGap = -Infinity
                    let splitIdx = 0
                    for (let i = 1; i < slidesInView.length; i++) {
                        const gap = slidesInView[i] - slidesInView[i - 1]
                        if (gap > maxGap) {
                            maxGap = gap
                            splitIdx = i
                        }
                    }
                    slidesInView = [
                        ...slidesInView.slice(splitIdx),
                        ...slidesInView.slice(0, splitIdx),
                    ]
                }
                setHighlightedSite(Sites[slidesInView[2]]?.site || '')
                setSlidesInView(slidesInView)
            }
        })
    }

    return (
        <CarouselContent>
            {Sites.map((site, index) => {
                const isCentered = highlightedSite === site.site
                let imageSizeClass = 'p-0 text-2xl '
                let imgSrc = site.sepiaPhotoSrc
                if (
                    index === slidesInView?.[0] ||
                    index === slidesInView?.[4] ||
                    !slidesInView?.includes(index)
                ) {
                    imageSizeClass = `scale-[60%] ${index === slidesInView?.[0] ? 'translate-x-20 pr-0 pl-30' : '-translate-x-20 pl-0 pr-30'}` // leftmost slide has no left padding, rightmost slide has no right padding
                } else if (
                    index === slidesInView?.[1] ||
                    index === slidesInView?.[3]
                ) {
                    imageSizeClass = 'scale-75'
                } else if (isCentered) {
                    imgSrc = site.colorPhotoSrc
                }
                return (
                    <CarouselItem key={site.site}>
                        <div
                            className={`text-[#C19E6D] text-3xl uppercase font-freight ${imageSizeClass}  transition-all duration-500 `}
                            onClick={() => {
                                if (isCentered) {
                                    setPopupOpen(true)
                                }
                            }}
                            role={isCentered ? 'button' : undefined}
                            aria-label={
                                isCentered
                                    ? `Open details for ${site.site}`
                                    : undefined
                            }
                            style={{
                                cursor: isCentered ? 'pointer' : 'default',
                            }}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src={imgSrc}
                                    alt={site.site}
                                    className={`mb-4 object-contain transition-all ${isCentered ? 'shadow-lg shadow-black border-[#C19E6D] border-[4px] animate-pulse-scale-center' : ''}`}
                                />
                                <h3
                                    className={`mb-2 text-center block pl-6 pr-6 ${isCentered ? 'pt-1' : ''}`}
                                >
                                    {site.site}
                                </h3>
                            </div>
                        </div>
                    </CarouselItem>
                )
            })}
        </CarouselContent>
    )
}
