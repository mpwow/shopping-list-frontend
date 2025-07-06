export default function LightThemeIcon({ width = 24, height = 24 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 960 960"
            width={width}
            height={height}
            aria-hidden="true"
            focusable="false"
            fill="#504b4b"
        >
            <path d="M480 600q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280 480q0-83 58.5-141.5T480 280q83 0 141.5 58.5T680 480q0 83-58.5 141.5T480 680ZM200 520H40v-80h160v80Zm720 0H760v-80h160v80ZM440 200V40h80v160h-80Zm0 720V760h80v160h-80ZM256 310 155 213l57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154 748l101-97 55 53-97 101-59-57Z" />
        </svg>
    );
}
