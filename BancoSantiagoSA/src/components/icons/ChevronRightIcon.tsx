export const ChevronRightIcon = ({ size, className }: { size: number, className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={className}
        >
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    )
}

