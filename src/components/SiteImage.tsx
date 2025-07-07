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
    const imgSrc = `/Location Photos/${isSelected ? 'Color Photos' : 'Sepia Photos'}/src.png`
    return (
        <img
            src={src}
            alt={name}
            className="w-[315px] h-[280px] object-contain"
        />
    )
}
