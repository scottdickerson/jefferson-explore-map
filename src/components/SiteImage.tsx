export interface SiteImageProps {
    src: string
    name: string
    isSelected: boolean
}

export const SiteImage = ({
    src,
    isSelected,
    name,
}: {
    src: string
    name: string
    isSelected: boolean
}) => {
    return (
        <img
            src={src}
            alt={name}
            className="w-[315px] h-[280px] object-contain"
        />
    )
}
