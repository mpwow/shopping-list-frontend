export default function SearchIcon({ width = 24, height = 24, className='' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 50 50"
            width={width}
            height={height}
            className={className}
        >
            <path
                fill="currentColor"
                d="M21 3C11.62 3 4 10.62 4 20s7.62 17 17 17c3.71 0 7.14-1.2 9.94-3.22l13.16 13.12 2.81-2.81L33.91 31.06A16.94 16.94 0 0038 20c0-9.38-7.62-17-17-17zm0 2c8.3 0 15 6.7 15 15s-6.7 15-15 15S6 28.3 6 20 12.7 5 21 5z"
            />
        </svg>
    );
}
