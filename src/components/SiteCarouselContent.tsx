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
        const slidesInView = event.slidesInView()
        const centeredIndex = Math.floor(slidesInView.length / 2)

        let rightMostSlideBeforeWrap = slidesInView.length
        for (let i = slidesInView.length - 1; i > 0; i--) {
            if (slidesInView[i] - slidesInView[i - 1] > 1) {
                // this means we have a gap
                rightMostSlideBeforeWrap = i
                break
            }
        }

        const reorderedSlidesInView = [
            ...slidesInView.slice(
                rightMostSlideBeforeWrap,
                slidesInView.length
            ),
            ...slidesInView.slice(0, rightMostSlideBeforeWrap),
        ]

        console.log('slidesInView', slidesInView)
        console.log('reorderedSlidesInView', reorderedSlidesInView)

        // Now the center is always at index 2
        setHighlightedSite(
            Sites[reorderedSlidesInView[centeredIndex]]?.site || ''
        )
        setSlidesInView(reorderedSlidesInView)
    })

    return (
        <CarouselContent>
            {Sites.map((site, index) => {
                let imgSrc = site.sepiaPhotoSrc
                let imageSizeClass = 'p-0 text-2xl transition-all duration-100'
                if (
                    index === slidesInView?.[0] ||
                    index === slidesInView?.[4]
                ) {
                    imageSizeClass = `p-32 ${index === slidesInView?.[0] ? 'pr-0 pl-30' : 'pl-0 pr-30'}` // leftmost slide has no left padding, rightmost slide has no right padding
                }
                if (
                    index === slidesInView?.[1] ||
                    index === slidesInView?.[3]
                ) {
                    imageSizeClass = 'p-10'
                }
                if (highlightedSite === site.site) {
                    imgSrc = site.colorPhotoSrc
                }
                return (
                    <CarouselItem key={site.site}>
                        <div
                            className={
                                `flex flex-col items-center justify-center text-[#C19E6D] ${imageSizeClass}` // this is screwing up the slides in view location
                            }
                        >
                            <img
                                src={imgSrc}
                                alt={site.site}
                                className={
                                    site.site === highlightedSite
                                        ? 'mb-2 object-contain '
                                        : 'mb-2  object-contain opacity-70'
                                }
                            />
                            <h3 className=" font-bold mb-2 text-center">
                                {site.site}
                            </h3>
                        </div>
                    </CarouselItem>
                )
            })}
        </CarouselContent>
    )
}
