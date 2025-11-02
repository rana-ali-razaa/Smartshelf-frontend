"use client"
import NextTopLoader from "nextjs-toploader";

export default function TopLoaderbar() {
    return <NextTopLoader
        showSpinner={false}
        color="#537373"
        height={3}
        zIndex={99999}
        speed={400}
        crawl={true}
        easing="ease"
        shadow="0 0 10px #29D, 0 0 5px #29D"
    />
}