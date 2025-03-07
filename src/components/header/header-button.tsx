import "@/styles/components/header/header-button.css"
type HeaderButtonProps = {
    label: string
    destUrl: string
}

export default function HeaderButton({ label, destUrl }: HeaderButtonProps) {
    return <a className='header-button' href={destUrl}>{label}</a>
}