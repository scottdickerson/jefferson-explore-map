import {
    Carousel,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { SiteCarouselContent } from './SiteCarouselContent'
import { useSiteContext } from '@/providers/SiteProvider'

interface SiteCarouselProps {
    onSelectSite: (site: string) => void
}

export function SiteCarousel({ onSelectSite }: SiteCarouselProps) {
    const { highlightedSite, setHighlightedSite } = useSiteContext()
    return (
        <Carousel
            className="absolute top-[2424px] min-h-[380px] left-20 right-20 flex items-center justify-center"
            opts={{ loop: true }}
        >
            <CarouselPrevious className="left-0" />
            <SiteCarouselContent
                highlightedSite={highlightedSite || undefined}
                setHighlightedSite={setHighlightedSite}
            />
            <CarouselNext className="right-0" />
        </Carousel>
    )
}
