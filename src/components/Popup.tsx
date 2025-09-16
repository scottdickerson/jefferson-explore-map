import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useSiteContext } from '@/providers/SiteProvider'
import { Sites } from '@/data/siteData'
import { Button } from './ui/button'
import { useEffect } from 'react'
import { Description, DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export default function Popup() {
    const { highlightedSite, isPopupOpen, setPopupOpen } = useSiteContext()
    const open = Boolean(highlightedSite) && isPopupOpen
    const site = Sites.find((s) => s.site === highlightedSite)

    useEffect(() => {
        let timeoutTimer: number

        if (isPopupOpen) {
            timeoutTimer = setTimeout(() => setPopupOpen(false), 60000)
        }
        return () => clearTimeout(timeoutTimer)
    }, [isPopupOpen])

    if (!site) return null

    const getWalkSeverity = (text?: string): 'short' | 'moderate' | 'long' => {
        const t = (text || '').toLowerCase()
        if (t.includes('short')) return 'short'
        if (t.includes('moderate')) return 'moderate'
        if (t.includes('long')) return 'long'
        return 'moderate'
    }
    const severity = getWalkSeverity(site.walking)
    const walkingIcon =
        severity === 'short'
            ? '/Icons/Pop Up/Walking Icon - Green.svg'
            : severity === 'moderate'
              ? '/Icons/Pop Up/Walking Icon - Yellow.svg'
              : '/Icons/Pop Up/Walking Icon - Red.svg'

    return (
        <Dialog open={open}>
            <VisuallyHidden>
                <DialogTitle>{site.site} Details</DialogTitle>
            </VisuallyHidden>
            <DialogContent
                className="p-0 border-none bg-transparent shadow-none max-w-none"
                onClick={() => setPopupOpen(false)}
            >
                <VisuallyHidden>
                    <Description>
                        Shows a picture of the site and details of the address
                    </Description>
                </VisuallyHidden>
                <div
                    className="relative mx-auto w-[1355.303px] h-[1870px] font-crimsonText"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Background panel to mirror Figma asset */}
                    <img
                        src="/Blank Pop-Up Background.webp"
                        alt="Popup Background"
                        className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
                        draggable={false}
                    />

                    {/* Content layout (vertical stacking like Figma): image -> title -> description -> divider -> address -> walking -> big close */}
                    <div className="absolute inset-0 px-24 pt-24 pb-16 flex flex-col items-start">
                        <div className="px-20 ">
                            {/* Image */}
                            <img
                                src={
                                    site.popupPhotoSrc ||
                                    site.colorPhotoSrc ||
                                    ''
                                }
                                alt={site.site}
                                className="mt-[40px] w-full object-cover select-none"
                                draggable={false}
                            />
                            {/* Title */}
                            <h2 className="font-freight uppercase mt-14 text-[#C19E6D] font-bold text-[54px] leading-tight carousel-heading">
                                {site.site}
                            </h2>
                            {/* Description */}
                            <div className="mt-6 text-description text-white/90 whitespace-pre-line">
                                {site.description}
                            </div>
                        </div>
                        {/* Divider */}
                        <img
                            src="/Pop-Up Divider Line.webp"
                            alt="Divider"
                            className=" mt-8 mb-10 w-[1146px] select-none"
                            draggable={false}
                        />
                        <div className="px-20 flex items-center gap-8 text-[#F5EFE7]">
                            <div className="flex flex-col items-center gap-16">
                                <img
                                    src="/Icons/Pop Up/Location Icon.svg"
                                    alt="Location"
                                    className="h-16 w-12"
                                />
                                {/* Walking pill */}
                                {site.walking && (
                                    <img
                                        src={walkingIcon}
                                        alt="Walking"
                                        className="h-16 w-16"
                                    />
                                )}
                            </div>
                            {/* Address */}
                            {site.address && (
                                <div className="flex flex-col gap-14">
                                    <div className="font-crimsonText text-4xl">
                                        <div className="font-medium text-[#C19E6D]">
                                            {site.address}
                                        </div>
                                        <div className=" italic text-address-instructions">
                                            Type this address into your smart
                                            phone for directions
                                        </div>
                                    </div>
                                    <span className="text-description">
                                        {site.walking}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="px-20 absolute inset-0 bottom-[50px] flex justify-center items-center gap-8 text-[#F5EFE7]">
                        {/* Big center close (gold X) */}
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setPopupOpen(false)
                            }}
                            className="mt-auto mb-20 self-center text-[#C19E6D] transition-colors outline-none border-none focus-visible:shadow-transparent hover:text-white focus:text-white "
                            aria-label="Close details"
                        >
                            <img src="/Icons/Pop Up/Close Icon.svg" />
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
