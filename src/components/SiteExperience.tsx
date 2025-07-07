import { SiteProvider } from '@/providers/SiteProvider'
import Map from '../components/Map'
import { SiteCarousel } from '@/components/SiteCarousel'

export default function SiteExperience() {
    return (
        <SiteProvider>
            <Map />
            <SiteCarousel onSelectSite={() => console.log('onSelect')} />
        </SiteProvider>
    )
}
