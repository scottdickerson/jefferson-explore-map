import { Sites } from '@/data/siteData'
import { CarouselContent, CarouselItem, useCarousel } from './ui/carousel'
import { useEffect, useState } from 'react'

export interface SiteCarouselContentProps {
    highlightedSite?: string
    setHighlightedSite: (site: string) => void
}
export const SiteCarouselContent = ({
    highlightedSite = Sites[0].site,
    setHighlightedSite,
}: SiteCarouselContentProps) => {
    const { api } = useCarousel()

    const [slidesInView, setSlidesInView] = useState<number[]>()
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

    api?.on('slidesInView', (event) => {
        let slidesInView = event.slidesInView()
        // Keep five visible slides in carousel order even when looping (e.g. [0,1,2,23,24])
        if (slidesInView.length === 5) {
            // If the range suggests a wrap (large gap from first to last), rotate at the largest gap
            if (slidesInView[slidesInView.length - 1] - slidesInView[0] > 5) {
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

    return (
        <CarouselContent>
            {Sites.map((site, index) => {
                const isCentered = highlightedSite === site.site
                let imageSizeClass = 'p-0 text-2xl '
                if (
                    index === slidesInView?.[0] ||
                    index === slidesInView?.[4]
                ) {
                    imageSizeClass = `scale-[60%] ${index === slidesInView?.[0] ? 'translate-x-20 pr-0 pl-30' : '-translate-x-20 pl-0 pr-30'}` // leftmost slide has no left padding, rightmost slide has no right padding
                } else if (
                    index === slidesInView?.[1] ||
                    index === slidesInView?.[3]
                ) {
                    imageSizeClass = 'scale-75'
                } else if (isCentered) {
                }
                return (
                    <CarouselItem key={site.site}>
                        <div
                            className={
                                ` text-[#C19E6D] ${imageSizeClass}  transition-all duration-500 ` // this is screwing up the slides in view location
                            }
                        >
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src={site.colorPhotoSrc}
                                    alt={site.site}
                                    className={
                                        isCentered
                                            ? `mb-4 object-contain transition-all duration-500 filter sepia-0 opacity-100`
                                            : `mb-4  object-contain opacity-70 transition-all duration-500 filter sepia`
                                    }
                                />
                                <h3 className="font-bold mb-2 text-center">
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
