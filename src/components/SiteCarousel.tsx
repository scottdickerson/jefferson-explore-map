import {
    Carousel,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { SiteCarouselContent } from './SiteCarouselContent'
import { useSiteContext } from '@/providers/SiteProvider'

export function SiteCarousel() {
    const { highlightedSite, setHighlightedSite } = useSiteContext()
    return (
        <Carousel
            className="absolute top-[2509px] min-h-[380px] left-20 right-20 ml-20 mr-20 flex items-center justify-center"
            opts={{ loop: true }}
        >
            <CarouselPrevious />
            <SiteCarouselContent />
            <CarouselNext />
        </Carousel>
    )
}
