import { SiteProvider } from '@/providers/SiteProvider'
import Map from '../components/Map'
import { SiteCarousel } from '@/components/SiteCarousel'
import Popup from '@/components/Popup'

export default function SiteExperience() {
    return (
        <SiteProvider>
            <Map />
            <SiteCarousel />
            <Popup />
        </SiteProvider>
    )
}
